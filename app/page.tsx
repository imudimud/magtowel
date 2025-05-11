import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Shield, Truck, CreditCard } from "lucide-react"

import { Button } from "@/components/ui/button"
import ProductCard from "@/components/common/product-card"
import TestimonialCard from "@/components/common/testimonial-card"

export default function Home() {
  // Mock data for featured products
  const featuredProducts = [
    {
      id: 1,
      name: "Classic MagTowel",
      price: 29.99,
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-X5GVJZPVwDNwII4idk20jrT6bV84aM.png",
      slug: "classic-magtowel",
      isBestSeller: true,
    },
    {
      id: 2,
      name: "Premium MagTowel",
      price: 39.99,
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-JcojSI1v57yPXIujEziVe6YeUoumgo.png",
      slug: "premium-magtowel",
    },
    {
      id: 3,
      name: "Travel MagTowel",
      price: 24.99,
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-tEVCLgBxUt5ueH0CVJAMApqkRWHmTu.png",
      slug: "travel-magtowel",
      isNew: true,
    },
  ]

  // Mock data for testimonials
  const testimonials = [
    {
      id: 1,
      name: "Sarah L.",
      rating: 5,
      text: "The magnetic feature is a game-changer! No more towels falling off during my workout.",
      avatar: "/placeholder.svg?height=50&width=50",
    },
    {
      id: 2,
      name: "Ahmed K.",
      rating: 5,
      text: "Perfect for outdoor activities. The quality is exceptional and it dries quickly.",
      avatar: "/placeholder.svg?height=50&width=50",
    },
    {
      id: 3,
      name: "Leila M.",
      rating: 4,
      text: "Love the design and the magnetic feature. Would recommend to anyone!",
      avatar: "/placeholder.svg?height=50&width=50",
    },
  ]

  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="w-full bg-gradient-to-b from-[#87CEEB] via-[#3B7A8B] to-[#E6C288] py-20 text-white">
        <div className="container-custom">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
            <div className="flex flex-col justify-center space-y-6 animate-slide-in">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                MAGTOWEL: The Ultimate Magnetic Towel
              </h1>
              <p className="max-w-[600px] text-lg md:text-xl">
                Experience the convenience of a towel that stays put. Perfect for gym, beach, and outdoor activities.
              </p>
              <div className="flex flex-col gap-3 min-[400px]:flex-row">
                <Button asChild className="bg-[#E6C288] text-[#3B7A8B] hover:bg-[#E6C288]/90">
                  <Link href="/shop">
                    Shop Now <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" className="border-white text-white hover:bg-white/10">
                  <Link href="/about">Learn More</Link>
                </Button>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="relative h-[400px] w-[400px] overflow-hidden rounded-lg shadow-soft">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-X5GVJZPVwDNwII4idk20jrT6bV84aM.png"
                  alt="MagTowel Product"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-muted">
        <div className="container-custom">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#3B7A8B]">
              Why Choose MagTowel?
            </h2>
            <p className="max-w-[700px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Our innovative design combines quality materials with practical features
            </p>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-3">
            <div className="feature-card flex flex-col items-center space-y-4 rounded-lg border bg-white p-6 text-center shadow-soft card-hover">
              <div className="feature-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m12 2-5.5 9h11L12 2z" />
                  <path d="m6.5 11 5.5 9 5.5-9H6.5z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#3B7A8B]">Magnetic Technology</h3>
              <p className="text-gray-600">
                Powerful embedded neodymium magnets keep your towel securely in place on any metal surface
              </p>
            </div>
            <div className="feature-card flex flex-col items-center space-y-4 rounded-lg border bg-white p-6 text-center shadow-soft card-hover">
              <div className="feature-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#3B7A8B]">Premium Quality</h3>
              <p className="text-gray-600">
                Made from ultra-absorbent, quick-drying microfiber that's soft on your skin
              </p>
            </div>
            <div className="feature-card flex flex-col items-center space-y-4 rounded-lg border bg-white p-6 text-center shadow-soft card-hover">
              <div className="feature-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5l6.74-6.76z" />
                  <line x1="16" x2="2" y1="8" y2="22" />
                  <line x1="17.5" x2="9" y1="15" y2="15" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#3B7A8B]">Versatile Design</h3>
              <p className="text-gray-600">
                Perfect for gym, beach, travel, and outdoor activities with compact, lightweight design
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Product Showcase Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#3B7A8B]">
              Featured Products
            </h2>
            <p className="max-w-[700px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Discover our most popular MagTowel products
            </p>
          </div>
          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} hideActions={true} />
            ))}
          </div>
          <div className="flex justify-center mt-12">
            <Button asChild className="bg-[#3B7A8B] hover:bg-[#3B7A8B]/90">
              <Link href="/shop">View All Products</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Beach Usage Section */}
      <section className="section-padding bg-[#E6C288]/20">
        <div className="container-custom">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#3B7A8B]">
              Perfect for Beach Days
            </h2>
            <p className="max-w-[700px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              See how MagTowel enhances your beach experience
            </p>
          </div>
          <div className="grid gap-12 md:grid-cols-2 items-center">
            <div className="relative aspect-video overflow-hidden rounded-lg shadow-soft">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-JcojSI1v57yPXIujEziVe6YeUoumgo.png"
                alt="MagTowel at the beach"
                fill
                className="object-cover"
              />
            </div>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#3B7A8B] text-white font-bold">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#3B7A8B]">Sand Resistant</h3>
                  <p className="mt-2 text-gray-600">
                    Sand-resistant fabric prevents sand from sticking, making cleanup a breeze.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#3B7A8B] text-white font-bold">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#3B7A8B]">Stays in Place</h3>
                  <p className="mt-2 text-gray-600">
                    Attach to lifeguard stands, beach chairs, or any metal surface to keep your towel from blowing away.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#3B7A8B] text-white font-bold">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#3B7A8B]">Quick-Drying</h3>
                  <p className="mt-2 text-gray-600">
                    Ultra-soft microfiber material dries quickly so you're not carrying a soaked towel home.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#3B7A8B] text-white font-bold">
                  4
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#3B7A8B]">Compact & Lightweight</h3>
                  <p className="mt-2 text-gray-600">
                    Easy to pack and carry, perfect for a day at the beach or surfing adventures.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#3B7A8B]">
              What Our Customers Say
            </h2>
            <p className="max-w-[700px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Don't just take our word for it - hear from our satisfied customers
            </p>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-3">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* Outdoor Activities Section */}
      <section className="section-padding bg-gradient-to-r from-[#3B7A8B] to-[#5B8C5A] text-white">
        <div className="container-custom">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div className="flex flex-col justify-center space-y-6">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Perfect for All Outdoor Activities</h2>
              <p className="text-lg">
                From beach days to car changing, MagTowel is your versatile companion for all outdoor adventures.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-[#E6C288]"></div>
                  <p>Secure attachment to any metal surface</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-[#E6C288]"></div>
                  <p>Sand-resistant and quick-drying material</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-[#E6C288]"></div>
                  <p>Compact and lightweight for easy transport</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-[#E6C288]"></div>
                  <p>Multiple colors and sizes available</p>
                </div>
              </div>
              <div>
                <Button asChild className="bg-[#E6C288] text-[#3B7A8B] hover:bg-[#E6C288]/90">
                  <Link href="/shop">Explore MagTowel Collection</Link>
                </Button>
              </div>
            </div>
            <div className="relative aspect-video overflow-hidden rounded-lg shadow-soft">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-tEVCLgBxUt5ueH0CVJAMApqkRWHmTu.png"
                alt="MagTowel for car changing"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges Section */}
      <section className="py-12">
        <div className="container-custom">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 rounded-full bg-[#3B7A8B]/10 p-3">
                <Truck className="h-6 w-6 text-[#3B7A8B]" />
              </div>
              <h3 className="text-lg font-semibold text-[#3B7A8B]">Free Shipping</h3>
              <p className="mt-2 text-sm text-gray-600">On all orders over $50</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 rounded-full bg-[#3B7A8B]/10 p-3">
                <Shield className="h-6 w-6 text-[#3B7A8B]" />
              </div>
              <h3 className="text-lg font-semibold text-[#3B7A8B]">1-Year Warranty</h3>
              <p className="mt-2 text-sm text-gray-600">Quality guaranteed</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 rounded-full bg-[#3B7A8B]/10 p-3">
                <CreditCard className="h-6 w-6 text-[#3B7A8B]" />
              </div>
              <h3 className="text-lg font-semibold text-[#3B7A8B]">Secure Checkout</h3>
              <p className="mt-2 text-sm text-gray-600">Cash on delivery available</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
