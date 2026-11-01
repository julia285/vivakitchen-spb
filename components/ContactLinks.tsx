'use client';

import { siteConfig } from '@/config/site';
import { trackEvent } from '@/lib/analytics';
import clsx from '@/lib/clsx';

export function PhoneLink({ className }: { className?: string }) {
  // No placeholder text for visitors: with no phone set the link just isn't shown.
  if (!siteConfig.phone) return null;

  return (
    <a
      href={siteConfig.phoneHref || `tel:${siteConfig.phone}`}
      onClick={() => trackEvent('phone_click')}
      className={className}
    >
      {siteConfig.phone}
    </a>
  );
}

export function EmailLink({ className }: { className?: string }) {
  if (!siteConfig.email) {
    return <span className={clsx('text-stone', className)}>Email: TODO уточнить</span>;
  }

  return (
    <a href={`mailto:${siteConfig.email}`} onClick={() => trackEvent('email_click')} className={className}>
      {siteConfig.email}
    </a>
  );
}
