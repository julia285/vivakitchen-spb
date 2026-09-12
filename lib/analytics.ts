/**
 * Thin analytics layer over Yandex.Metrika. Every call is a no-op until
 * NEXT_PUBLIC_YANDEX_METRIKA_ID is set (see .env.example), so the site
 * works fully without a counter configured yet.
 */

export type AnalyticsEvent =
  | 'lead_form_open'
  | 'lead_form_submit'
  | 'phone_click'
  | 'email_click'
  | 'map_click'
  | 'project_open'
  | 'designer_cta_click'
  | 'video_play';

declare global {
  interface Window {
    ym?: (counterId: number, action: string, target: string, params?: Record<string, unknown>) => void;
  }
}

export function trackEvent(event: AnalyticsEvent, params?: Record<string, unknown>): void {
  if (typeof window === 'undefined') return;

  const counterId = process.env.NEXT_PUBLIC_YANDEX_METRIKA_ID;
  if (!counterId || !window.ym) {
    if (process.env.NODE_ENV === 'development') {
      // Helpful while the counter isn't wired up yet.
      console.debug('[analytics]', event, params ?? {});
    }
    return;
  }

  window.ym(Number(counterId), 'reachGoal', event, params);
}
