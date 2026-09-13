/**
 * Email fallback for leads, independent of Kaiten. While Kaiten isn't
 * connected (or even after, as a safety net), this sends a plain-text
 * notification to LEAD_NOTIFY_EMAIL via SMTP — by default the salon's
 * own Yandex mailbox, using an app password rather than the account
 * password (see README "Как подключить email-уведомления о заявках").
 */

import nodemailer from 'nodemailer';
import { LeadPayload, dealTitle, buildCardDescription } from './crm';

export async function sendLeadNotificationEmail(payload: LeadPayload): Promise<void> {
  const host = process.env.SMTP_HOST;
  const port = process.env.SMTP_PORT;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const to = process.env.LEAD_NOTIFY_EMAIL;

  if (!host || !port || !user || !pass || !to) {
    // Mock mode: SMTP isn't configured yet. Non-blocking — see README.
    console.log('[email mock] SMTP not configured, lead not emailed:', dealTitle(payload.name, payload.category));
    return;
  }

  const transporter = nodemailer.createTransport({
    host,
    port: Number(port),
    secure: Number(port) === 465,
    auth: { user, pass },
  });

  await transporter.sendMail({
    from: user,
    to,
    subject: `Заявка с сайта: ${dealTitle(payload.name, payload.category)}`,
    text: buildCardDescription(payload),
  });
}
