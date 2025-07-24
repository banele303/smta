import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import FloatingWhatsApp from "@/components/floating-whatsapp"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL("https://mpconcretefloors.com"),
  title: {
    default: "STMA Technical Development - Premier Brick Manufacturing Services",
    template: "%s | M.P And Concrete Floors",
  },
  description:
    "Professional brick manufacturing and construction materials. Specializing in high-quality bricks for residential and commercial projects with over 10 years of experience.",
  keywords:
    "brick manufacturing, construction materials, building bricks, custom bricks, South Africa, construction services, brick suppliers, building materials, residential construction, commercial construction",
  authors: [{ name: "M.P And Concrete Floors" }],
  creator: "M.P And Concrete Floors",
  publisher: "M.P And Concrete Floors",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_ZA",
    url: "https://mpconcretefloors.com",
    siteName: "M.P And Concrete Floors",
    title: "M.P And Concrete Floors - Premier Concrete Construction Services",
    description:
      "Professional brick manufacturing and construction materials with over 10 years of experience",
  },
  twitter: {
    card: "summary_large_image",
    title: "M.P And Concrete Floors - Premier Concrete Construction Services",
    description: "Professional brick manufacturing and construction materials",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="canonical" href="https://mpconcretefloors.com" />
        <meta name="geo.region" content="ZA-WC" />
        <meta name="geo.placename" content="South Africa" />
        <meta name="geo.position" content="-33.9249;18.4241" />
        <meta name="ICBM" content="-33.9249, 18.4241" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "M.P And Concrete Floors PTY (LTD)",
              description: "Professional brick manufacturing services",
              url: "https://mpconcretefloors.com",
              telephone: "+27812189299",
              email: "mp25concretefloors@gmail.com",
              address: {
                "@type": "PostalAddress",
                streetAddress: "11 Logone Crescent",
                addressLocality: "Happy Valley, Blackheath",
                postalCode: "7580",
                addressRegion: "Western Cape",
                addressCountry: "ZA",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: -33.9249,
                longitude: 18.4241,
              },
              openingHours: ["Mo-Fr 07:00-17:00", "Sa 08:00-14:00"],
              priceRange: "$$",
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.9",
                reviewCount: "247",
              },
            }),
          }}
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <Header />
          {children}
              <FloatingWhatsApp />
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
