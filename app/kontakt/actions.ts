"use server"

import { headers } from "next/headers"
import { Resend } from "resend"

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

  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    console.error("[contact] RESEND_API_KEY is not set")
    return {
      sent: false,
      error: `Vi fikk ikke sendt henvendelsen. Send e-post direkte til ${firm.email}.`,
      revision: 0,
      receipt: false,
    }
  }

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
  const from = process.env.RESEND_FROM || `Plan og Ressurs <${firm.formEmail}>`
  const to = process.env.CONTACT_TO_EMAIL || firm.email
  const notice = renderInquiryEmail(inquiry)
  const resend = new Resend(apiKey)

  try {
    const { error } = await resend.emails.send({
      from,
      to: [to],
      replyTo: inquiry.email,
      subject: notice.subject,
      html: notice.html,
      text: notice.text,
    })

    if (error) {
      console.error(
        "[contact] Resend rejected the message",
        error.name,
        error.message
      )
      return {
        sent: false,
        error: `Vi fikk ikke sendt henvendelsen. Prøv igjen, eller send e-post direkte til ${firm.email}.`,
        revision: 0,
        receipt: false,
      }
    }
  } catch (error) {
    console.error(
      "[contact] Resend request failed",
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
    const { error } = await resend.emails.send({
      from,
      to: [inquiry.email],
      replyTo: firm.email,
      subject: receipt.subject,
      html: receipt.html,
      text: receipt.text,
    })
    if (error) {
      console.error(
        "[contact] Resend rejected the receipt",
        error.name,
        error.message
      )
    } else {
      receiptSent = true
    }
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
