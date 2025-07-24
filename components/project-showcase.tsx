"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Calendar, MapPin, Users } from "lucide-react"
import Link from "next/link"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"

export default function ProjectShowcase() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const featuredProjects = [
    {
      title: "Luxury Residential Complex",
      location: "Constantia",
      category: "Residential",
      description:
        "Complete concrete construction for a 50-unit luxury residential complex including foundations, driveways, and decorative concrete features.",
      image: "/construction3.jpg",
      year: "2024",
      size: "5,000 m²",
      highlights: ["Decorative Concrete", "Underground Parking", "Landscaping Integration", "Premium Finishes"],
    },
    {
      title: "Commercial Office Building",
      location: "Claremont",
      category: "Commercial",
      description:
        "Multi-story office building with specialized concrete flooring, parking garage, and exterior concrete features.",
      image: "/facebricks.jpg",
      year: "2023",
      size: "8,000 m²",
      highlights: ["High-Rise Construction", "Specialized Flooring", "Parking Structure", "Modern Design"],
    },
    {
      title: "Luxury Pool Construction",
      location: "Camps Bay",
      category: "Residential",
      description:
        "Custom concrete pool construction with specialized finishes, integrated water features, and surrounding deck area.",
      image: "/construction-pool.jpg",
      year: "2023",
      size: "120 m²",
      highlights: ["Custom Design", "Water Features", "Premium Finishes", "Landscaping Integration"],
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeInOut" }, // use a valid string for ease
    },
  }

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore some of our most impressive concrete construction projects that showcase our expertise, innovation,
            and commitment to excellence across residential, commercial, and infrastructure sectors.
          </p>
        </motion.div>

        <motion.div
          className="grid lg:grid-cols-3 gap-8 mb-12"
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {featuredProjects.map((project, index) => (
            <motion.div key={index}>
              <Card className="overflow-hidden hover:shadow-2xl transition-all duration-500 group h-full">
                <div className="aspect-video relative overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={400}
                    height={300}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className="bg-orange-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {project.category}
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-white text-xl font-bold mb-1">{project.title}</h3>
                    <div className="flex items-center text-orange-200 text-sm">
                      <MapPin className="h-4 w-4 mr-1" />
                      {project.location}
                    </div>
                  </div>
                </div>

                <CardContent className="p-6 flex-1 flex flex-col">
                  <p className="text-gray-600 mb-4 leading-relaxed flex-1">{project.description}</p>

                  <div className="space-y-3 mb-4">
                    <div className="flex items-center text-sm text-gray-500">
                      <Calendar className="h-4 w-4 mr-2" />
                      <span>Completed: {project.year}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <Users className="h-4 w-4 mr-2" />
                      <span>Size: {project.size}</span>
                    </div>
                  </div>

                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Project Highlights:</h4>
                    <div className="flex flex-wrap gap-1">
                      {project.highlights.map((highlight, highlightIndex) => (
                        <span key={highlightIndex} className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>

                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button
                      asChild
                      variant="outline"
                      className="w-full group-hover:bg-orange-600 group-hover:text-white group-hover:border-orange-600 transition-all bg-transparent"
                    >
                      <Link href="/projects">
                        View Details <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="text-gray-600 mb-6">
            These projects represent just a fraction of our extensive portfolio. Each project demonstrates our
            commitment to quality, innovation, and client satisfaction.
          </p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button asChild size="lg" className="bg-orange-600 hover:bg-orange-700">
              <Link href="/projects">
                View All Projects <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
