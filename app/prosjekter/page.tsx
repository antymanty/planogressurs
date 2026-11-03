import type { Metadata } from "next"
import { Suspense } from "react"

import { ProjectBrowser } from "@/components/project-browser"
import { ProjectCardView } from "@/components/project-card"
import { toProjectCards } from "@/lib/content/projects"

export const metadata: Metadata = {
  title: "Prosjekter",
  description:
    "Utvalg av reguleringsplaner, uterom, boliger, fritidsbebyggelse, næring og hagedesign fra Plan og Ressurs.",
}

export default function ProjectsPage() {
  const cards = toProjectCards()

  return (
    <div className="mx-auto max-w-6xl px-5 py-16">
      <p className="text-xs font-semibold tracking-[0.16em] text-primary uppercase">Prosjekter</p>
      <h1 className="mt-3 max-w-3xl text-5xl">En portefølje med ulik skala og kompleksitet.</h1>
      <p className="mt-6 max-w-3xl text-lg leading-relaxed text-muted-foreground">
        Arbeidet spenner fra offentlige uterom og boligregulering til fritidsbebyggelse, masseuttak og hager. Filtrer
        på kategori, eller åpne et prosjekt for tiltakshaver, sted og hva oppdraget bestod av.
      </p>
      <div className="mt-10">
        <Suspense fallback={<ProjectFallback cards={cards} />}>
          <ProjectBrowser projects={cards} />
        </Suspense>
      </div>
    </div>
  )
}

function ProjectFallback({ cards }: { cards: ReturnType<typeof toProjectCards> }) {
  return (
    <ul className="grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
      {cards.map((project) => (
        <li key={project.slug}>
          <ProjectCardView project={project} />
        </li>
      ))}
    </ul>
  )
}
