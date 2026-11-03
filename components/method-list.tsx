import { method } from "@/lib/content/firm"

export function MethodList() {
  return (
    <ol className="relative mt-12 grid gap-10 md:grid-cols-5">
      <span aria-hidden className="method-line absolute top-1.5 right-0 left-0 hidden h-px bg-lime md:block" />
      {method.map((step, index) => (
        <li key={step.title} className="reveal border-t border-foreground/15 pt-4 md:border-t-0 md:pt-8">
          <p className="font-mono text-xs tracking-[0.16em] text-lime">0{index + 1}</p>
          <h3 className="mt-3 text-xl">{step.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.text}</p>
        </li>
      ))}
    </ol>
  )
}
