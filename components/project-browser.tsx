"use client"

import Link from "next/link"
import { useSearchParams } from "next/navigation"
import type { ReactNode } from "react"

import { ProjectCardView } from "@/components/project-card"
import { categories, type CategoryId, type ProjectCard } from "@/lib/content/types"
import { cn } from "@/lib/utils"

export function ProjectBrowser({ projects }: { projects: ProjectCard[] }) {
  const params = useSearchParams()
  const requested = params.get("kategori")
  const active: CategoryId | "alle" = categories.some((item) => item.id === requested)
    ? (requested as CategoryId)
    : "alle"
  const visible = active === "alle" ? projects : projects.filter((project) => project.category === active)

  return (
    <div>
      <div className="flex gap-2 overflow-x-auto pb-2" role="toolbar" aria-label="Filtrer prosjekter">
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
      <ul className="mt-8 grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((project) => (
          <li key={project.slug}>
            <ProjectCardView project={project} />
          </li>
        ))}
      </ul>
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
        "shrink-0 border px-3 py-2 text-xs font-semibold tracking-[0.12em] uppercase",
        active ? "border-primary bg-primary text-primary-foreground" : "border-border hover:bg-muted"
      )}
    >
      {children}
    </Link>
  )
}
