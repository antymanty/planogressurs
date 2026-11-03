import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"

import { ProjectCardView } from "@/components/project-card"
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
      <header className="mx-auto max-w-6xl px-5 py-16">
        <p className="text-xs font-semibold tracking-[0.16em] text-primary uppercase">
          <Link href={`/prosjekter?kategori=${project.category}`} className="hover:underline">
            {categoryLabel(project.category)}
          </Link>
        </p>
        <h1 className="mt-3 max-w-4xl text-5xl">{project.title}</h1>
        <p className="mt-5 max-w-3xl text-lg leading-relaxed text-muted-foreground">{project.summary}</p>
        <dl className="mt-8 grid gap-4 border-y border-border py-6 text-sm sm:grid-cols-4">
          <div>
            <dt className="text-muted-foreground">Tiltakshaver</dt>
            <dd className="mt-1 font-medium">{project.client}</dd>
          </div>
          <div>
            <dt className="text-muted-foreground">Sted</dt>
            <dd className="mt-1 font-medium">{project.location}</dd>
          </div>
          <div>
            <dt className="text-muted-foreground">Type</dt>
            <dd className="mt-1 font-medium">{project.type}</dd>
          </div>
          <div>
            <dt className="text-muted-foreground">Ferdigstilt</dt>
            <dd className="mt-1 font-medium">{project.year}</dd>
          </div>
        </dl>
      </header>

      <div className="mx-auto grid max-w-6xl gap-4 px-5">
        {project.images.map((image, index) => (
          <figure key={image.src} className={index === 0 ? "bg-muted" : "bg-muted md:max-w-[85%]"}>
            <Image
              src={image.src}
              alt={image.alt}
              width={image.width}
              height={image.height}
              priority={index === 0}
              className="h-auto w-full"
              sizes="(min-width: 1152px) 1100px, 100vw"
            />
          </figure>
        ))}
      </div>

      <div className="mx-auto max-w-3xl space-y-4 px-5 py-14 text-base leading-relaxed">
        {project.body.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
        <p>
          <Link href="/kontakt" className="font-semibold underline-offset-4 hover:underline">
            Ta kontakt om et lignende oppdrag
          </Link>
        </p>
      </div>

      {related.length > 0 ? (
        <aside className="border-t border-border">
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
