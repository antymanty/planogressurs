import type { MetadataRoute } from "next"

import { firm } from "@/lib/content/firm"
import { projects } from "@/lib/content/projects"

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-11-03")
  const staticRoutes = [
    "",
    "/tjenester",
    "/prosjekter",
    "/om",
    "/kontakt",
    "/personvern",
    "/informasjonskapsler",
    "/vilkar",
  ].map((path) => ({
    url: `${firm.url}${path || "/"}`,
    lastModified,
  }))

  const projectRoutes = projects.map((project) => ({
    url: `${firm.url}/prosjekter/${project.slug}`,
    lastModified,
  }))

  return [...staticRoutes, ...projectRoutes]
}
