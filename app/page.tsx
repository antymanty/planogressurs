import Image from "next/image"
import Link from "next/link"

import { ProjectCardView } from "@/components/project-card"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { clients, firm, method } from "@/lib/content/firm"
import { getFeaturedProjects, toProjectCards } from "@/lib/content/projects"
import { services } from "@/lib/content/services"

export default function HomePage() {
  const featured = toProjectCards(getFeaturedProjects())

  return (
    <>
      <section className="relative min-h-[88svh] bg-foreground text-white">
        <Image
          src="/media/2fe8cb56f5a946a4bb8311f15ac2433c.jpg"
          alt="Fredheim, Kongsberg kulturskole: eksisterende situasjon og forslag til uteareal"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/35 to-black/20" />
        <div className="relative mx-auto flex min-h-[88svh] max-w-6xl items-end px-5 pt-24 pb-16">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold tracking-[0.18em] uppercase">Kongsberg · siden {firm.founded}</p>
            <h1 className="mt-4 text-5xl leading-[1.05] text-white md:text-7xl">Vi forener bebyggelse og landskap.</h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-white/90">
              Plan og Ressurs er det personlige alternativet for regulering, landskapsarkitektur og eiendomsutvikling.
              Fra idé til vedtak, med kontor på Quben i Kongsberg.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/prosjekter"
                className={cn(buttonVariants(), "bg-white text-foreground hover:bg-white/90")}
              >
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
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold tracking-[0.16em] text-primary uppercase">Kontoret</p>
          <h2 className="mt-3 text-4xl">Byen, byggene og mellomrommene som én helhet.</h2>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
            Vi er et mindre rådgivningskontor som former fremtidens nærmiljø og utvikler varige verdier i fast eiendom.
            Arbeidet spenner fra bolig, fritidsbolig og sentrum til næring, skoler, barnehager, torg og plasser. I over
            18 år har prosjektene satt spor i landskapsarkitektur, urbanisme og stedsutvikling.
          </p>
        </div>
        <ul className="mt-12 grid gap-6 md:grid-cols-3">
          {services.map((service, index) => (
            <li key={service.id} className="border border-border p-6">
              <p className="text-xs font-semibold tracking-[0.16em] text-primary">0{index + 1}</p>
              <h3 className="mt-3 text-2xl">{service.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{service.lead}</p>
              <Link href={`/tjenester#${service.id}`} className="mt-5 inline-block text-sm font-semibold underline-offset-4 hover:underline">
                Les om tjenesten
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="border-y border-border bg-muted/50">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <div className="flex items-end justify-between gap-6">
            <div>
              <p className="text-xs font-semibold tracking-[0.16em] text-primary uppercase">Utvalgte prosjekter</p>
              <h2 className="mt-3 text-4xl">Arbeid som viser bredden.</h2>
            </div>
            <Link href="/prosjekter" className="hidden text-sm font-semibold underline-offset-4 hover:underline sm:inline">
              Hele porteføljen
            </Link>
          </div>
          <ul className="mt-10 grid gap-8 sm:grid-cols-2">
            {featured.map((project) => (
              <li key={project.slug}>
                <ProjectCardView project={project} />
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20">
        <p className="text-xs font-semibold tracking-[0.16em] text-primary uppercase">Slik jobber vi</p>
        <h2 className="mt-3 max-w-2xl text-4xl">En forutsigbar prosess, fra første avklaring til vedtak.</h2>
        <ol className="mt-12 grid gap-8 md:grid-cols-5">
          {method.map((step, index) => (
            <li key={step.title}>
              <p className="text-xs font-semibold tracking-[0.16em] text-primary">0{index + 1}</p>
              <h3 className="mt-3 text-xl">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.text}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="border-y border-border">
        <ul className="mx-auto grid max-w-6xl gap-px bg-border sm:grid-cols-2 lg:grid-cols-4">
          {[
            ["MNLA", "Landskapsarkitekt med master fra NMBU"],
            ["Sentralt godkjent", "Prosjektering og søker, tiltaksklasse 1"],
            [`Siden ${firm.founded}`, "Fra Vidda Ressurs til by- og stedsutvikling"],
            ["Quben", "Coworking i Kongsberg, med nettverk å skalere med"],
          ].map(([title, text]) => (
            <li key={title} className="bg-background px-5 py-8">
              <p className="font-heading text-2xl">{title}</p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16">
        <p className="text-xs font-semibold tracking-[0.16em] text-primary uppercase">Et utvalg kunder</p>
        <ul className="mt-8 flex flex-wrap items-center gap-x-10 gap-y-6">
          {clients.map((client) => (
            <li key={client.name}>
              <Image
                src={client.src}
                alt={client.name}
                width={client.width}
                height={client.height}
                className="h-12 w-auto object-contain"
              />
            </li>
          ))}
        </ul>
      </section>

      <section className="bg-primary text-primary-foreground">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-5 py-16 md:flex-row md:items-center">
          <div>
            <h2 className="text-4xl text-primary-foreground">Har du en tomt, en plan eller et uteareal?</h2>
            <p className="mt-3 max-w-xl text-primary-foreground/85">
              Send en kort beskrivelse, så tar vi en første avklaring av rammer, risiko og muligheter.
            </p>
          </div>
          <Link href="/kontakt" className={buttonVariants({ variant: "secondary" })}>
            Kontakt oss
          </Link>
        </div>
      </section>
    </>
  )
}
