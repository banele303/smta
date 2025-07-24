"use client"

import { useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MessageCircle, Phone, ArrowRight } from "lucide-react"

export default function QuotePage() {
  const phoneNumber = "067 667 5969"
  const whatsappNumber = "27676675969" // Remove leading 0 and add country code
  
  const handleWhatsAppRedirect = () => {
    const message = encodeURIComponent(
      "Hi STMA BRICKYARD! I'm interested in getting a quote for brick manufacturing services. Could you please provide me with more information?"
    )
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`
    window.open(whatsappUrl, '_blank')
  }

  const handleCallRedirect = () => {
    window.location.href = `tel:${phoneNumber}`
  }

  return (
    <main>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 to-red-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">Get Your Free Quote</h1>
            <p className="text-xl text-gray-200 leading-relaxed mb-8">
              Ready to start your construction project with quality bricks? Get in touch with us instantly 
              for a free consultation and detailed quote.
            </p>
          </div>
        </div>
      </section>

      {/* Quote Options */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Choose Your Preferred Contact Method</h2>
              <p className="text-lg text-gray-600">
                We're here to help you get the perfect quote for your brick manufacturing needs.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* WhatsApp Option */}
              <Card className="border-2 border-green-200 hover:border-green-400 transition-colors">
                <CardHeader className="text-center">
                  <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                    <MessageCircle className="h-8 w-8 text-green-600" />
                  </div>
                  <CardTitle className="text-2xl text-gray-900">WhatsApp Quote</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-600 mb-6">
                    Get instant responses and quick quotes through WhatsApp. Perfect for immediate assistance 
                    and sharing project photos.
                  </p>
                  <Button 
                    onClick={handleWhatsAppRedirect}
                    className="w-full bg-green-600 hover:bg-green-700 text-white py-3 text-lg"
                  >
                    Chat on WhatsApp <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                  <p className="text-sm text-gray-500 mt-3">
                    Opens WhatsApp with a pre-filled message
                  </p>
                </CardContent>
              </Card>

              {/* Phone Call Option */}
              <Card className="border-2 border-blue-200 hover:border-blue-400 transition-colors">
                <CardHeader className="text-center">
                  <div className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                    <Phone className="h-8 w-8 text-blue-600" />
                  </div>
                  <CardTitle className="text-2xl text-gray-900">Phone Quote</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-600 mb-6">
                    Speak directly with our experts for detailed discussions about your project requirements 
                    and get personalized recommendations.
                  </p>
                  <Button 
                    onClick={handleCallRedirect}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 text-lg"
                  >
                    Call Now <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                  <p className="text-sm text-gray-500 mt-3">
                    {phoneNumber}
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Additional Info */}
            <div className="mt-12 text-center">
              <Card className="bg-red-50 border-red-200">
                <CardContent className="py-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Why Choose STMA for Your Quote?</h3>
                  <div className="grid md:grid-cols-3 gap-6 text-sm text-gray-700">
                    <div>
                      <h4 className="font-semibold text-red-700 mb-2">Fast Response</h4>
                      <p>Get your quote within 24 hours</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-red-700 mb-2">Competitive Pricing</h4>
                      <p>Best value for premium quality bricks</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-red-700 mb-2">Expert Advice</h4>
                      <p>Professional guidance for your project</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
