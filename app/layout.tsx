import type { Metadata } from "next"
import { Noto_Sans, Playfair_Display, Geist_Mono } from "next/font/google"

import "./globals.css"
import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"
import { ThemeProvider } from "@/components/theme-provider"
import { firm } from "@/lib/content/firm"
import { cn } from "@/lib/utils"

const playfairDisplayHeading = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-heading",
})

const notoSans = Noto_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
})

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

const description =
  "Plan og Ressurs AS er et rådgivningskontor på Quben i Kongsberg. Vi arbeider med arealplanlegging, landskapsarkitektur og eiendomsutvikling, fra idé til vedtak."

export const metadata: Metadata = {
  metadataBase: new URL(firm.url),
  title: {
    default: "Plan og Ressurs — arealplanlegging og landskapsarkitektur",
    template: "%s · Plan og Ressurs",
  },
  description,
  applicationName: firm.shortName,
  openGraph: {
    type: "website",
    locale: "nb_NO",
    siteName: firm.shortName,
    title: "Plan og Ressurs — arealplanlegging og landskapsarkitektur",
    description,
    images: [
      {
        url: "/media/2fe8cb56f5a946a4bb8311f15ac2433c.jpg",
        width: 1262,
        height: 848,
        alt: "Fredheim, Kongsberg kulturskole",
      },
    ],
  },
  icons: {
    icon: firm.logo.src,
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: firm.name,
  url: firm.url,
  image: `${firm.url}${firm.logo.src}`,
  telephone: "+4745205513",
  email: firm.email,
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
      className={cn(
        "antialiased",
        fontMono.variable,
        "font-sans",
        notoSans.variable,
        playfairDisplayHeading.variable
      )}
    >
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <ThemeProvider defaultTheme="light" enableSystem={false}>
          <a
            href="#innhold"
            className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-50 focus:bg-background focus:px-3 focus:py-2"
          >
            Hopp til innhold
          </a>
          <SiteHeader />
          <main id="innhold">{children}</main>
          <SiteFooter />
        </ThemeProvider>
      </body>
    </html>
  )
}
