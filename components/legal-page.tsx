import type { ReactNode } from "react"
import Link from "next/link"

import { legal, legalNav } from "@/lib/content/legal"

export function LegalPage({
  kicker,
  title,
  updated = legal.updated,
  children,
}: {
  kicker: string
  title: string
  updated?: string
  children: ReactNode
}) {
  return (
    <div className="mx-auto max-w-3xl px-5 py-16">
      <p className="text-xs font-semibold tracking-[0.16em] text-lime uppercase">{kicker}</p>
      <h1 className="mt-3 text-5xl md:text-6xl">{title}</h1>
      <p className="mt-4 text-sm text-muted-foreground">
        Sist oppdatert: {updated} · {legal.controller}, org.nr. {legal.orgNumber}
      </p>
      <nav aria-label="Juridiske sider" className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-xs font-semibold tracking-[0.14em] uppercase">
        {legalNav.map((item) => (
          <Link key={item.href} href={item.href} className="underline decoration-lime decoration-2 underline-offset-4">
            {item.label}
          </Link>
        ))}
      </nav>
      <div className="mt-12 space-y-10 text-base leading-relaxed">{children}</div>
    </div>
  )
}

export function LegalSection({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section>
      <h2 className="text-2xl">{title}</h2>
      <div className="mt-3 space-y-3 text-muted-foreground">{children}</div>
    </section>
  )
}
