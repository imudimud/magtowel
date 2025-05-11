"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, CreditCard, Truck, ShieldCheck } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { useToast } from "@/hooks/use-toast"

// Mock cart data
// In a real implementation, this would come from a cart state management system
const cartItems = [
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

export default function CheckoutPage() {
  const { toast } = useToast()
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    postalCode: "",
    specialInstructions: "",
  })

  // Calculate cart totals
  const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0)
  const shipping = subtotal > 50 ? 0 : 5.99
  const total = subtotal + shipping

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // In a real implementation, this would submit the order to a backend API
    toast({
      title: "Order placed successfully!",
      description: "Thank you for your order. We'll contact you shortly to confirm.",
    })
  }

  return (
    <main className="flex min-h-screen flex-col">
      <div className="container mx-auto px-4 py-8 md:px-6">
        <h1 className="mb-8 text-3xl font-bold text-[#3B7A8B]">Checkout</h1>

        <div className="grid gap-8 lg:grid-cols-3">
          {/* Checkout Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Personal Information */}
              <div className="rounded-lg border p-6 shadow-sm">
                <h2 className="mb-4 text-xl font-semibold">Personal Information</h2>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name *</Label>
                    <Input
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name *</Label>
                    <Input
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Shipping Information */}
              <div className="rounded-lg border p-6 shadow-sm">
                <h2 className="mb-4 text-xl font-semibold">Shipping Information</h2>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="address">Address *</Label>
                    <Input id="address" name="address" value={formData.address} onChange={handleInputChange} required />
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="city">City *</Label>
                      <Input id="city" name="city" value={formData.city} onChange={handleInputChange} required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="state">State/Province *</Label>
                      <Input id="state" name="state" value={formData.state} onChange={handleInputChange} required />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="postalCode">Postal Code *</Label>
                    <Input
                      id="postalCode"
                      name="postalCode"
                      value={formData.postalCode}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Special Instructions */}
              <div className="rounded-lg border p-6 shadow-sm">
                <h2 className="mb-4 text-xl font-semibold">Special Instructions</h2>
                <div className="space-y-2">
                  <Label htmlFor="specialInstructions">Add any special requests or delivery instructions</Label>
                  <Textarea
                    id="specialInstructions"
                    name="specialInstructions"
                    value={formData.specialInstructions}
                    onChange={handleInputChange}
                    rows={4}
                    placeholder="E.g., Delivery time preferences, landmarks to help find the address, etc."
                  />
                </div>
              </div>

              {/* Payment Method */}
              <div className="rounded-lg border p-6 shadow-sm">
                <h2 className="mb-4 text-xl font-semibold">Payment Method</h2>
                <RadioGroup defaultValue="cash" className="space-y-3">
                  <div className="flex items-center space-x-3 rounded-lg border p-4">
                    <RadioGroupItem value="cash" id="cash" />
                    <Label htmlFor="cash" className="flex flex-1 items-center gap-2">
                      <CreditCard className="h-5 w-5" />
                      <div>
                        <p className="font-medium">Cash on Delivery</p>
                        <p className="text-sm text-gray-500">Pay when you receive your order</p>
                      </div>
                    </Label>
                  </div>
                </RadioGroup>
              </div>

              {/* Submit Button (Mobile) */}
              <div className="lg:hidden">
                <Button type="submit" className="w-full bg-[#3B7A8B] hover:bg-[#3B7A8B]/90">
                  Place Order
                </Button>
              </div>
            </form>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="rounded-lg border shadow-sm">
              <div className="p-6">
                <h2 className="mb-4 text-xl font-semibold">Order Summary</h2>

                {/* Order Items */}
                <div className="max-h-80 space-y-4 overflow-y-auto">
                  {cartItems.map((item) => (
                    <div key={item.id} className="flex items-center space-x-4">
                      <div className="h-16 w-16 flex-shrink-0 overflow-hidden rounded-md border">
                        <Image
                          src={item.image || "/placeholder.svg"}
                          alt={item.name}
                          width={64}
                          height={64}
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-sm font-medium">{item.name}</h3>
                        <p className="text-xs text-gray-500">
                          {item.color} / {item.size} x {item.quantity}
                        </p>
                      </div>
                      <p className="text-sm font-medium">${(item.price * item.quantity).toFixed(2)}</p>
                    </div>
                  ))}
                </div>

                {/* Order Totals */}
                <div className="mt-6 space-y-4 border-t pt-4">
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

                {/* Trust Badges */}
                <div className="mt-6 space-y-4 border-t pt-4">
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <Truck className="h-5 w-5" />
                    <span>Free shipping on orders over $50</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <ShieldCheck className="h-5 w-5" />
                    <span>Secure checkout</span>
                  </div>
                </div>

                {/* Submit Button (Desktop) */}
                <div className="mt-6 hidden lg:block">
                  <Button type="submit" form="checkout-form" className="w-full bg-[#3B7A8B] hover:bg-[#3B7A8B]/90">
                    Place Order
                  </Button>
                </div>

                {/* Back to Cart */}
                <div className="mt-4 text-center">
                  <Link href="/cart" className="inline-flex items-center text-sm text-[#3B7A8B] hover:underline">
                    <ArrowLeft className="mr-1 h-4 w-4" /> Back to Cart
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
