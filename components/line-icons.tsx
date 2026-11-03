import type { ServiceId } from "@/lib/content/types"
import { cn } from "@/lib/utils"

export function ServiceMark({ id, className }: { id: ServiceId; className?: string }) {
  const common = cn("size-12 text-foreground", className)
  if (id === "eiendom") return <ParcelIcon className={common} />
  if (id === "landskap") return <SectionIcon className={common} />
  return <ContourIcon className={common} />
}

function ParcelIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" fill="none" className={className} aria-hidden="true">
      <rect x="7" y="9" width="50" height="46" stroke="currentColor" strokeWidth="1.25" />
      <path d="M7 32h50M32 9v46M19.5 32v23M44.5 9v23" stroke="currentColor" strokeWidth="1.25" />
    </svg>
  )
}

function SectionIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" fill="none" className={className} aria-hidden="true">
      <path d="M4 46 16 36l12 6 14-16 18 8" stroke="currentColor" strokeWidth="1.25" />
      <path d="M22 42V24h16v12" stroke="currentColor" strokeWidth="1.25" />
      <path d="M22 24 30 16l8 8" stroke="currentColor" strokeWidth="1.25" />
      <path d="M8 54c8 3 14-3 22 0s16 3 26-4" stroke="currentColor" strokeWidth="1.25" />
    </svg>
  )
}

function ContourIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" fill="none" className={className} aria-hidden="true">
      <path d="M8 28c10-14 34-16 48 0" stroke="currentColor" strokeWidth="1.25" />
      <path d="M12 38c8-10 28-12 40 2" stroke="currentColor" strokeWidth="1.25" />
      <path d="M16 48c7-8 22-9 32 1" stroke="currentColor" strokeWidth="1.25" />
      <rect x="28" y="22" width="12" height="9" stroke="currentColor" strokeWidth="1.25" />
    </svg>
  )
}
