"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"

export default function Hero() {
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" as const },
    },
  }

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8, rotateY: -15 },
    visible: {
      opacity: 1,
      scale: 1,
      rotateY: 0,
      transition: { duration: 0.8, ease: "easeInOut" as [0.42, 0, 0.58, 1] | "linear" | "easeIn" | "easeOut" | "easeInOut" },
    },
  }

  return (
    <section className="relative bg-gradient-to-br from-red-900 via-red-800 to-red-700 text-white py-20 lg:py-32 overflow-hidden">
      <motion.div
        className="absolute inset-0 bg-black/20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      />

      {/* Animated background elements */}
      <motion.div
        className="absolute top-20 left-10 w-32 h-32 bg-red-500/10 rounded-full blur-xl"
        animate={{
          x: [0, 30, 0],
          y: [0, -20, 0],
        }}
        transition={{
          duration: 6,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-48 h-48 bg-red-400/10 rounded-full blur-xl"
        animate={{
          x: [0, -40, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="grid lg:grid-cols-2 gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div>
            <motion.h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight" variants={itemVariants}>
              Premier
              <motion.span
                className="text-amber-300"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.6 }}
              >
                Brick Manufacturing
              </motion.span>{" "}
              Services
            </motion.h1>

            <motion.p className="text-xl mb-8 text-gray-200 leading-relaxed" variants={itemVariants}>
              STMA Technical Development is your trusted partner for high-quality bricks for various construction applications. 
              We specialize in manufacturing top-tier bricks with a focus on quality, sustainability, and customer satisfaction.
            </motion.p>

            <motion.div className="flex flex-col sm:flex-row gap-4" variants={itemVariants}>
              <Button asChild size="lg" className="bg-white text-red-700 hover:bg-gray-100 text-lg px-8">
                <Link href="/contact">Get a Quote</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white bg-green-600 text-white hover:bg-white hover:text-red-700 text-lg px-8"
              >
                <Link href="/services">Our Services</Link>
              </Button>
            </motion.div>

            <motion.div className="mt-8 flex flex-col sm:flex-row items-center gap-6" variants={itemVariants}>
              <div className="flex items-center gap-2">
                <CheckCircle className="text-amber-300 h-6 w-6" />
                <span className="text-gray-200">Quality Products</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="text-amber-300 h-6 w-6" />
                <span className="text-gray-200">Sustainable Practices</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="text-amber-300 h-6 w-6" />
                <span className="text-gray-200">Customer Focus</span>
              </div>
            </motion.div>
          </div>

          <motion.div className="relative h-[400px] lg:h-[500px] w-full" variants={imageVariants}>
            <div className="absolute top-0 left-0 w-full h-full">
              <Image
                src="/images/bricks5.jpeg"
                alt="STMA Technical Development - Quality Bricks"
                fill
                className="object-cover rounded-lg shadow-2xl z-10"
                priority
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-3/4 h-3/4">
              <Image
                src="/bricks-delivary.jpg"
                alt="STMA Technical Development - Brick Delivery Service"
                fill
                className="object-cover rounded-lg shadow-2xl border-4 border-white z-20"
                style={{ transform: 'rotate(5deg)' }}
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
