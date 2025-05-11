"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Trash2, ShoppingBag, ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useToast } from "@/hooks/use-toast"

// Mock cart data
// In a real implementation, this would come from a cart state management system
const initialCartItems = [
  {
    id: 1,
    name: "Classic MagTowel",
    price: 29.99,
    image: "/placeholder.svg?height=100&width=100",
    color: "Blue",
    size: "Medium",
    quantity: 1,
  },
  {
    id: 2,
    name: "Premium MagTowel",
    price: 39.99,
    image: "/placeholder.svg?height=100&width=100",
    color: "Black",
    size: "Large",
    quantity: 2,
  },
]

export default function CartPage() {
  const [cartItems, setCartItems] = useState(initialCartItems)
  const [promoCode, setPromoCode] = useState("")
  const { toast } = useToast()

  // Calculate cart totals
  const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0)
  const shipping = subtotal > 50 ? 0 : 5.99
  const total = subtotal + shipping

  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity < 1) return

    setCartItems(cartItems.map((item) => (item.id === id ? { ...item, quantity: newQuantity } : item)))
  }

  const removeItem = (id: number) => {
    setCartItems(cartItems.filter((item) => item.id !== id))

    toast({
      title: "Item removed",
      description: "The item has been removed from your cart.",
    })
  }

  const applyPromoCode = (e: React.FormEvent) => {
    e.preventDefault()

    toast({
      title: "Promo code applied",
      description: `Promo code "${promoCode}" has been applied to your order.`,
    })

    setPromoCode("")
  }

  return (
    <main className="flex min-h-screen flex-col">
      <div className="container mx-auto px-4 py-8 md:px-6">
        <h1 className="mb-8 text-3xl font-bold text-[#3B7A8B]">Your Cart</h1>

        {cartItems.length > 0 ? (
          <div className="grid gap-8 lg:grid-cols-3">
            {/* Cart Items */}
            <div className="lg:col-span-2">
              <div className="rounded-lg border shadow-sm">
                <div className="p-6">
                  <h2 className="mb-4 text-xl font-semibold">Cart Items ({cartItems.length})</h2>
                  <div className="divide-y">
                    {cartItems.map((item) => (
                      <div key={item.id} className="flex py-6">
                        <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border">
                          <Image
                            src={item.image || "/placeholder.svg"}
                            alt={item.name}
                            width={100}
                            height={100}
                            className="h-full w-full object-cover"
                          />
                        </div>
                        <div className="ml-4 flex flex-1 flex-col">
                          <div className="flex justify-between text-base font-medium">
                            <h3>{item.name}</h3>
                            <p className="ml-4">${(item.price * item.quantity).toFixed(2)}</p>
                          </div>
                          <p className="mt-1 text-sm text-gray-500">
                            {item.color} / {item.size}
                          </p>
                          <div className="mt-4 flex flex-1 items-end justify-between">
                            <div className="flex items-center border rounded-md">
                              <button
                                className="px-3 py-1 text-gray-600 hover:text-gray-800"
                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              >
                                -
                              </button>
                              <span className="px-3 py-1">{item.quantity}</span>
                              <button
                                className="px-3 py-1 text-gray-600 hover:text-gray-800"
                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              >
                                +
                              </button>
                            </div>
                            <button
                              type="button"
                              className="text-sm font-medium text-red-600 hover:text-red-800"
                              onClick={() => removeItem(item.id)}
                            >
                              <Trash2 className="h-5 w-5" />
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="rounded-lg border shadow-sm">
                <div className="p-6">
                  <h2 className="mb-4 text-xl font-semibold">Order Summary</h2>
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <p>Subtotal</p>
                      <p>${subtotal.toFixed(2)}</p>
                    </div>
                    <div className="flex justify-between">
                      <p>Shipping</p>
                      <p>{shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}</p>
                    </div>
                    <div className="flex justify-between border-t pt-4 font-bold">
                      <p>Total</p>
                      <p>${total.toFixed(2)}</p>
                    </div>
                  </div>

                  {/* Promo Code */}
                  <div className="mt-6">
                    <form onSubmit={applyPromoCode} className="flex space-x-2">
                      <Input
                        type="text"
                        placeholder="Promo code"
                        value={promoCode}
                        onChange={(e) => setPromoCode(e.target.value)}
                        className="flex-1"
                      />
                      <Button type="submit" variant="outline">
                        Apply
                      </Button>
                    </form>
                  </div>

                  {/* Checkout Button */}
                  <div className="mt-6">
                    <Button asChild className="w-full bg-[#3B7A8B] hover:bg-[#3B7A8B]/90">
                      <Link href="/checkout">
                        Proceed to Checkout <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center space-y-4 rounded-lg border py-12 text-center">
            <ShoppingBag className="h-16 w-16 text-gray-400" />
            <h2 className="text-xl font-semibold">Your cart is empty</h2>
            <p className="text-gray-500">Looks like you haven't added any products to your cart yet.</p>
            <Button asChild className="mt-4 bg-[#3B7A8B] hover:bg-[#3B7A8B]/90">
              <Link href="/shop">Continue Shopping</Link>
            </Button>
          </div>
        )}
      </div>
    </main>
  )
}
