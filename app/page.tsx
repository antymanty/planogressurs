import Image from "next/image"
import Link from "next/link"

import { heroFrame, HeroReel } from "@/components/hero-reel"
import { MethodList } from "@/components/method-list"
import { ProjectCardView } from "@/components/project-card"
import { Reveal } from "@/components/reveal"
import { ScaleBar } from "@/components/scale-bar"
import { ServiceMark } from "@/components/line-icons"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { clients, firm } from "@/lib/content/firm"
import { getFeaturedProjects, toProjectCards } from "@/lib/content/projects"
import { services } from "@/lib/content/services"

const proof = [
  ["MNLA", "Landskapsarkitekt med master fra NMBU"],
  ["Sentralt godkjent", "Prosjektering og søker, tiltaksklasse 1"],
  [`Siden ${firm.founded}`, "Fra Vidda Ressurs til by- og stedsutvikling"],
  ["Quben", "Coworking i Kongsberg, med nettverk å skalere med"],
] as const

export default function HomePage() {
  const featured = toProjectCards(getFeaturedProjects())
  const [lead, ...rest] = featured

  return (
    <>
      <section className="relative min-h-[100svh] overflow-hidden bg-black text-white">
        <HeroReel />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-black/40" />
        <div className="relative flex min-h-[100svh] flex-col justify-end">
          <div className="mx-auto w-full max-w-6xl px-5 pt-28 pb-8">
            <p className="text-xs font-semibold tracking-[0.18em] uppercase">Kongsberg · siden {firm.founded}</p>
            <ScaleBar className="mt-4 h-7 w-56" />
            <h1 className="mt-5 overflow-hidden font-display text-[clamp(3.2rem,8vw,6.75rem)] leading-[0.92] text-white">
              <span className="hero-line block">Vi forener bebyggelse og landskap.</span>
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-white/85">
              Plan og Ressurs er det personlige alternativet for regulering, landskapsarkitektur og eiendomsutvikling.
              Fra idé til vedtak, med kontor på Quben i Kongsberg.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/prosjekter" className={cn(buttonVariants(), "bg-white text-ink hover:bg-white/90")}>
                Se prosjekter
              </Link>
              <Link
                href="/kontakt"
                className={cn(
                  buttonVariants({ variant: "outline" }),
                  "border-white/70 bg-transparent text-white hover:bg-white/10 hover:text-white"
                )}
              >
                Ta kontakt
              </Link>
            </div>
          </div>
          <div className="border-t border-white/25">
            <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3 text-[11px] tracking-[0.16em] text-white/75 uppercase">
              <span>{heroFrame.place}</span>
              <span>{heroFrame.label}</span>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20">
        <Reveal className="max-w-3xl">
          <p className="text-xs font-semibold tracking-[0.16em] text-lime uppercase">Kontoret</p>
          <h2 className="mt-3 text-4xl md:text-5xl">Byen, byggene og mellomrommene som én helhet.</h2>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
            Vi er et mindre rådgivningskontor som former fremtidens nærmiljø og utvikler varige verdier i fast eiendom.
            Arbeidet spenner fra bolig, fritidsbolig og sentrum til næring, skoler, barnehager, torg og plasser. I over
            18 år har prosjektene satt spor i landskapsarkitektur, urbanisme og stedsutvikling.
          </p>
        </Reveal>
        <ul className="mt-14 grid gap-px bg-border md:grid-cols-3">
          {services.map((service, index) => (
            <li key={service.id} className="reveal bg-background p-6">
              <div className="flex items-start justify-between gap-4">
                <p className="font-mono text-xs tracking-[0.16em] text-lime">0{index + 1}</p>
                <ServiceMark id={service.id} />
              </div>
              <h3 className="mt-6 text-2xl">{service.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{service.lead}</p>
              <Link
                href={`/tjenester#${service.id}`}
                className="mt-6 inline-block text-xs font-semibold tracking-[0.14em] uppercase underline decoration-lime decoration-2 underline-offset-4"
              >
                Les om tjenesten
              </Link>
            </li>
          ))}
        </ul>
      </section>

      {lead ? (
        <section className="border-y border-border">
          <div className="mx-auto flex max-w-6xl items-end justify-between gap-6 px-5 py-10">
            <div>
              <p className="text-xs font-semibold tracking-[0.16em] text-lime uppercase">Utvalgte prosjekter</p>
              <h2 className="mt-3 text-4xl">Arbeid som viser bredden.</h2>
            </div>
            <Link
              href="/prosjekter"
              className="hidden text-xs font-semibold tracking-[0.14em] uppercase underline decoration-lime decoration-2 underline-offset-4 sm:inline"
            >
              Hele porteføljen
            </Link>
          </div>
          <ProjectCardView project={lead} frame="bleed" priority />
          <ul className="mx-auto mt-8 grid max-w-6xl gap-8 px-5 pb-16 sm:grid-cols-3">
            {rest.map((project) => (
              <li key={project.slug}>
                <ProjectCardView project={project} />
              </li>
            ))}
          </ul>
          <div className="mx-auto max-w-6xl px-5 pb-10 sm:hidden">
            <Link
              href="/prosjekter"
              className="text-xs font-semibold tracking-[0.14em] uppercase underline decoration-lime decoration-2 underline-offset-4"
            >
              Hele porteføljen
            </Link>
          </div>
        </section>
      ) : null}

      <section className="mx-auto max-w-6xl px-5 py-20">
        <Reveal>
          <p className="text-xs font-semibold tracking-[0.16em] text-lime uppercase">Slik jobber vi</p>
          <h2 className="mt-3 max-w-2xl text-4xl">En forutsigbar prosess, fra første avklaring til vedtak.</h2>
        </Reveal>
        <MethodList />
      </section>

      <section className="border-y border-foreground">
        <ul className="mx-auto grid max-w-6xl sm:grid-cols-2 lg:grid-cols-4">
          {proof.map(([title, text], index) => (
            <li
              key={title}
              className="reveal border-b border-foreground/15 px-5 py-8 sm:[&:nth-child(odd)]:border-r lg:border-r lg:border-b-0 lg:last:border-r-0"
            >
              <p className="font-mono text-xs tracking-[0.16em] text-lime">0{index + 1}</p>
              <p className="mt-4 text-2xl tracking-tight">{title}</p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="bg-[oklch(0.985_0_0)] py-16 text-[oklch(0.145_0_0)]">
        <div className="mx-auto max-w-6xl px-5">
          <p className="text-xs font-semibold tracking-[0.16em] text-lime uppercase">Et utvalg kunder</p>
        </div>
        <ul className="mx-auto mt-8 flex max-w-6xl flex-wrap items-center justify-center gap-x-12 gap-y-8 px-5">
          {clients.map((client) => (
            <li key={client.name}>
              <Image
                src={client.src}
                alt={client.name}
                width={client.width}
                height={client.height}
                quality={100}
                className="h-14 w-auto object-contain"
              />
            </li>
          ))}
        </ul>
      </section>

      <section className="bg-ink text-white">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-5 py-16 md:flex-row md:items-center">
          <div>
            <h2 className="text-4xl text-white">Har du en tomt, en plan eller et uteareal?</h2>
            <p className="mt-3 max-w-xl text-white/75">
              Send en kort beskrivelse, så tar vi en første avklaring av rammer, risiko og muligheter.
            </p>
          </div>
          <Link href="/kontakt" className={cn(buttonVariants(), "bg-white text-ink hover:bg-white/90")}>
            Kontakt oss
          </Link>
        </div>
      </section>
    </>
  )
}
