"use client"

import { useEffect, useState } from "react"
import { useSearchParams } from "next/navigation"
import { useSearch } from "@/lib/search-context"
import { Suspense } from "react"

import ProductCard from "@/components/common/product-card"
import ShopFilters from "@/components/sections/shop-filters"
import ShopSort from "@/components/sections/shop-sort"
import { Button } from "@/components/ui/button"

// Mock data for products
const products = [
  {
    id: 1,
    name: "Classic MagTowel",
    price: 29.99,
    image: "/placeholder.svg?height=300&width=300",
    slug: "classic-magtowel",
  },
  {
    id: 2,
    name: "Premium MagTowel",
    price: 39.99,
    image: "/placeholder.svg?height=300&width=300",
    slug: "premium-magtowel",
  },
  {
    id: 3,
    name: "Travel MagTowel",
    price: 24.99,
    image: "/placeholder.svg?height=300&width=300",
    slug: "travel-magtowel",
  },
  {
    id: 4,
    name: "Sport MagTowel",
    price: 34.99,
    image: "/placeholder.svg?height=300&width=300",
    slug: "sport-magtowel",
    salePrice: 29.99,
  },
  {
    id: 5,
    name: "Beach MagTowel",
    price: 44.99,
    image: "/placeholder.svg?height=300&width=300",
    slug: "beach-magtowel",
  },
  {
    id: 6,
    name: "Gym MagTowel",
    price: 32.99,
    image: "/placeholder.svg?height=300&width=300",
    slug: "gym-magtowel",
  },
]

export default function ShopPage() {
  const searchParams = useSearchParams()
  const { setSearchQuery } = useSearch()
  const [filteredProducts, setFilteredProducts] = useState(products)

  // Get search query from URL
  const searchQuery = searchParams.get("search") || ""

  useEffect(() => {
    // Update search context with the query from URL
    if (searchQuery) {
      setSearchQuery(searchQuery)
    }

    // Filter products based on search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase()
      const filtered = products.filter(
        (product) => product.name.toLowerCase().includes(query) || product.slug.toLowerCase().includes(query),
      )
      setFilteredProducts(filtered)
    } else {
      setFilteredProducts(products)
    }
  }, [searchQuery, setSearchQuery])

  return (
    <main className="flex min-h-screen flex-col">
      {/* Shop Banner */}
      <div className="bg-gradient-to-r from-[#3B7A8B] to-[#5B8C5A] py-4 text-center text-white">
        <p className="text-lg font-medium">Free Shipping on Orders Over $50</p>
      </div>

      {/* Shop Header */}
      <section className="w-full bg-gradient-to-b from-[#87CEEB] via-[#3B7A8B] to-[#E6C288] py-12 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              {searchQuery ? `Search Results: "${searchQuery}"` : "Shop MagTowel"}
            </h1>
            <p className="max-w-[700px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              {searchQuery
                ? `Found ${filteredProducts.length} products matching your search`
                : "Browse our collection of innovative magnetic towels"}
            </p>
          </div>
        </div>
      </section>

      {/* Shop Content */}
      <section className="w-full py-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
            {/* Filters - Sidebar */}
            <div className="md:col-span-1">
              <Suspense fallback={<div>Loading filters...</div>}>
                <ShopFilters />
              </Suspense>
            </div>

            {/* Products Grid */}
            <div className="md:col-span-3">
              {/* Sort Controls */}
              <div className="mb-6 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
                <p className="text-sm text-gray-500">Showing {filteredProducts.length} products</p>
                <Suspense fallback={<div>Loading sort options...</div>}>
                  <ShopSort />
                </Suspense>
              </div>

              {/* Products */}
              {filteredProducts.length > 0 ? (
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {filteredProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              ) : (
                <div className="rounded-lg border border-dashed p-8 text-center">
                  <h3 className="text-lg font-medium">No products found</h3>
                  <p className="mt-2 text-gray-500">
                    Try adjusting your search or filter criteria to find what you're looking for.
                  </p>
                </div>
              )}

              {/* Pagination */}
              {filteredProducts.length > 0 && (
                <div className="mt-12 flex justify-center">
                  <div className="flex space-x-2">
                    <Button variant="outline" disabled>
                      Previous
                    </Button>
                    <Button variant="outline" className="bg-[#3B7A8B] text-white hover:bg-[#3B7A8B]/90">
                      1
                    </Button>
                    <Button variant="outline">2</Button>
                    <Button variant="outline">3</Button>
                    <Button variant="outline">Next</Button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
