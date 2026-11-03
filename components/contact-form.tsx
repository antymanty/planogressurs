"use client"

import { useState } from "react"

import { buttonVariants } from "@/components/ui/button"
import { firm, inquiryTypes } from "@/lib/content/firm"

type Status = "idle" | "error" | "ready"

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle")
  const [error, setError] = useState("")

  function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const name = String(data.get("navn") ?? "").trim()
    const email = String(data.get("epost") ?? "").trim()
    const phone = String(data.get("telefon") ?? "").trim()
    const kind = String(data.get("type") ?? "").trim()
    const message = String(data.get("melding") ?? "").trim()

    if (name.length < 2) {
      setStatus("error")
      setError("Skriv inn navnet ditt.")
      return
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus("error")
      setError("Skriv inn en gyldig e-postadresse.")
      return
    }
    if (!kind) {
      setStatus("error")
      setError("Velg type oppdrag.")
      return
    }
    if (message.length < 10) {
      setStatus("error")
      setError("Skriv en kort melding om oppdraget.")
      return
    }

    const subject = `Henvendelse fra ${name}: ${kind}`
    const body = [`Navn: ${name}`, `E-post: ${email}`, phone ? `Telefon: ${phone}` : "", `Type: ${kind}`, "", message]
      .filter(Boolean)
      .join("\n")

    setStatus("ready")
    setError("")
    window.location.href = `mailto:${firm.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  }

  return (
    <form method="post" action="/kontakt" onSubmit={onSubmit} noValidate className="space-y-4">
      <Field label="Navn" name="navn" autoComplete="name" required />
      <Field label="E-post" name="epost" type="email" autoComplete="email" required />
      <Field label="Telefon" name="telefon" type="tel" autoComplete="tel" />
      <div className="space-y-1.5">
        <label htmlFor="type" className="text-sm font-medium">
          Type oppdrag
        </label>
        <select
          id="type"
          name="type"
          required
          defaultValue=""
          className="h-11 w-full border border-input bg-background px-3 text-sm"
        >
          <option value="" disabled>
            Velg
          </option>
          {inquiryTypes.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
      </div>
      <div className="space-y-1.5">
        <label htmlFor="melding" className="text-sm font-medium">
          Melding
        </label>
        <textarea
          id="melding"
          name="melding"
          required
          rows={6}
          className="w-full border border-input bg-background px-3 py-2 text-sm"
        />
      </div>
      {status === "error" ? (
        <p role="alert" className="text-sm text-destructive">
          {error}
        </p>
      ) : null}
      {status === "ready" ? (
        <p role="status" className="text-sm text-foreground">
          E-postprogrammet åpnes med en ferdig melding til {firm.email}. Hvis det ikke skjer, kan du sende direkte til
          samme adresse.
        </p>
      ) : null}
      <button type="submit" className={buttonVariants()}>
        Send henvendelse
      </button>
    </form>
  )
}

function Field({
  label,
  name,
  type = "text",
  autoComplete,
  required,
}: {
  label: string
  name: string
  type?: string
  autoComplete?: string
  required?: boolean
}) {
  return (
    <div className="space-y-1.5">
      <label htmlFor={name} className="text-sm font-medium">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        autoComplete={autoComplete}
        required={required}
        className="h-11 w-full border border-input bg-background px-3 text-sm"
      />
    </div>
  )
}
