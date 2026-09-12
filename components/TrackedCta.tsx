'use client';

import { ReactNode } from 'react';
import { Button } from '@/components/ui/Button';
import { trackEvent, AnalyticsEvent } from '@/lib/analytics';

/** Button that also fires an analytics event — for CTAs inside Server Component pages. */
export function TrackedCta({
  href,
  event,
  size,
  variant,
  className,
  children,
}: {
  href: string;
  event: AnalyticsEvent;
  size?: 'md' | 'lg';
  variant?: 'primary' | 'secondary' | 'ghost';
  className?: string;
  children: ReactNode;
}) {
  return (
    <Button href={href} size={size} variant={variant} className={className} onClick={() => trackEvent(event)}>
      {children}
    </Button>
  );
}
