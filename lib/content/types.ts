export const categories = [
  { id: "offentlig-uterom", label: "Offentlig uterom" },
  { id: "boliger", label: "Boliger" },
  { id: "fritidsboliger", label: "Fritidsboliger" },
  { id: "naering", label: "Næring og masseuttak" },
  { id: "kombinerte", label: "Kombinerte prosjekter" },
  { id: "hagedesign", label: "Hagedesign" },
] as const

export type CategoryId = (typeof categories)[number]["id"]

export function categoryLabel(id: CategoryId) {
  return categories.find((category) => category.id === id)?.label ?? id
}

export const serviceIds = ["eiendom", "landskap", "areal"] as const

export type ServiceId = (typeof serviceIds)[number]

export type ProjectImage = {
  src: string
  alt: string
  width: number
  height: number
}

export type Project = {
  slug: string
  title: string
  category: CategoryId
  client: string
  location: string
  type: string
  year: string
  summary: string
  body: string[]
  images: ProjectImage[]
  services: ServiceId[]
  featured?: boolean
}

export type ProjectCard = {
  slug: string
  title: string
  category: CategoryId
  location: string
  type: string
  year: string
  image: ProjectImage
}
