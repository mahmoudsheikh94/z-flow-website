/**
 * Telegram notification helper.
 *
 * Sends a message via the Telegram Bot API. Credentials come from env vars —
 * never hardcode the bot token. Set in Vercel project env (and .env.local for dev):
 *   TELEGRAM_BOT_TOKEN  — the bot token from @BotFather
 *   TELEGRAM_CHAT_ID    — the numeric chat id to send notifications to
 *
 * Fails soft: returns false and logs on any error so the caller (contact form)
 * never breaks if Telegram is down or unconfigured.
 */
export async function sendTelegramMessage(text: string): Promise<boolean> {
  const token = process.env.TELEGRAM_BOT_TOKEN
  const chatId = process.env.TELEGRAM_CHAT_ID

  if (!token || !chatId) {
    console.warn('Telegram not configured (TELEGRAM_BOT_TOKEN / TELEGRAM_CHAT_ID missing) — skipping notification.')
    return false
  }

  try {
    const res = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: chatId,
        text,
        parse_mode: 'HTML',
        disable_web_page_preview: true,
      }),
    })

    if (!res.ok) {
      const body = await res.text()
      console.error('Telegram sendMessage failed:', res.status, body)
      return false
    }
    return true
  } catch (err) {
    console.error('Telegram sendMessage error:', err)
    return false
  }
}

/** Escape user-supplied text for Telegram HTML parse mode. */
export function escapeHtml(input: string): string {
  return input
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
}
