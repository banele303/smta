"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Award, Users, Clock, Shield, Target, Wrench, Building2, Truck } from "lucide-react"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import AnimatedCounter from "./animated-counter"
import Image from "next/image"

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const stats = [
    { icon: Award, label: "Years Experience", value: 10, suffix: "+" },
    { icon: Users, label: "Satisfied Clients", value: 500, suffix: "+" },
    { icon: Clock, label: "Delivery Time", value: 24, suffix: "h" },
    { icon: Shield, label: "Quality Rating", value: 100, suffix: "%" },
  ]

  const capabilities = [
    {
      icon: Building2,
      title: "Brick Manufacturing",
      description:
        "We produce a wide range of high-quality bricks for various construction applications, including building and paving.",
      image: "/images/bricks2.jpeg",
    },
    {
      icon: Target,
      title: "Custom Brick Solutions",
      description:
        "Our experienced team can design and manufacture custom bricks to meet specific project requirements.",
      image: "/images/bricks4.jpeg",
    },
    {
      icon: Truck,
      title: "Brick Delivery",
      description:
        "We offer reliable and efficient delivery services to ensure that our products reach your site on time.",
      image: "/images/bricks3.jpeg",
    },
    {
      icon: Wrench,
      title: "Technical Support",
      description: "Our team of experts provides technical guidance and support to help you choose the right bricks for your project.",
      image: "/images/bricks5.jpeg",
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
      transition: { duration: 0.6, ease: "cubic-bezier(0.25, 0.1, 0.25, 1)" },
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
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About STMA BRICKYARD</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Building a better future one brick at a time. Quality, customer satisfaction, and continuous improvement are at the heart of everything we do.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Our Story & Mission</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              At STMA BRICKYARD Pty Ltd, we are building a better future one brick at a time. With a focus on quality, customer satisfaction, and continuous improvement we have established ourselves as a leading manufacturer for top tier bricks for construction.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              We're dedicated to sustainability and social responsibility, adapting to market demands while prioritizing the well-being of our communities. Our commitment to excellence is reflected in every aspect of our operations, from sourcing raw materials to delivering finished products.
            </p>
            <p className="text-gray-600 leading-relaxed">
              We prioritize customer satisfaction, ensuring that every brick meets the highest standards of quality and performance. Let's build a better future, one brick at a time.
            </p>
          </motion.div>

          <motion.div
            className="relative rounded-lg overflow-hidden shadow-xl h-[400px]"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Image
              src="/images/bricks2.jpeg"
              alt="STMA BRICKYARD - Quality Brick Manufacturing"
              fill
              className="object-cover"
            />
          </motion.div>
        </div>

        <div ref={ref} className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => (
            <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6 text-center">
                <stat.icon className="h-10 w-10 text-red-600 mx-auto mb-4" />
                <h3 className="text-gray-500 font-medium mb-2">{stat.label}</h3>
                <div className="text-3xl font-bold text-gray-900">
                  {isInView ? <AnimatedCounter end={stat.value} suffix={stat.suffix} /> : "0"}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>




      </div>
    </section>
  )
}
