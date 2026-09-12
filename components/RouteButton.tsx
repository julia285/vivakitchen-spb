'use client';

import { Button } from '@/components/ui/Button';
import { siteConfig } from '@/config/site';
import { trackEvent } from '@/lib/analytics';

export function RouteButton({ className }: { className?: string }) {
  const href = siteConfig.yandexMapsUrl || undefined;

  return (
    <Button
      href={href ?? '#'}
      target={href ? '_blank' : undefined}
      rel={href ? 'noreferrer' : undefined}
      variant="secondary"
      onClick={() => trackEvent('map_click')}
      className={className}
    >
      Построить маршрут
    </Button>
  );
}
