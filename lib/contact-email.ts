import { firm } from "@/lib/content/firm"
import type { Inquiry } from "@/lib/contact-inquiry"

const INK = "#1c1c1c"
const PAPER = "#f6f6f4"
const BLACK = "#111111"
const LIME = "#5c7a30"
const LIME_BRIGHT = "#c6ea62"
const LINE = "#e4e4e0"
const MUTED = "#5e5e5e"
const WHITE = "#ffffff"
const SANS = "Helvetica, Arial, sans-serif"
const SERIF = "Georgia, 'Times New Roman', serif"

export type RenderedEmail = {
  subject: string
  html: string
  text: string
}

export function renderInquiryEmail(inquiry: Inquiry): RenderedEmail {
  const { name, email, phone, kind, message } = inquiry
  const subject = `Henvendelse fra ${name}: ${kind}`.slice(0, 180)
  const rows: [string, string][] = [
    ["Type", kind],
    ["E-post", email],
  ]
  if (phone) rows.push(["Telefon", phone])

  const html = layout({
    title: subject,
    preheader: `${kind} fra ${name}. Svar direkte på denne e-posten.`,
    kicker: "Ny henvendelse",
    heading: name,
    intro: "Svar direkte på denne e-posten, så går svaret til avsenderen.",
    rows,
    message,
    action: {
      href: `mailto:${email}?subject=${encodeURIComponent(`Re: ${kind}`)}`,
      label: "Svar avsender",
    },
  })

  const text = [
    `Ny henvendelse fra ${firm.url.replace(/^https?:\/\/(www\.)?/, "")}`,
    "",
    `Navn: ${name}`,
    `E-post: ${email}`,
    phone ? `Telefon: ${phone}` : "",
    `Type: ${kind}`,
    "",
    message,
    "",
    "Svar på denne e-posten for å svare avsenderen.",
  ]
    .filter((line) => line !== "")
    .join("\n")

  return { subject, html, text }
}

export function renderReceiptEmail(inquiry: Inquiry): RenderedEmail {
  const { name, phone, kind, message } = inquiry
  const subject = "Vi har mottatt henvendelsen din"
  const rows: [string, string][] = [["Type oppdrag", kind]]
  if (phone) rows.push(["Telefon", phone])

  const html = layout({
    title: subject,
    preheader: `Takk, ${name}. Vi svarer til denne e-postadressen.`,
    kicker: "Henvendelse mottatt",
    heading: `Takk, ${name}.`,
    intro:
      "Vi har mottatt henvendelsen din. Vi tar en første avklaring og svarer til denne e-postadressen.",
    rows,
    message,
  })

  const text = [
    `Takk, ${name}.`,
    "",
    "Vi har mottatt henvendelsen din. Vi tar en første avklaring og svarer til denne e-postadressen.",
    "",
    phone ? `Telefon: ${phone}` : "",
    `Type oppdrag: ${kind}`,
    "",
    message,
    "",
    firm.name,
    `${firm.street} (${firm.place})`,
    `${firm.postalCode} ${firm.city}`,
    firm.phone,
    firm.email,
    firm.url,
  ]
    .filter((line) => line !== "")
    .join("\n")

  return { subject, html, text }
}

function layout({
  title,
  preheader,
  kicker,
  heading,
  intro,
  rows,
  message,
  action,
}: {
  title: string
  preheader: string
  kicker: string
  heading: string
  intro: string
  rows: (readonly [string, string])[]
  message: string
  action?: { href: string; label: string }
}) {
  const detailRows = rows
    .map(
      ([label, value]) => `
        <tr>
          <td style="padding:14px 0 13px;border-bottom:1px solid ${LINE};">
            <p style="margin:0;font-family:${SANS};font-size:11px;line-height:1.4;font-weight:700;letter-spacing:1.6px;text-transform:uppercase;color:${MUTED};">${escapeHtml(label)}</p>
            <p style="margin:4px 0 0;font-family:${SANS};font-size:15px;line-height:1.45;color:${INK};">${value.includes("@") ? mailLink(value) : escapeHtml(value)}</p>
          </td>
        </tr>`
    )
    .join("")

  const actionBlock = action
    ? `
        <tr>
          <td style="padding:4px 28px 8px;">
            <table role="presentation" cellpadding="0" cellspacing="0" border="0">
              <tr>
                <td bgcolor="${BLACK}" style="background-color:${BLACK};">
                  <a href="${escapeHtml(action.href)}" style="display:inline-block;padding:13px 18px;font-family:${SANS};font-size:12px;line-height:1;font-weight:700;letter-spacing:1.4px;text-transform:uppercase;color:${WHITE};text-decoration:none;">${escapeHtml(action.label)}</a>
                </td>
              </tr>
            </table>
          </td>
        </tr>`
    : ""

  return `<!DOCTYPE html>
<html lang="nb">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="color-scheme" content="light only">
  <meta name="supported-color-schemes" content="light">
  <title>${escapeHtml(title)}</title>
</head>
<body style="margin:0;padding:0;background-color:${PAPER};">
  <div style="display:none;max-height:0;overflow:hidden;mso-hide:all;font-size:1px;line-height:1px;color:${PAPER};">${escapeHtml(preheader)}</div>
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:${PAPER};">
    <tr>
      <td align="center" style="padding:28px 12px 36px;">
        <!--[if mso]><table role="presentation" align="center" width="560" cellpadding="0" cellspacing="0" border="0"><tr><td><![endif]-->
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="width:100%;max-width:560px;background-color:${WHITE};">
          <tr>
            <td bgcolor="${BLACK}" style="background-color:${BLACK};padding:22px 28px 18px;color:${WHITE};">
              <p style="margin:0;font-family:${SANS};font-size:18px;line-height:1.2;letter-spacing:-0.03em;color:${WHITE};">${escapeHtml(firm.shortName)}</p>
              <p style="margin:8px 0 0;font-family:${SANS};font-size:11px;line-height:1.4;font-weight:700;letter-spacing:1.8px;text-transform:uppercase;color:${LIME_BRIGHT};">Kongsberg · siden ${firm.founded}</p>
            </td>
          </tr>
          <tr>
            <td bgcolor="${LIME_BRIGHT}" height="3" style="background-color:${LIME_BRIGHT};font-size:0;line-height:0;">&nbsp;</td>
          </tr>
          <tr>
            <td style="padding:32px 28px 6px;">
              <p style="margin:0;font-family:${SANS};font-size:11px;line-height:1.4;font-weight:700;letter-spacing:1.8px;text-transform:uppercase;color:${LIME};">${escapeHtml(kicker)}</p>
              <h1 style="margin:12px 0 0;font-family:${SERIF};font-size:34px;line-height:1.05;font-weight:400;letter-spacing:-0.03em;color:${INK};">${escapeHtml(heading)}</h1>
              <p style="margin:16px 0 0;font-family:${SANS};font-size:16px;line-height:1.6;color:#3a3a3a;">${escapeHtml(intro)}</p>
            </td>
          </tr>
          ${actionBlock}
          <tr>
            <td style="padding:18px 28px 8px;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
                ${detailRows}
              </table>
            </td>
          </tr>
          <tr>
            <td style="padding:18px 28px 32px;">
              <p style="margin:0 0 10px;font-family:${SANS};font-size:11px;line-height:1.4;font-weight:700;letter-spacing:1.8px;text-transform:uppercase;color:${LIME};">Melding</p>
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td width="3" bgcolor="${LIME}" style="background-color:${LIME};font-size:0;line-height:0;">&nbsp;</td>
                  <td style="padding:2px 0 2px 16px;font-family:${SANS};font-size:15px;line-height:1.65;color:${INK};">${paragraphs(message)}</td>
                </tr>
              </table>
            </td>
          </tr>
          <tr>
            <td bgcolor="${BLACK}" style="background-color:${BLACK};padding:22px 28px 24px;color:#d8d8d8;">
              <p style="margin:0;font-family:${SANS};font-size:15px;line-height:1.3;letter-spacing:-0.02em;color:${WHITE};">${escapeHtml(firm.name)}</p>
              <p style="margin:10px 0 0;font-family:${SANS};font-size:13px;line-height:1.65;color:#d8d8d8;">
                ${escapeHtml(firm.street)} (${escapeHtml(firm.place)})<br>
                ${escapeHtml(firm.postalCode)} ${escapeHtml(firm.city)}<br>
                <a href="${escapeHtml(firm.phoneHref)}" style="color:${WHITE};text-decoration:none;">${escapeHtml(firm.phone)}</a><br>
                <a href="mailto:${escapeHtml(firm.email)}" style="color:${LIME_BRIGHT};text-decoration:none;">${escapeHtml(firm.email)}</a>
              </p>
              <p style="margin:16px 0 0;font-family:${SANS};font-size:11px;line-height:1.5;letter-spacing:0.4px;color:#a3a3a3;">
                Org.nr. ${escapeHtml(firm.orgNumber)} · <a href="${escapeHtml(firm.url)}" style="color:#d8d8d8;text-decoration:underline;">planogressurs.no</a>
              </p>
            </td>
          </tr>
        </table>
        <!--[if mso]></td></tr></table><![endif]-->
      </td>
    </tr>
  </table>
</body>
</html>`
}

function mailLink(email: string) {
  const safe = escapeHtml(email)
  return `<a href="mailto:${safe}" style="color:${INK};text-decoration:underline;">${safe}</a>`
}

function paragraphs(value: string) {
  const blocks = escapeHtml(value).split(/\n{2,}/)
  return blocks
    .map((block, index) => {
      const margin = index === blocks.length - 1 ? "0" : "0 0 12px"
      return `<p style="margin:${margin};">${block.replace(/\n/g, "<br>")}</p>`
    })
    .join("")
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
}
