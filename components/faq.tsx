import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function FAQ() {
  const faqs = [
    {
      question: "What types of concrete construction services do you offer?",
      answer:
        "We offer comprehensive concrete construction services including residential and commercial flooring, driveways, patios, foundations, civil construction projects, custom home construction, extensions, and specialized concrete repair and restoration work.",
    },
    {
      question: "How long does a typical concrete project take to complete?",
      answer:
        "Project timelines vary depending on size and complexity. A standard residential driveway typically takes 2-3 days, while larger commercial projects may take several weeks. We provide detailed timelines during our initial consultation and keep you updated throughout the process.",
    },
    {
      question: "Do you provide free estimates?",
      answer:
        "Yes, we provide free, no-obligation estimates for all our services. Our team will visit your site, assess your requirements, and provide a detailed quote including materials, labor, and timeline. Contact us at 081 218 9299 to schedule your free estimate.",
    },
    {
      question: "Are you licensed and insured?",
      answer:
        "Absolutely. M.P And Concrete Floors is fully licensed, bonded, and insured. We carry comprehensive liability insurance and provide warranty coverage on all our work to ensure your complete peace of mind.",
    },
    {
      question: "What areas in Cape Town do you serve?",
      answer:
        "We serve Cape Town and surrounding areas including Constantia, Claremont, Wynberg, Rondebosch, Newlands, Observatory, Blackheath, and Happy Valley. Contact us to confirm service availability in your specific area.",
    },
    {
      question: "What factors affect the cost of concrete work?",
      answer:
        "Several factors influence pricing including project size, concrete type and grade, site accessibility, ground preparation requirements, finishing options, and timeline. We provide transparent, detailed quotes with no hidden costs.",
    },
    {
      question: "How do you ensure quality in your concrete work?",
      answer:
        "We use only premium-grade materials from trusted suppliers, employ certified professionals with decades of experience, utilize modern equipment and proven techniques, and conduct thorough quality inspections at every stage of the project.",
    },
    {
      question: "Can you work around my schedule and business hours?",
      answer:
        "Yes, we understand that construction can be disruptive. We work closely with our clients to minimize inconvenience and can often accommodate specific scheduling requirements, including working around business hours for commercial projects.",
    },
    {
      question: "Do you handle permits and regulatory requirements?",
      answer:
        "Yes, we handle all necessary permits and ensure compliance with local building codes and regulations. Our experienced team navigates the permit process efficiently, saving you time and ensuring your project meets all legal requirements.",
    },
    {
      question: "What warranty do you provide on your work?",
      answer:
        "We stand behind our work with comprehensive warranty coverage. Specific warranty terms vary by project type, but we typically provide up to 10 years warranty on structural work and materials. All warranty details are clearly outlined in your contract.",
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Find answers to common questions about our tree care services, processes, and what you can expect
            when working with our professional arborists.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg px-6">
                <AccordionTrigger className="text-left hover:text-orange-600 transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 leading-relaxed">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">Still have questions? We're here to help!</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:0812189299"
              className="bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors"
            >
              Call: 0676675969
            </a>
            <a
              href="mailto:mp25concretefloors@gmail.com"
              className="border-2 border-orange-600 text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-orange-600 hover:text-white transition-colors"
            >
              Email Us
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
