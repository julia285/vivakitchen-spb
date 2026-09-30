import { NextRequest, NextResponse } from 'next/server';
import { sendLeadToKaiten, LeadPayload } from '@/services/crm';
import { sendLeadNotificationEmail } from '@/services/email';

export const runtime = 'nodejs';

export async function POST(req: NextRequest) {
  let payload: LeadPayload;

  try {
    payload = await req.json();
  } catch {
    return NextResponse.json({ error: 'Некорректный запрос' }, { status: 400 });
  }

  if (!payload.name?.trim() || !payload.phone?.trim()) {
    return NextResponse.json({ error: 'Имя и телефон обязательны' }, { status: 400 });
  }

  // Deliberately not awaited: some mail servers (Yandex included) delay
  // the SMTP greeting for unfamiliar sending IPs as an anti-spam measure,
  // which can add minutes — the visitor shouldn't sit staring at the form
  // that long. Runs in the background instead; safe because this app is
  // a long-running `next start` server (not a serverless function that
  // gets frozen the moment the response is sent).
  Promise.allSettled([sendLeadToKaiten(payload), sendLeadNotificationEmail(payload)]).then((results) => {
    for (const result of results) {
      if (result.status === 'rejected') {
        console.error('[lead] delivery channel failed:', result.reason);
      }
    }
  });

  return NextResponse.json({ ok: true });
}
