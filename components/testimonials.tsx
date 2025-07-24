"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote, ArrowLeft, ArrowRight } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const testimonials = [
    {
      name: "Thabo Mokoena",
      location: "Thohoyandou, Limpopo",
      rating: 5,
      text: "The quality of bricks from STMA Technical Development is outstanding! We used them for our housing project and the results were beyond our expectations. The bricks are durable, consistent in size, and have given our buildings a premium finish.",
      project: "Housing Development",
      image: "/images/brick1.jpeg",
    },
    {
      name: "Nomsa Dlamini",
      location: "Polokwane, Limpopo",
      rating: 5,
      text: "As a contractor, I've worked with many brick suppliers, but STMA's products stand out. Their bricks are high-quality, consistent, and perfect for our commercial projects. The delivery was prompt and the customer service is excellent.",
      project: "Commercial Complex",
      image: "/images/bricks2.jpeg",
    },
    {
      name: "James Khumalo",
      location: "Louis Trichardt, Limpopo",
      rating: 5,
      text: "We chose STMA bricks for our new home construction and couldn't be happier. The bricks are strong, well-fired, and have a beautiful finish. The team was very helpful in helping us choose the right type of bricks for our project.",
      project: "Residential Home",
      image: "/images/bricks3.jpeg",
    },
    {
      name: "Lerato Nkosi",
      location: "Makhado, Limpopo",
      rating: 5,
      text: "The brick delivery was on time and the quality is exceptional. We've been using STMA bricks for multiple projects and they never disappoint. Their products have helped us maintain high construction standards for our clients.",
      project: "Retail Development",
      image: "/images/bricks4.jpeg",
    },
    {
      name: "Sipho Mthembu",
      location: "Tzaneen, Limpopo",
      rating: 5,
      text: "What impressed me most about STMA is their commitment to quality. The bricks are perfectly shaped, durable, and have excellent thermal properties. Our building stays cool in summer and warm in winter. Highly recommended!",
      project: "Eco-Home Project",
      image: "/images/bricks5.jpeg",
    },
    {
      name: "Precious Ndlovu",
      location: "Giyani, Limpopo",
      rating: 5,
      text: "The technical support team at STMA is amazing! They provided valuable advice on the best brick types for our specific needs. The bricks themselves are top-notch quality and have given our development a premium look.",
      project: "Township Development",
      image: "/images/brick1.jpeg",
    },
    {
      name: "Tebogo van der Merwe",
      location: "Modimolle, Limpopo",
      rating: 5,
      text: "We've been using STMA bricks for all our construction projects for the past three years. The consistency in quality is remarkable, and their bricks make our work much easier. The end result is always a beautiful, durable structure.",
      project: "Multiple Residential Projects",
      image: "/images/bricks2.jpeg",
    },
    {
      name: "Naledi Botha",
      location: "Bela-Bela, Limpopo",
      rating: 5,
      text: "The attention to detail in STMA's brick manufacturing is evident in every piece. Our clients are always impressed with the finish and quality. The team's professionalism and reliable delivery make them our go-to brick supplier.",
      project: "Luxury Estate Development",
      image: "/images/bricks3.jpeg",
    },
  ]

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const visibleTestimonials = [
    testimonials[currentIndex],
    testimonials[(currentIndex + 1) % testimonials.length],
    testimonials[(currentIndex + 2) % testimonials.length],
  ]

  return (
    <section className="py-20 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our satisfied clients have to say about our
            concrete construction services. Their success stories speak to our commitment to excellence.
          </p>
        </motion.div>

        <div className="relative">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <AnimatePresence mode="wait">
              {visibleTestimonials.map((testimonial, index) => (
                <motion.div
                  key={`${currentIndex}-${index}`}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="hover:shadow-xl transition-all duration-500 h-full">
                    <CardContent className="p-6">
                      <div className="flex items-center mb-4">
                        <Quote className="h-8 w-8 text-orange-600 mr-2" />
                        <div className="flex">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                          ))}
                        </div>
                      </div>

                      <p className="text-gray-600 mb-6 leading-relaxed italic">"{testimonial.text}"</p>

                      <div className="border-t pt-4">
                        <div className="flex items-center space-x-3">
                          <Image
                            src={testimonial.image || "/placeholder.svg"}
                            alt={testimonial.name}
                            width={50}
                            height={50}
                            className="rounded-full"
                          />
                          <div>
                            <div className="font-semibold text-gray-900">{testimonial.name}</div>
                            <div className="text-sm text-gray-500">{testimonial.location}</div>
                            <div className="text-xs text-orange-600 font-medium">{testimonial.project}</div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          <div className="flex justify-center space-x-4 mb-8">
            <Button
              variant="outline"
              size="sm"
              onClick={prevTestimonial}
              className="hover:bg-orange-600 hover:text-white bg-transparent"
            >
              <ArrowLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={nextTestimonial}
              className="hover:bg-orange-600 hover:text-white bg-transparent"
            >
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="text-gray-600 mb-4">Join hundreds of satisfied customers</p>
          <div className="flex justify-center items-center space-x-2 mb-6">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6 + i * 0.1, duration: 0.3 }}
                >
                  <Star className="h-6 w-6 text-yellow-400 fill-current" />
                </motion.div>
              ))}
            </div>
            <span className="text-lg font-semibold text-gray-900">4.9/5</span>
            <span className="text-gray-600">(247 reviews)</span>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white p-4 rounded-lg shadow-md">
              <div className="text-2xl font-bold text-orange-600">98%</div>
              <div className="text-sm text-gray-600">Client Satisfaction Rate</div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md">
              <div className="text-2xl font-bold text-orange-600">95%</div>
              <div className="text-sm text-gray-600">Repeat Customers</div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md">
              <div className="text-2xl font-bold text-orange-600">100%</div>
              <div className="text-sm text-gray-600">Projects Completed</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
