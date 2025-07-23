"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Building, Home, Wrench, HardHat, Layers, Truck, CheckCircle, Star, ArrowRight, Recycle } from "lucide-react"
import Link from "next/link"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"

export default function Services() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const services = [
    {
      icon: Layers,
      title: "Brick Manufacturing",
      description:
        "We produce a wide range of high-quality bricks for various construction applications, including building and paving.",
      features: [
        "Stock Bricks",
        "Quantum Bricks",
        "Paving Bricks (Straight) - 60mm",
        "Paving Bricks (Straight) - 80mm",
        "Paving Bricks (Interlocking) - 60mm",
        "Paving Bricks (Interlocking) - 80mm",
      ],
      image: "/images/brick1.jpeg",
      specialties: ["Quality Materials", "Precision Manufacturing", "Consistent Standards", "Durable Products"],
    },
    {
      icon: Wrench,
      title: "Custom Brick Solutions",
      description:
        "Our experienced team can design and manufacture custom bricks to meet specific project requirements.",
      features: [
        "Custom Colors",
        "Special Textures",
        "Unique Shapes",
        "Specific Dimensions",
        "Custom Strength Ratings",
        "Decorative Elements",
      ],
      image: "/images/bricks4.jpeg",
      specialties: ["Tailored Solutions", "Architectural Support", "Design Consultation", "Prototype Development"],
    },
    {
      icon: Truck,
      title: "Brick Delivery",
      description:
        "We offer reliable and efficient delivery services to ensure that our products reach your site on time.",
      features: [
        "Scheduled Deliveries",
        "Express Delivery Options",
        "Careful Handling",
        "Proper Packaging",
        "Nationwide Shipping",
        "Tracking Services",
      ],
      image: "/truck-delivery.jpeg",
      specialties: ["On-time Delivery", "Careful Transportation", "Flexible Scheduling", "Site Coordination"],
    },
    {
      icon: HardHat,
      title: "Technical Support",
      description:
        "Our team of experts provides technical guidance and support to help you choose the right bricks for your project.",
      features: [
        "Product Selection Guidance",
        "Installation Advice",
        "Technical Specifications",
        "Quality Assurance",
        "Problem Solving",
        "After-sales Support",
      ],
      image: "/images/bricks5.jpeg",
      specialties: ["Expert Consultation", "Technical Documentation", "On-site Support", "Quality Control"],
    },
    {
      icon: Recycle,
      title: "Sustainable Practices",
      description:
        "We're committed to reducing our environmental footprint and promoting sustainable practices in the construction industry.",
      features: [
        "Eco-friendly Materials",
        "Energy-efficient Production",
        "Waste Reduction",
        "Recycling Programs",
        "Water Conservation",
        "Carbon Footprint Reduction",
      ],
      image: "/images/bricks2.jpeg",
      specialties: ["Environmental Responsibility", "Sustainable Sourcing", "Energy Efficiency", "Waste Management"],
    },
  ]

  return (
    <section ref={ref} className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We offer a comprehensive range of brick manufacturing and related services to meet all your construction needs.
          </p>
        </motion.div>

        <div className="space-y-24">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className={`grid md:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "md:flex-row-reverse" : ""}`}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <div className={`${index % 2 === 1 ? "md:order-2" : ""}`}>
                <div className="bg-red-100 text-red-700 p-3 rounded-lg w-fit mb-4">
                  <service.icon className="h-6 w-6" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-xl text-gray-600 mb-6">{service.description}</p>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Features:</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {service.features.map((feature, i) => (
                      <div key={i} className="flex items-start space-x-2">
                        <CheckCircle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {service.specialties.map((specialty, i) => (
                    <span
                      key={i}
                      className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {specialty}
                    </span>
                  ))}
                </div>

                <Button asChild className="bg-red-700 hover:bg-red-800">
                  <Link href="/quote">
                    <span className="flex items-center gap-2">
                      Get a Quote <ArrowRight className="h-4 w-4" />
                    </span>
                  </Link>
                </Button>
              </div>

              <div className={`${index % 2 === 1 ? "md:order-1" : ""}`}>
                <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform hover:scale-105"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
