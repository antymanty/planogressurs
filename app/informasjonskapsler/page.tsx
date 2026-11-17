import type { Metadata } from "next"
import Link from "next/link"

import { LegalPage, LegalSection } from "@/components/legal-page"
import { cookieCategories, legal } from "@/lib/content/legal"

export const metadata: Metadata = {
  title: "Informasjonskapsler",
  description: `Oversikt over informasjonskapsler og personverninnstillinger hos ${legal.controller}.`,
}

export default function CookiesPage() {
  return (
    <LegalPage kicker="Personverninnstillinger" title="Informasjonskapsler">
      <LegalSection title="Slik bruker vi informasjonskapsler">
        <p>
          På dette nettstedet kan vi bruke informasjonskapsler (cookies) og lignende teknologi for å gi deg en best
          mulig opplevelse. Cookies er små tekstfiler som lagres i nettleseren. Samme regler gjelder for lokal lagring
          i nettleseren.
        </p>
        <p>
          I Norge krever ekomloven samtykke før lagring som ikke er strengt nødvendig for at tjenesten du ber om skal
          virke. {legal.controller} bruker ikke statistikk-, analyse- eller markedsføringscookies på denne nettsiden.
          Derfor har vi ikke et samtykkeverktøy som Cookiebot eller tilsvarende. Den forrige nettsiden på Wix kunne
          sette slike cookies via plattformen; det gjelder ikke her.
        </p>
      </LegalSection>

      <LegalSection title="Kategorier">
        <ul className="space-y-5">
          {cookieCategories.map((category) => (
            <li key={category.id} className="border border-foreground/15 p-4">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-lg text-foreground">{category.title}</h3>
                <p className="text-xs font-semibold tracking-[0.14em] text-lime uppercase">{category.status}</p>
              </div>
              <p className="mt-2">{category.text}</p>
            </li>
          ))}
        </ul>
      </LegalSection>

      <LegalSection title="Hva som lagres i nettleseren din">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[32rem] border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-foreground/15 text-foreground">
                <th className="py-2 pr-4 font-medium">Navn</th>
                <th className="py-2 pr-4 font-medium">Type</th>
                <th className="py-2 pr-4 font-medium">Formål</th>
                <th className="py-2 font-medium">Varighet</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-2 pr-4 font-mono text-xs text-foreground">cookie-notice</td>
                <td className="py-2 pr-4">Lokal lagring</td>
                <td className="py-2 pr-4">Husker at informasjonen om cookies er lest</td>
                <td className="py-2">Til du sletter den</td>
              </tr>
            </tbody>
          </table>
        </div>
      </LegalSection>

      <LegalSection title="Slik endrer du innstillinger">
        <p>
          Du kan slette lokal lagring og cookies i nettleseren din. Det finnes ingen analyse- eller
          markedsføringsvalg å slå av, fordi slike verktøy ikke er lagt inn.
        </p>
        <p>
          Behandling av personopplysninger utenom cookies er beskrevet i{" "}
          <Link href="/personvern" className="text-foreground underline decoration-lime decoration-2 underline-offset-4">
            personvernerklæringen
          </Link>
          .
        </p>
      </LegalSection>
    </LegalPage>
  )
}
