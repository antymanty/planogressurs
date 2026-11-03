import Image from "next/image"
import Link from "next/link"

import { LinkedInIcon } from "@/components/linkedin-icon"
import { firm, nav } from "@/lib/content/firm"

export function SiteFooter() {
  return (
    <footer className="border-t-2 border-lime bg-ink text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <p className="text-2xl tracking-tight text-white">Plan og Ressurs</p>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-white/70">
            Arealplanlegging, landskapsarkitektur og eiendomsutvikling. Det personlige alternativet, med kontor på Quben
            i Kongsberg.
          </p>
          <a
            href={firm.leader.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 text-xs tracking-[0.16em] text-white uppercase hover:text-white"
          >
            <LinkedInIcon />
            LinkedIn
          </a>
        </div>
        <div>
          <p className="text-xs font-semibold tracking-[0.18em] text-white/50 uppercase">Kontakt</p>
          <address className="mt-3 space-y-1 text-sm not-italic leading-relaxed text-white/85">
            <p>
              {firm.street} ({firm.place})
              <br />
              {firm.postalCode} {firm.city}
            </p>
            <p>{firm.hours}</p>
            <p>
              <a className="underline-offset-4 hover:underline" href={firm.phoneHref}>
                {firm.phone}
              </a>
            </p>
            <p>
              <a className="underline-offset-4 hover:underline" href={`mailto:${firm.email}`}>
                {firm.email}
              </a>
            </p>
          </address>
        </div>
        <div>
          <p className="text-xs font-semibold tracking-[0.18em] text-white/50 uppercase">Sider</p>
          <ul className="mt-3 space-y-2 text-sm">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-white/80 hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-white/15">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-5 text-xs text-white/55 sm:flex-row sm:items-center sm:justify-between">
          <p>
            {firm.name} · org.nr. {firm.orgNumber}
          </p>
          <p className="inline-flex items-center gap-3">
            <Image src={firm.approvalMark.src} alt="" width={28} height={28} className="size-7" />
            <span>Sentralt godkjent, tiltaksklasse 1</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
