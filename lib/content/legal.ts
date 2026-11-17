import { firm } from "@/lib/content/firm"

export const legal = {
  controller: firm.name,
  orgNumber: firm.orgNumber,
  email: firm.email,
  privacyEmail: firm.leaderEmail,
  phone: firm.phone,
  phoneHref: firm.phoneHref,
  street: `${firm.street} (${firm.place})`,
  postalCode: firm.postalCode,
  city: firm.city,
  updated: "1. oktober 2025",
  datatilsynet: "https://www.datatilsynet.no",
} as const

export const legalNav = [
  { href: "/personvern", label: "Personvern" },
  { href: "/informasjonskapsler", label: "Informasjonskapsler" },
  { href: "/vilkar", label: "Vilkår" },
] as const

export const cookieCategories = [
  {
    id: "necessary",
    title: "Nødvendige",
    status: "Ikke i bruk",
    text: "Brukes for at nettsiden skal fungere, for eksempel innlogging, skjemaer og språkvalg. Slike kan ikke slås av. Denne nettsiden setter ingen nødvendige HTTP-cookies i dag.",
  },
  {
    id: "functional",
    title: "Funksjonelle",
    status: "I bruk",
    text: "Forbedrer opplevelsen, for eksempel ved å huske at cookie-varselet er lukket. Ingen opplysninger sendes til oss.",
  },
  {
    id: "statistics",
    title: "Statistikk og analyse",
    status: "Ikke i bruk",
    text: "Hjelper oss å forstå hvordan nettsiden brukes, for eksempel med Google Analytics. Plan og Ressurs AS bruker ikke statistikk- eller analyseverktøy på denne nettsiden.",
  },
  {
    id: "marketing",
    title: "Markedsføring",
    status: "Ikke i bruk",
    text: "Brukes til å vise relevante annonser eller innhold på andre plattformer. Per i dag benytter ikke Plan og Ressurs AS målrettet annonsering eller deling av data til tredjeparter for markedsføring.",
  },
] as const
