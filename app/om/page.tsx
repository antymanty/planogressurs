import type { Metadata } from "next"
import Image from "next/image"

import { firm, method } from "@/lib/content/firm"

export const metadata: Metadata = {
  title: "Om",
  description:
    "Plan og Ressurs AS ledes av landskapsarkitekt MNLA Joar-André Halling. Kontoret er sentralt godkjent og holder til på Quben i Kongsberg.",
}

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-16">
      <div className="grid items-start gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="bg-muted">
          <Image
            src={firm.leader.portrait.src}
            alt={firm.leader.portrait.alt}
            width={firm.leader.portrait.width}
            height={firm.leader.portrait.height}
            className="h-auto w-full"
            priority
          />
        </div>
        <div>
          <p className="text-xs font-semibold tracking-[0.16em] text-primary uppercase">Om kontoret</p>
          <h1 className="mt-3 text-5xl">{firm.leader.name}</h1>
          <p className="mt-3 text-lg text-muted-foreground">{firm.leader.title}</p>
          <div className="mt-6 space-y-4 leading-relaxed">
            <p>Ansatt i Plan og Ressurs AS siden 2014, og daglig leder siden 2019.</p>
            <p>
              Mastergrad i landskapsarkitektur ved Norges miljø- og biovitenskapelige universitet (NMBU), 2008–2013, Ås.
              Utdanningen la vekt på by- og strategisk landskapsplanlegging, eiendoms- og juridiske fag, og arbeid som
              prosjekterende landskapsarkitekt.
            </p>
            <p>
              Tilknyttet Norske landskapsarkitekters forening (NLA), fagorganisasjonen for landskapsarkitekter med
              eksamen fra godkjent høyere profesjonsutdanning.
            </p>
          </div>
        </div>
      </div>

      <section className="mt-20 grid gap-12 border-t border-border pt-12 lg:grid-cols-2">
        <div>
          <h2 className="text-3xl">Historie</h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Firmaets opprinnelige navn, Vidda Ressurs AS, ble etablert i 2008 og drevet som et nettverksselskap. Den
            gang var spesialiseringen naturforvaltning, vann- og avløpsprosjektering og utvikling av fritidsbebyggelse i
            fjellnære strøk, derav navnet Vidda. Erfaringen er tatt med videre. Hovedfokuset i dag er prosjekter i by-
            og urbane strøk.
          </p>
        </div>
        <div>
          <h2 className="text-3xl">Filosofi</h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Plan og Ressurs skal levere tjenester av høy faglig kvalitet, med personlig oppfølging og nøyaktig arbeid.
            Som uavhengig rådgivningskontor er målet å være det personlige alternativet til de største aktørene. Vi
            arbeider i coworking-miljøet Quben på Kongsberg, med et nettverk av samarbeidspartnere. Ved større eller
            tverrfaglige oppdrag kan bemanningen skaleres med den spisskompetansen prosjektet krever. Tradisjonelle
            DAK- og GIS-verktøy kombineres med kunstig intelligens, uten at det går på bekostning av kvaliteten.
          </p>
        </div>
      </section>

      <section className="mt-16">
        <h2 className="text-3xl">Arbeidsmåte</h2>
        <p className="mt-4 max-w-3xl leading-relaxed text-muted-foreground">
          Spacio, Vectorworks og Rhino Lands kan brukes sammen eller hver for seg. Metoden er strukturert og faglig
          forankret.
        </p>
        <ol className="mt-8 grid gap-6 md:grid-cols-5">
          {method.map((step, index) => (
            <li key={step.title} className="border-t border-border pt-4">
              <p className="text-xs font-semibold tracking-[0.16em] text-primary">0{index + 1}</p>
              <h3 className="mt-2 text-xl">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.text}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="mt-16 grid items-center gap-8 border border-border p-6 md:grid-cols-[120px_1fr]">
        <Image
          src={firm.approvalMark.src}
          alt={firm.approvalMark.alt}
          width={firm.approvalMark.width}
          height={firm.approvalMark.height}
          className="h-auto w-28"
        />
        <div>
          <h2 className="text-3xl">Sentralt godkjent</h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            {firm.name} med organisasjonsnummer {firm.orgNumber} har sentral godkjenning etter plan- og bygningsloven
            av 27. juni 2008 § 22-1 og forskrift om byggesak av 26. mars 2010 nr. 488 (SAK10):
          </p>
          <ul className="mt-4 space-y-2 text-sm">
            <li>Prosjektering av veg, utearealer og landskapsutforming i tiltaksklasse 1</li>
            <li>Søker, for alle typer tiltak, i tiltaksklasse 1</li>
          </ul>
        </div>
      </section>
    </div>
  )
}
