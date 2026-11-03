import type { Metadata } from "next"

import { ContactForm } from "@/components/contact-form"
import { LinkedInIcon } from "@/components/linkedin-icon"
import { firm } from "@/lib/content/firm"

export const metadata: Metadata = {
  title: "Kontakt",
  description:
    "Kontakt Plan og Ressurs AS på Quben, Nymoens torg 6, 3611 Kongsberg. Telefon, e-post og besøk man–fre 08–16.",
}

export default function ContactPage() {
  const mapSrc = `https://www.openstreetmap.org/export/embed.html?bbox=${firm.map.lng - 0.012}%2C${firm.map.lat - 0.006}%2C${firm.map.lng + 0.012}%2C${firm.map.lat + 0.006}&layer=mapnik&marker=${firm.map.lat}%2C${firm.map.lng}`

  return (
    <div className="mx-auto grid max-w-6xl gap-14 px-5 py-16 lg:grid-cols-[0.9fr_1.1fr]">
      <div>
        <p className="text-xs font-semibold tracking-[0.16em] text-lime uppercase">Kontakt</p>
        <h1 className="mt-3 text-5xl md:text-6xl">Ta kontakt</h1>
        <p className="mt-5 leading-relaxed text-muted-foreground">
          Fortell kort om tomten, planen eller utearealet. Vi svarer fra kontoret på Quben.
        </p>
        <dl className="mt-8 space-y-5 text-sm">
          <div>
            <dt className="text-muted-foreground">Besøk og post</dt>
            <dd className="mt-1">
              {firm.street} ({firm.place})
              <br />
              {firm.postalCode} {firm.city}
              <br />
              {firm.hours}
            </dd>
          </div>
          <div>
            <dt className="text-muted-foreground">Telefon</dt>
            <dd className="mt-1">
              <a className="underline-offset-4 hover:underline" href={firm.phoneHref}>
                {firm.phone}
              </a>
            </dd>
          </div>
          <div>
            <dt className="text-muted-foreground">E-post</dt>
            <dd className="mt-1 space-y-1">
              <p>
                Generelt:{" "}
                <a className="underline-offset-4 hover:underline" href={`mailto:${firm.email}`}>
                  {firm.email}
                </a>
              </p>
              <p>
                Daglig leder:{" "}
                <a className="underline-offset-4 hover:underline" href={`mailto:${firm.leaderEmail}`}>
                  {firm.leaderEmail}
                </a>
              </p>
              <p>
                Faktura:{" "}
                <a className="underline-offset-4 hover:underline" href={`mailto:${firm.invoiceEmail}`}>
                  {firm.invoiceEmail}
                </a>
              </p>
            </dd>
          </div>
          <div>
            <dt className="text-muted-foreground">LinkedIn</dt>
            <dd className="mt-1">
              <a
                className="inline-flex items-center gap-2 underline-offset-4 hover:underline"
                href={firm.leader.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedInIcon />
                {firm.leader.name}
              </a>
            </dd>
          </div>
        </dl>
        <div className="mt-8 overflow-hidden border border-foreground/15 grayscale">
          <iframe title="Kart til Plan og Ressurs på Quben, Nymoens torg 6 i Kongsberg" src={mapSrc} className="h-72 w-full" />
        </div>
      </div>
      <div className="border border-foreground/15 bg-card p-6 md:p-8">
        <h2 className="text-3xl">Skriv til oss</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Skjemaet åpner en ferdig e-post til {firm.email}. Det krever ingen egen konto.
        </p>
        <div className="mt-6">
          <ContactForm />
        </div>
      </div>
    </div>
  )
}
