import type { Metadata } from "next"
import { Card, CardContent } from "@/components/ui/card"
import { Award, CheckCircle, Clock, Users, Shield } from "lucide-react"
import Image from "next/image"

export const metadata: Metadata = {
  title: "About Us - STMA Technical Development | Quality Brick Manufacturing",
  description:
    "STMA Technical Development Pty Ltd - Building a better future one brick at a time. Quality, sustainability, and customer satisfaction at the heart of our brick manufacturing.",
  keywords:
    "about STMA bricks, brick manufacturing company, quality bricks South Africa, sustainable brick production, construction materials, brick manufacturer",
}

export default function AboutPage() {
  const aboutContent = [
    {
      title: "Our Story",
      content: "At STMA Technical Development Pty Ltd, we are building a better future one brick at a time. With a focus on quality, customer satisfaction, and continuous improvement we have established ourselves as a leading manufacturer for top tier bricks for construction."
    },
    {
      title: "Our Commitment",
      content: "We're dedicated to sustainability and social responsibility, adapting to market demands while prioritizing the well-being of our communities. Our commitment to excellence is reflected in every aspect of our operations, from sourcing raw materials to delivering finished products."
    },
    {
      title: "Our Promise",
      content: "We prioritize customer satisfaction, ensuring that every brick meets the highest standards of quality and performance. Let's build a better future, one brick at a time."
    }
  ]

  const values = [
    {
      icon: CheckCircle,
      title: "Quality",
      description: "We maintain the highest standards in brick manufacturing to ensure durability and reliability in every product."
    },
    {
      icon: CheckCircle,
      title: "Sustainability",
      description: "Committed to eco-friendly practices that minimize environmental impact while delivering superior products."
    },
    {
      icon: CheckCircle,
      title: "Innovation",
      description: "Continuously improving our processes and products to meet the evolving needs of the construction industry."
    }
  ];

  const whyChooseUs = [
    "Quality products: We prioritize quality in all aspects of our operations.",
    "Customer focus: We're dedicated to meeting the needs of our customers.",
    "Sustainability: We're committed to reducing our environmental impact.",
    "Continuous Improvement: We're always looking for ways to improve our products and services."
  ]

  const contactInfo = [
    { type: "Email", value: "Takalani@STMA.co.za" },
    { type: "Email", value: "Info@STMA.co.za" },
    { type: "Phone", value: "067 667 5969" },
    { type: "Address", value: "Stand number 4927 Makwarela Ext 3 Thohoyandou, Limpopo 0950" }
  ]

  const milestones = [
    {
      year: "2015",
      title: "Technology Integration",
      description: "Invested in modern equipment and technology to improve efficiency and quality of our construction processes."
    },
    {
      year: "2018",
      title: "Sustainability Focus",
      description: "Implemented eco-friendly practices and sustainable construction methods in all our projects."
    },
    {
      year: "2024",
      title: "Continued Growth",
      description: "Celebrating over 25 years of excellence with 500+ completed projects and a growing team of professionals."
    }
  ]
  

  const timeline = [
    {
      year: "2018",
      title: "Company Founded",
      description: "Our journey began with a vision to revolutionize the industry."
    },
    {
      year: "2019",
      title: "First Major Milestone",
      description: "Reached our first 1,000 customers and expanded our team."
    },
    {
      year: "2020",
      title: "Product Expansion",
      description: "Launched our flagship product to critical acclaim."
    },
    {
      year: "2021",
      title: "Global Reach",
      description: "Expanded our services to international markets."
    },
    {
      year: "2022",
      title: "Award Winning",
      description: "Recognized as industry leaders with multiple awards."
    },
    {
      year: "2023",
      title: "New Headquarters",
      description: "Moved to a larger office to accommodate our growing team."
    }
  ];

  return (
    <main>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 to-orange-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">About M.P And Concrete Floors</h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              For over 25 years, we have been Cape Town's trusted partner for concrete construction, civil engineering,
              and custom building solutions. Our commitment to quality, innovation, and customer satisfaction has made
              us a leader in the construction industry.
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                M.P And Concrete Floors PTY (LTD) began as a small family-owned business with a simple mission: to
                provide honest, reliable concrete construction services to the Cape Town community. What started as a
                one-man operation has grown into one of the region's most respected construction companies.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Under the leadership of Wages, our founder and managing director, we have built a reputation for
                excellence through consistent delivery of high-quality projects, fair pricing, and exceptional customer
                service. Our motto, "Best Service You Can Trust," reflects our unwavering commitment to our clients.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Today, we are proud to have completed over 500 projects, from residential driveways to large-scale
                commercial developments. Our success is built on the foundation of skilled craftsmanship, modern
                technology, and genuine care for our clients' needs.
              </p>
            </div>
            <div className="relative">
              <div className="bg-orange-100 p-6 rounded-lg">
                <Image
                  src="/construction/construction4.jpg"
                  alt="M.P And Concrete Floors company information and services"
                  width={500}
                  height={600}
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Foundation</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our mission, vision, and values guide everything we do and shape the way we serve our clients and
              community.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center p-8 hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <div className="bg-orange-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <value.icon className="h-10 w-10 text-orange-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Journey</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From humble beginnings to industry leadership, here are the key milestones that have shaped our company
              over the years.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-orange-200"></div>
              {timeline.map((item, index) => (
                <div
                  key={index}
                  className={`relative flex items-center mb-12 ${index % 2 === 0 ? "justify-start" : "justify-end"}`}
                >
                  <div className={`w-1/2 ${index % 2 === 0 ? "pr-8 text-right" : "pl-8 text-left"}`}>
                    <Card className="p-6 hover:shadow-lg transition-shadow">
                      <CardContent className="p-0">
                        <div className="text-2xl font-bold text-orange-600 mb-2">{item.year}</div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                        <p className="text-gray-600">{item.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-orange-600 rounded-full border-4 border-white shadow-lg"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team & Expertise */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Team & Expertise</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our success is built on the expertise and dedication of our skilled professionals who bring years of
              experience to every project.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center p-6">
              <CardContent className="p-0">
                <Award className="h-12 w-12 text-orange-600 mx-auto mb-4" />
                <div className="text-3xl font-bold text-gray-900 mb-2">25+</div>
                <div className="text-gray-600">Years Experience</div>
              </CardContent>
            </Card>
            <Card className="text-center p-6">
              <CardContent className="p-0">
                <Users className="h-12 w-12 text-orange-600 mx-auto mb-4" />
                <div className="text-3xl font-bold text-gray-900 mb-2">20+</div>
                <div className="text-gray-600">Skilled Professionals</div>
              </CardContent>
            </Card>
            <Card className="text-center p-6">
              <CardContent className="p-0">
                <Clock className="h-12 w-12 text-orange-600 mx-auto mb-4" />
                <div className="text-3xl font-bold text-gray-900 mb-2">500+</div>
                <div className="text-gray-600">Projects Completed</div>
              </CardContent>
            </Card>
            <Card className="text-center p-6">
              <CardContent className="p-0">
                <Shield className="h-12 w-12 text-orange-600 mx-auto mb-4" />
                <div className="text-3xl font-bold text-gray-900 mb-2">100%</div>
                <div className="text-gray-600">Licensed & Insured</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </main>
  )
}
