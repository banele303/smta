import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Clock, Shield, Award, Users, Wrench } from "lucide-react"

export default function WhyChooseUs() {
  const reasons = [
    {
      icon: Award,
      title: "Quality Products",
      description:
        "We prioritize quality in all aspects of our operations, from sourcing raw materials to manufacturing processes.",
    },
    {
      icon: Users,
      title: "Customer Focus",
      description:
        "We're dedicated to meeting the needs of our customers, providing personalized service and support.",
    },
    {
      icon: Shield,
      title: "Sustainability",
      description:
        "We're committed to reducing our environmental impact through eco-friendly practices and materials.",
    },
    {
      icon: Clock,
      title: "Timely Delivery",
      description:
        "We understand the importance of deadlines and ensure our products reach you when you need them.",
    },
    {
      icon: CheckCircle,
      title: "Consistent Quality",
      description:
        "Our rigorous quality control ensures that every brick meets our high standards of performance and durability.",
    },
    {
      icon: Wrench,
      title: "Continuous Improvement",
      description:
        "We're always looking for ways to improve our products and services to better serve our customers.",
    },
  ]

  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Why Choose STMA Technical Development?</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We're committed to providing top-quality brick manufacturing with a focus on sustainability, reliability, and
            customer satisfaction. Here's what sets us apart from the rest.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {reasons.map((reason, index) => (
            <Card key={index} className="bg-red-800 border-red-700 hover:bg-red-750 transition-colors">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-red-600 p-3 rounded-lg flex-shrink-0">
                    <reason.icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">{reason.title}</h3>
                    <p className="text-red-300 leading-relaxed">{reason.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-red-600 rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">Need Quality Bricks for Your Project?</h3>
          <p className="text-red-100 mb-6 max-w-2xl mx-auto">
            Contact us today for a free, no-obligation quote. Let's discuss how we can help provide the perfect bricks for your construction needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:0676675969"
              className="bg-white text-red-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Call: 067 667 5969
            </a>
            <a
              href="mailto:stmamakwarela@gmail.com"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-red-700 transition-colors"
            >
              Email Us
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
