import type { Metadata } from "next"
import Hero from "@/components/hero"
import Services from "@/components/services"
import About from "@/components/about"
import WhyChooseUs from "@/components/why-choose-us"
import Testimonials from "@/components/testimonials"
import ContactCTA from "@/components/contact-cta"
import FAQ from "@/components/faq"
import ProjectShowcase from "@/components/project-showcase"
import ServiceAreas from "@/components/service-areas"

export const metadata: Metadata = {
  title: "STMA Technical Development - Premier Brick Manufacturing in South Africa",
  description:
    "Leading manufacturer of high-quality bricks for construction projects. Specializing in custom brick solutions, reliable delivery, and expert technical support. Contact us at 067 667 5969 for inquiries.",
  keywords:
    "brick manufacturing, construction materials, building bricks, paving bricks, custom brick solutions, brick delivery, technical support, sustainable building materials, construction South Africa, brick suppliers, high-quality bricks, brick manufacturing company",
  openGraph: {
    title: "STMA Technical Development - Quality Brick Manufacturing",
    description:
      "Building a better future one brick at a time. Your trusted partner for high-quality brick manufacturing and construction solutions in South Africa.",
    url: "https://stma.co.za",
    siteName: "STMA Technical Development",
    locale: "en_ZA",
    type: "website",
  },
}

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Services />
      {/* <ProjectShowcase /> */}
      <WhyChooseUs />
      <ServiceAreas />
      <Testimonials />
      <FAQ />
      <ContactCTA />
    </main>
  )
}
