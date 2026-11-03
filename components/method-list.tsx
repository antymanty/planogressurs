import type { ReactNode } from "react"

import { method } from "@/lib/content/firm"
import { cn } from "@/lib/utils"

const marks = [SurveyMark, LayersMark, PlanMark, DialogueMark, DecisionMark]

export function MethodList() {
  return (
    <ol className="relative mt-14 grid gap-10 md:grid-cols-5">
      <span
        aria-hidden
        className="method-line absolute top-6 left-6 hidden h-px bg-lime md:block md:right-[calc(20%-1.5rem)]"
      />
      {method.map((step, index) => {
        const Mark = marks[index]
        return (
          <li key={step.title} className="reveal border-t border-foreground/15 pt-5 md:border-t-0 md:pt-0">
            <div className="relative z-10 flex size-12 items-center justify-center bg-background">
              <Mark />
            </div>
            <p className="mt-4 font-mono text-xs tracking-[0.16em] text-lime">0{index + 1}</p>
            <h3 className="mt-3 text-xl">{step.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.text}</p>
          </li>
        )
      })}
    </ol>
  )
}

function Mark({ className, children }: { className?: string; children: ReactNode }) {
  return (
    <svg viewBox="0 0 64 64" fill="none" className={cn("size-11 text-foreground", className)} aria-hidden="true">
      {children}
    </svg>
  )
}

function stroke() {
  return { stroke: "currentColor", strokeWidth: 1.25 } as const
}

function SurveyMark() {
  return (
    <Mark>
      <circle cx="32" cy="32" r="9" {...stroke()} />
      <path d="M32 16v8M32 40v8M16 32h8M40 32h8" {...stroke()} />
      <path d="M12 12h8M12 12v8M52 12h-8M52 12v8M12 52h8M12 52v-8M52 52h-8M52 52v-8" {...stroke()} />
    </Mark>
  )
}

function LayersMark() {
  return (
    <Mark>
      <path d="M6 24c12-12 40-12 52 2" {...stroke()} />
      <path d="M10 36c10-9 34-9 44 3" {...stroke()} />
      <path d="M16 48c8-7 24-7 34 2" {...stroke()} />
      <rect x="26" y="16" width="14" height="10" {...stroke()} />
    </Mark>
  )
}

function PlanMark() {
  return (
    <Mark>
      <path d="M16 12h26l8 8v32H16z" {...stroke()} />
      <path d="M42 12v8h8" {...stroke()} />
      <path d="M24 30h16M24 38h10" {...stroke()} />
      <path d="M8 52h48" {...stroke()} />
    </Mark>
  )
}

function DialogueMark() {
  return (
    <Mark>
      <rect x="8" y="22" width="16" height="16" {...stroke()} />
      <rect x="40" y="22" width="16" height="16" {...stroke()} />
      <path d="M24 30h12" {...stroke()} />
      <path d="M32 26l4 4-4 4" {...stroke()} />
    </Mark>
  )
}

function DecisionMark() {
  return (
    <Mark>
      <rect x="10" y="14" width="28" height="36" {...stroke()} />
      <path d="M18 32l5 5 11-13" {...stroke()} />
      <path d="M44 32h10M48 26l6 6-6 6" {...stroke()} />
    </Mark>
  )
}
