"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { ShoppingCart, Heart, Eye } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { useToast } from "@/hooks/use-toast"
import { useWishlistStore, type WishlistItem } from "@/lib/wishlist-store"

// Update the ProductCardProps interface to include a new hideActions prop
interface ProductCardProps {
  product: {
    id: number
    name: string
    price: number
    image: string
    slug: string
    salePrice?: number
    isNew?: boolean
    isBestSeller?: boolean
  }
  hideActions?: boolean
}

// Update the function signature to include the new prop with a default value
export default function ProductCard({ product, hideActions = false }: ProductCardProps) {
  const { toast } = useToast()
  const [isHovered, setIsHovered] = useState(false)
  const { addItem, removeItem, isInWishlist } = useWishlistStore()
  const [isWishlisted, setIsWishlisted] = useState(false)

  // Check if product is in wishlist on component mount and when wishlist changes
  useEffect(() => {
    setIsWishlisted(isInWishlist(product.id))
  }, [isInWishlist, product.id])

  const handleAddToCart = () => {
    // In a real implementation, this would add the product to the cart state
    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart.`,
    })
  }

  const toggleWishlist = () => {
    if (isWishlisted) {
      removeItem(product.id)
      toast({
        title: "Removed from wishlist",
        description: `${product.name} has been removed from your wishlist.`,
      })
    } else {
      const wishlistItem: WishlistItem = {
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        slug: product.slug,
        salePrice: product.salePrice,
      }
      addItem(wishlistItem)
      toast({
        title: "Added to wishlist",
        description: `${product.name} has been added to your wishlist.`,
      })
    }
    setIsWishlisted(!isWishlisted)
  }

  return (
    <div
      className="product-card group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link href={`/products/${product.slug}`} className="block">
        <div className="relative">
          <div className="relative aspect-square overflow-hidden">
            <Image
              src={product.image || "/placeholder.svg"}
              alt={product.name}
              fill
              className="product-image object-cover"
            />
          </div>

          {/* Product badges */}
          <div className="absolute left-2 top-2 flex flex-col gap-2">
            {product.isNew && <Badge className="bg-[#E6C288] text-[#3B7A8B]">New</Badge>}
            {product.isBestSeller && <Badge className="bg-[#5B8C5A] text-white">Best Seller</Badge>}
            {product.salePrice && <Badge className="bg-[#3B7A8B] text-white">Sale</Badge>}
          </div>

          {/* Wishlist button */}
          <Button
            onClick={(e) => {
              e.preventDefault()
              e.stopPropagation()
              toggleWishlist()
            }}
            variant="ghost"
            size="icon"
            className="absolute right-2 top-2 rounded-full bg-white/80 text-gray-600 hover:bg-white hover:text-[#3B7A8B]"
          >
            <Heart className={`h-5 w-5 ${isWishlisted ? "fill-[#3B7A8B] text-[#3B7A8B]" : ""}`} />
            <span className="sr-only">{isWishlisted ? "Remove from wishlist" : "Add to wishlist"}</span>
          </Button>
        </div>

        <div className="p-4">
          <h3 className="font-medium text-lg text-[#5B8C5A] group-hover:text-[#3B7A8B] transition-colors">
            {product.name}
          </h3>
          <div className="mt-2 flex items-center">
            {product.salePrice ? (
              <>
                <span className="text-gray-400 line-through mr-2">${product.price.toFixed(2)}</span>
                <span className="font-bold text-[#3B7A8B]">${product.salePrice.toFixed(2)}</span>
              </>
            ) : (
              <span className="font-bold text-[#3B7A8B]">${product.price.toFixed(2)}</span>
            )}
          </div>
        </div>
      </Link>

      {/* Quick actions */}
      {!hideActions && (
        <div className="quick-actions">
          <div className="flex gap-2">
            <Button onClick={handleAddToCart} className="flex-1 bg-[#3B7A8B] hover:bg-[#3B7A8B]/90">
              <ShoppingCart className="mr-2 h-4 w-4" /> Add to Cart
            </Button>
            <Button
              variant="outline"
              size="icon"
              asChild
              className="border-[#3B7A8B] text-[#3B7A8B] hover:bg-[#3B7A8B] hover:text-white"
            >
              <Link href={`/products/${product.slug}`}>
                <Eye className="h-4 w-4" />
                <span className="sr-only">Quick view</span>
              </Link>
            </Button>
          </div>
        </div>
      )}
    </div>
  )
}
