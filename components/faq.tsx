import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function FAQ() {
  const faqs = [
    {
      question: "What types of bricks do you manufacture?",
      answer:
        "We manufacture a wide range of bricks, including Stock Bricks, Quantum Bricks, Paving Bricks (Straight) in 60mm and 80mm thickness, and Paving Bricks (Interlocking) in 60mm and 80mm thickness. Our products are suitable for various construction needs, from residential homes to large-scale commercial projects.",
    },
    {
      question: "What are your bricks made from?",
      answer:
        "Our bricks are made from high-quality, locally sourced clay , cemend, send, crushed stone (for paving bricks)and shale. We follow a rigorous manufacturing process to ensure durability, consistent quality, and excellent structural integrity in all our products.",
    },
    {
      question: "Do you offer delivery services?",
      answer:
        "Yes, we offer reliable and efficient delivery services across Limpopo and surrounding areas. We ensure that your bricks are delivered to your site on time and in perfect condition. Contact us to discuss your delivery needs.",
    },
    {
      question: "How can I place an order?",
      answer:
        "You can place an order by calling us directly at 067 667 5969 or by sending an email to stmamakwarela@gmail.com. Our team will guide you through the process and help you choose the right products for your project.",
    },
    {
      question: "What is the minimum order quantity?",
      answer:
        "The minimum order quantity may vary depending on the type of brick and your location. Please contact our sales team for detailed information regarding minimum order requirements for your specific project.",
    },
    {
      question: "Are your bricks environmentally friendly?",
      answer:
        "We are committed to sustainable manufacturing practices. Our process is designed to minimize environmental impact, and we continuously work on improving our energy efficiency and waste reduction methods.",
    },
    {
      question: "Do you provide technical support or advice on which bricks to use?",
      answer:
        "Absolutely! Our experienced team is always available to provide expert advice and technical support. We can help you select the best type of brick for your application, ensuring optimal performance and aesthetic appeal.",
    },
    {
      question: "What are your payment terms?",
      answer:
        "We offer flexible payment options. For most orders, we require a deposit to confirm the order, with the balance due upon delivery. We accept various payment methods, which our sales team can discuss with you.",
    },
    {
      question: "Can I get a sample of your bricks?",
      answer:
        "Yes, we can provide samples of our bricks to help you make an informed decision. Please contact us to arrange for sample delivery or collection from our office.",
    },
    {
      question: "What are your business hours?",
      answer:
        "Our office is open from 7:00 AM to 5:00 PM, Monday to Friday, and from 8:00 AM to 2:00 PM on Saturday. We are closed on Sundays.",
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Find answers to common questions about our brick manufacturing, delivery services, and what you can expect
            when working with STMA Technical Development.
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
