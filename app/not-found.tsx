import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Siden finnes ikke",
}

export default function NotFound() {
  return (
    <div className="mx-auto max-w-3xl px-5 py-24">
      <p className="font-mono text-xs tracking-[0.18em] text-lime uppercase">404</p>
      <h1 className="mt-3 text-5xl md:text-7xl">Siden finnes ikke.</h1>
      <p className="mt-4 text-muted-foreground">Innholdet kan ha flyttet. Porteføljen og kontakt ligger ett klikk unna.</p>
      <div className="mt-8 flex gap-6 text-xs font-semibold tracking-[0.14em] uppercase">
        <Link href="/" className="underline decoration-lime decoration-2 underline-offset-4">
          Forside
        </Link>
        <Link href="/prosjekter" className="underline decoration-lime decoration-2 underline-offset-4">
          Prosjekter
        </Link>
        <Link href="/kontakt" className="underline decoration-lime decoration-2 underline-offset-4">
          Kontakt
        </Link>
      </div>
    </div>
  )
}
