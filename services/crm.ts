/**
 * CRM abstraction. The lead form calls submitLead() and never talks to
 * Kaiten (or any other CRM) directly, so the backend can swap providers
 * without touching UI code.
 */

export type LeadCategory = 'kitchen' | 'wardrobe' | 'dressing-room' | 'multi-room' | 'other';

// Two ways in: the client already has a design project (we price it in the
// chosen model and send the estimate) or there is no project yet (we invite
// them to the salon to make one together — no estimate before that).
export type LeadScenario = 'has-project' | 'need-project';

export const scenarioLabels: Record<LeadScenario, string> = {
  'has-project': 'есть дизайн-проект — считаем в выбранной модели',
  'need-project': 'проекта нет — приглашаем в салон',
};

export type LeadPayload = {
  name: string;
  phone: string;
  email?: string;
  category?: LeadCategory;
  scenario?: LeadScenario;
  /** has-project: the facade model/collection the client picked, if any */
  model?: string;
  /** need-project: when it suits the client to visit the salon */
  visitTime?: string;
  comment?: string;
  fileUrl?: string;
  pageUrl: string;
  utm: {
    utm_source?: string;
    utm_medium?: string;
    utm_campaign?: string;
    utm_content?: string;
    utm_term?: string;
  };
};

export type SubmitLeadResult = { ok: true } | { ok: false; error: string };

export async function submitLead(payload: LeadPayload): Promise<SubmitLeadResult> {
  try {
    const res = await fetch('/api/lead', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    if (!res.ok) {
      return { ok: false, error: 'Не удалось отправить заявку. Попробуйте ещё раз.' };
    }

    return { ok: true };
  } catch {
    return { ok: false, error: 'Не удалось отправить заявку. Проверьте соединение и попробуйте снова.' };
  }
}

const categoryLabels: Record<LeadCategory, string> = {
  kitchen: 'кухня',
  wardrobe: 'шкаф',
  'dressing-room': 'гардеробная',
  'multi-room': 'мебель для нескольких помещений',
  other: 'другое',
};

export function dealTitle(name: string, category?: LeadCategory): string {
  const label = category ? categoryLabels[category] : 'заявка с сайта';
  return `${name} — ${label}`;
}

/**
 * Server-side dispatch to Kaiten. Called only from app/api/lead/route.ts.
 * When KAITEN_API_TOKEN is not set, this is a no-op that logs the lead
 * instead of failing the request — see app/api/lead/route.ts for the
 * mock-mode fallback and README for how to wire real credentials.
 */
export async function sendLeadToKaiten(payload: LeadPayload): Promise<void> {
  const token = process.env.KAITEN_API_TOKEN;
  const boardId = process.env.KAITEN_BOARD_ID;
  const columnId = process.env.KAITEN_COLUMN_ID;
  const apiUrl = process.env.KAITEN_API_URL;

  if (!token || !boardId || !columnId || !apiUrl) {
    // Mock mode: Kaiten isn't connected yet. Don't block the release —
    // see README "Как подключить Kaiten".
    console.log('[crm mock] Kaiten not configured, lead captured only in logs:', {
      title: dealTitle(payload.name, payload.category),
      ...payload,
    });
    return;
  }

  const res = await fetch(`${apiUrl}/cards`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      board_id: Number(boardId),
      column_id: Number(columnId),
      title: dealTitle(payload.name, payload.category),
      description: buildCardDescription(payload),
    }),
    signal: AbortSignal.timeout(15000),
  });

  // fetch doesn't reject on 4xx/5xx — without this a wrong token or ID would
  // silently drop every lead.
  if (!res.ok) {
    throw new Error(`Kaiten create card failed: HTTP ${res.status} ${(await res.text()).slice(0, 200)}`);
  }
}

export function buildCardDescription(payload: LeadPayload): string {
  const lines = [
    `Имя: ${payload.name}`,
    `Телефон: ${payload.phone}`,
    payload.email ? `Email: ${payload.email}` : null,
    payload.scenario ? `Сценарий: ${scenarioLabels[payload.scenario]}` : null,
    payload.category ? `Категория: ${categoryLabels[payload.category]}` : null,
    payload.model ? `Модель: ${payload.model}` : null,
    payload.visitTime ? `Когда удобно приехать: ${payload.visitTime}` : null,
    payload.comment ? `Комментарий: ${payload.comment}` : null,
    payload.fileUrl ? `Файл: ${absoluteFileUrl(payload)}` : null,
    `Страница: ${payload.pageUrl}`,
    `Источник: website`,
    payload.utm.utm_source ? `utm_source: ${payload.utm.utm_source}` : null,
    payload.utm.utm_medium ? `utm_medium: ${payload.utm.utm_medium}` : null,
    payload.utm.utm_campaign ? `utm_campaign: ${payload.utm.utm_campaign}` : null,
    payload.utm.utm_content ? `utm_content: ${payload.utm.utm_content}` : null,
    payload.utm.utm_term ? `utm_term: ${payload.utm.utm_term}` : null,
  ].filter(Boolean);

  return lines.join('\n');
}

// /api/upload answers with a site-relative path, useless inside Kaiten or a
// Telegram message — resolve it against the page the lead was sent from.
function absoluteFileUrl(payload: LeadPayload): string {
  try {
    return new URL(payload.fileUrl as string, payload.pageUrl).toString();
  } catch {
    return payload.fileUrl as string;
  }
}
