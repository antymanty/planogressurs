"use client"

import Link from "next/link"
import { useEffect, useState } from "react"

import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const STORAGE_KEY = "cookie-notice"

export function CookieNotice() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    try {
      setVisible(window.localStorage.getItem(STORAGE_KEY) !== "dismissed")
    } catch {
      setVisible(true)
    }
  }, [])

  function dismiss() {
    try {
      window.localStorage.setItem(STORAGE_KEY, "dismissed")
    } catch {
      // Ignore storage errors; the notice can be closed for this visit.
    }
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-0 z-[70] flex justify-end p-4 md:p-5">
      <div
        role="region"
        aria-labelledby="cookie-notice-title"
        className="pointer-events-auto w-full max-w-md border border-white/20 bg-ink p-5 text-white shadow-lg"
      >
        <p id="cookie-notice-title" className="text-sm font-medium">
          Informasjonskapsler
        </p>
        <p className="mt-2 text-sm leading-relaxed text-white/80">
          Vi bruker ikke statistikk- eller markedsføringscookies. Nettleseren kan lagre temavalget lokalt. Les mer i
          personverninnstillingene.
        </p>
        <div className="mt-4 flex flex-wrap items-center gap-3">
          <button type="button" className={cn(buttonVariants(), "bg-white text-ink hover:bg-white/90")} onClick={dismiss}>
            Greit
          </button>
          <Link
            href="/informasjonskapsler"
            className="text-xs font-semibold tracking-[0.14em] text-white uppercase underline decoration-lime-on-dark decoration-2 underline-offset-4"
          >
            Les mer
          </Link>
        </div>
      </div>
    </div>
  )
}
