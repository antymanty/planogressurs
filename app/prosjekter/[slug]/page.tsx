import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"

import { ProjectCardView } from "@/components/project-card"
import { ProjectGallery } from "@/components/project-lightbox"
import { categoryLabel } from "@/lib/content/types"
import { getProject, getRelatedProjects, projects, toProjectCards } from "@/lib/content/projects"

type Props = {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const project = getProject(slug)
  if (!project) return { title: "Prosjekt" }
  return {
    title: project.title,
    description: project.summary,
    openGraph: {
      title: project.title,
      description: project.summary,
      images: [
        {
          url: project.images[0].src,
          width: project.images[0].width,
          height: project.images[0].height,
          alt: project.images[0].alt,
        },
      ],
    },
  }
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params
  const project = getProject(slug)
  if (!project) notFound()
  const related = toProjectCards(getRelatedProjects(slug))

  return (
    <article>
      <ProjectGallery images={project.images} title={project.title} />
      <header className="mx-auto max-w-6xl px-5 py-16">
        <p className="text-xs font-semibold tracking-[0.16em] text-lime uppercase">
          <Link href={`/prosjekter?kategori=${project.category}`} className="underline decoration-lime decoration-2 underline-offset-4">
            {categoryLabel(project.category)}
          </Link>
        </p>
        <h1 className="mt-3 max-w-4xl text-5xl md:text-6xl">{project.title}</h1>
        <p className="mt-5 max-w-3xl text-lg leading-relaxed text-muted-foreground">{project.summary}</p>
        <dl className="mt-8 grid gap-4 border-y border-foreground/15 py-6 text-sm sm:grid-cols-4">
          <div>
            <dt className="text-xs tracking-[0.14em] text-muted-foreground uppercase">Tiltakshaver</dt>
            <dd className="mt-1 font-medium">{project.client}</dd>
          </div>
          <div>
            <dt className="text-xs tracking-[0.14em] text-muted-foreground uppercase">Sted</dt>
            <dd className="mt-1 font-medium">{project.location}</dd>
          </div>
          <div>
            <dt className="text-xs tracking-[0.14em] text-muted-foreground uppercase">Type</dt>
            <dd className="mt-1 font-medium">{project.type}</dd>
          </div>
          <div>
            <dt className="text-xs tracking-[0.14em] text-muted-foreground uppercase">Ferdigstilt</dt>
            <dd className="mt-1 font-medium">{project.year}</dd>
          </div>
        </dl>
      </header>

      <div className="mx-auto max-w-3xl space-y-4 px-5 pb-14 text-base leading-relaxed">
        {project.body.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
        <p>
          <Link href="/kontakt" className="font-semibold underline decoration-lime decoration-2 underline-offset-4">
            Ta kontakt om et lignende oppdrag
          </Link>
        </p>
      </div>

      {related.length > 0 ? (
        <aside className="border-t border-foreground/15">
          <div className="mx-auto max-w-6xl px-5 py-14">
            <h2 className="text-3xl">Flere i samme kategori</h2>
            <ul className="mt-8 grid gap-8 sm:grid-cols-3">
              {related.map((item) => (
                <li key={item.slug}>
                  <ProjectCardView project={item} />
                </li>
              ))}
            </ul>
          </div>
        </aside>
      ) : null}
    </article>
  )
}
