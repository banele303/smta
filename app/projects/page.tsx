import type { Metadata } from "next"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, MapPin, Users } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Our Projects - M.P And Concrete Floors | Cape Town Construction Portfolio",
  description:
    "View our portfolio of completed concrete construction projects in Cape Town including residential, commercial, and civil engineering projects.",
  keywords:
    "concrete construction projects Cape Town, construction portfolio, completed projects, residential construction, commercial construction",
}

export default function ProjectsPage() {
  const projects = [
    {
      title: "Luxury Residential Complex - Constantia",
      category: "Residential",
      description:
        "Complete concrete construction for a 50-unit luxury residential complex including foundations, driveways, and decorative concrete features.",
      year: "2024",
      location: "Constantia, Cape Town",
      size: "5,000 m²",
      image: "/construction/construction3.jpg",
    },
    {
      title: "Commercial Office Building - Claremont",
      category: "Commercial",
      description:
        "Multi-story office building with specialized concrete flooring, parking garage, and exterior concrete features.",
      year: "2023",
      location: "Claremont, Cape Town",
      size: "8,000 m²",
      image: "/construction/construction4.jpg",
    },
    {
      title: "Municipal Bridge Project - Wynberg",
      category: "Civil Engineering",
      description:
        "Construction of a new concrete bridge including foundations, structural elements, and road connections.",
      year: "2023",
      location: "Wynberg, Cape Town",
      size: "200m span",
      image: "/construction/construction5.jpg",
    },
    {
      title: "Custom Family Home - Newlands",
      category: "Residential",
      description:
        "Complete custom home construction from foundation to finish, including decorative concrete patios and driveways.",
      year: "2024",
      location: "Newlands, Cape Town",
      size: "450 m²",
      image: "/construction/construction-floor.jpg",
    },
    {
      title: "Industrial Warehouse - Goodwood",
      category: "Industrial",
      description:
        "Large-scale industrial warehouse with specialized concrete flooring designed for heavy machinery and storage.",
      year: "2022",
      location: "Goodwood, Cape Town",
      size: "12,000 m²",
      image: "/construction/construction-hero.jpg",
    },
    {
      title: "Shopping Center Extension - Brackenfell",
      category: "Commercial",
      description:
        "Major extension to existing shopping center including new foundations, parking areas, and decorative concrete work.",
      year: "2023",
      location: "Brackenfell, Cape Town",
      size: "3,500 m²",
      image: "/construction/construction-pool.jpg",
    },
  ]

  const categories = ["All", "Residential", "Commercial", "Industrial", "Civil Engineering"]

  return (
    <main>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 to-orange-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">Our Projects</h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              Explore our portfolio of completed concrete construction projects across Cape Town. From residential homes
              to large-scale commercial developments, see the quality and craftsmanship that sets us apart.
            </p>
          </div>
        </div>
      </section>

      {/* Project Stats */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-orange-600 mb-2">500+</div>
              <div className="text-gray-600">Projects Completed</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange-600 mb-2">25+</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange-600 mb-2">98%</div>
              <div className="text-gray-600">Client Satisfaction</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange-600 mb-2">50,000+</div>
              <div className="text-gray-600">m² Constructed</div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Here are some of our recent projects that showcase our expertise in concrete construction across various
              sectors.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="aspect-video bg-gray-200 relative overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-orange-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {project.category}
                    </span>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{project.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>

                  <div className="space-y-2 text-sm text-gray-500">
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-4 w-4" />
                      <span>Completed: {project.year}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <MapPin className="h-4 w-4" />
                      <span>{project.location}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Users className="h-4 w-4" />
                      <span>Size: {project.size}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Project Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Every successful project follows our proven process that ensures quality, timeliness, and client
              satisfaction from start to finish.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Consultation",
                description: "Initial meeting to understand your needs, site assessment, and project planning.",
              },
              {
                step: "02",
                title: "Design & Quote",
                description: "Detailed project design, material specifications, and comprehensive quote.",
              },
              {
                step: "03",
                title: "Construction",
                description: "Professional execution with regular updates and quality control throughout.",
              },
              {
                step: "04",
                title: "Completion",
                description: "Final inspection, cleanup, and project handover with warranty documentation.",
              },
            ].map((phase, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <div className="bg-orange-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                    {phase.step}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{phase.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{phase.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-orange-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Start Your Next Project?</h2>
          <p className="text-xl text-orange-100 mb-8 max-w-3xl mx-auto">
            Join our growing list of satisfied clients. Contact us today to discuss your concrete construction needs and
            get a free, detailed quote.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-orange-600 hover:bg-gray-100">
              <Link href="/contact">Start Your Project</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-orange-600 bg-transparent"
            >
              <a href="tel:0812189299">Call: 081 218 9299</a>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
