'use client';

import { siteConfig } from '@/config/site';
import { trackEvent } from '@/lib/analytics';
import clsx from '@/lib/clsx';

/** "Write to us" buttons for the messengers that have an address in config. */
export function MessengerLinks({ className }: { className?: string }) {
  const messengers = siteConfig.socialLinks.filter((l) => l.label === 'Telegram' || l.label === 'WhatsApp');
  if (messengers.length === 0) return null;

  return (
    <div className={clsx('flex flex-wrap items-center justify-center gap-3', className)}>
      <span className="text-sm text-stone">Или напишите нам:</span>
      {messengers.map((m) => (
        <a
          key={m.label}
          href={m.href}
          target="_blank"
          rel="noreferrer"
          onClick={() => trackEvent('messenger_click', { channel: m.label })}
          className="inline-flex items-center rounded border border-line bg-white px-4 py-2 text-sm font-medium text-graphite transition-colors hover:border-graphite"
        >
          Написать в {m.label}
        </a>
      ))}
    </div>
  );
}
