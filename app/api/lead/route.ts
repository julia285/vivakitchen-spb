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

  // Two independent delivery channels — if one fails (e.g. Kaiten API is
  // down) the other still gets the lead, and neither failure blocks the
  // response to the visitor.
  const results = await Promise.allSettled([sendLeadToKaiten(payload), sendLeadNotificationEmail(payload)]);

  for (const result of results) {
    if (result.status === 'rejected') {
      console.error('[lead] delivery channel failed:', result.reason);
    }
  }

  return NextResponse.json({ ok: true });
}
