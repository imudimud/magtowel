"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Heart, ShoppingCart, Trash2, ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { useWishlistStore } from "@/lib/wishlist-store"
import { useToast } from "@/hooks/use-toast"

export default function WishlistPage() {
  const { items, removeItem, clearWishlist } = useWishlistStore()
  const [mounted, setMounted] = useState(false)
  const { toast } = useToast()

  // Fix hydration issues by only rendering after mount
  useEffect(() => {
    setMounted(true)
  }, [])

  const handleRemoveItem = (id: number, name: string) => {
    removeItem(id)
    toast({
      title: "Removed from wishlist",
      description: `${name} has been removed from your wishlist.`,
    })
  }

  const handleClearWishlist = () => {
    clearWishlist()
    toast({
      title: "Wishlist cleared",
      description: "All items have been removed from your wishlist.",
    })
  }

  const handleAddToCart = (name: string) => {
    toast({
      title: "Added to cart",
      description: `${name} has been added to your cart.`,
    })
  }

  if (!mounted) {
    return null // Return null on server-side to prevent hydration issues
  }

  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="w-full bg-gradient-to-b from-[#87CEEB] via-[#3B7A8B] to-[#E6C288] py-12 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">My Wishlist</h1>
            <p className="max-w-[700px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              {items.length > 0
                ? `You have ${items.length} item${items.length > 1 ? "s" : ""} in your wishlist`
                : "Your wishlist is empty"}
            </p>
          </div>
        </div>
      </section>

      {/* Wishlist Content */}
      <section className="w-full py-12">
        <div className="container mx-auto px-4 md:px-6">
          {items.length > 0 ? (
            <>
              <div className="mb-6 flex justify-between items-center">
                <h2 className="text-2xl font-bold text-[#3B7A8B]">Saved Items</h2>
                <Button
                  variant="outline"
                  className="text-red-500 border-red-500 hover:bg-red-50 hover:text-red-600"
                  onClick={handleClearWishlist}
                >
                  <Trash2 className="mr-2 h-4 w-4" /> Clear All
                </Button>
              </div>

              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {items.map((item) => (
                  <div key={item.id} className="rounded-lg border overflow-hidden shadow-sm">
                    <div className="relative">
                      <Link href={`/products/${item.slug}`}>
                        <div className="relative aspect-square overflow-hidden">
                          <Image
                            src={item.image || "/placeholder.svg"}
                            alt={item.name}
                            fill
                            className="object-cover transition-transform hover:scale-105"
                          />
                        </div>
                      </Link>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="absolute right-2 top-2 rounded-full bg-white/80 text-red-500 hover:bg-white hover:text-red-600"
                        onClick={() => handleRemoveItem(item.id, item.name)}
                      >
                        <Trash2 className="h-5 w-5" />
                        <span className="sr-only">Remove from wishlist</span>
                      </Button>
                    </div>
                    <div className="p-4">
                      <Link href={`/products/${item.slug}`} className="hover:text-[#3B7A8B]">
                        <h3 className="font-medium text-lg">{item.name}</h3>
                      </Link>
                      {item.color && item.size && (
                        <p className="mt-1 text-sm text-gray-500">
                          {item.color} / {item.size}
                        </p>
                      )}
                      <div className="mt-2 flex items-center">
                        {item.salePrice ? (
                          <>
                            <span className="text-gray-400 line-through mr-2">${item.price.toFixed(2)}</span>
                            <span className="font-bold text-[#3B7A8B]">${item.salePrice.toFixed(2)}</span>
                          </>
                        ) : (
                          <span className="font-bold text-[#3B7A8B]">${item.price.toFixed(2)}</span>
                        )}
                      </div>
                      <div className="mt-4 flex gap-2">
                        <Button
                          className="flex-1 bg-[#3B7A8B] hover:bg-[#3B7A8B]/90"
                          onClick={() => handleAddToCart(item.name)}
                        >
                          <ShoppingCart className="mr-2 h-4 w-4" /> Add to Cart
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </>
          ) : (
            <div className="flex flex-col items-center justify-center space-y-6 rounded-lg border border-dashed py-12 text-center">
              <Heart className="h-16 w-16 text-gray-400" />
              <div className="space-y-2">
                <h2 className="text-xl font-semibold">Your wishlist is empty</h2>
                <p className="text-gray-500">
                  Save items you're interested in by clicking the heart icon on product pages.
                </p>
              </div>
              <Button asChild className="mt-4 bg-[#3B7A8B] hover:bg-[#3B7A8B]/90">
                <Link href="/shop">
                  Explore Products <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Recommended Products */}
      {items.length > 0 && (
        <section className="w-full bg-[#E6C288]/20 py-12">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="mb-8 text-2xl font-bold text-[#3B7A8B]">You May Also Like</h2>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {/* This would be populated with recommended products based on wishlist items */}
              <div className="rounded-lg border bg-white overflow-hidden shadow-sm">
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=300&width=300"
                    alt="Recommended Product"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-medium text-lg">Beach MagTowel XL</h3>
                  <div className="mt-2">
                    <span className="font-bold text-[#3B7A8B]">$49.99</span>
                  </div>
                </div>
              </div>
              {/* More recommended products would go here */}
            </div>
          </div>
        </section>
      )}
    </main>
  )
}
