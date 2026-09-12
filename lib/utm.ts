/**
 * Captures UTM params on first landing and persists them so they can be
 * attached to a lead submitted much later in the same session, per the
 * brief: we need to know which channel produced a given заявка.
 */

const STORAGE_KEY = 'vk_utm';

export type UtmParams = {
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_content?: string;
  utm_term?: string;
};

const UTM_KEYS: (keyof UtmParams)[] = [
  'utm_source',
  'utm_medium',
  'utm_campaign',
  'utm_content',
  'utm_term',
];

export function captureUtmFromUrl(): void {
  if (typeof window === 'undefined') return;

  const params = new URLSearchParams(window.location.search);
  const found: UtmParams = {};

  for (const key of UTM_KEYS) {
    const value = params.get(key);
    if (value) found[key] = value;
  }

  if (Object.keys(found).length > 0) {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(found));
    } catch {
      // localStorage unavailable (private mode, etc.) — UTM tracking is
      // best-effort and shouldn't break the page.
    }
  }
}

export function getStoredUtm(): UtmParams {
  if (typeof window === 'undefined') return {};

  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as UtmParams) : {};
  } catch {
    return {};
  }
}
