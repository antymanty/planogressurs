import { inquiryTypes } from "@/lib/content/firm"

export type ContactFormState = {
  sent: boolean
  error: string
  revision: number
  receipt: boolean
}

export const initialContactState: ContactFormState = {
  sent: false,
  error: "",
  revision: 0,
  receipt: false,
}

export type Inquiry = {
  name: string
  email: string
  phone: string
  kind: string
  message: string
}

const kinds = new Set<string>(inquiryTypes)

export function parseInquiry(
  formData: FormData
): { ok: true; inquiry: Inquiry } | { ok: false; error: string } {
  const name = singleLine(formData.get("navn"), 80)
  const email = singleLine(formData.get("epost"), 254).toLowerCase()
  const phone = singleLine(formData.get("telefon"), 40)
  const kind = singleLine(formData.get("type"), 80)
  const message = textBlock(formData.get("melding"), 5000)
  const consent = formData.get("samtykke") === "on"

  if (name.length < 2) return { ok: false, error: "Skriv inn navnet ditt." }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { ok: false, error: "Skriv inn en gyldig e-postadresse." }
  }
  if (phone && !/^[0-9+().\s-]{5,40}$/.test(phone)) {
    return {
      ok: false,
      error: "Skriv inn et gyldig telefonnummer, eller la feltet stå tomt.",
    }
  }
  if (!kinds.has(kind)) return { ok: false, error: "Velg type oppdrag." }
  if (message.length < 10)
    return { ok: false, error: "Skriv en kort melding om oppdraget." }
  if (!consent) {
    return {
      ok: false,
      error:
        "Bekreft at vi kan bruke opplysningene til å besvare henvendelsen.",
    }
  }

  return { ok: true, inquiry: { name, email, phone, kind, message } }
}

function singleLine(value: FormDataEntryValue | null, max: number) {
  return String(value ?? "")
    .replace(/[\u0000-\u001F\u007F]/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, max)
}

function textBlock(value: FormDataEntryValue | null, max: number) {
  return String(value ?? "")
    .replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g, "")
    .replace(/\r\n?/g, "\n")
    .replace(/[^\S\n]+/g, " ")
    .replace(/\n{3,}/g, "\n\n")
    .trim()
    .slice(0, max)
}
