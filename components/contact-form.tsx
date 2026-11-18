"use client"

import {
  startTransition,
  useActionState,
  useEffect,
  useRef,
  useState,
  type FormEvent,
} from "react"

import Link from "next/link"

import { sendContact } from "@/app/kontakt/actions"
import { buttonVariants } from "@/components/ui/button"
import { firm, inquiryTypes } from "@/lib/content/firm"
import { initialContactState, parseInquiry } from "@/lib/contact-inquiry"

export function ContactForm() {
  const [state, formAction, pending] = useActionState(
    sendContact,
    initialContactState
  )
  const [error, setError] = useState("")
  const [closedRevision, setClosedRevision] = useState(0)
  const formRef = useRef<HTMLFormElement>(null)
  const statusRef = useRef<HTMLDivElement>(null)
  const serverError = !pending && !state.sent ? state.error : ""
  const visibleError = error || serverError
  const showSent =
    !pending && state.sent && !visibleError && state.revision !== closedRevision

  useEffect(() => {
    if (state.revision === 0) return
    formRef.current?.reset()
  }, [state.revision])

  useEffect(() => {
    if (!showSent) return
    statusRef.current?.scrollIntoView({ block: "nearest" })
    statusRef.current?.focus()
  }, [showSent])

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const parsed = parseInquiry(formData)
    if (!parsed.ok) {
      setError(parsed.error)
      return
    }
    setError("")
    startTransition(() => {
      formAction(formData)
    })
  }

  if (showSent) {
    return (
      <div
        ref={statusRef}
        tabIndex={-1}
        role="status"
        aria-live="polite"
        className="border border-foreground/15 border-t-4 border-t-lime bg-background px-5 py-6 outline-none"
      >
        <p className="text-xs font-semibold tracking-[0.16em] text-lime uppercase">
          Sendt
        </p>
        <h3 className="mt-3 text-3xl">Henvendelsen er sendt</h3>
        <p className="mt-3 leading-relaxed text-muted-foreground">
          Takk. Meldingen er sendt til {firm.email}. Vi svarer til
          e-postadressen du oppga.
          {state.receipt ? " En bekreftelse er sendt til samme adresse." : ""}
        </p>
        <div className="mt-6">
          <button
            type="button"
            className={buttonVariants({ variant: "outline" })}
            onClick={() => setClosedRevision(state.revision)}
          >
            Skriv en ny henvendelse
          </button>
        </div>
      </div>
    )
  }

  return (
    <form
      ref={formRef}
      onSubmit={onSubmit}
      noValidate
      className="relative space-y-4"
    >
      <Field label="Navn" name="navn" autoComplete="name" required />
      <Field
        label="E-post"
        name="epost"
        type="email"
        autoComplete="email"
        required
      />
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
      <div
        className="absolute top-auto -left-[10000px] h-px w-px overflow-hidden"
        aria-hidden="true"
      >
        <label htmlFor="firma_nettsted">Ikke fyll ut dette feltet</label>
        <input
          id="firma_nettsted"
          name="firma_nettsted"
          type="text"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>
      <label className="flex items-start gap-3 text-sm leading-relaxed text-muted-foreground">
        <input
          type="checkbox"
          name="samtykke"
          required
          className="mt-1 size-4 shrink-0 border border-input accent-foreground"
        />
        <span>
          Jeg samtykker til at opplysningene brukes til å besvare henvendelsen.
          Se{" "}
          <Link
            href="/personvern"
            className="text-foreground underline decoration-lime decoration-2 underline-offset-4"
          >
            personvernerklæringen
          </Link>
          .
        </span>
      </label>
      {visibleError ? (
        <p role="alert" className="text-sm text-destructive">
          {visibleError}
        </p>
      ) : null}
      <button type="submit" disabled={pending} className={buttonVariants()}>
        {pending ? "Sender…" : "Send henvendelse"}
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
