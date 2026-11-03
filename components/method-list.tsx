import type { CSSProperties, ReactNode } from "react"

import { method } from "@/lib/content/firm"
import { cn } from "@/lib/utils"

const marks = [SurveyMark, LayersMark, PlanMark, DialogueMark, DecisionMark]

export function MethodList({ tone = "light" }: { tone?: "light" | "dark" }) {
  const dark = tone === "dark"

  return (
    <ol className="relative mt-14 grid gap-10 md:grid-cols-5">
      <span
        aria-hidden
        className={cn(
          "method-line absolute top-6 left-6 hidden h-px overflow-hidden md:block md:right-[calc(20%-1.5rem)]",
          dark ? "bg-white/35" : "bg-lime"
        )}
      >
        <span className="method-comet block h-full w-1/4 bg-gradient-to-r from-transparent via-lime-on-dark to-transparent" />
      </span>
      {method.map((step, index) => {
        const Mark = marks[index]
        return (
          <li
            key={step.title}
            className={cn("reveal border-t pt-5 md:border-t-0 md:pt-0", dark ? "border-white/15" : "border-foreground/15")}
          >
            <div className={cn("relative z-10 flex size-12 items-center justify-center", dark ? "bg-ink" : "bg-background")}>
              <Mark delay={`${index * 0.28}s`} className={dark ? "text-white" : "text-foreground"} />
            </div>
            <p className={cn("mt-4 font-mono text-xs tracking-[0.16em]", dark ? "text-lime-on-dark" : "text-lime")}>
              0{index + 1}
            </p>
            <h3 className="mt-3 text-xl">{step.title}</h3>
            <p className={cn("mt-2 text-sm leading-relaxed", dark ? "text-white/75" : "text-muted-foreground")}>
              {step.text}
            </p>
          </li>
        )
      })}
    </ol>
  )
}

function Mark({
  className,
  children,
  delay,
}: {
  className?: string
  children: ReactNode
  delay: string
}) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      className={cn("size-11", className)}
      style={{ "--method-delay": delay } as CSSProperties}
      aria-hidden="true"
    >
      {children}
    </svg>
  )
}

function stroke(flow = false) {
  return {
    stroke: "currentColor",
    strokeWidth: 1.25,
    pathLength: 1,
    className: flow ? "method-flow text-lime-on-dark" : "method-stroke",
  } as const
}

function SurveyMark({ delay, className }: { delay: string; className?: string }) {
  return (
    <Mark delay={delay} className={className}>
      <circle cx="32" cy="32" r="9" {...stroke(true)} />
      <path d="M32 16v8M32 40v8M16 32h8M40 32h8" {...stroke()} />
      <path d="M12 12h8M12 12v8M52 12h-8M52 12v8M12 52h8M12 52v-8M52 52h-8M52 52v-8" {...stroke()} />
    </Mark>
  )
}

function LayersMark({ delay, className }: { delay: string; className?: string }) {
  return (
    <Mark delay={delay} className={className}>
      <path d="M6 24c12-12 40-12 52 2" {...stroke(true)} />
      <path d="M10 36c10-9 34-9 44 3" {...stroke()} />
      <path d="M16 48c8-7 24-7 34 2" {...stroke()} />
      <rect x="26" y="16" width="14" height="10" {...stroke()} />
    </Mark>
  )
}

function PlanMark({ delay, className }: { delay: string; className?: string }) {
  return (
    <Mark delay={delay} className={className}>
      <path d="M16 12h26l8 8v32H16z" {...stroke()} />
      <path d="M42 12v8h8" {...stroke()} />
      <path d="M24 30h16M24 38h10" {...stroke()} />
      <path d="M8 52h48" {...stroke(true)} />
    </Mark>
  )
}

function DialogueMark({ delay, className }: { delay: string; className?: string }) {
  return (
    <Mark delay={delay} className={className}>
      <rect x="8" y="22" width="16" height="16" {...stroke()} />
      <rect x="40" y="22" width="16" height="16" {...stroke()} />
      <path d="M24 30h12" {...stroke(true)} />
      <path d="M32 26l4 4-4 4" {...stroke()} />
    </Mark>
  )
}

function DecisionMark({ delay, className }: { delay: string; className?: string }) {
  return (
    <Mark delay={delay} className={className}>
      <rect x="10" y="14" width="28" height="36" {...stroke()} />
      <path d="M18 32l5 5 11-13" {...stroke()} />
      <path d="M44 32h10" {...stroke(true)} />
      <path d="M48 26l6 6-6 6" {...stroke()} />
    </Mark>
  )
}
