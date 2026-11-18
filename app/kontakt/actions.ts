"use server"

import { headers } from "next/headers"

import { brevoConfigured, sendBrevoMail } from "@/lib/brevo-mail"
import { renderInquiryEmail, renderReceiptEmail } from "@/lib/contact-email"
import { firm } from "@/lib/content/firm"
import { parseInquiry, type ContactFormState } from "@/lib/contact-inquiry"

const WINDOW_MS = 10 * 60 * 1000
const MAX_SENDS = 8
const recentSends = new Map<string, number[]>()

export async function sendContact(
  _previous: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  if (String(formData.get("firma_nettsted") ?? "").trim()) {
    return { sent: true, error: "", revision: Date.now(), receipt: false }
  }

  const parsed = parseInquiry(formData)
  if (!parsed.ok)
    return { sent: false, error: parsed.error, revision: 0, receipt: false }

  const ip = await clientIp()
  if (isRateLimited(ip)) {
    return {
      sent: false,
      error: `For mange henvendelser. Prøv igjen om litt, eller send e-post til ${firm.email}.`,
      revision: 0,
      receipt: false,
    }
  }

  const inquiry = parsed.inquiry
  const from = process.env.BREVO_FROM || `Plan og Ressurs <${firm.formEmail}>`
  const to = process.env.CONTACT_TO_EMAIL || firm.leaderEmail
  const notice = renderInquiryEmail(inquiry)

  if (!brevoConfigured()) {
    console.error("[contact] Brevo is not configured")
    return {
      sent: false,
      error: `Vi fikk ikke sendt henvendelsen. Send e-post direkte til ${firm.email}.`,
      revision: 0,
      receipt: false,
    }
  }

  try {
    await sendBrevoMail({
      from,
      to,
      replyTo: inquiry.email,
      mail: notice,
    })
  } catch (error) {
    console.error(
      "[contact] Inquiry mail failed",
      error instanceof Error ? error.message : "unknown"
    )
    return {
      sent: false,
      error: `Vi fikk ikke sendt henvendelsen. Prøv igjen, eller send e-post direkte til ${firm.email}.`,
      revision: 0,
      receipt: false,
    }
  }

  const receipt = renderReceiptEmail(inquiry)
  let receiptSent = false
  try {
    await sendBrevoMail({
      from,
      to: inquiry.email,
      replyTo: firm.email,
      mail: receipt,
    })
    receiptSent = true
  } catch (error) {
    console.error(
      "[contact] Receipt request failed",
      error instanceof Error ? error.message : "unknown"
    )
  }

  return { sent: true, error: "", revision: Date.now(), receipt: receiptSent }
}

async function clientIp() {
  const headerList = await headers()
  const forwarded = headerList.get("x-forwarded-for")
  if (forwarded) return forwarded.split(",")[0]?.trim() || "unknown"
  return headerList.get("x-real-ip") ?? "unknown"
}

function isRateLimited(ip: string) {
  const now = Date.now()
  const recent = (recentSends.get(ip) ?? []).filter(
    (sentAt) => now - sentAt < WINDOW_MS
  )
  if (recent.length >= MAX_SENDS) {
    recentSends.set(ip, recent)
    return true
  }
  recent.push(now)
  recentSends.set(ip, recent)
  if (recentSends.size > 500) {
    for (const [key, stamps] of recentSends) {
      if (stamps.every((sentAt) => now - sentAt >= WINDOW_MS))
        recentSends.delete(key)
    }
  }
  return false
}
