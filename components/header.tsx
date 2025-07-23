"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, Phone, Mail } from "lucide-react"
import Image from "next/image"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="bg-red-700 text-white py-2">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <Phone className="h-4 w-4" />
              <span>0676675969</span>
            </div>
            <div className="flex items-center space-x-1">
              <Mail className="h-4 w-4" />
              <span>Info@STMA.co.za</span>
            </div>
          </div>
          <div className="hidden md:block">
            <span>Makwarela Extension 3 Punda Maria road (Ha vho Bologo) next to MTG</span>
          </div>
        </div>
      </div>

      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center">
            <div className="relative w-60 h-20">
              <Image 
                src="/stma-logo.jpeg" 
                alt="STMA Technical Development" 
                fill 
                className="object-contain"
                priority
              />
            </div>
          </Link>

          <div className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-700 hover:text-red-700 transition-colors">
              Home
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-red-700 transition-colors">
              About
            </Link>
            <Link href="/services" className="text-gray-700 hover:text-red-700 transition-colors">
              Services
            </Link>
           
            <Link href="/contact" className="text-gray-700 hover:text-red-700 transition-colors">
              Contact
            </Link>
          </div>

          <div className="hidden md:block">
            <Button asChild className="bg-red-700 hover:bg-red-800">
              <Link href="/quote">Get Quote</Link>
            </Button>
          </div>

          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-4">
              <Link href="/" className="text-gray-700 hover:text-red-700 transition-colors">
                Home
              </Link>
              <Link href="/about" className="text-gray-700 hover:text-red-700 transition-colors">
                About
              </Link>
              <Link href="/services" className="text-gray-700 hover:text-red-700 transition-colors">
                Services
              </Link>
              
              
              <Link href="/contact" className="text-gray-700 hover:text-red-700 transition-colors">
                Contact
              </Link>
              <Button asChild className="bg-red-700 hover:bg-red-800 w-fit">
                <Link href="/quote">Get Quote</Link>
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
