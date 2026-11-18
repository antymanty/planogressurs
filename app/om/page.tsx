import type { Metadata } from "next"

import { MethodList } from "@/components/method-list"
import { Reveal } from "@/components/reveal"
import { firm } from "@/lib/content/firm"

export const metadata: Metadata = {
  title: "Om",
  description:
    "Plan og Ressurs AS er et rådgivningskontor for arealplanlegging, landskapsarkitektur og eiendomsutvikling, lokalisert på Quben i Kongsberg.",
}

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-16">
      <div className="grid items-start gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        <Reveal>
          <p className="text-xs font-semibold tracking-[0.16em] text-lime uppercase">Om kontoret</p>
          <h1 className="mt-3 text-5xl md:text-6xl">{firm.name}</h1>
          <p className="mt-3 text-lg text-muted-foreground">
            {firm.leader.name}, {firm.leader.title}
          </p>
          <div className="mt-6 space-y-4 leading-relaxed">
            <p>
              {firm.name} er et mindre rådgivningskontor lokalisert på Quben i Kongsberg. Målet er å være det
              personlige alternativet til de større aktørene i bransjen. Vi bidrar til å forme fremtidens nærmiljø og
              utvikle varige verdier tilknyttet fast eiendom.
            </p>
          </div>
        </Reveal>
      </div>

      <section className="mt-20 grid gap-12 border-t border-foreground/15 pt-12 lg:grid-cols-2">
        <div>
          <h2 className="text-3xl">Historie</h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Firmaets opprinnelige navn, Vidda Ressurs AS, ble etablert i 2008 og drevet som et nettverksselskap. Den
            gang var spesialiseringen naturforvaltning, vann- og avløpsprosjektering og utvikling av fritidsbebyggelse i
            fjellnære strøk. Erfaringen er tatt med videre. Hovedfokuset i dag er prosjekter i by- og urbane strøk.
          </p>
        </div>
        <div>
          <h2 className="text-3xl">Filosofi</h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            {firm.name} skal levere tjenester av høy faglig kvalitet, med personlig oppfølging og nøyaktig arbeid. Som
            uavhengig rådgivningskontor er målet å være det personlige alternativet til de største aktørene. Vi arbeider
            som et lite kontor på Quben, med et nettverk av samarbeidspartnere. Ved større eller tverrfaglige oppdrag
            kan bemanningen skaleres med den spisskompetansen prosjektet krever. Tradisjonelle DAK- og GIS-verktøy
            kombineres med kunstig intelligens, uten at det går på bekostning av kvaliteten.
          </p>
        </div>
      </section>

      <section className="mt-16 border-t border-foreground/15 pt-12">
        <h2 className="text-3xl">Arbeidsmåte</h2>
        <p className="mt-4 max-w-3xl leading-relaxed text-muted-foreground">
          Spacio, Vectorworks og Rhino Lands kan brukes sammen eller hver for seg. Metoden er strukturert og faglig
          forankret.
        </p>
        <MethodList />
      </section>
    </div>
  )
}
