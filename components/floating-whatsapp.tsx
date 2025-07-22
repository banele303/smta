"use client"

import { useEffect, useState } from "react"
import { Phone, MessageCircle, X } from "lucide-react"

export default function FloatingWhatsApp() {
  const [show, setShow] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  const [isCallHovered, setIsCallHovered] = useState(false)
  const [isExpanded, setIsExpanded] = useState(false)

  useEffect(() => {
    setShow(true)
  }, [])

  const toggleExpand = () => {
    setIsExpanded(!isExpanded)
  }

  return (
    show && (
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end space-y-3">
        {/* Expanded Buttons */}
        {isExpanded && (
          <div className="flex flex-col items-end space-y-3 transition-all duration-300 ease-in-out">
            {/* WhatsApp Button */}
            <a
              href="https://wa.me/27676675969"
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center px-5 py-3 rounded-full shadow-lg transition-all duration-300 text-white font-medium gap-3 transform hover:scale-105 hover:shadow-xl ${
                isHovered ? 'bg-green-600' : 'bg-green-500'
              }`}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              aria-label="Chat on WhatsApp"
            >
              <span className="text-sm">Chat with us</span>
              <div className="relative">
                <div className="absolute -inset-1 bg-green-400 rounded-full opacity-75 animate-ping"></div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 32 32"
                  fill="currentColor"
                  className="w-6 h-6 relative"
                >
                  <path d="M16 3C9.373 3 4 8.373 4 15c0 2.385.832 4.584 2.236 6.37L4 29l7.824-2.18A12.94 12.94 0 0016 27c6.627 0 12-5.373 12-12S22.627 3 16 3zm0 22c-1.97 0-3.85-.51-5.48-1.48l-.39-.23-4.65 1.3 1.25-4.52-.25-.4A9.93 9.93 0 016 15c0-5.514 4.486-10 10-10s10 4.486 10 10-4.486 10-10 10zm5.07-7.75c-.28-.14-1.65-.81-1.9-.9-.25-.09-.43-.14-.61.14-.18.28-.7.9-.86 1.08-.16.18-.32.2-.6.07-.28-.14-1.18-.44-2.25-1.4-.83-.74-1.39-1.65-1.55-1.93-.16-.28-.02-.43.12-.57.13-.13.28-.34.42-.51.14-.17.18-.29.28-.48.09-.19.05-.36-.02-.5-.07-.14-.61-1.47-.84-2.01-.22-.53-.45-.46-.61-.47-.16-.01-.35-.01-.54-.01-.19 0-.5.07-.76.34-.26.27-1 1-.97 2.43.03 1.43 1.03 2.81 1.18 3.01.15.2 2.03 3.1 4.93 4.23.69.3 1.23.48 1.65.61.69.22 1.32.19 1.82.12.56-.08 1.65-.67 1.89-1.32.23-.65.23-1.2.16-1.32-.07-.12-.25-.19-.53-.33z" />
                </svg>
              </div>
            </a>

            {/* Call Button */}
            <a
              href="tel:0676675969"
              className={`flex items-center px-5 py-3 rounded-full shadow-lg transition-all duration-300 text-white font-medium gap-3 transform hover:scale-105 hover:shadow-xl ${
                isCallHovered ? 'bg-orange-700' : 'bg-orange-600'
              }`}
              onMouseEnter={() => setIsCallHovered(true)}
              onMouseLeave={() => setIsCallHovered(false)}
              aria-label="Call us"
            >
              <span className="text-sm">Call us now</span>
              <div className="relative">
                <div className="absolute -inset-1 bg-orange-400 rounded-full opacity-75 animate-ping"></div>
                <Phone className="w-6 h-6 relative" />
              </div>
            </a>
          </div>
        )}

        {/* Main Floating Button */}
        <button
          onClick={toggleExpand}
          className={`p-4 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 ${
            isExpanded ? 'bg-red-500 hover:bg-red-600' : 'bg-blue-600 hover:bg-blue-700'
          }`}
          aria-label={isExpanded ? 'Close menu' : 'Contact options'}
        >
          {isExpanded ? (
            <X className="w-6 h-6 text-white" />
          ) : (
            <MessageCircle className="w-6 h-6 text-white" />
          )}
        </button>
      </div>
    )
  )
}
