import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Heart } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function GivebackPage() {
  // Mock impact data
  const impactStats = [
    {
      id: 1,
      number: "1,500+",
      label: "Towels Donated",
      description: "We've donated over 1,500 towels to those in need through our Giveback Initiative.",
    },
    {
      id: 2,
      number: "10+",
      label: "Shelters Supported",
      description: "We work with shelters across Algeria to provide essential hygiene products.",
    },
    {
      id: 3,
      number: "3",
      label: "Community Programs",
      description: "We've established 3 ongoing community support programs focused on hygiene and wellness.",
    },
  ]

  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="w-full bg-gradient-to-r from-[#29ABE2] to-[#008080] py-20 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <Heart className="mx-auto mb-4 h-16 w-16" />
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">Our Giveback Initiative</h1>
            <p className="mt-4 text-lg md:text-xl">
              For every MagTowel sold, we donate a towel to someone in need. Join us in making a difference.
            </p>
          </div>
        </div>
      </section>

      {/* Our Commitment Section */}
      <section className="w-full py-12 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-12 md:grid-cols-2 md:items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tighter text-[#29ABE2] sm:text-4xl">Our Commitment</h2>
              <div className="mt-4 space-y-4 text-gray-600">
                <p>
                  At MagTowel, we believe that everyone deserves access to clean, quality towels. That's why we created
                  our Giveback Initiative - a program dedicated to providing towels to those who need them most.
                </p>
                <p>
                  For every MagTowel purchased, we donate a towel to someone in need. These donations go to homeless
                  shelters, refugee centers, and disaster relief organizations throughout Algeria.
                </p>
                <p>
                  We work closely with our partner organizations to ensure that our donations make a real impact in
                  people's lives. Clean towels are not just a comfort - they're an essential part of maintaining dignity
                  and hygiene.
                </p>
                <p>
                  When you purchase a MagTowel, you're not just getting an innovative product - you're helping someone
                  in need. It's our way of using business as a force for good.
                </p>
              </div>
            </div>
            <div className="relative aspect-video overflow-hidden rounded-lg">
              <Image
                src="/placeholder.svg?height=600&width=800"
                alt="MagTowel Giveback Initiative"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Impact Section */}
      <section className="w-full bg-gray-50 py-12 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tighter text-[#29ABE2] sm:text-4xl">Our Impact</h2>
            <p className="mt-4 text-lg text-gray-600">
              Thanks to our customers, we've been able to make a significant impact in communities across Algeria.
            </p>
          </div>
          <div className="mt-12 grid gap-8 sm:grid-cols-3">
            {impactStats.map((stat) => (
              <div key={stat.id} className="rounded-lg border bg-white p-6 shadow-sm text-center">
                <div className="text-4xl font-bold text-[#29ABE2]">{stat.number}</div>
                <h3 className="mt-2 text-xl font-semibold">{stat.label}</h3>
                <p className="mt-2 text-gray-600">{stat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Organizations Section */}
      <section className="w-full py-12 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tighter text-[#29ABE2] sm:text-4xl">
              Our Partner Organizations
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              We work with these amazing organizations to distribute towels to those in need.
            </p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            <div className="rounded-lg border p-6 shadow-sm">
              <div className="flex flex-col sm:flex-row gap-6 items-center">
                <div className="w-24 h-24 flex-shrink-0">
                  <Image
                    src="/placeholder.svg?height=100&width=100"
                    alt="Humanity Showers Logo"
                    width={100}
                    height={100}
                    className="rounded-lg"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Humanity Showers</h3>
                  <p className="mt-2 text-gray-600">
                    Humanity Showers provides mobile shower facilities for homeless individuals, offering dignity
                    through cleanliness. We provide towels for their shower program.
                  </p>
                </div>
              </div>
            </div>
            <div className="rounded-lg border p-6 shadow-sm">
              <div className="flex flex-col sm:flex-row gap-6 items-center">
                <div className="w-24 h-24 flex-shrink-0">
                  <Image
                    src="/placeholder.svg?height=100&width=100"
                    alt="Algerian Red Crescent Logo"
                    width={100}
                    height={100}
                    className="rounded-lg"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Algerian Red Crescent</h3>
                  <p className="mt-2 text-gray-600">
                    The Algerian Red Crescent provides humanitarian aid during disasters and to vulnerable communities.
                    Our towels are included in their hygiene kits.
                  </p>
                </div>
              </div>
            </div>
            <div className="rounded-lg border p-6 shadow-sm">
              <div className="flex flex-col sm:flex-row gap-6 items-center">
                <div className="w-24 h-24 flex-shrink-0">
                  <Image
                    src="/placeholder.svg?height=100&width=100"
                    alt="Hope Shelter Logo"
                    width={100}
                    height={100}
                    className="rounded-lg"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Hope Shelter</h3>
                  <p className="mt-2 text-gray-600">
                    Hope Shelter provides temporary housing and support services for homeless individuals in Algiers. We
                    supply towels for their residents.
                  </p>
                </div>
              </div>
            </div>
            <div className="rounded-lg border p-6 shadow-sm">
              <div className="flex flex-col sm:flex-row gap-6 items-center">
                <div className="w-24 h-24 flex-shrink-0">
                  <Image
                    src="/placeholder.svg?height=100&width=100"
                    alt="Youth Support Initiative Logo"
                    width={100}
                    height={100}
                    className="rounded-lg"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Youth Support Initiative</h3>
                  <p className="mt-2 text-gray-600">
                    Youth Support Initiative works with at-risk youth, providing education and basic necessities. Our
                    towels support their hygiene education program.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How You Can Help Section */}
      <section className="w-full bg-gray-50 py-12 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-12 md:grid-cols-2 md:items-center">
            <div className="relative aspect-video overflow-hidden rounded-lg">
              <Image src="/placeholder.svg?height=600&width=800" alt="How You Can Help" fill className="object-cover" />
            </div>
            <div>
              <h2 className="text-3xl font-bold tracking-tighter text-[#29ABE2] sm:text-4xl">How You Can Help</h2>
              <div className="mt-4 space-y-4 text-gray-600">
                <p>
                  There are several ways you can support our Giveback Initiative and help us provide towels to those in
                  need:
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    <strong>Purchase a MagTowel:</strong> For every towel sold, we donate one to someone in need.
                  </li>
                  <li>
                    <strong>Spread the word:</strong> Share our mission with friends and family on social media.
                  </li>
                  <li>
                    <strong>Volunteer:</strong> Join us for our quarterly distribution events in major Algerian cities.
                  </li>
                  <li>
                    <strong>Partner with us:</strong> If you represent an organization that could benefit from towel
                    donations, please contact us.
                  </li>
                </ul>
                <div className="pt-4">
                  <Button asChild className="bg-[#29ABE2] hover:bg-[#29ABE2]/90">
                    <Link href="/shop">
                      Shop and Support <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="w-full py-12 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tighter text-[#29ABE2] sm:text-4xl">Words from Our Partners</h2>
            <p className="mt-4 text-lg text-gray-600">
              Hear from the organizations we work with about the impact of our Giveback Initiative.
            </p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            <div className="rounded-lg border p-6 shadow-sm">
              <p className="italic text-gray-600">
                "The towels donated by MagTowel have made a significant difference for our shower program. Having clean,
                quality towels available has helped restore dignity to those we serve."
              </p>
              <div className="mt-4 flex items-center">
                <div className="mr-4 h-12 w-12 overflow-hidden rounded-full">
                  <Image
                    src="/placeholder.svg?height=50&width=50"
                    alt="Karim Benali"
                    width={50}
                    height={50}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-semibold">Karim Benali</p>
                  <p className="text-sm text-gray-500">Director, Humanity Showers</p>
                </div>
              </div>
            </div>
            <div className="rounded-lg border p-6 shadow-sm">
              <p className="italic text-gray-600">
                "Our partnership with MagTowel has allowed us to provide essential hygiene items to more people in need.
                Their commitment to giving back is truly commendable."
              </p>
              <div className="mt-4 flex items-center">
                <div className="mr-4 h-12 w-12 overflow-hidden rounded-full">
                  <Image
                    src="/placeholder.svg?height=50&width=50"
                    alt="Amina Khelif"
                    width={50}
                    height={50}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-semibold">Amina Khelif</p>
                  <p className="text-sm text-gray-500">Coordinator, Algerian Red Crescent</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full bg-[#008080] py-12 md:py-24 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Join Us in Making a Difference</h2>
            <p className="mt-4 text-lg">
              Every purchase helps someone in need. Shop MagTowel products and be part of our mission.
            </p>
            <div className="mt-8">
              <Button asChild size="lg" className="bg-white text-[#008080] hover:bg-gray-100">
                <Link href="/shop">
                  Shop and Give Back <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
