import type { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle, Package, Wrench, Truck, Shield, Leaf, HardHat } from "lucide-react"
import Link from "next/link"

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
        "High-quality building bricks",
        "Paving bricks for outdoor spaces",
        "Standard and custom sizes",
        "Variety of colors and textures",
        "Consistent quality control",
        "Sustainable production methods",
        "Durable and weather-resistant",
        "Suitable for all construction needs",
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

  const additionalServices = [
    {
      icon: HardHat,
      title: "Project Management",
      description: "End-to-end project management ensuring timely completion and quality control",
    },
    {
      icon: Truck,
      title: "Demolition Services",
      description: "Safe and efficient demolition services for residential and commercial properties",
    },
    {
      icon: Wrench,
      title: "Concrete Repair",
      description: "Professional concrete repair and restoration services for existing structures",
    },
  ]

  return (
    <main>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 to-orange-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">Our Construction Services</h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              From residential concrete floors to large-scale commercial projects, we offer comprehensive construction
              services backed by over 25 years of experience and expertise.
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

      {/* Additional Services */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Additional Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We also offer specialized services to complement our main construction offerings and provide comprehensive
              solutions for all your construction needs.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {additionalServices.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6 text-center">
                  <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <service.icon className="h-8 w-8 text-orange-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Service Areas in Cape Town</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We proudly serve Cape Town and surrounding areas with our comprehensive construction services. Contact us
              to confirm service availability in your area.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "Blackheath",
              "Happy Valley",
              "Constantia",
              "Claremont",
              "Wynberg",
              "Rondebosch",
              "Newlands",
              "Observatory",
              "Woodstock",
              "Salt River",
              "Goodwood",
              "Bellville",
              "Parow",
              "Elsies River",
              "Brackenfell",
              "Durbanville",
            ].map((area, index) => (
              <div key={index} className="bg-gray-50 p-4 rounded-lg text-center">
                <span className="text-gray-800 font-medium">{area}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

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
              <Link href="/contact">Get Free Quote</Link>
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
