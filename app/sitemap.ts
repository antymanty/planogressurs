import type { MetadataRoute } from "next"

import { firm } from "@/lib/content/firm"
import { projects } from "@/lib/content/projects"

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-11-03")
  const staticRoutes = ["", "/tjenester", "/prosjekter", "/om", "/kontakt"].map((path) => ({
    url: `${firm.url}/demo/terrengstudio${path}`,
    lastModified,
  }))

  const projectRoutes = projects.map((project) => ({
    url: `${firm.url}/demo/terrengstudio/prosjekter/${project.slug}`,
    lastModified,
  }))

  return [...staticRoutes, ...projectRoutes]
}
