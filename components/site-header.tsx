"use client"

import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { Menu, X } from "lucide-react"

import { firm, nav } from "@/lib/content/firm"
import { cn } from "@/lib/utils"

export function SiteHeader() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 border-b border-border/80 bg-background/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-6 px-5">
        <Link href="/" className="shrink-0 rounded-sm bg-white px-2 py-1" onClick={() => setOpen(false)}>
          <Image
            src={firm.logo.src}
            alt={firm.logo.alt}
            width={firm.logo.width}
            height={firm.logo.height}
            priority
            className="h-9 w-auto"
          />
        </Link>
        <nav aria-label="Hovedmeny" className="hidden items-center gap-7 md:flex">
          {nav.map((item) => {
            const active = pathname === item.href || pathname.startsWith(`${item.href}/`)
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "text-xs font-semibold tracking-[0.16em] uppercase",
                  active ? "text-primary" : "text-foreground/80 hover:text-foreground"
                )}
                aria-current={active ? "page" : undefined}
              >
                {item.label}
              </Link>
            )
          })}
        </nav>
        <button
          type="button"
          className="inline-flex size-10 items-center justify-center border border-border md:hidden"
          aria-expanded={open}
          aria-controls="mobilmeny"
          onClick={() => setOpen((value) => !value)}
        >
          <span className="sr-only">{open ? "Lukk meny" : "Åpne meny"}</span>
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open ? (
        <nav id="mobilmeny" aria-label="Mobilmeny" className="border-t border-border md:hidden">
          <ul className="mx-auto flex max-w-6xl flex-col px-5 py-3">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="block py-3 text-sm font-semibold tracking-[0.14em] uppercase"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
    </header>
  )
}
