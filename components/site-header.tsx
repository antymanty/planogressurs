"use client"

import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import { Menu, X } from "lucide-react"

import { firm, nav } from "@/lib/content/firm"
import { cn } from "@/lib/utils"

export function SiteHeader() {
  const pathname = usePathname()
  const home = pathname === "/"
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const overlay = home && !scrolled && !open

  useEffect(() => {
    if (!home) return

    function onScroll() {
      setScrolled(window.scrollY > 12)
    }

    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [home])

  useEffect(() => {
    if (!open) return
    const original = document.body.style.overflow
    document.body.style.overflow = "hidden"
    return () => {
      document.body.style.overflow = original
    }
  }, [open])

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
        overlay
          ? "border-b border-transparent bg-transparent text-white"
          : "border-b border-white/15 bg-black text-white"
      )}
    >
      <div className="relative z-50 mx-auto flex h-16 max-w-6xl items-center justify-between gap-6 px-5">
        <Link href="/" className="shrink-0" onClick={() => setOpen(false)}>
          <Image
            src={firm.logo.src}
            alt={firm.logo.alt}
            width={firm.logo.width}
            height={firm.logo.height}
            priority
            className="h-9 w-auto brightness-0 invert"
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
                  "text-xs font-semibold tracking-[0.18em] text-white/80 uppercase hover:text-white",
                  active && "text-white underline decoration-lime-on-dark decoration-2 underline-offset-8"
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
          className={cn(
            "inline-flex size-10 items-center justify-center border border-white/40 text-white md:hidden"
          )}
          aria-expanded={open}
          aria-controls="mobilmeny"
          onClick={() => setOpen((value) => !value)}
        >
          <span className="sr-only">{open ? "Lukk meny" : "Åpne meny"}</span>
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open ? (
        <nav
          id="mobilmeny"
          aria-label="Mobilmeny"
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-40 flex flex-col bg-ink text-white md:hidden"
        >
          <div className="h-16 shrink-0" />
          <ul className="flex flex-1 flex-col justify-center gap-2 px-6">
            {nav.map((item, index) => {
              const active = pathname === item.href || pathname.startsWith(`${item.href}/`)
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={cn(
                      "flex items-baseline gap-4 py-2 text-4xl tracking-tight",
                      active ? "text-white" : "text-white/70"
                    )}
                    onClick={() => setOpen(false)}
                  >
                    <span className="font-mono text-xs tracking-[0.16em] text-lime-on-dark">0{index + 1}</span>
                    {item.label}
                  </Link>
                </li>
              )
            })}
          </ul>
          <p className="flex items-center justify-between gap-4 px-6 py-8 text-xs tracking-[0.18em] text-white/55 uppercase">
            <span>Kongsberg · siden {firm.founded}</span>
            <a
              href={firm.leader.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/80 hover:text-white"
            >
              LinkedIn
            </a>
          </p>
        </nav>
      ) : null}
    </header>
  )
}
