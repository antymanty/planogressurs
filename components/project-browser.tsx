"use client"

import Link from "next/link"
import { useSearchParams } from "next/navigation"
import type { ReactNode } from "react"

import { ProjectCardView } from "@/components/project-card"
import { categories, type CategoryId, type ProjectCard } from "@/lib/content/types"
import { cn } from "@/lib/utils"

export function ProjectGrid({ projects }: { projects: ProjectCard[] }) {
  return (
    <ul className="grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
      {projects.map((project, index) => {
        const wide = index % 5 === 0
        return (
          <li key={project.slug} className={wide ? "sm:col-span-2" : undefined}>
            <ProjectCardView project={project} frame={wide ? "wide" : "tile"} priority={index < 2} />
          </li>
        )
      })}
    </ul>
  )
}

export function ProjectBrowser({ projects }: { projects: ProjectCard[] }) {
  const params = useSearchParams()
  const requested = params.get("kategori")
  const active: CategoryId | "alle" = categories.some((item) => item.id === requested)
    ? (requested as CategoryId)
    : "alle"
  const visible = active === "alle" ? projects : projects.filter((project) => project.category === active)

  return (
    <div>
      <div className="flex gap-6 overflow-x-auto border-b border-border" role="toolbar" aria-label="Filtrer prosjekter">
        <FilterLink href="/prosjekter" active={active === "alle"}>
          Alle
        </FilterLink>
        {categories.map((category) => (
          <FilterLink
            key={category.id}
            href={`/prosjekter?kategori=${category.id}`}
            active={active === category.id}
          >
            {category.label}
          </FilterLink>
        ))}
      </div>
      <div className="mt-10">
        <ProjectGrid projects={visible} />
      </div>
    </div>
  )
}

function FilterLink({
  href,
  active,
  children,
}: {
  href: string
  active: boolean
  children: ReactNode
}) {
  return (
    <Link
      href={href}
      scroll={false}
      aria-current={active ? "page" : undefined}
      className={cn(
        "-mb-px shrink-0 border-b-2 py-3 text-xs font-semibold tracking-[0.14em] uppercase",
        active ? "border-lime text-foreground" : "border-transparent text-muted-foreground hover:text-foreground"
      )}
    >
      {children}
    </Link>
  )
}
