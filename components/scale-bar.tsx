export function ScaleBar({ className = "" }: { className?: string }) {
  const ticks = Array.from({ length: 29 }, (_, index) => {
    const major = index % 10 === 0
    const mid = index % 5 === 0
    const height = major ? 16 : mid ? 11 : 6
    return { index, height }
  })

  return (
    <svg viewBox="0 0 280 22" className={className} aria-hidden="true">
      <line className="scale-base stroke-lime-on-dark" x1="0" y1="20" x2="280" y2="20" strokeWidth="1.25" />
      {ticks.map((tick) => (
        <line
          key={tick.index}
          className="scale-tick stroke-lime-on-dark"
          x1={tick.index * 10}
          y1={20 - tick.height}
          x2={tick.index * 10}
          y2="20"
          strokeWidth={tick.index % 5 === 0 ? 1.25 : 1}
          style={{ animationDelay: `${0.35 + tick.index * 0.025}s` }}
        />
      ))}
    </svg>
  )
}
