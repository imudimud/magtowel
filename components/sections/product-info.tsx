"use client"

import { useState, useEffect } from "react"
import { MinusCircle, PlusCircle, ShoppingCart, Heart } from "lucide-react"

import { Button } from "@/components/ui/button"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { useToast } from "@/hooks/use-toast"
import { useWishlistStore, type WishlistItem } from "@/lib/wishlist-store"

interface ProductInfoProps {
  product: {
    id: number
    name: string
    price: number
    colors: string[]
    sizes: string[]
    salePrice?: number
  }
}

export default function ProductInfo({ product }: ProductInfoProps) {
  const [selectedColor, setSelectedColor] = useState(product.colors[0])
  const [selectedSize, setSelectedSize] = useState(product.sizes[0])
  const [quantity, setQuantity] = useState(1)
  const { toast } = useToast()
  const { addItem, removeItem, isInWishlist } = useWishlistStore()
  const [isWishlisted, setIsWishlisted] = useState(false)

  // Check if product is in wishlist on component mount and when wishlist changes
  useEffect(() => {
    setIsWishlisted(isInWishlist(product.id))
  }, [isInWishlist, product.id])

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1)
    }
  }

  const increaseQuantity = () => {
    setQuantity(quantity + 1)
  }

  const handleAddToCart = () => {
    // In a real implementation, this would add the product to the cart state
    toast({
      title: "Added to cart",
      description: `${product.name} (${selectedColor}, ${selectedSize}) x ${quantity} has been added to your cart.`,
    })
  }

  const handleToggleWishlist = () => {
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
        image: "/placeholder.svg?height=300&width=300", // This would be the actual product image
        slug: product.name.toLowerCase().replace(/\s+/g, "-"),
        color: selectedColor,
        size: selectedSize,
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
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">{product.name}</h1>

      {/* Price */}
      <div className="flex items-center space-x-2">
        {product.salePrice ? (
          <>
            <span className="text-2xl font-bold text-[#3B7A8B]">${product.salePrice.toFixed(2)}</span>
            <span className="text-lg text-gray-400 line-through">${product.price.toFixed(2)}</span>
          </>
        ) : (
          <span className="text-2xl font-bold text-[#3B7A8B]">${product.price.toFixed(2)}</span>
        )}
      </div>

      {/* Free Shipping Notice */}
      <div className="rounded-md bg-gray-50 p-3 text-sm">
        <p className="font-medium">Free shipping on orders over $50</p>
      </div>

      {/* Color Selection */}
      <div className="space-y-2">
        <Label htmlFor="color-selection" className="text-sm font-medium">
          Color: <span className="text-[#3B7A8B]">{selectedColor}</span>
        </Label>
        <RadioGroup
          id="color-selection"
          value={selectedColor}
          onValueChange={setSelectedColor}
          className="flex space-x-2"
        >
          {product.colors.map((color) => (
            <div key={color} className="flex items-center space-x-1">
              <RadioGroupItem value={color} id={`color-${color}`} className="sr-only" />
              <Label
                htmlFor={`color-${color}`}
                className={`relative flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border ${
                  selectedColor === color ? "border-[#3B7A8B] ring-2 ring-[#3B7A8B]" : "border-gray-200"
                }`}
                style={{
                  backgroundColor:
                    color.toLowerCase() === "blue"
                      ? "#3B7A8B"
                      : color.toLowerCase() === "black"
                        ? "#000000"
                        : color.toLowerCase() === "gray"
                          ? "#808080"
                          : color.toLowerCase() === "teal"
                            ? "#008080"
                            : "#FFFFFF",
                }}
              >
                <span className="sr-only">{color}</span>
              </Label>
            </div>
          ))}
        </RadioGroup>
      </div>

      {/* Size Selection */}
      <div className="space-y-2">
        <Label htmlFor="size-selection" className="text-sm font-medium">
          Size: <span className="text-[#3B7A8B]">{selectedSize}</span>
        </Label>
        <RadioGroup
          id="size-selection"
          value={selectedSize}
          onValueChange={setSelectedSize}
          className="flex flex-wrap gap-2"
        >
          {product.sizes.map((size) => (
            <div key={size} className="flex items-center space-x-1">
              <RadioGroupItem value={size} id={`size-${size}`} className="sr-only" />
              <Label
                htmlFor={`size-${size}`}
                className={`flex h-10 w-16 cursor-pointer items-center justify-center rounded-md border ${
                  selectedSize === size
                    ? "border-[#3B7A8B] bg-[#3B7A8B]/10 font-medium text-[#3B7A8B]"
                    : "border-gray-200 hover:border-gray-300"
                }`}
              >
                {size}
              </Label>
            </div>
          ))}
        </RadioGroup>
      </div>

      {/* Quantity Selector */}
      <div className="space-y-2">
        <Label htmlFor="quantity" className="text-sm font-medium">
          Quantity
        </Label>
        <div className="flex items-center space-x-2">
          <Button variant="outline" size="icon" onClick={decreaseQuantity} disabled={quantity <= 1}>
            <MinusCircle className="h-4 w-4" />
            <span className="sr-only">Decrease quantity</span>
          </Button>
          <div className="flex h-10 w-16 items-center justify-center rounded-md border">{quantity}</div>
          <Button variant="outline" size="icon" onClick={increaseQuantity}>
            <PlusCircle className="h-4 w-4" />
            <span className="sr-only">Increase quantity</span>
          </Button>
        </div>
      </div>

      {/* Add to Cart Button */}
      <div className="flex space-x-2">
        <Button size="lg" className="flex-1 bg-[#3B7A8B] hover:bg-[#3B7A8B]/90" onClick={handleAddToCart}>
          <ShoppingCart className="mr-2 h-5 w-5" /> Add to Cart
        </Button>
        <Button
          variant="outline"
          size="icon"
          className={`h-12 w-12 ${isWishlisted ? "border-[#3B7A8B] bg-[#3B7A8B]/10" : ""}`}
          onClick={handleToggleWishlist}
        >
          <Heart className={`h-5 w-5 ${isWishlisted ? "fill-[#3B7A8B] text-[#3B7A8B]" : ""}`} />
          <span className="sr-only">{isWishlisted ? "Remove from wishlist" : "Add to wishlist"}</span>
        </Button>
      </div>

      {/* Secure Checkout Notice */}
      <div className="text-center text-sm text-gray-500">
        <p>Secure checkout with cash on delivery</p>
      </div>
    </div>
  )
}
