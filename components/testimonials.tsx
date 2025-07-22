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
      name: "Sarah Johnson",
      location: "Constantia, Cape Town",
      rating: 5,
      text: "Wayne Tree Feeling did an exceptional job removing a large, dangerous tree from our property. The team was professional, efficient, and left our garden spotless. I was particularly impressed with their attention to safety and minimal impact on our landscaping.",
      project: "Tree Removal",
      image: "/images/testimonial1.jpg",
    },
    {
      name: "Michael Chen",
      location: "Claremont, Cape Town",
      rating: 5,
      text: "After a severe storm, we had several damaged trees that needed immediate attention. Wayne's team responded quickly to our emergency call. They worked efficiently to remove the hazards and even helped with the cleanup. Their professionalism and expertise were outstanding.",
      project: "Emergency Storm Damage",
      image: "/images/testimonial2.jpg",
    },
    {
      name: "Jennifer Adams",
      location: "Wynberg, Cape Town",
      rating: 5,
      text: "We've been using Wayne Tree Feeling for our regular tree maintenance for years. Their arborists are knowledgeable and always provide excellent advice on tree care. The team is punctual, professional, and does a thorough job every time. Highly recommend their services!",
      project: "Regular Tree Maintenance",
      image: "/images/testimonial3.jpg",
    },
    {
      name: "David Thompson",
      location: "Rondebosch, Cape Town",
      rating: 5,
      text: "As a property manager, I've worked with many tree service companies, but Wayne Tree Feeling stands out. They handle all our commercial properties with the utmost professionalism. Their team is reliable, efficient, and always leaves the property cleaner than they found it.",
      project: "Commercial Property Maintenance",
      image: "/images/testimonial4.jpg",
    },
    {
      name: "Lisa Williams",
      location: "Newlands, Cape Town",
      rating: 5,
      text: "The palm tree trimming service was exceptional. The team arrived on time, worked efficiently, and left our garden looking amazing. They even cleaned up all the debris. Will definitely be using their services again and recommending them to friends and family.",
      project: "Palm Tree Trimming",
      image: "/images/testimonial5.jpg",
    },
    {
      name: "Robert Martinez",
      location: "Observatory, Cape Town",
      rating: 5,
      text: "Outstanding service from start to finish. Wayne and his team removed several large stumps from our property and the results were fantastic. They were careful with our garden and left the area clean. The pricing was fair and the work was completed as promised.",
      project: "Stump Removal",
      image: "/images/testimonial6.jpg",
    },
    {
      name: "Amanda Foster",
      location: "Blackheath, Cape Town",
      rating: 5,
      text: "We had a large tree that was growing too close to our house. Wayne's team assessed the situation and provided the perfect solution. They were careful, professional, and did an amazing job. Our property looks better than ever. Highly recommended!",
      project: "Tree Removal & Landscaping",
      image: "/images/testimonial7.jpg",
    },
    {
      name: "James Wilson",
      location: "Durbanville, Cape Town",
      rating: 5,
      text: "Exceptional service from Wayne and his team. They handled our large property clearance project with expertise and efficiency. The team was professional, hardworking, completed the job ahead of schedule. We're extremely satisfied with the results and would definitely use their services again.",
      project: "Land Clearing Project",
      image: "/images/testimonial8.jpg",
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
            Don't just take our word for it. Here's what our satisfied clients across Cape Town have to say about our
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
          <p className="text-gray-600 mb-4">Join hundreds of satisfied customers across Cape Town</p>
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
