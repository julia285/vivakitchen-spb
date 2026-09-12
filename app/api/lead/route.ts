import { NextRequest, NextResponse } from 'next/server';
import { sendLeadToKaiten, LeadPayload } from '@/services/crm';

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

  await sendLeadToKaiten(payload);

  return NextResponse.json({ ok: true });
}
