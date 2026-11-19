import type { Metadata } from "next"
import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"

import "./globals.css"
import { CookieNotice } from "@/components/cookie-notice"
import { SiteFooter } from "@/components/site-footer"
import { SiteShell } from "@/components/site-shell"
import { ThemeProvider } from "@/components/theme-provider"
import { firm } from "@/lib/content/firm"
import { cn } from "@/lib/utils"

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
})

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-display",
})

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

const description =
  "Plan og Ressurs AS er et rådgivningskontor for areal og landskap. Vi arbeider med arealplanlegging, landskapsarkitektur og eiendomsutvikling, fra idé til vedtak."

export const metadata: Metadata = {
  metadataBase: new URL(firm.url),
  title: {
    default: "Plan og Ressurs AS — arealplanlegging og landskapsarkitektur",
    template: `%s · ${firm.name}`,
  },
  description,
  applicationName: firm.name,
  openGraph: {
    type: "website",
    locale: "nb_NO",
    siteName: firm.name,
    title: "Plan og Ressurs AS — arealplanlegging og landskapsarkitektur",
    description,
    images: [
      {
        url: "/media/hero-gluggelokka.jpg",
        width: 2904,
        height: 1440,
        alt: "Gatemiljø med småhus og gangveier i Henrik Ibsens Gate, Kongsberg",
      },
    ],
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: firm.name,
  url: firm.url,
  image: `${firm.url}/media/hero-gluggelokka.jpg`,
  
  email: firm.email,
  telephone: firm.phone,
  address: {
    "@type": "PostalAddress",
    streetAddress: `${firm.street} (${firm.place})`,
    postalCode: firm.postalCode,
    addressLocality: firm.city,
    addressCountry: "NO",
  },
  areaServed: "NO",
  openingHours: "Mo-Fr 08:00-16:00",
  inLanguage: "nb-NO",
  
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="nb"
      data-scroll-behavior="smooth"
      suppressHydrationWarning
      className={cn("antialiased", fontMono.variable, geist.variable, instrumentSerif.variable, "font-sans")}
    >
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <ThemeProvider defaultTheme="light" enableSystem={false}>
          <a
            href="#innhold"
            className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[80] focus:bg-background focus:px-3 focus:py-2"
          >
            Hopp til innhold
          </a>
          <SiteShell>{children}</SiteShell>
          <SiteFooter />
          <CookieNotice />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
