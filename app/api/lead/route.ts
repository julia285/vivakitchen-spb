import { NextRequest, NextResponse } from 'next/server';
import { sendLeadToKaiten, LeadPayload } from '@/services/crm';
import { sendLeadNotificationEmail } from '@/services/email';
import { sendLeadToTelegram } from '@/services/telegram';
import { clientIp, isRateLimited } from '@/lib/rateLimit';

export const runtime = 'nodejs';

const clip = (value: unknown, max: number) =>
  // eslint-disable-next-line no-control-regex
  typeof value === 'string' ? value.replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F]/g, '').trim().slice(0, max) : '';

export async function POST(req: NextRequest) {
  // A real visitor sends one or two; a script sends hundreds.
  if (isRateLimited(`lead:${clientIp(req)}`, 5, 10 * 60 * 1000)) {
    return NextResponse.json({ error: 'Слишком много заявок. Попробуйте позже или напишите нам на почту.' }, { status: 429 });
  }

  let payload: LeadPayload;

  try {
    payload = await req.json();
  } catch {
    return NextResponse.json({ error: 'Некорректный запрос' }, { status: 400 });
  }

  if (!payload.name?.trim() || !payload.phone?.trim()) {
    return NextResponse.json({ error: 'Имя и телефон обязательны' }, { status: 400 });
  }

  // Only accept known fields, with sane lengths: the values end up in
  // Telegram/email/Kaiten, so never forward arbitrary client-supplied data.
  const utm = (payload.utm ?? {}) as Record<string, unknown>;
  payload = {
    name: clip(payload.name, 100),
    phone: clip(payload.phone, 40),
    email: clip(payload.email, 120) || undefined,
    category: payload.category,
    comment: clip(payload.comment, 2000) || undefined,
    // Only our own uploads are linked; anything else is dropped.
    fileUrl: typeof payload.fileUrl === 'string' && /^\/uploads\/[\w.-]+$/.test(payload.fileUrl) ? payload.fileUrl : undefined,
    pageUrl: clip(payload.pageUrl, 500),
    utm: {
      utm_source: clip(utm.utm_source, 100) || undefined,
      utm_medium: clip(utm.utm_medium, 100) || undefined,
      utm_campaign: clip(utm.utm_campaign, 100) || undefined,
      utm_content: clip(utm.utm_content, 100) || undefined,
      utm_term: clip(utm.utm_term, 100) || undefined,
    },
  };

  // Channels are independent: one failing never stops the others.
  // Deliberately not awaited: some mail servers (Yandex included) delay
  // the SMTP greeting for unfamiliar sending IPs as an anti-spam measure,
  // which can add minutes — the visitor shouldn't sit staring at the form
  // that long. Runs in the background instead; safe because this app is
  // a long-running `next start` server (not a serverless function that
  // gets frozen the moment the response is sent).
  Promise.allSettled([
    sendLeadToKaiten(payload),
    sendLeadNotificationEmail(payload),
    sendLeadToTelegram(payload),
  ]).then((results) => {
    for (const result of results) {
      if (result.status === 'rejected') {
        console.error('[lead] delivery channel failed:', result.reason);
      }
    }
  });

  return NextResponse.json({ ok: true });
}
