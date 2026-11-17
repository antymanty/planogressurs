export const firm = {
  name: "Terrengstudio",
  shortName: "Terrengstudio",
  orgNumber: "",
  url: "https://stjernestudio.no",
  email: "post@terrengstudio.example",
  leaderEmail: "post@terrengstudio.example",
  invoiceEmail: "post@terrengstudio.example",
  phone: "",
  phoneHref: "/kontakt",
  street: "",
  place: "",
  postalCode: "",
  city: "Østlandet",
  hours: "Man–fre 08–16",
  map: {
    lat: 0,
    lng: 0,
  },
  founded: 2008,
  leader: {
    name: "Terrengstudio",
    title: "Landskapsarkitekt MNLA og daglig leder",
    portrait: {
      src: "/media/c0eb334f7f7241f483683f78624f9453.jpg",
      width: 1674,
      height: 1800,
      alt: "",
    },
    linkedin: "",
  },
  logo: {
    src: "/media/logo.png",
    width: 512,
    height: 379,
    alt: "Terrengstudio",
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

export const clients: { name: string; src: string; width: number; height: number }[] = []

export const inquiryTypes = [
  "Arealplanlegging",
  "Landskapsarkitektur",
  "Eiendomsutvikling",
  "Hagedesign",
  "Annet",
] as const
