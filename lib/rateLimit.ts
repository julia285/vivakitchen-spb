/**
 * Tiny in-memory per-IP limiter for the public form endpoints. It resets when
 * the app restarts and isn't shared between instances — fine for one small
 * container, and enough to stop a script from flooding Telegram/email/disk.
 */

import { NextRequest } from 'next/server';

const hits = new Map<string, number[]>();

export function clientIp(req: NextRequest): string {
  // Behind the hosting proxy the real address is the first x-forwarded-for entry.
  return req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'unknown';
}

/** Returns true when the caller is over the limit (and should get a 429). */
export function isRateLimited(key: string, limit: number, windowMs: number): boolean {
  const now = Date.now();
  const recent = (hits.get(key) ?? []).filter((t) => now - t < windowMs);

  if (recent.length >= limit) {
    hits.set(key, recent);
    return true;
  }

  recent.push(now);
  hits.set(key, recent);

  // Keep the map from growing forever.
  if (hits.size > 5000) {
    for (const [k, times] of hits) {
      if (times.every((t) => now - t >= windowMs)) hits.delete(k);
    }
  }
  return false;
}
