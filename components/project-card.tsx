import Image from "next/image"
import Link from "next/link"

import { categoryLabel, type ProjectCard } from "@/lib/content/types"

export function ProjectCardView({ project }: { project: ProjectCard }) {
  return (
    <Link href={`/prosjekter/${project.slug}`} className="group block">
      <div className="relative aspect-[4/3] overflow-hidden bg-muted">
        <Image
          src={project.image.src}
          alt={project.image.alt}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition duration-500 group-hover:scale-[1.03]"
        />
      </div>
      <div className="mt-3 flex items-baseline justify-between gap-3">
        <h3 className="text-xl leading-tight group-hover:text-primary">{project.title}</h3>
        <span className="shrink-0 text-xs tracking-wide text-muted-foreground">{project.year}</span>
      </div>
      <p className="mt-1 text-sm text-muted-foreground">
        {categoryLabel(project.category)} · {project.location}
      </p>
    </Link>
  )
}
