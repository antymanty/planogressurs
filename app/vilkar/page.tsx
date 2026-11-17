import type { Metadata } from "next"
import Link from "next/link"

import { LegalPage, LegalSection } from "@/components/legal-page"
import { legal } from "@/lib/content/legal"

export const metadata: Metadata = {
  title: "Bruksvilkår",
  description: `Vilkår for bruk av nettsiden til ${legal.controller}.`,
}

export default function TermsPage() {
  return (
    <LegalPage kicker="Vilkår" title="Bruksvilkår">
      <LegalSection title="1. Generelt">
        <p>
          Disse bruksvilkårene regulerer din bruk av nettsiden til {legal.controller}. Ved å bruke nettsiden samtykker
          du i vilkårene. Dersom du ikke godtar disse, ber vi deg om å ikke benytte nettsiden.
        </p>
      </LegalSection>

      <LegalSection title="2. Tjenester og innhold">
        <ul className="list-disc space-y-2 pl-5">
          <li>Nettsiden er ment som en informasjonskanal om våre plan- og arkitekturtjenester.</li>
          <li>
            Alt innhold (tekst, bilder, tegninger, logoer med mer) tilhører {legal.controller} eller er brukt med
            tillatelse.
          </li>
          <li>Uautorisert bruk, kopiering eller distribusjon er ikke tillatt uten skriftlig samtykke.</li>
        </ul>
      </LegalSection>

      <LegalSection title="3. Brukerens ansvar">
        <p>Som bruker av nettsiden forplikter du deg til å:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>ikke misbruke nettsiden, for eksempel ved hacking, spam eller ulovlige handlinger</li>
          <li>oppgi korrekte opplysninger dersom du fyller ut skjemaer eller kontakter oss</li>
        </ul>
      </LegalSection>

      <LegalSection title="4. Ansvarsbegrensning">
        <ul className="list-disc space-y-2 pl-5">
          <li>
            Vi tilstreber at informasjonen på nettsiden er korrekt, men vi gir ingen garantier for fullstendighet eller
            nøyaktighet.
          </li>
          <li>
            {legal.controller} er ikke ansvarlig for tap eller skader som følge av bruk av nettsiden eller
            informasjonen på den.
          </li>
          <li>Lenker til eksterne nettsider gis kun som en tjeneste – vi har ikke ansvar for innholdet der.</li>
        </ul>
      </LegalSection>

      <LegalSection title="5. Personvern">
        <p>
          Behandlingen av personopplysninger reguleres av vår{" "}
          <Link href="/personvern" className="text-foreground underline decoration-lime decoration-2 underline-offset-4">
            personvernerklæring
          </Link>
          . Informasjonskapsler er beskrevet under{" "}
          <Link
            href="/informasjonskapsler"
            className="text-foreground underline decoration-lime decoration-2 underline-offset-4"
          >
            informasjonskapsler
          </Link>
          .
        </p>
      </LegalSection>

      <LegalSection title="6. Endringer">
        <p>Vi kan oppdatere bruksvilkårene ved behov. Endringer publiseres på denne siden med ny oppdateringsdato.</p>
      </LegalSection>
    </LegalPage>
  )
}
