import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react"

import NewsletterSignup from "@/components/common/newsletter-signup"

export default function Footer() {
  return (
    <footer className="bg-gray-50">
      {/* Newsletter Section */}
      <div className="border-b border-gray-200 py-12 bg-[#E6C288]/20">
        <div className="container mx-auto px-4 md:px-6">
          <NewsletterSignup />
        </div>
      </div>

      {/* Main Footer */}
      <div className="py-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {/* Logo and About */}
            <div className="space-y-4">
              <Link href="/" className="inline-block">
                <Image
                  src="/placeholder.svg?height=40&width=150"
                  alt="MagTowel Logo"
                  width={150}
                  height={40}
                  className="h-10 w-auto"
                />
              </Link>
              <p className="text-sm text-gray-600">
                MagTowel offers innovative magnetic towels for gym, beach, and outdoor activities. Our products combine
                quality materials with practical features.
              </p>
              <div className="flex space-x-4">
                <Link
                  href="#"
                  className="rounded-full p-2 text-gray-600 transition-colors hover:bg-gray-200 hover:text-[#3B7A8B]"
                >
                  <Facebook className="h-5 w-5" />
                  <span className="sr-only">Facebook</span>
                </Link>
                <Link
                  href="#"
                  className="rounded-full p-2 text-gray-600 transition-colors hover:bg-gray-200 hover:text-[#3B7A8B]"
                >
                  <Instagram className="h-5 w-5" />
                  <span className="sr-only">Instagram</span>
                </Link>
                <Link
                  href="#"
                  className="rounded-full p-2 text-gray-600 transition-colors hover:bg-gray-200 hover:text-[#3B7A8B]"
                >
                  <Twitter className="h-5 w-5" />
                  <span className="sr-only">Twitter</span>
                </Link>
                <Link
                  href="#"
                  className="rounded-full p-2 text-gray-600 transition-colors hover:bg-gray-200 hover:text-[#3B7A8B]"
                >
                  <Youtube className="h-5 w-5" />
                  <span className="sr-only">YouTube</span>
                </Link>
              </div>
            </div>

            {/* Shop Links */}
            <div>
              <h3 className="mb-4 text-lg font-semibold text-[#3B7A8B]">Shop</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/shop" className="text-gray-600 transition-colors hover:text-[#3B7A8B]">
                    All Products
                  </Link>
                </li>
                <li>
                  <Link href="/shop?category=classic" className="text-gray-600 transition-colors hover:text-[#3B7A8B]">
                    Classic MagTowels
                  </Link>
                </li>
                <li>
                  <Link href="/shop?category=premium" className="text-gray-600 transition-colors hover:text-[#3B7A8B]">
                    Premium MagTowels
                  </Link>
                </li>
                <li>
                  <Link href="/shop?category=travel" className="text-gray-600 transition-colors hover:text-[#3B7A8B]">
                    Travel MagTowels
                  </Link>
                </li>
                <li>
                  <Link
                    href="/shop?category=accessories"
                    className="text-gray-600 transition-colors hover:text-[#3B7A8B]"
                  >
                    Accessories
                  </Link>
                </li>
              </ul>
            </div>

            {/* Company Links */}
            <div>
              <h3 className="mb-4 text-lg font-semibold text-[#3B7A8B]">Company</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/about" className="text-gray-600 transition-colors hover:text-[#3B7A8B]">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/giveback" className="text-gray-600 transition-colors hover:text-[#3B7A8B]">
                    Giveback Initiative
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="text-gray-600 transition-colors hover:text-[#3B7A8B]">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/support" className="text-gray-600 transition-colors hover:text-[#3B7A8B]">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link href="/faq" className="text-gray-600 transition-colors hover:text-[#3B7A8B]">
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>

            {/* Customer Service Links */}
            <div>
              <h3 className="mb-4 text-lg font-semibold text-[#3B7A8B]">Customer Service</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/shipping" className="text-gray-600 transition-colors hover:text-[#3B7A8B]">
                    Shipping & Delivery
                  </Link>
                </li>
                <li>
                  <Link href="/returns" className="text-gray-600 transition-colors hover:text-[#3B7A8B]">
                    Returns & Refunds
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className="text-gray-600 transition-colors hover:text-[#3B7A8B]">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="text-gray-600 transition-colors hover:text-[#3B7A8B]">
                    Terms & Conditions
                  </Link>
                </li>
                <li>
                  <Link href="/support" className="text-gray-600 transition-colors hover:text-[#3B7A8B]">
                    Support Tickets
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-200 py-6 bg-gradient-to-r from-[#3B7A8B]/10 to-[#5B8C5A]/10">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center justify-between space-y-4 text-center md:flex-row md:text-left">
            <p className="text-sm text-gray-600">&copy; {new Date().getFullYear()} MagTowel. All rights reserved.</p>
            <div className="flex space-x-4 text-sm text-gray-600">
              <Link href="/privacy" className="hover:text-[#3B7A8B]">
                Privacy
              </Link>
              <Link href="/terms" className="hover:text-[#3B7A8B]">
                Terms
              </Link>
              <Link href="/sitemap" className="hover:text-[#3B7A8B]">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
