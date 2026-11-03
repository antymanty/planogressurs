import { cn } from "@/lib/utils"

type Tag = "div" | "section" | "li" | "header" | "p"

export function Reveal({
  children,
  className,
  as: Tag = "div",
}: {
  children: React.ReactNode
  className?: string
  as?: Tag
}) {
  return <Tag className={cn("reveal", className)}>{children}</Tag>
}
