import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Siden finnes ikke",
}

export default function NotFound() {
  return (
    <div className="mx-auto max-w-3xl px-5 py-24">
      <p className="text-xs font-semibold tracking-[0.16em] text-primary uppercase">404</p>
      <h1 className="mt-3 text-5xl">Siden finnes ikke.</h1>
      <p className="mt-4 text-muted-foreground">Innholdet kan ha flyttet. Porteføljen og kontakt ligger ett klikk unna.</p>
      <div className="mt-8 flex gap-6 text-sm font-semibold">
        <Link href="/" className="underline-offset-4 hover:underline">
          Forside
        </Link>
        <Link href="/prosjekter" className="underline-offset-4 hover:underline">
          Prosjekter
        </Link>
        <Link href="/kontakt" className="underline-offset-4 hover:underline">
          Kontakt
        </Link>
      </div>
    </div>
  )
}
