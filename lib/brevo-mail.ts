import type { RenderedEmail } from "@/lib/contact-email"

const BREVO_URL = "https://api.brevo.com/v3/smtp/email"

export function brevoConfigured() {
  return Boolean(process.env.BREVO_API_KEY)
}

export function parseMailbox(value: string) {
  const match = value.match(/^\s*(.*?)\s*<([^>]+)>\s*$/)
  if (!match) return { name: undefined, email: value.trim() }
  const name = match[1].replace(/^"|"$/g, "").trim()
  return { name: name || undefined, email: match[2].trim() }
}

export async function sendBrevoMail({
  from,
  to,
  replyTo,
  mail,
}: {
  from: string
  to: string
  replyTo: string
  mail: RenderedEmail
}) {
  const apiKey = process.env.BREVO_API_KEY
  if (!apiKey) throw new Error("Brevo is not configured")

  const sender = parseMailbox(from)
  const response = await fetch(BREVO_URL, {
    method: "POST",
    headers: {
      accept: "application/json",
      "api-key": apiKey,
      "content-type": "application/json",
    },
    body: JSON.stringify({
      sender: { email: sender.email, name: sender.name },
      to: [{ email: to }],
      replyTo: { email: replyTo },
      subject: mail.subject,
      htmlContent: mail.html,
      textContent: mail.text,
    }),
  })

  if (response.ok) return

  const body = (await response.json().catch(() => null)) as {
    message?: string
    code?: string
  } | null
  throw new Error(
    body?.message || body?.code || `Brevo returned ${response.status}`
  )
}
