export const firm = {
  name: "Plan og Ressurs AS",
  shortName: "Plan og Ressurs",
  orgNumber: "992293160",
  url: "https://www.planogressurs.no",
  email: "post@planogressurs.no",
  leaderEmail: "joar@planogressurs.no",
  invoiceEmail: "faktura@planogressurs.no",
  phone: "+47 452 05 513",
  phoneHref: "tel:+4745205513",
  street: "Nymoens torg 6",
  place: "Quben",
  postalCode: "3611",
  city: "Kongsberg",
  hours: "Man–fre 08–16",
  map: {
    lat: 59.670876,
    lng: 9.646838,
  },
  founded: 2008,
  leader: {
    name: "Joar-André Halling",
    title: "Landskapsarkitekt MNLA og daglig leder",
    portrait: {
      src: "/media/c0eb334f7f7241f483683f78624f9453.jpg",
      width: 1674,
      height: 1800,
      alt: "Joar-André Halling, daglig leder i Plan og Ressurs",
    },
    linkedin: "https://www.linkedin.com/in/joar-andre-halling-42439a397",
  },
  logo: {
    src: "/media/logo.png",
    width: 512,
    height: 379,
    alt: "Plan og Ressurs",
  },
  approvalMark: {
    src: "/media/5d6d48046f8d4170a2855bd2d57e3ff9.png",
    width: 425,
    height: 425,
    alt: "Sentralt godkjent",
  },
} as const

export const nav = [
  { href: "/tjenester", label: "Tjenester" },
  { href: "/prosjekter", label: "Prosjekter" },
  { href: "/om", label: "Om" },
  { href: "/kontakt", label: "Kontakt" },
] as const

export const method = [
  {
    title: "Tidlig avklaring",
    text: "Vi går gjennom rammer, risiko og muligheter før prosjektet låses. Det gir færre overraskelser underveis.",
  },
  {
    title: "Strategi og analyse",
    text: "Arealplaner, terreng, volum, tekniske detaljer og planstatus blir vurdert samlet.",
  },
  {
    title: "Gjennomførbar plan",
    text: "Planene skal fungere like godt på byggeplassen som på papiret.",
  },
  {
    title: "Dialog og prosess",
    text: "Vi fører dialogen med kommunen og myndighetene, slik at prosessen blir ryddig.",
  },
  {
    title: "Vedtak og fremdrift",
    text: "Vi holder i trådene frem til godkjenning, uten unødvendig ventetid.",
  },
] as const

export const clients = [
  {
    name: "Ålhytta",
    src: "/media/clients/aalhytta-white.png",
    width: 1340,
    height: 172,
  },
  {
    name: "Ag",
    src: "/media/clients/ag.png",
    width: 242,
    height: 176,
  },
  {
    name: "Dekar Tomteutvikling",
    src: "/media/clients/dekar.png",
    width: 500,
    height: 129,
  },
  {
    name: "PK Hus",
    src: "/media/clients/pk-hus.png",
    width: 1546,
    height: 1309,
  },
  {
    name: "Samarbeidspartner",
    src: "/media/clients/samarbeidspartner.png",
    width: 252,
    height: 228,
  },
] as const

export const inquiryTypes = [
  "Arealplanlegging",
  "Landskapsarkitektur",
  "Eiendomsutvikling",
  "Hagedesign",
  "Annet",
] as const
