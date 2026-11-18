import type { Metadata } from "next"
import Link from "next/link"

import { LegalPage, LegalSection } from "@/components/legal-page"
import { legal } from "@/lib/content/legal"

export const metadata: Metadata = {
  title: "Personvernerklæring",
  description: `Slik behandler ${legal.controller} personopplysninger på nettsiden og i henvendelser.`,
}

export default function PrivacyPage() {
  return (
    <LegalPage
      kicker="Personvern"
      title="Personvernerklæring"
      updated="18. november 2026"
    >
      <LegalSection title="1. Hvilke opplysninger samler vi inn?">
        <p>Vi kan samle inn følgende typer personopplysninger:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            Opplysninger du selv oppgir: for eksempel navn, e-postadresse og
            telefonnummer når du fyller ut kontaktskjema eller sender oss en
            e-post.
          </li>
          <li>
            Tekniske opplysninger: serveren kan motta IP-adresse, nettlesertype
            og lignende i vanlige serverlogger. Vi setter ikke analyse- eller
            markedsføringscookies, og vi samler ikke inn bruksdata via
            informasjonskapsler.
          </li>
        </ul>
      </LegalSection>

      <LegalSection title="2. Formål med behandlingen">
        <p>Vi behandler opplysningene dine for å:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            besvare henvendelser du sender oss via kontaktskjema eller e-post
          </li>
          <li>
            gi deg relevant informasjon om våre tjenester innen plan og
            arkitektur
          </li>
          <li>ivareta nettsidens funksjonalitet og brukeropplevelse</li>
          <li>oppfylle juridiske forpliktelser</li>
        </ul>
      </LegalSection>

      <LegalSection title="3. Behandlingsansvarlig">
        <p>
          Behandlingsansvarlig er {legal.controller}, org.nr. {legal.orgNumber},{" "}
          {legal.street}, {legal.postalCode} {legal.city}.
        </p>
      </LegalSection>

      <LegalSection title="4. Behandlingsgrunnlag">
        <p>Behandlingen av personopplysninger skjer på grunnlag av:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            Samtykke – når du aktivt gir oss opplysninger via skjema eller tar
            kontakt.
          </li>
          <li>
            Berettiget interesse – for å ivareta nettsidens drift og sikkerhet.
          </li>
          <li>
            Avtale – dersom du inngår avtale med oss om plan- og
            arkitekttjenester.
          </li>
        </ul>
      </LegalSection>

      <LegalSection title="5. Lagring og sletting">
        <p>
          Vi lagrer personopplysninger kun så lenge det er nødvendig for
          formålet de ble samlet inn for, eller så lenge gjeldende lovgivning
          krever det. Henvendelser via skjema eller e-post slettes når saken er
          ferdigbehandlet, med mindre de inngår i et kundeforhold eller må
          oppbevares etter bokførings- eller annen lov.
        </p>
      </LegalSection>

      <LegalSection title="6. Dine rettigheter">
        <p>Som registrert har du rett til å:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>be om innsyn i hvilke opplysninger vi har om deg</li>
          <li>få rettet eller slettet opplysninger</li>
          <li>
            be om begrensning av behandlingen, og motsette deg behandling som
            bygger på berettiget interesse
          </li>
          <li>
            få utlevert opplysninger i et maskinlesbart format
            (dataportabilitet) der det gjelder
          </li>
          <li>
            trekke tilbake samtykke når som helst, uten at det påvirker
            lovligheten av behandlingen før tilbaketrekkingen
          </li>
        </ul>
        <p>
          Du kan også klage til Datatilsynet. Se{" "}
          <a
            href={legal.datatilsynet}
            className="text-foreground underline decoration-lime decoration-2 underline-offset-4"
          >
            datatilsynet.no
          </a>
          .
        </p>
      </LegalSection>

      <LegalSection title="7. Deling av opplysninger">
        <p>
          Vi deler ikke personopplysninger med tredjeparter, med mindre det er
          nødvendig for å levere våre tjenester (for eksempel IT-leverandør
          eller webhotell) eller vi er rettslig forpliktet. Kontaktskjemaet
          sendes som e-post til oss. Du får en bekreftelse til adressen du
          oppga. Opplysningene lagres i vår e-post, ikke i et eget skjemasystem
          på nettsiden.
        </p>
      </LegalSection>

      <LegalSection title="8. Informasjonskapsler (cookies)">
        <p>
          Vi benytter ikke cookies for å analysere trafikk eller markedsføre.
          Funksjonell lagring i nettleseren brukes kun til visningsvalg. Les mer
          i{" "}
          <Link
            href="/informasjonskapsler"
            className="text-foreground underline decoration-lime decoration-2 underline-offset-4"
          >
            informasjonskapsler og personverninnstillinger
          </Link>
          .
        </p>
      </LegalSection>

      <LegalSection title="9. Endringer i personvernerklæringen">
        <p>
          Vi kan oppdatere denne erklæringen ved behov. Endringer vil bli
          publisert på denne siden med ny oppdateringsdato.
        </p>
      </LegalSection>

      <LegalSection title="10. Kontakt">
        <p>
          Har du spørsmål om vår behandling av personopplysninger? Ta kontakt
          med oss:
        </p>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            E-post:{" "}
            <a
              href={`mailto:${legal.privacyEmail}`}
              className="text-foreground underline decoration-lime decoration-2 underline-offset-4"
            >
              {legal.privacyEmail}
            </a>
          </li>
          <li>
            Telefon:{" "}
            <a
              href={legal.phoneHref}
              className="text-foreground underline decoration-lime decoration-2 underline-offset-4"
            >
              {legal.phone}
            </a>
          </li>
          <li>
            Adresse: {legal.street}, {legal.postalCode} {legal.city}
          </li>
        </ul>
      </LegalSection>
    </LegalPage>
  )
}
