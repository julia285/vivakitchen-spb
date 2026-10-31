/**
 * Telegram notification for leads — an instant, free channel that works
 * alongside Kaiten and email. The bot posts one plain-text message per
 * lead to TELEGRAM_CHAT_ID (a private chat or a group the bot was added to).
 * See README "Как подключить Telegram-уведомления".
 */

import { LeadPayload, dealTitle, buildCardDescription } from './crm';

export async function sendLeadToTelegram(payload: LeadPayload): Promise<void> {
  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (!token || !chatId) {
    // Mock mode: the bot isn't configured yet. Non-blocking — see README.
    console.log('[telegram mock] bot not configured, lead not sent:', dealTitle(payload.name, payload.category));
    return;
  }

  // No parse_mode on purpose: visitor-supplied text must never be
  // interpreted as markup.
  const res = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      chat_id: chatId,
      text: `Новая заявка с сайта\n\n${buildCardDescription(payload)}`,
      disable_web_page_preview: true,
    }),
    signal: AbortSignal.timeout(15000),
  });

  if (!res.ok) {
    // Telegram's error body says what's wrong (bad token, bot not in the chat);
    // the token itself is in the URL, so it's deliberately not logged.
    throw new Error(`Telegram sendMessage failed: HTTP ${res.status} ${(await res.text()).slice(0, 200)}`);
  }
}
