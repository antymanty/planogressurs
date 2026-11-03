import Image from "next/image"
import Link from "next/link"

import { categoryLabel, type ProjectCard } from "@/lib/content/types"
import { isDrawing } from "@/lib/media"
import { cn } from "@/lib/utils"

export function ProjectCardView({
  project,
  frame = "tile",
  priority = false,
}: {
  project: ProjectCard
  frame?: "tile" | "wide" | "bleed"
  priority?: boolean
}) {
  const drawing = isDrawing(project.image.src)
  const bleed = frame === "bleed" && !drawing

  return (
    <Link href={`/prosjekter/${project.slug}`} className="group block">
      <div
        className={cn(
          "relative overflow-hidden bg-muted",
          bleed ? "h-[72svh] sm:h-[78svh]" : frame === "wide" || drawing ? "aspect-[16/9]" : "aspect-[5/4]"
        )}
      >
        <div className={cn("absolute", drawing ? "inset-6" : "inset-0")}>
          <Image
            src={project.image.src}
            alt={project.image.alt}
            fill
            priority={priority}
            quality={bleed ? 100 : 75}
            sizes={bleed || frame === "wide" ? "100vw" : "(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"}
            className={cn(
              "transition duration-700",
              drawing ? "object-contain" : "object-cover group-hover:scale-[1.04]"
            )}
          />
        </div>
        {bleed ? (
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/15 to-black/25">
            <div className="absolute inset-x-0 bottom-0 p-6 text-white md:p-10">
              <p className="text-xs tracking-[0.18em] uppercase">
                {categoryLabel(project.category)} · {project.location}
              </p>
              <h3 className="mt-2 max-w-3xl text-4xl text-white md:text-5xl">{project.title}</h3>
              <p className="mt-3 text-sm text-white/80">{project.year}</p>
            </div>
          </div>
        ) : (
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 bottom-0 translate-y-full bg-foreground px-4 py-3 text-background transition duration-300 group-hover:translate-y-0 group-focus-visible:translate-y-0"
          >
            <p className="text-[11px] tracking-[0.16em] uppercase">
              {categoryLabel(project.category)} · {project.location}
            </p>
            <p className="mt-1 text-xs">{project.year}</p>
          </div>
        )}
      </div>
      {bleed ? null : (
        <div className="mt-3 flex items-baseline justify-between gap-3">
          <h3 className="text-xl leading-tight">{project.title}</h3>
          <span className="shrink-0 font-mono text-xs text-muted-foreground">{project.year}</span>
        </div>
      )}
      {bleed ? null : (
        <p className="mt-1 text-sm text-muted-foreground">
          {categoryLabel(project.category)} · {project.location}
        </p>
      )}
    </Link>
  )
}
