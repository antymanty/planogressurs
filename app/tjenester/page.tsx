import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"

import { ServiceMark } from "@/components/line-icons"
import { ProjectCardView } from "@/components/project-card"
import { Reveal } from "@/components/reveal"
import { getProjectsByService, toProjectCards } from "@/lib/content/projects"
import { services } from "@/lib/content/services"
import { isDrawing } from "@/lib/media"
import { cn } from "@/lib/utils"

export const metadata: Metadata = {
  title: "Tjenester",
  description:
    "Eiendomsutvikling, landskapsarkitektur og arealplanlegging for utbyggere, entreprenører, kommuner og private.",
}

export default function ServicesPage() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-16">
      <Reveal>
        <p className="text-xs font-semibold tracking-[0.16em] text-lime uppercase">Tjenester</p>
        <h1 className="mt-3 max-w-3xl text-5xl md:text-6xl">Fra tomt og konsept til regulert og prosjektert anlegg.</h1>
        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-muted-foreground">
          Plan og Ressurs tilbyr tjenester innen arealplanlegging, landskapsarkitektur og eiendomsutvikling. Det gjelder
          detaljreguleringsplaner, urbanisme og stedsutvikling, fra idé til ferdig produkt. Kundene er i hovedsak
          profesjonelle aktører innen eiendom, bygg og anlegg, ved siden av private og kommuner.
        </p>
      </Reveal>

      <div className="mt-16 space-y-20">
        {services.map((service, index) => {
          const related = toProjectCards(getProjectsByService(service.id)).slice(0, 3)
          const drawing = isDrawing(service.image.src)
          return (
            <section key={service.id} id={service.id} className="scroll-mt-24 border-t border-foreground/15 pt-12">
              <div className="grid items-start gap-8 lg:grid-cols-[1.1fr_0.9fr]">
                <div>
                  <div className="flex items-center justify-between gap-4">
                    <p className="font-mono text-xs tracking-[0.16em] text-lime">0{index + 1}</p>
                    <ServiceMark id={service.id} />
                  </div>
                  <h2 className="mt-4 text-4xl">{service.title}</h2>
                  <p className="mt-4 text-base leading-relaxed text-muted-foreground">{service.lead}</p>
                  <ul className="mt-6 text-sm">
                    {service.offers.map((offer) => (
                      <li key={offer} className="border-b border-foreground/15 py-2">
                        {offer}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={cn("relative bg-muted", drawing ? "aspect-[4/3]" : "aspect-[16/10]")}>
                  <div className={cn("absolute", drawing ? "inset-4" : "inset-0")}>
                    <Image
                      src={service.image.src}
                      alt={service.image.alt}
                      fill
                      sizes="(min-width: 1024px) 40vw, 100vw"
                      className={drawing ? "object-contain" : "object-cover"}
                    />
                  </div>
                </div>
              </div>
              <ul className="mt-8 grid gap-6 sm:grid-cols-3">
                {related.map((project) => (
                  <li key={project.slug}>
                    <ProjectCardView project={project} />
                  </li>
                ))}
              </ul>
            </section>
          )
        })}
      </div>

      <p className="mt-16 text-sm text-muted-foreground">
        Større og tverrfaglige oppdrag løses sammen med samarbeidspartnere og underleverandører i nettverket på Quben.{" "}
        <Link href="/kontakt" className="font-semibold text-foreground underline decoration-lime decoration-2 underline-offset-4">
          Ta kontakt
        </Link>{" "}
        for en første avklaring.
      </p>
    </div>
  )
}
