import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function AboutPage() {
  // Mock team data
  const teamMembers = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Founder & CEO",
      bio: "Sarah founded MagTowel after experiencing frustration with traditional towels during her outdoor adventures. With a background in textile engineering, she developed the innovative magnetic solution.",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      id: 2,
      name: "Ahmed Benali",
      role: "Head of Product Design",
      bio: "Ahmed brings over 15 years of product design experience to MagTowel. He's passionate about creating functional products that solve real-world problems.",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      id: 3,
      name: "Leila Mansouri",
      role: "Marketing Director",
      bio: "Leila leads our marketing efforts with a focus on authentic storytelling and community building. She's an avid hiker and uses MagTowel products regularly.",
      image: "/placeholder.svg?height=300&width=300",
    },
  ]

  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="w-full bg-gradient-to-b from-[#87CEEB] via-[#3B7A8B] to-[#E6C288] py-20 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">Our Story</h1>
            <p className="mt-4 text-lg md:text-xl">
              Discover how MagTowel is revolutionizing the way people use towels through innovation and quality.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="w-full py-12 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-12 md:grid-cols-2 md:items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tighter text-[#3B7A8B] sm:text-4xl">How It All Started</h2>
              <div className="mt-4 space-y-4 text-gray-600">
                <p>
                  MagTowel began with a simple frustration: towels that wouldn't stay in place during outdoor
                  activities. Our founder, Sarah, was an avid rock climber who was tired of her towel blowing away or
                  falling to the ground during her adventures.
                </p>
                <p>
                  In 2019, after a particularly frustrating climbing trip where she lost her towel to a gust of wind,
                  Sarah had an idea: what if towels could magnetically attach to metal surfaces? This would solve the
                  problem not just for climbers, but for gym-goers, beach enthusiasts, and anyone who's ever been
                  frustrated by a towel that won't stay put.
                </p>
                <p>
                  With a background in textile engineering, Sarah began prototyping in her garage. After months of
                  testing different materials and magnet configurations, the first MagTowel was born. Friends and family
                  were the first testers, and the feedback was overwhelmingly positive.
                </p>
              </div>
            </div>
            <div className="relative aspect-video overflow-hidden rounded-lg">
              <Image
                src="/placeholder.svg?height=600&width=800"
                alt="MagTowel Origin Story"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="w-full bg-[#E6C288]/20 py-12 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tighter text-[#3B7A8B] sm:text-4xl">Our Mission</h2>
            <p className="mt-4 text-lg text-gray-600">
              At MagTowel, our mission is to create innovative, high-quality products that enhance people's active
              lifestyles while maintaining a commitment to sustainability and social responsibility.
            </p>
            <div className="mt-8 grid gap-8 sm:grid-cols-3">
              <div className="rounded-lg border bg-white p-6 shadow-sm">
                <h3 className="text-xl font-bold text-[#3B7A8B]">Innovation</h3>
                <p className="mt-2 text-gray-600">
                  We're constantly exploring new ways to improve our products and solve everyday problems.
                </p>
              </div>
              <div className="rounded-lg border bg-white p-6 shadow-sm">
                <h3 className="text-xl font-bold text-[#5B8C5A]">Quality</h3>
                <p className="mt-2 text-gray-600">
                  We use only premium materials and rigorous testing to ensure our products exceed expectations.
                </p>
              </div>
              <div className="rounded-lg border bg-white p-6 shadow-sm">
                <h3 className="text-xl font-bold text-[#E6C288]">Community</h3>
                <p className="mt-2 text-gray-600">
                  We believe in giving back and supporting those in need through our Giveback Initiative.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="w-full py-12 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-12 md:grid-cols-2 md:items-center">
            <div className="order-2 md:order-1 relative aspect-video overflow-hidden rounded-lg">
              <Image src="/placeholder.svg?height=600&width=800" alt="MagTowel Values" fill className="object-cover" />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl font-bold tracking-tighter text-[#3B7A8B] sm:text-4xl">Our Values</h2>
              <div className="mt-4 space-y-4">
                <div className="rounded-lg border p-4">
                  <h3 className="text-lg font-bold text-[#3B7A8B]">Sustainability</h3>
                  <p className="mt-2 text-gray-600">
                    We're committed to reducing our environmental footprint through sustainable materials and
                    manufacturing processes.
                  </p>
                </div>
                <div className="rounded-lg border p-4">
                  <h3 className="text-lg font-bold text-[#5B8C5A]">Customer-Centric</h3>
                  <p className="mt-2 text-gray-600">
                    We listen to our customers and continuously improve our products based on their feedback.
                  </p>
                </div>
                <div className="rounded-lg border p-4">
                  <h3 className="text-lg font-bold text-[#3B7A8B]">Integrity</h3>
                  <p className="mt-2 text-gray-600">
                    We operate with honesty and transparency in all aspects of our business.
                  </p>
                </div>
                <div className="rounded-lg border p-4">
                  <h3 className="text-lg font-bold text-[#E6C288]">Excellence</h3>
                  <p className="mt-2 text-gray-600">
                    We strive for excellence in everything we do, from product design to customer service.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Meet Our Team Section */}
      <section className="w-full bg-[#87CEEB]/10 py-12 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tighter text-[#3B7A8B] sm:text-4xl">Meet Our Team</h2>
            <p className="mt-4 text-lg text-gray-600">
              The passionate individuals behind MagTowel who are dedicated to bringing you innovative products.
            </p>
          </div>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {teamMembers.map((member) => (
              <div key={member.id} className="rounded-lg border bg-white p-6 shadow-sm">
                <div className="mx-auto aspect-square w-40 overflow-hidden rounded-full">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    width={160}
                    height={160}
                    className="object-cover"
                  />
                </div>
                <div className="mt-4 text-center">
                  <h3 className="text-xl font-bold">{member.name}</h3>
                  <p className="text-[#3B7A8B]">{member.role}</p>
                  <p className="mt-2 text-gray-600">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full bg-gradient-to-r from-[#3B7A8B] to-[#5B8C5A] py-12 md:py-24 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Join the MagTowel Community</h2>
            <p className="mt-4 text-lg">
              Experience the difference of our innovative magnetic towels and become part of our growing community.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button asChild size="lg" className="bg-[#E6C288] text-[#3B7A8B] hover:bg-[#E6C288]/90">
                <Link href="/shop">
                  Shop Now <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                <Link href="/giveback">Learn About Our Giveback Initiative</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
