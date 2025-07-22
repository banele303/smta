"use client"

import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Clock, Phone } from "lucide-react"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"

export default function ServiceAreas() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const serviceAreas = [
    {
      area: "Southern Suburbs",
      locations: ["Constant", "Claremont", "Wynberg", "Rondebosch", "Newlands", "Observatory"],
      description: "Comprehensive construction services for Cape Town's prestigious southern suburbs.",
      image: "/placeholder.svg?height=200&width=300",
      responseTime: "30 minutes",
    },
    {
      area: "Northern Suburbs",
      locations: ["Goodwood", "Bellville", "Parow", "Brackenfell", "Durbanville", "Kraaifontein"],
      description: "Professional concrete construction for residential and commercial developments.",
      image: "/placeholder.svg?height=200&width=300",
      responseTime: "45 minutes",
    },
    {
      area: "City Bowl & Atlantic Seaboard",
      locations: ["City Centre", "Woodstock", "Salt River", "Sea Point", "Camps Bay", "Clifton"],
      description: "Specialized urban construction services for high-density developments.",
      image: "/placeholder.svg?height=200&width=300",
      responseTime: "25 minutes",
    },
    {
      area: "Eastern Suburbs",
      locations: ["Blackheath", "Happy Valley", "Elsies River", "Ravensmead", "Bonteheuwel", "Bishop Lavis"],
      description: "Local expertise serving our home base and surrounding eastern communities.",
      image: "/placeholder.svg?height=200&width=300",
      responseTime: "20 minutes",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  }

  return (
    <section className="py-20 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Service Areas Across Cape Town</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We proudly serve Cape Town and surrounding areas with our comprehensive construction services. Our strategic
            location in Blackheath allows us to provide rapid response times across the metropolitan area.
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 gap-8 mb-12"
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {serviceAreas.map((area, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="overflow-hidden hover:shadow-xl transition-all duration-500 h-full group">
                <div className="aspect-video relative overflow-hidden">
                  <Image
                    src={area.image || "/placeholder.svg"}
                    alt={`${area.area} service area`}
                    width={300}
                    height={200}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <h3 className="text-white text-xl font-bold">{area.area}</h3>
                  </div>
                </div>

                <CardContent className="p-6">
                  <p className="text-gray-600 mb-4 leading-relaxed">{area.description}</p>

                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                      <MapPin className="h-4 w-4 mr-2 text-orange-600" />
                      Coverage Areas:
                    </h4>
                    <div className="flex flex-wrap gap-1">
                      {area.locations.map((location, locationIndex) => (
                        <span key={locationIndex} className="bg-orange-100 text-orange-800 text-xs px-2 py-1 rounded">
                          {location}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center text-sm text-gray-600">
                    <Clock className="h-4 w-4 mr-2 text-orange-600" />
                    <span>Average response time: {area.responseTime}</span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="bg-white rounded-lg p-8 shadow-lg"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Emergency Services Available</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Construction emergencies don't wait for business hours. We provide 24/7 emergency response services for
                urgent repairs, structural issues, and safety concerns across all our service areas.
              </p>
              <div className="flex items-center space-x-4">
                <div className="flex items-center text-orange-600">
                  <Phone className="h-5 w-5 mr-2" />
                  <span className="font-semibold">081 218 9299</span>
                </div>
                <span className="text-gray-400">|</span>
                <span className="text-sm text-gray-600">24/7 Emergency Hotline</span>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/placeholder.svg?height=250&width=350"
                alt="Emergency construction services"
                width={350}
                height={250}
                className="rounded-lg shadow-md"
              />
            </div>
          </div>
        </motion.div>

        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Don't See Your Area Listed?</h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            We're always expanding our service areas. Contact us to discuss your project location and we'll work with
            you to provide the construction services you need, wherever you are in the Western Cape.
          </p>
          <a
            href="tel:0812189299"
            className="inline-flex items-center bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors"
          >
            <Phone className="h-5 w-5 mr-2" />
            Call to Confirm Service Area
          </a>
        </motion.div>
      </div>
    </section>
  )
}
