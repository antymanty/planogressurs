import Image from "next/image"

export const heroFrame = {
  src: "/media/fb1209cf242443d0b9395c588f7cce56.jpg",
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
        className="hero-drift object-cover"
      />
    </div>
  )
}
