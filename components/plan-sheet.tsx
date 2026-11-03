"use client"

import { useEffect, useRef } from "react"

const VB_W = 1600
const VB_H = 1000

function wave(y0: number, amp: number, freq: number, phase: number, bend: number) {
  const steps = 72
  let d = ""
  for (let i = 0; i <= steps; i++) {
    const t = i / steps
    const x = -80 + t * 1760
    const y =
      y0 +
      Math.sin(t * Math.PI * freq + phase) * amp +
      Math.sin(t * Math.PI * freq * 0.41 + phase * 1.6) * amp * 0.42 +
      t * bend
    d += `${i === 0 ? "M" : "L"}${x.toFixed(1)} ${y.toFixed(1)}`
  }
  return d
}

function ring(cx: number, cy: number, rx: number, ry: number, rot: number, wobble: number) {
  const steps = 56
  const c = Math.cos(rot)
  const s = Math.sin(rot)
  let d = ""
  for (let i = 0; i <= steps; i++) {
    const a = (i / steps) * Math.PI * 2
    const w = 1 + Math.sin(a * 3 + wobble) * 0.07 + Math.sin(a * 7 + wobble * 0.4) * 0.035
    const lx = Math.cos(a) * rx * w
    const ly = Math.sin(a) * ry * w
    const x = cx + lx * c - ly * s
    const y = cy + lx * s + ly * c
    d += `${i === 0 ? "M" : "L"}${x.toFixed(1)} ${y.toFixed(1)}`
  }
  return `${d}Z`
}

function rng(seed: number) {
  let a = seed >>> 0
  return () => {
    a = (a + 0x6d2b79f5) | 0
    let t = Math.imul(a ^ (a >>> 15), 1 | a)
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}

type Tree = { x: number; y: number; r: number; proposed: boolean }

function grove(cx: number, cy: number, count: number, spread: number, seed: number, proposed: boolean): Tree[] {
  const rand = rng(seed)
  const trees: Tree[] = []
  for (let i = 0; i < count; i++) {
    const ang = rand() * Math.PI * 2
    const dist = Math.pow(rand(), 0.72) * spread
    trees.push({
      x: cx + Math.cos(ang) * dist,
      y: cy + Math.sin(ang) * dist * 0.72,
      r: 7 + rand() * 11,
      proposed,
    })
  }
  return trees
}

const contours = Array.from({ length: 16 }, (_, i) => ({
  d: wave(70 + i * 56, 18 + (i % 4) * 6, 1.4 + (i % 3) * 0.35, i * 0.7, -26 + (i % 5) * 4),
  index: i % 4 === 0,
}))

const knolls = [
  [250, 230, 0.15],
  [1180, 250, 0.4],
  [1320, 690, -0.2],
  [430, 760, 0.55],
].flatMap(([cx, cy, rot]) =>
  [1, 2, 3, 4, 5].map((step) => ring(cx, cy, 28 + step * 22, 16 + step * 13, rot, step))
)

const trees: Tree[] = [
  ...grove(250, 220, 14, 120, 11, false),
  ...grove(430, 300, 8, 70, 19, false),
  ...grove(1180, 240, 9, 80, 23, true),
  ...grove(980, 430, 7, 64, 29, true),
  ...grove(1320, 680, 12, 110, 31, false),
  ...grove(360, 780, 10, 90, 37, false),
  ...grove(760, 640, 6, 48, 41, true),
]

const spots = [
  { x: 180, y: 160, label: "188,40" },
  { x: 520, y: 210, label: "186,10" },
  { x: 860, y: 150, label: "184,75" },
  { x: 1280, y: 190, label: "183,20" },
  { x: 240, y: 480, label: "181,05" },
  { x: 690, y: 360, label: "179,60" },
  { x: 1040, y: 520, label: "177,90" },
  { x: 470, y: 690, label: "176,25" },
  { x: 900, y: 760, label: "174,80" },
  { x: 1240, y: 840, label: "173,15" },
]

const road = "M-40 590 C 220 560 420 640 690 600 C 980 556 1180 500 1660 560"

export function PlanSheet() {
  const shift = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const node = shift.current
    if (!node) return
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return

    let frame = 0
    let tx = 0
    let ty = 0
    let cx = 0
    let cy = 0

    const onMove = (event: PointerEvent) => {
      tx = (event.clientX / window.innerWidth - 0.5) * -28
      ty = (event.clientY / window.innerHeight - 0.5) * -18
    }

    const tick = () => {
      cx += (tx - cx) * 0.055
      cy += (ty - cy) * 0.055
      node.style.transform = `translate3d(${cx.toFixed(2)}px, ${cy.toFixed(2)}px, 0)`
      frame = requestAnimationFrame(tick)
    }

    const onEntry: IntersectionObserverCallback = ([entry]) => {
      cancelAnimationFrame(frame)
      if (!entry?.isIntersecting) return
      frame = requestAnimationFrame(tick)
    }

    const observer = new IntersectionObserver(onEntry)
    observer.observe(node)
    window.addEventListener("pointermove", onMove, { passive: true })

    return () => {
      cancelAnimationFrame(frame)
      observer.disconnect()
      window.removeEventListener("pointermove", onMove)
    }
  }, [])

  return (
    <div className="plan-stage absolute inset-0 bg-black" aria-hidden="true">
      <div className="plan-drift absolute -inset-[14%]">
        <div ref={shift} className="size-full">
          <svg className="plan-sheet size-full" viewBox={`0 0 ${VB_W} ${VB_H}`} preserveAspectRatio="xMidYMid slice">
            <defs>
              <pattern id="plan-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M40 0 H0 V40" fill="none" stroke="white" strokeOpacity="0.045" strokeWidth="0.6" />
              </pattern>
              <pattern id="plan-hatch" width="7" height="7" patternUnits="userSpaceOnUse" patternTransform="rotate(42)">
                <path d="M0 7 L7 0" stroke="white" strokeOpacity="0.45" strokeWidth="0.6" />
              </pattern>
              <pattern id="plan-pave" width="14" height="14" patternUnits="userSpaceOnUse">
                <path d="M14 0 H0 V14" fill="none" stroke="white" strokeOpacity="0.35" strokeWidth="0.45" />
              </pattern>
            </defs>

            <rect width={VB_W} height={VB_H} fill="url(#plan-grid)" />

            {contours.map((line, index) => (
              <path
                key={`c-${index}`}
                d={line.d}
                pathLength={1}
                className={line.index ? "plan-stroke plan-contour plan-contour-index" : "plan-stroke plan-contour"}
                style={{ animationDelay: `${0.15 + index * 0.07}s` }}
              />
            ))}
            {knolls.map((d, index) => (
              <path
                key={`k-${index}`}
                d={d}
                pathLength={1}
                className="plan-stroke plan-contour"
                style={{ animationDelay: `${0.4 + index * 0.04}s` }}
              />
            ))}

            <path d="M-20 -20 L620 1040" className="plan-property" />
            <path d="M1040 -20 L760 1040" className="plan-property" />
            <path d="M80 80 H1520" className="plan-property" />

            <path d={road} className="plan-road" />
            <path d={road} className="plan-road-edge" />
            <path d="M120 430 C 360 470 540 420 760 460 C 980 500 1120 560 1400 520" className="plan-path" pathLength={1} />
            <path d="M640 250 C 700 360 760 420 820 560" className="plan-path" pathLength={1} />
            <path d="M980 300 C 1040 380 1080 460 1120 560" className="plan-path" pathLength={1} />

            <g className="plan-wall" transform="translate(860 250) rotate(-18)">
              <path d="M0 0 H220" />
              {Array.from({ length: 16 }, (_, i) => (
                <path key={i} d={`M${i * 14} 0 L${i * 14 - 7} 9`} />
              ))}
            </g>

            <g className="plan-stairs" transform="translate(1008 318) rotate(62)">
              {Array.from({ length: 8 }, (_, i) => (
                <path key={i} d={`M0 ${i * 6} H22`} />
              ))}
            </g>

            <g className="plan-build" transform="translate(900 150) rotate(-8)">
              <rect width="46" height="210" />
              <path d="M0 70 H46 M0 140 H46 M23 0 V210" />
            </g>
            <g className="plan-build" transform="translate(560 300) rotate(4)">
              <rect width="118" height="72" />
              <path d="M40 0 V72 M78 0 V72 M0 36 H118" />
            </g>
            <g className="plan-build" transform="translate(700 318) rotate(-6)">
              <rect width="92" height="64" />
              <path d="M0 32 H92 M46 0 V64" />
            </g>
            <g className="plan-build" transform="translate(610 400) rotate(8)">
              <rect width="150" height="58" />
              <path d="M50 0 V58 M100 0 V58 M0 29 H150" />
            </g>
            <g className="plan-build" transform="translate(250 560) rotate(-3)">
              <rect width="210" height="48" />
              <path d="M42 0 V48 M84 0 V48 M126 0 V48 M168 0 V48" />
            </g>
            <g className="plan-build" transform="translate(1088 600) rotate(12)">
              <rect width="78" height="54" />
              <path d="M0 27 H78 M39 0 V54" />
            </g>

            <g transform="translate(575 392) rotate(2)">
              <rect width="150" height="96" fill="url(#plan-pave)" className="plan-fade" />
            </g>

            <g className="plan-parking" transform="translate(300 500) rotate(-2)">
              <rect width="150" height="36" />
              {Array.from({ length: 6 }, (_, i) => (
                <path key={i} d={`M${18 + i * 22} 0 V36`} />
              ))}
            </g>

            {trees.map((tree, index) => (
              <g
                key={`t-${index}`}
                className={tree.proposed ? "plan-tree plan-tree-new" : "plan-tree"}
                style={{ animationDelay: `${1.1 + (index % 12) * 0.05}s` }}
              >
                <circle cx={tree.x} cy={tree.y} r={tree.r} />
                <circle cx={tree.x} cy={tree.y} r={tree.r * 0.42} />
                {tree.proposed ? (
                  <path d={`M${tree.x} ${tree.y - tree.r * 0.7} V${tree.y + tree.r * 0.7} M${tree.x - tree.r * 0.7} ${tree.y} H${tree.x + tree.r * 0.7}`} />
                ) : null}
              </g>
            ))}

            {spots.map((spot) => (
              <g key={spot.label} className="plan-spot" transform={`translate(${spot.x} ${spot.y})`}>
                <path d="M0 0 L5.5 -8 L-5.5 -8 Z" />
                <text x="10" y="-2">
                  {spot.label}
                </text>
              </g>
            ))}

            <g className="plan-north" transform="translate(1460 120)">
              <circle r="22" />
              <path d="M0 -14 L5 8 H-5 Z" />
              <text y="-30" textAnchor="middle">
                N
              </text>
            </g>

            <g className="plan-scale" transform="translate(1280 90)">
              <path d="M0 16 H120" />
              <path d="M0 10 V22 M40 12 V22 M80 12 V22 M120 10 V22" />
              <text x="0" y="6">
                0
              </text>
              <text x="112" y="6">
                20 m
              </text>
            </g>
          </svg>
        </div>
      </div>
      <div className="plan-lamp" />
    </div>
  )
}
