import type { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle, Package, Wrench, Truck, Shield, Leaf, HardHat } from "lucide-react"
import Link from "next/link"
import ServiceAreas from "@/components/service-areas"

export const metadata: Metadata = {
  title: "Brick Manufacturing & Services - STMA Technical Development",
  description:
    "Comprehensive brick manufacturing services including custom brick solutions, reliable delivery, and expert technical support for all your construction needs.",
  keywords:
    "brick manufacturing, construction materials, building bricks, paving bricks, custom brick solutions, brick delivery, technical support, sustainable building materials",
}

export default function ServicesPage() {
  const services = [
    {
      icon: Package,
      title: "Brick Manufacturing",
      description: "We produce a wide range of high-quality bricks for various construction applications, including building and paving.",
      features: [
        "Stock Bricks",
        "Quantum Bricks",
        "Paving Bricks (Straight) - 60mm",
        "Paving Bricks (Straight) - 80mm",
        "Paving Bricks (Interlocking) - 60mm",
        "Paving Bricks (Interlocking) - 80mm",
        "Consistent quality control",
        "Durable and weather-resistant",
      ],
      process: [
        "Raw material selection and testing",
        "Precision mixing and molding",
        "High-temperature kiln firing",
        "Quality inspection and testing",
        "Packaging and preparation",
        "Ready for delivery or pickup",
      ],
    },
    {
      icon: Wrench,
      title: "Custom Brick Solutions",
      description: "Our experienced team can design and manufacture custom bricks to meet specific project requirements.",
      features: [
        "Custom shapes and sizes",
        "Special color matching",
        "Textured finishes",
        "Engraved or embossed designs",
        "Specialized compositions",
        "Architectural brickwork",
        "Historical restoration",
        "Signature project branding",
      ],
      process: [
        "Consultation and design",
        "Material selection",
        "Prototype development",
        "Client approval",
        "Production",
        "Quality assurance",
      ],
    },
    {
      icon: Truck,
      title: "Brick Delivery",
      description: "We offer reliable and efficient delivery services to ensure that our products reach your site on time.",
      features: [
        "On-time delivery guarantee",
        "Careful handling",
        "Flexible scheduling",
        "Nationwide delivery options",
        "Safe unloading assistance",
        "Real-time tracking",
        "Bulk delivery available",
        "Project site coordination",
      ],
      process: [
        "Order confirmation",
        "Delivery scheduling",
        "Careful loading",
        "Safe transportation",
        "On-site coordination",
        "Delivery confirmation",
      ],
    },
    {
      icon: Shield,
      title: "Technical Support",
      description: "Our team of experts provides technical guidance and support to help you choose the right bricks for your project.",
      features: [
        "Product recommendations",
        "Technical specifications",
        "Installation guidance",
        "Material calculations",
        "Project planning support",
        "Troubleshooting",
        "Best practices",
        "After-sales support",
      ],
      process: [
        "Existing structure assessment",
        "Design and planning phase",
        "Permit and approval process",
        "Construction and integration",
        "Finishing and detailing",
        "Quality inspection and completion",
      ],
    },
  ]



  return (
    <main>
      {/* Hero Section */}
      <section
        className="bg-cover bg-center py-24 text-white"
        style={{ backgroundImage: "url('/images/bricks2.jpeg')" }}
      >
        <div className="bg-black bg-opacity-60 py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl font-bold mb-4">Our Brick Manufacturing Services</h1>
            <p className="text-xl max-w-3xl mx-auto">
              From durable building bricks to custom-designed solutions, we provide a comprehensive range of services to
              meet all your construction needs with quality and precision.
            </p>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          {services.map((service, index) => (
            <div
              key={index}
              className={`mb-20 ${index !== services.length - 1 ? "border-b border-gray-200 pb-20" : ""}`}
            >
              <div className="grid lg:grid-cols-2 gap-12 items-start">
                <div>
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="bg-orange-100 p-4 rounded-lg">
                      <service.icon className="h-8 w-8 text-orange-600" />
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-gray-900">{service.title}</h2>
                      <p className="text-gray-600 text-lg">{service.description}</p>
                    </div>
                  </div>

                  <div className="mb-8">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">What We Offer:</h3>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-2">
                          <CheckCircle className="h-5 w-5 text-orange-600 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div>
                  <Card className="p-6 bg-gray-50">
                    <CardHeader className="p-0 mb-6">
                      <CardTitle className="text-xl text-gray-900">Our Process</CardTitle>
                    </CardHeader>
                    <CardContent className="p-0">
                      <div className="space-y-4">
                        {service.process.map((step, stepIndex) => (
                          <div key={stepIndex} className="flex items-start space-x-3">
                            <div className="bg-orange-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold flex-shrink-0">
                              {stepIndex + 1}
                            </div>
                            <span className="text-gray-700 pt-1">{step}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Service Areas */}
     <ServiceAreas />
      {/* CTA Section */}
      <section className="py-20 bg-orange-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Start Your Project?</h2>
          <p className="text-xl text-orange-100 mb-8 max-w-3xl mx-auto">
            Contact M.P And Concrete Floors today for a free consultation and detailed quote. Let's discuss how we can
            bring your construction vision to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-orange-600 hover:bg-gray-100">
              <Link href="/quote">Get Free Quote</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-orange-600 bg-transparent"
            >
              <a href="tel:0812189299">Call: 081 218 9299</a>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
