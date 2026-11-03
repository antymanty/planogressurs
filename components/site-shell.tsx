"use client"

import { usePathname } from "next/navigation"

import { SiteHeader } from "@/components/site-header"

export function SiteShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const home = pathname === "/"

  return (
    <>
      <SiteHeader />
      <main id="innhold" className={home ? undefined : "pt-16"}>
        {children}
      </main>
    </>
  )
}
