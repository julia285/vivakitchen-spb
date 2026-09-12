import { NextRequest, NextResponse } from 'next/server';
import { mkdir, writeFile } from 'fs/promises';
import path from 'path';
import crypto from 'crypto';

export const runtime = 'nodejs';

const ALLOWED_TYPES = ['application/pdf', 'image/jpeg', 'image/png'];
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
  const formData = await req.formData();
  const file = formData.get('file');

  if (!(file instanceof File)) {
    return NextResponse.json({ error: 'Файл не найден' }, { status: 400 });
  }

  if (!ALLOWED_TYPES.includes(file.type)) {
    return NextResponse.json({ error: 'Допустимы форматы PDF, JPG, PNG' }, { status: 400 });
  }

  if (file.size > MAX_SIZE_BYTES) {
    return NextResponse.json({ error: 'Файл слишком большой (максимум 15 МБ)' }, { status: 400 });
  }

  const ext = path.extname(file.name) || '';
  const safeName = `${crypto.randomUUID()}${ext}`;
  const uploadsDir = path.join(process.cwd(), 'public', 'uploads');

  await mkdir(uploadsDir, { recursive: true });
  const buffer = Buffer.from(await file.arrayBuffer());
  await writeFile(path.join(uploadsDir, safeName), buffer);

  return NextResponse.json({ url: `/uploads/${safeName}` });
}
