"use client"

import Image from "next/image"
import { useCallback, useEffect, useId, useRef, useState } from "react"
import { ChevronLeft, ChevronRight, X } from "lucide-react"

import type { ProjectImage } from "@/lib/content/types"
import { isDrawing } from "@/lib/media"
import { cn } from "@/lib/utils"

export function ProjectGallery({ images, title }: { images: ProjectImage[]; title: string }) {
  const [open, setOpen] = useState<number | null>(null)
  const closeRef = useRef<HTMLButtonElement>(null)
  const startX = useRef<number | null>(null)
  const titleId = useId()
  const lead = images[0]
  const leadDrawing = lead ? isDrawing(lead.src) : false

  const close = useCallback(() => setOpen(null), [])
  const prev = useCallback(() => {
    setOpen((current) => {
      if (current === null) return current
      return (current - 1 + images.length) % images.length
    })
  }, [images.length])
  const next = useCallback(() => {
    setOpen((current) => {
      if (current === null) return current
      return (current + 1) % images.length
    })
  }, [images.length])

  const isOpen = open !== null

  useEffect(() => {
    if (!isOpen) return
    const previouslyFocused = document.activeElement instanceof HTMLElement ? document.activeElement : null
    closeRef.current?.focus()

    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") close()
      if (event.key === "ArrowLeft") prev()
      if (event.key === "ArrowRight") next()
      if (event.key !== "Tab") return
      const root = document.getElementById("bildegalleri")
      if (!root) return
      const list = Array.from(root.querySelectorAll<HTMLElement>("button"))
      const first = list[0]
      const last = list[list.length - 1]
      if (!first || !last) return
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first.focus()
      }
    }

    document.addEventListener("keydown", onKey)
    const original = document.body.style.overflow
    document.body.style.overflow = "hidden"
    return () => {
      document.removeEventListener("keydown", onKey)
      document.body.style.overflow = original
      previouslyFocused?.focus()
    }
  }, [isOpen, close, prev, next])

  if (!lead) return null
  const current = open === null ? null : images[open]
  const currentDrawing = current ? isDrawing(current.src) : false

  return (
    <div>
      <button
        type="button"
        onClick={() => setOpen(0)}
        className={cn(
          "group relative block w-full cursor-zoom-in overflow-hidden bg-muted text-left",
          leadDrawing ? "min-h-[52svh]" : "h-[78svh]"
        )}
      >
        <span className="sr-only">Åpne bilde av {title}</span>
        {leadDrawing ? (
          <Image
            src={lead.src}
            alt={lead.alt}
            width={lead.width}
            height={lead.height}
            priority
            sizes="100vw"
            className="mx-auto h-auto max-h-[78svh] w-full object-contain"
          />
        ) : (
          <Image
            src={lead.src}
            alt={lead.alt}
            fill
            priority
            sizes="100vw"
            className="object-cover transition duration-700 group-hover:scale-[1.03]"
          />
        )}
        <span className="absolute right-4 bottom-4 bg-ink px-3 py-2 text-[11px] tracking-[0.16em] text-white uppercase">
          Åpne galleri
        </span>
      </button>

      {images.length > 1 ? (
        <ul className="flex gap-2 overflow-x-auto bg-ink p-2" aria-label="Alle bilder">
          {images.map((image, index) => {
            const drawing = isDrawing(image.src)
            return (
              <li key={`${image.src}-${index}`} className="shrink-0">
                <button
                  type="button"
                  onClick={() => setOpen(index)}
                  className="relative block h-20 w-28 cursor-zoom-in bg-background"
                  aria-label={`Åpne bilde ${index + 1} av ${images.length}`}
                >
                  <Image
                    src={image.src}
                    alt=""
                    fill
                    sizes="112px"
                    loading={index === 0 ? "eager" : "lazy"}
                    className={drawing ? "object-contain p-1" : "object-cover"}
                  />
                </button>
              </li>
            )
          })}
        </ul>
      ) : null}

      {current ? (
        <div
          id="bildegalleri"
          role="dialog"
          aria-modal="true"
          aria-labelledby={titleId}
          className="fixed inset-0 z-[80] flex flex-col bg-ink text-white"
        >
          <div className="flex items-center justify-between gap-4 px-4 py-3 sm:px-6">
            <p className="font-mono text-xs tracking-[0.16em]">
              {String((open ?? 0) + 1).padStart(2, "0")} / {String(images.length).padStart(2, "0")}
            </p>
            <button
              ref={closeRef}
              type="button"
              onClick={close}
              className="inline-flex size-10 items-center justify-center border border-white/30"
            >
              <span className="sr-only">Lukk galleri</span>
              <X />
            </button>
          </div>
          <div
            className={cn("relative min-h-0 flex-1", currentDrawing ? "bg-[oklch(0.97_0_0)]" : "bg-black")}
            onPointerDown={(event) => {
              startX.current = event.clientX
            }}
            onPointerUp={(event) => {
              if (startX.current === null) return
              const delta = event.clientX - startX.current
              if (delta > 48) prev()
              if (delta < -48) next()
              startX.current = null
            }}
          >
            <Image
              key={`${current.src}-${open}`}
              src={current.src}
              alt={current.alt}
              fill
              sizes="100vw"
              className="object-contain"
            />
          </div>
          <div className="flex items-center justify-between gap-4 px-4 py-4 sm:px-6">
            <p id={titleId} className="max-w-3xl text-sm text-white/80">
              {current.alt}
            </p>
            <div className="flex shrink-0 gap-2">
              <button
                type="button"
                onClick={prev}
                className="inline-flex size-10 items-center justify-center border border-white/30"
              >
                <span className="sr-only">Forrige bilde</span>
                <ChevronLeft />
              </button>
              <button
                type="button"
                onClick={next}
                className="inline-flex size-10 items-center justify-center border border-white/30"
              >
                <span className="sr-only">Neste bilde</span>
                <ChevronRight />
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  )
}
