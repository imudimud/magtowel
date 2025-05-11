"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowRight, Search, Plus, Minus } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function FAQPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [expandedFaqs, setExpandedFaqs] = useState<number[]>([0]) // First FAQ open by default

  // Mock FAQ categories and questions
  const faqCategories = [
    {
      id: 1,
      name: "Product Information",
      faqs: [
        {
          id: 1,
          question: "What makes MagTowel different from regular towels?",
          answer:
            "MagTowel features embedded neodymium magnets that allow it to attach securely to any metal surface. This innovative design keeps your towel in place during workouts, outdoor activities, or any situation where you need a towel that stays put. Additionally, our towels are made from premium microfiber material that's ultra-absorbent, quick-drying, and soft on your skin.",
        },
        {
          id: 2,
          question: "How strong are the magnets in MagTowel?",
          answer:
            "MagTowel uses high-quality neodymium magnets that are strong enough to hold the towel securely to metal surfaces, even when wet. The magnets can support the weight of the towel plus additional force, ensuring it stays in place during use. However, they're not so strong that they're difficult to remove when you want to use your towel elsewhere.",
        },
        {
          id: 3,
          question: "What sizes and colors are available?",
          answer:
            "MagTowel comes in three sizes: Small (30x15 inches), Medium (40x20 inches), and Large (50x30 inches). We offer a variety of colors including Blue, Black, Gray, and Teal. Special edition colors are released seasonally, so check our shop for the latest options.",
        },
      ],
    },
    {
      id: 2,
      name: "Orders & Shipping",
      faqs: [
        {
          id: 4,
          question: "How long does shipping take within Algeria?",
          answer:
            "Standard shipping within Algeria typically takes 3-5 business days. For major cities like Algiers, Oran, and Constantine, delivery may be as quick as 1-3 business days. Remote areas may require additional time. You'll receive a tracking number once your order ships so you can monitor its progress.",
        },
        {
          id: 5,
          question: "Do you offer international shipping?",
          answer:
            "Currently, we only ship within Algeria. We're working on expanding our shipping capabilities to serve international customers in the future. Sign up for our newsletter to be notified when we begin shipping to your country.",
        },
        {
          id: 6,
          question: "What payment methods do you accept?",
          answer:
            "We currently accept cash on delivery (COD) for all orders within Algeria. This means you'll pay for your order when it arrives at your doorstep. We're working on implementing additional payment methods in the future.",
        },
      ],
    },
    {
      id: 3,
      name: "Product Care",
      faqs: [
        {
          id: 7,
          question: "How do I wash my MagTowel?",
          answer:
            "MagTowel is machine washable on a gentle cycle with cold water. We recommend washing with similar colors and avoiding bleach or fabric softeners, which can degrade the microfiber material. The magnets are securely sealed and waterproof, so they won't be damaged during washing.",
        },
        {
          id: 8,
          question: "Can I put my MagTowel in the dryer?",
          answer:
            "Yes, you can tumble dry your MagTowel on low heat. However, for optimal longevity, we recommend air drying when possible. The quick-drying microfiber material typically dries much faster than conventional cotton towels even when air dried.",
        },
        {
          id: 9,
          question: "How long will the magnets last?",
          answer:
            "The neodymium magnets in MagTowel are designed to maintain their magnetic strength for many years. They're sealed in waterproof housing to prevent corrosion and securely attached to withstand regular use and washing. With proper care, the magnets should last the lifetime of the towel.",
        },
      ],
    },
    {
      id: 4,
      name: "Returns & Warranty",
      faqs: [
        {
          id: 10,
          question: "What is your return policy?",
          answer:
            "We offer a 30-day satisfaction guarantee. If you're not completely satisfied with your MagTowel, you can return it within 30 days of delivery for a full refund or exchange. The product must be in its original condition and packaging. Please note that the customer is responsible for return shipping costs unless the item is defective.",
        },
        {
          id: 11,
          question: "Does MagTowel come with a warranty?",
          answer:
            "Yes, all MagTowels come with a 1-year limited warranty that covers manufacturing defects, including issues with the magnetic components. This warranty does not cover normal wear and tear or damage caused by improper use or care. To make a warranty claim, please contact our customer support team with your order details and a description of the issue.",
        },
        {
          id: 12,
          question: "What if my MagTowel arrives damaged?",
          answer:
            "If your MagTowel arrives damaged or defective, please contact our customer support team within 7 days of receiving your order. Include your order number and photos of the damage, and we'll arrange for a replacement or refund as soon as possible. We take quality control very seriously and want to ensure you're completely satisfied with your purchase.",
        },
      ],
    },
    {
      id: 5,
      name: "Giveback Initiative",
      faqs: [
        {
          id: 13,
          question: "How does the Giveback Initiative work?",
          answer:
            "For every MagTowel purchased, we donate a towel to someone in need through our partner organizations. These donations go to homeless shelters, refugee centers, and disaster relief organizations throughout Algeria. It's our way of using business as a force for good and ensuring everyone has access to clean, quality towels.",
        },
        {
          id: 14,
          question: "Can I get involved with the Giveback Initiative?",
          answer:
            "Besides purchasing MagTowel products (which automatically triggers a donation), you can volunteer at our quarterly distribution events in major Algerian cities. Sign up on our Giveback page for notifications about upcoming volunteer opportunities. You can also spread awareness about our initiative on social media.",
        },
        {
          id: 15,
          question: "Which organizations do you partner with?",
          answer:
            "We currently partner with several organizations including Humanity Showers, Algerian Red Crescent, Hope Shelter, and Youth Support Initiative. These organizations help us distribute towels to those who need them most. You can learn more about our partners on our Giveback page.",
        },
      ],
    },
  ]

  const toggleFaq = (faqId: number) => {
    setExpandedFaqs((prev) => (prev.includes(faqId) ? prev.filter((id) => id !== faqId) : [...prev, faqId]))
  }

  // Filter FAQs based on search query
  const filteredFaqs = searchQuery
    ? faqCategories
        .map((category) => ({
          ...category,
          faqs: category.faqs.filter(
            (faq) =>
              faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
              faq.answer.toLowerCase().includes(searchQuery.toLowerCase()),
          ),
        }))
        .filter((category) => category.faqs.length > 0)
    : faqCategories

  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="w-full bg-gradient-to-r from-[#29ABE2] to-[#008080] py-20 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">Frequently Asked Questions</h1>
            <p className="mt-4 text-lg md:text-xl">
              Find answers to common questions about MagTowel products, orders, shipping, and more.
            </p>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="w-full bg-white py-8 shadow-sm">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-2xl">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
              <Input
                type="search"
                placeholder="Search for answers..."
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="w-full py-12 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-4xl">
            {filteredFaqs.length > 0 ? (
              filteredFaqs.map((category) => (
                <div key={category.id} className="mb-12">
                  <h2 className="mb-6 text-2xl font-bold text-[#29ABE2]">{category.name}</h2>
                  <div className="space-y-4">
                    {category.faqs.map((faq) => (
                      <div key={faq.id} className="rounded-lg border shadow-sm">
                        <button
                          className="flex w-full items-center justify-between p-4 text-left font-medium"
                          onClick={() => toggleFaq(faq.id)}
                        >
                          <span>{faq.question}</span>
                          {expandedFaqs.includes(faq.id) ? (
                            <Minus className="h-5 w-5 text-[#29ABE2]" />
                          ) : (
                            <Plus className="h-5 w-5 text-[#29ABE2]" />
                          )}
                        </button>
                        {expandedFaqs.includes(faq.id) && (
                          <div className="border-t p-4">
                            <p className="text-gray-600">{faq.answer}</p>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center">
                <h2 className="text-xl font-semibold">No results found</h2>
                <p className="mt-2 text-gray-600">
                  We couldn't find any FAQs matching your search. Please try different keywords or browse our
                  categories.
                </p>
                <Button className="mt-4 bg-[#29ABE2] hover:bg-[#29ABE2]/90" onClick={() => setSearchQuery("")}>
                  Clear Search
                </Button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="w-full bg-gray-50 py-12 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tighter text-[#29ABE2] sm:text-4xl">
              Couldn't Find Your Answer?
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Our customer support team is here to help. Reach out to us with any questions or concerns.
            </p>
            <div className="mt-8">
              <Button asChild size="lg" className="bg-[#29ABE2] hover:bg-[#29ABE2]/90">
                <Link href="/support">
                  Contact Support <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
