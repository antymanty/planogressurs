import type { ServiceId } from "@/lib/content/types"

export type Service = {
  id: ServiceId
  title: string
  lead: string
  offers: string[]
  image: { src: string; alt: string; width: number; height: number }
}

export const services: Service[] = [
  {
    id: "eiendom",
    title: "Eiendomsutvikling",
    lead: "Vi utvikler tomter og eiendommer fra tidlig idé til ferdig regulert prosjekt. Det omfatter å identifisere, analysere og sikre nye tomte- og utviklingsmuligheter, også ved hjelp av kunstig intelligens sammen med DAK og GIS.",
    offers: [
      "Tomteanalyse og potensialvurdering",
      "Konseptutvikling og volumstudier",
      "Gjennomførbarhetsvurderinger",
      "Koordinering av planarbeid og prosesser",
      "Bygge- og delingssøknader",
    ],
    image: {
      src: "/media/b0a2d93d828b4253ac8e399790009ff9.jpg",
      alt: "Volumstudie av boliger med gårdsrom, lek og trær",
      width: 1441,
      height: 720,
    },
  },
  {
    id: "landskap",
    title: "Landskapsarkitektur",
    lead: "Vi lager funksjonelle uteområder som holder sammen estetikk, økologi og bruk. Signaturen er å se bygg, gater og mellomrommene som én helhet, med blågrønn infrastruktur, takløsninger og overvannshåndtering.",
    offers: [
      "Landskapsanalyser og mulighetsstudier",
      "Utomhusplaner og grøntstruktur",
      "Overvann, terrengforming og vegetasjon",
      "Tilpasning mellom bygg, terreng og brukere",
    ],
    image: {
      src: "/media/89397bb7c4d74fc990c2f2d3ae3df026.jpg",
      alt: "Modell av barnehagens uteareal, adkomst og parkering",
      width: 1424,
      height: 751,
    },
  },
  {
    id: "areal",
    title: "Arealplanlegging",
    lead: "Vi utarbeider arealplaner for offentlige og private oppdragsgivere. Arbeidet omfatter planbeskrivelse, plankart, bestemmelser, medvirkning, ROS-analyse og koordinering med kommunen.",
    offers: [
      "Kommuneplaner",
      "Detaljregulering og områderegulering",
      "Medvirkning og dialog med myndighetene",
      "Planfaglige vurderinger og reguleringsstrategier",
      "Konsekvensvurderinger og ROS-analyse",
      "Helningsanalyser, sol- og skyggeanalyser og 3D-illustrasjoner",
      "Stedsanalyse og byutviklingsstrategier",
      "Mobilitet og plassdannelser",
      "Areal- og funksjonsprogram",
      "Overordnede konseptskisser",
    ],
    image: {
      src: "/media/438b790574ea41d0a12ed0cea6d7562f.png",
      alt: "Plankart med bebyggelse, grønnstruktur og terreng",
      width: 1075,
      height: 805,
    },
  },
]
