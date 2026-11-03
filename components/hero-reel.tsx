import Image from "next/image"

export const heroFrame = {
  src: "/media/hero-gluggelokka.jpg",
  alt: "Gatemiljø med småhus og gangveier på Gluggeløkka",
  place: "Gluggeløkka · Kongsberg",
  label: "01 — Boliger og landskap",
} as const

export function HeroReel() {
  return (
    <div className="absolute inset-0">
      <Image
        src={heroFrame.src}
        alt={heroFrame.alt}
        fill
        priority
        sizes="100vw"
        quality={100}
        className="hero-drift object-cover"
      />
    </div>
  )
}
