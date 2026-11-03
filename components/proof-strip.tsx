import Image from "next/image"
import type { ReactNode } from "react"

import { firm } from "@/lib/content/firm"
import { cn } from "@/lib/utils"

const facts = [
  {
    title: "MNLA",
    text: "Landskapsarkitekt med master fra NMBU",
    mark: <LandscapeMark />,
  },
  {
    title: "Sentralt godkjent",
    text: "Prosjektering og søker, tiltaksklasse 1",
    mark: (
      <Image
        src="/media/sentralt-godkjent.png"
        alt=""
        width={313}
        height={336}
        className="h-16 w-auto"
      />
    ),
  },
  {
    title: `Siden ${firm.founded}`,
    text: "Fra Vidda Ressurs til by- og stedsutvikling",
    mark: <p className="font-display text-5xl leading-none tracking-tight text-lime">{firm.founded}</p>,
  },
  {
    title: "Quben",
    text: "Coworking i Kongsberg, med nettverk å skalere med",
    mark: <PlaceMark />,
  },
] as const

export function ProofStrip() {
  return (
    <section className="bg-ink text-white">
      <div className="mx-auto max-w-6xl px-6 pt-12">
        <p className="text-xs font-semibold tracking-[0.16em] text-lime uppercase">Forankring</p>
      </div>
      <ul className="mx-auto grid max-w-6xl sm:grid-cols-2 lg:grid-cols-4">
        {facts.map((fact) => (
          <li
            key={fact.title}
            className="reveal border-b border-white/15 px-6 py-8 last:border-b-0 sm:[&:nth-child(odd)]:border-r lg:border-r lg:border-b-0 lg:last:border-r-0"
          >
            <div className="flex h-16 items-end text-white">{fact.mark}</div>
            <p className="mt-6 text-2xl tracking-tight">{fact.title}</p>
            <p className="mt-2 text-sm leading-relaxed text-white/70">{fact.text}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}

function Mark({ className, children }: { className?: string; children: ReactNode }) {
  return (
    <svg viewBox="0 0 64 64" fill="none" className={cn("h-14 w-14", className)} aria-hidden="true">
      {children}
    </svg>
  )
}

function LandscapeMark() {
  return (
    <Mark>
      <path d="M4 48h56" stroke="currentColor" strokeWidth="1.25" />
      <path d="M10 48c4-14 8-18 14-18s8 10 14 10 8-16 18-22" stroke="currentColor" strokeWidth="1.25" />
      <path d="M34 48V30h14v18" stroke="currentColor" strokeWidth="1.25" />
      <path d="M34 30l7-8 7 8" stroke="currentColor" strokeWidth="1.25" />
    </Mark>
  )
}

function PlaceMark() {
  return (
    <Mark>
      <path d="M12 28 32 12l20 16v24H12z" stroke="currentColor" strokeWidth="1.25" />
      <path d="M26 52V36h12v16" stroke="currentColor" strokeWidth="1.25" />
      <path d="M22 28h20" stroke="currentColor" strokeWidth="1.25" />
    </Mark>
  )
}
