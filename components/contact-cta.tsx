import { Button } from "@/components/ui/button"
import { Phone, Mail, MapPin, Clock } from "lucide-react"
import Link from "next/link"

export default function ContactCTA() {
  return (
    <section className="py-20 bg-red-700 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Need Quality Bricks for Your Project?</h2>
          <p className="text-xl text-red-100 max-w-3xl mx-auto">
            Contact STMA Technical Development today for expert brick manufacturing services. Get your
            free, no-obligation quote and let us help you build with quality and confidence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="text-center">
            <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Phone className="h-8 w-8" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Call Us</h3>
            <p className="text-red-100">0676675969</p>
          </div>

          <div className="text-center">
            <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Mail className="h-8 w-8" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Email Us</h3>
            <p className="text-red-100 break-all">Info@STMA.co.za</p>
            <p className="text-red-100 break-all">Takalani@STMA.co.za</p>
          </div>

          <div className="text-center">
            <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <MapPin className="h-8 w-8" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Location</h3>
            <p className="text-red-100">Stand number 4927 Makwarela Ext 3 Thohoyandou, Limpopo 0950</p>
          </div>

          <div className="text-center">
            <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock className="h-8 w-8" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Working Hours</h3>
            <p className="text-red-100">
              Mon-Fri: 8AM-5PM
              <br />
              Sat: 8AM-1PM
            </p>
          </div>
        </div>

        <div className="text-center">
          <Button asChild size="lg" className="bg-white text-red-700 hover:bg-gray-100 text-lg px-8">
            <Link href="/contact">Get Your Free Quote Today</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
