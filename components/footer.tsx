import Link from "next/link"
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-3xl font-extrabold text-red-700 mb-4">STMA</h3>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Premier brick manufacturing services in South Africa. Specializing in high-quality bricks for residential and commercial projects.
            </p>
            <p className="text-red-400 font-semibold">"Building a better future one brick at a time"</p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <Link href="/services" className="hover:text-red-400 transition-colors">
                  Brick Manufacturing
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-red-400 transition-colors">
                  Custom Brick Solutions
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-red-400 transition-colors">
                  Brick Delivery
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-red-400 transition-colors">
                  Technical Support
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-red-400 transition-colors">
                  Sustainable Practices
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <Link href="/" className="hover:text-red-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-red-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-red-400 transition-colors">
                  Services
                </Link>
              </li>
             
              <li>
                <Link href="/contact" className="hover:text-red-400 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-start space-x-3">
                <Phone className="h-5 w-5 text-red-400 mt-1 flex-shrink-0" />
                <span>067 667 5969</span>
              </div>
              <div className="flex items-start space-x-3">
                <Mail className="h-5 w-5 text-red-400 mt-1 flex-shrink-0" />
                <div className="flex flex-col">
                  <span className="break-all">stmamakwarela@gmail.com</span>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-red-400 mt-1 flex-shrink-0" />
                <span>Makwarela Extension 3 Punda Maria road (Ha vho Bologo) next to MTG</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 mb-4 md:mb-0">
              © {new Date().getFullYear()} STMA BRICKYARD Pty Ltd. All rights reserved.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-red-400 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-red-400 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-red-400 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
