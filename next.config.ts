import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  allowedDevOrigins: ["127.0.0.1"],
  async redirects() {
    return [
      { source: "/about", destination: "/kontakt", permanent: true },
      { source: "/copy-of-kontakt", destination: "/om", permanent: true },
      { source: "/publications", destination: "/tjenester", permanent: true },
      { source: "/inquiry-services-page", destination: "/tjenester", permanent: true },
      { source: "/s-projects-side-by-side", destination: "/prosjekter", permanent: true },
      { source: "/projects-6", destination: "/prosjekter?kategori=offentlig-uterom", permanent: true },
      { source: "/projects-6-1", destination: "/prosjekter?kategori=boliger", permanent: true },
      { source: "/projects-6-2", destination: "/prosjekter?kategori=fritidsboliger", permanent: true },
      { source: "/projects-6-3", destination: "/prosjekter?kategori=naering", permanent: true },
      { source: "/projects-6-4", destination: "/prosjekter?kategori=kombinerte", permanent: true },
      { source: "/projects-6-5", destination: "/prosjekter?kategori=hagedesign", permanent: true },
    ]
  },
}

export default nextConfig
