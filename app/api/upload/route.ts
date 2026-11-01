import { NextRequest, NextResponse } from 'next/server';
import { mkdir, writeFile } from 'fs/promises';
import path from 'path';
import crypto from 'crypto';
import { clientIp, isRateLimited } from '@/lib/rateLimit';

export const runtime = 'nodejs';

// The file extension comes from the verified type, never from the client's
// file name (a name like "x.html" with a fake image type must not end up
// served as a web page from our own domain).
const TYPE_TO_EXT: Record<string, string> = {
  'application/pdf': '.pdf',
  'image/jpeg': '.jpg',
  'image/png': '.png',
};

/** The first bytes of the real content must match the claimed type. */
function matchesSignature(type: string, b: Buffer): boolean {
  if (type === 'application/pdf') return b.subarray(0, 5).toString('latin1') === '%PDF-';
  if (type === 'image/jpeg') return b[0] === 0xff && b[1] === 0xd8 && b[2] === 0xff;
  if (type === 'image/png') return b.subarray(0, 8).equals(Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]));
  return false;
}
const MAX_SIZE_BYTES = 15 * 1024 * 1024; // 15MB

/**
 * Stores an attached plan/design file to local disk under /public/uploads
 * and returns its public URL. This works for `next start` on a regular
 * Node server or in Docker, but NOT on a read-only/serverless filesystem
 * (e.g. Vercel functions) — before deploying there, swap this for an
 * S3-compatible bucket (Yandex Object Storage, Selectel S3, etc).
 * See README "Загрузка файлов" for details.
 */
export async function POST(req: NextRequest) {
  if (isRateLimited(`upload:${clientIp(req)}`, 5, 10 * 60 * 1000)) {
    return NextResponse.json({ error: 'Слишком много загрузок. Попробуйте позже.' }, { status: 429 });
  }

  // Refuse oversized bodies early, before reading them into memory.
  const declared = Number(req.headers.get('content-length') ?? 0);
  if (declared > MAX_SIZE_BYTES + 1024 * 1024) {
    return NextResponse.json({ error: 'Файл слишком большой (максимум 15 МБ)' }, { status: 413 });
  }

  const formData = await req.formData();
  const file = formData.get('file');

  if (!(file instanceof File)) {
    return NextResponse.json({ error: 'Файл не найден' }, { status: 400 });
  }

  if (!(file.type in TYPE_TO_EXT)) {
    return NextResponse.json({ error: 'Допустимы форматы PDF, JPG, PNG' }, { status: 400 });
  }

  if (file.size > MAX_SIZE_BYTES) {
    return NextResponse.json({ error: 'Файл слишком большой (максимум 15 МБ)' }, { status: 400 });
  }

  const buffer = Buffer.from(await file.arrayBuffer());
  if (!matchesSignature(file.type, buffer)) {
    return NextResponse.json({ error: 'Файл повреждён или не соответствует формату' }, { status: 400 });
  }

  const safeName = `${crypto.randomUUID()}${TYPE_TO_EXT[file.type]}`;
  const uploadsDir = path.join(process.cwd(), 'public', 'uploads');

  await mkdir(uploadsDir, { recursive: true });
  await writeFile(path.join(uploadsDir, safeName), buffer);

  return NextResponse.json({ url: `/uploads/${safeName}` });
}
