"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { User, Package, Heart, Settings, LogOut, Edit, Camera, Trash2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent } from "@/components/ui/tabs"
import { useToast } from "@/hooks/use-toast"
import { useWishlistStore } from "@/lib/wishlist-store"
import type { Order } from "@/lib/order"

export default function AccountPage() {
  const { toast } = useToast()
  const [activeTab, setActiveTab] = useState("profile")
  const [profileData, setProfileData] = useState({
    firstName: "Ahmed",
    lastName: "Benali",
    email: "ahmed.benali@example.com",
    phone: "+213 XX XX XX XX",
    address: "123 Main Street",
    city: "Algiers",
    state: "Algiers",
    postalCode: "16000",
  })
  const [isEditing, setIsEditing] = useState(false)
  const { items: wishlistItems, removeItem } = useWishlistStore()
  const [mounted, setMounted] = useState(false)

  // Fix hydration issues by only rendering wishlist after mount
  useEffect(() => {
    setMounted(true)

    // Check if there's a tab parameter in the URL
    const urlParams = new URLSearchParams(window.location.search)
    const tabParam = urlParams.get("tab")
    if (tabParam) {
      setActiveTab(tabParam)
    }
  }, [])

  const [orders, setOrders] = useState<Order[]>([])

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const res = await fetch('/api/orders')
        if (res.ok) {
          const data = await res.json()
          setOrders(data)
        }
      } catch {
        // ignore
      }
    }

    fetchOrders()
  }, [])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setProfileData({
      ...profileData,
      [name]: value,
    })
  }

  const handleSaveProfile = () => {
    // In a real implementation, this would update the profile data in the backend
    setIsEditing(false)
    toast({
      title: "Profile updated",
      description: "Your profile information has been updated successfully.",
    })
  }

  const handleRemoveFromWishlist = (id: number) => {
    removeItem(id)
    toast({
      title: "Item removed",
      description: "The item has been removed from your wishlist.",
    })
  }

  return (
    <main className="flex min-h-screen flex-col">
      <div className="container mx-auto px-4 py-8 md:px-6">
        <h1 className="mb-8 text-3xl font-bold text-[#3B7A8B]">My Account</h1>

        <div className="grid gap-8 lg:grid-cols-4">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="rounded-lg border p-6 shadow-sm">
              <div className="mb-6 flex flex-col items-center">
                <div className="relative mb-4">
                  <div className="h-24 w-24 overflow-hidden rounded-full">
                    <Image
                      src="/placeholder.svg?height=100&width=100"
                      alt="Profile"
                      width={100}
                      height={100}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <button className="absolute bottom-0 right-0 rounded-full bg-[#3B7A8B] p-1.5 text-white hover:bg-[#3B7A8B]/90">
                    <Camera className="h-4 w-4" />
                  </button>
                </div>
                <h2 className="text-xl font-semibold">
                  {profileData.firstName} {profileData.lastName}
                </h2>
                <p className="text-sm text-gray-500">{profileData.email}</p>
              </div>

              <nav className="space-y-1">
                <Button
                  variant={activeTab === "profile" ? "default" : "ghost"}
                  className={`w-full justify-start ${
                    activeTab === "profile" ? "bg-[#3B7A8B] hover:bg-[#3B7A8B]/90" : ""
                  }`}
                  onClick={() => setActiveTab("profile")}
                >
                  <User className="mr-2 h-5 w-5" />
                  Profile
                </Button>
                <Button
                  variant={activeTab === "orders" ? "default" : "ghost"}
                  className={`w-full justify-start ${
                    activeTab === "orders" ? "bg-[#3B7A8B] hover:bg-[#3B7A8B]/90" : ""
                  }`}
                  onClick={() => setActiveTab("orders")}
                >
                  <Package className="mr-2 h-5 w-5" />
                  Orders
                </Button>
                <Button
                  variant={activeTab === "wishlist" ? "default" : "ghost"}
                  className={`w-full justify-start ${
                    activeTab === "wishlist" ? "bg-[#3B7A8B] hover:bg-[#3B7A8B]/90" : ""
                  }`}
                  onClick={() => setActiveTab("wishlist")}
                >
                  <Heart className="mr-2 h-5 w-5" />
                  Wishlist
                </Button>
                <Button
                  variant={activeTab === "settings" ? "default" : "ghost"}
                  className={`w-full justify-start ${
                    activeTab === "settings" ? "bg-[#3B7A8B] hover:bg-[#3B7A8B]/90" : ""
                  }`}
                  onClick={() => setActiveTab("settings")}
                >
                  <Settings className="mr-2 h-5 w-5" />
                  Settings
                </Button>
                <Button
                  variant="ghost"
                  className="w-full justify-start text-red-500 hover:bg-red-50 hover:text-red-600"
                >
                  <LogOut className="mr-2 h-5 w-5" />
                  Logout
                </Button>
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              {/* Profile Tab */}
              <TabsContent value="profile" className="rounded-lg border p-6 shadow-sm">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-semibold">Profile Information</h2>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setIsEditing(!isEditing)}
                    className="flex items-center"
                  >
                    <Edit className="mr-2 h-4 w-4" />
                    {isEditing ? "Cancel" : "Edit Profile"}
                  </Button>
                </div>

                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="firstName" className="mb-1 block text-sm font-medium">
                      First Name
                    </label>
                    <Input
                      id="firstName"
                      name="firstName"
                      value={profileData.firstName}
                      onChange={handleInputChange}
                      disabled={!isEditing}
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="mb-1 block text-sm font-medium">
                      Last Name
                    </label>
                    <Input
                      id="lastName"
                      name="lastName"
                      value={profileData.lastName}
                      onChange={handleInputChange}
                      disabled={!isEditing}
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="mb-1 block text-sm font-medium">
                      Email Address
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={profileData.email}
                      onChange={handleInputChange}
                      disabled={!isEditing}
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="mb-1 block text-sm font-medium">
                      Phone Number
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      value={profileData.phone}
                      onChange={handleInputChange}
                      disabled={!isEditing}
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="address" className="mb-1 block text-sm font-medium">
                      Address
                    </label>
                    <Input
                      id="address"
                      name="address"
                      value={profileData.address}
                      onChange={handleInputChange}
                      disabled={!isEditing}
                    />
                  </div>
                  <div>
                    <label htmlFor="city" className="mb-1 block text-sm font-medium">
                      City
                    </label>
                    <Input
                      id="city"
                      name="city"
                      value={profileData.city}
                      onChange={handleInputChange}
                      disabled={!isEditing}
                    />
                  </div>
                  <div>
                    <label htmlFor="state" className="mb-1 block text-sm font-medium">
                      State/Province
                    </label>
                    <Input
                      id="state"
                      name="state"
                      value={profileData.state}
                      onChange={handleInputChange}
                      disabled={!isEditing}
                    />
                  </div>
                  <div>
                    <label htmlFor="postalCode" className="mb-1 block text-sm font-medium">
                      Postal Code
                    </label>
                    <Input
                      id="postalCode"
                      name="postalCode"
                      value={profileData.postalCode}
                      onChange={handleInputChange}
                      disabled={!isEditing}
                    />
                  </div>
                </div>

                {isEditing && (
                  <div className="mt-6 flex justify-end">
                    <Button className="bg-[#3B7A8B] hover:bg-[#3B7A8B]/90" onClick={handleSaveProfile}>
                      Save Changes
                    </Button>
                  </div>
                )}
              </TabsContent>

              {/* Orders Tab */}
              <TabsContent value="orders" className="rounded-lg border p-6 shadow-sm">
                <h2 className="mb-6 text-2xl font-semibold">Order History</h2>

                {orders.length > 0 ? (
                  <div className="space-y-6">
                    {orders.map((order) => (
                      <div key={order.id} className="rounded-lg border overflow-hidden">
                        <div className="bg-gray-50 p-4">
                          <div className="flex flex-wrap items-center justify-between gap-2">
                            <div>
                              <p className="font-medium">Order #{order.id}</p>
                              <p className="text-sm text-gray-500">Placed on {order.date}</p>
                            </div>
                            <div className="flex items-center gap-4">
                              <div>
                                <span
                                  className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                                    order.status === "Delivered"
                                      ? "bg-green-100 text-green-800"
                                      : order.status === "Processing"
                                        ? "bg-blue-100 text-blue-800"
                                        : "bg-yellow-100 text-yellow-800"
                                  }`}
                                >
                                  {order.status}
                                </span>
                              </div>
                              <Button variant="outline" size="sm" asChild>
                                <Link href={`/account/orders/${order.id}`}>View Details</Link>
                              </Button>
                            </div>
                          </div>
                        </div>
                        <div className="p-4">
                          <div className="space-y-4">
                            {order.items.map((item) => (
                              <div key={item.id} className="flex items-center gap-4">
                                <div className="h-20 w-20 flex-shrink-0 overflow-hidden rounded-md border">
                                  <Image
                                    src={item.image || "/placeholder.svg"}
                                    alt={item.name}
                                    width={80}
                                    height={80}
                                    className="h-full w-full object-cover"
                                  />
                                </div>
                                <div className="flex-1">
                                  <h3 className="font-medium">{item.name}</h3>
                                  <p className="text-sm text-gray-500">
                                    {item.color} / {item.size} x {item.quantity}
                                  </p>
                                  <p className="text-sm">${item.price.toFixed(2)}</p>
                                </div>
                                <Button variant="ghost" size="sm" asChild>
                                  <Link href={`/products/${item.name.toLowerCase().replace(" ", "-")}`}>Buy Again</Link>
                                </Button>
                              </div>
                            ))}
                          </div>
                          <div className="mt-4 border-t pt-4 text-right">
                            <p className="font-medium">Total: ${order.total.toFixed(2)}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="rounded-lg border border-dashed p-8 text-center">
                    <Package className="mx-auto mb-4 h-12 w-12 text-gray-400" />
                    <h3 className="text-lg font-medium">No orders yet</h3>
                    <p className="mt-2 text-gray-500">When you place an order, it will appear here.</p>
                    <Button asChild className="mt-4 bg-[#3B7A8B] hover:bg-[#3B7A8B]/90">
                      <Link href="/shop">Start Shopping</Link>
                    </Button>
                  </div>
                )}
              </TabsContent>

              {/* Wishlist Tab */}
              <TabsContent value="wishlist" className="rounded-lg border p-6 shadow-sm">
                <h2 className="mb-6 text-2xl font-semibold">My Wishlist</h2>

                {mounted && wishlistItems.length > 0 ? (
                  <div className="grid gap-6 sm:grid-cols-2">
                    {wishlistItems.map((item) => (
                      <div key={item.id} className="rounded-lg border p-4">
                        <div className="flex gap-4">
                          <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md">
                            <Image
                              src={item.image || "/placeholder.svg"}
                              alt={item.name}
                              width={100}
                              height={100}
                              className="h-full w-full object-cover"
                            />
                          </div>
                          <div className="flex flex-1 flex-col">
                            <h3 className="font-medium">{item.name}</h3>
                            <div className="mt-1">
                              {item.salePrice ? (
                                <div className="flex items-center gap-2">
                                  <span className="font-medium text-[#3B7A8B]">${item.salePrice.toFixed(2)}</span>
                                  <span className="text-sm text-gray-500 line-through">${item.price.toFixed(2)}</span>
                                </div>
                              ) : (
                                <span className="font-medium">${item.price.toFixed(2)}</span>
                              )}
                            </div>
                            <div className="mt-auto flex flex-wrap gap-2 pt-2">
                              <Button asChild size="sm" className="flex-1 bg-[#3B7A8B] hover:bg-[#3B7A8B]/90">
                                <Link href={`/products/${item.slug}`}>View Product</Link>
                              </Button>
                              <Button
                                variant="outline"
                                size="sm"
                                className="flex-1"
                                onClick={() => handleRemoveFromWishlist(item.id)}
                              >
                                <Trash2 className="mr-2 h-4 w-4" />
                                Remove
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="rounded-lg border border-dashed p-8 text-center">
                    <Heart className="mx-auto mb-4 h-12 w-12 text-gray-400" />
                    <h3 className="text-lg font-medium">Your wishlist is empty</h3>
                    <p className="mt-2 text-gray-500">
                      Save items you're interested in by clicking the heart icon on product pages.
                    </p>
                    <Button asChild className="mt-4 bg-[#3B7A8B] hover:bg-[#3B7A8B]/90">
                      <Link href="/shop">Explore Products</Link>
                    </Button>
                  </div>
                )}
              </TabsContent>

              {/* Settings Tab */}
              <TabsContent value="settings" className="rounded-lg border p-6 shadow-sm">
                <h2 className="mb-6 text-2xl font-semibold">Account Settings</h2>

                <div className="space-y-6">
                  {/* Password Change */}
                  <div className="rounded-lg border p-4">
                    <h3 className="text-lg font-medium">Change Password</h3>
                    <p className="mt-1 text-sm text-gray-500">Update your password to keep your account secure.</p>
                    <div className="mt-4 space-y-4">
                      <div>
                        <label htmlFor="currentPassword" className="mb-1 block text-sm font-medium">
                          Current Password
                        </label>
                        <Input id="currentPassword" type="password" />
                      </div>
                      <div>
                        <label htmlFor="newPassword" className="mb-1 block text-sm font-medium">
                          New Password
                        </label>
                        <Input id="newPassword" type="password" />
                      </div>
                      <div>
                        <label htmlFor="confirmPassword" className="mb-1 block text-sm font-medium">
                          Confirm New Password
                        </label>
                        <Input id="confirmPassword" type="password" />
                      </div>
                      <Button className="bg-[#3B7A8B] hover:bg-[#3B7A8B]/90">Update Password</Button>
                    </div>
                  </div>

                  {/* Notification Preferences */}
                  <div className="rounded-lg border p-4">
                    <h3 className="text-lg font-medium">Notification Preferences</h3>
                    <p className="mt-1 text-sm text-gray-500">Manage how and when you receive notifications from us.</p>
                    <div className="mt-4 space-y-2">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">Order Updates</p>
                          <p className="text-sm text-gray-500">Receive updates about your orders</p>
                        </div>
                        <div className="flex items-center">
                          <input
                            type="checkbox"
                            id="orderUpdates"
                            className="h-4 w-4 rounded border-gray-300 text-[#3B7A8B] focus:ring-[#3B7A8B]"
                            defaultChecked
                          />
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">Promotional Emails</p>
                          <p className="text-sm text-gray-500">Receive emails about sales and new products</p>
                        </div>
                        <div className="flex items-center">
                          <input
                            type="checkbox"
                            id="promotionalEmails"
                            className="h-4 w-4 rounded border-gray-300 text-[#3B7A8B] focus:ring-[#3B7A8B]"
                            defaultChecked
                          />
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">Newsletter</p>
                          <p className="text-sm text-gray-500">Receive our monthly newsletter</p>
                        </div>
                        <div className="flex items-center">
                          <input
                            type="checkbox"
                            id="newsletter"
                            className="h-4 w-4 rounded border-gray-300 text-[#3B7A8B] focus:ring-[#3B7A8B]"
                            defaultChecked
                          />
                        </div>
                      </div>
                    </div>
                    <Button className="mt-4 bg-[#3B7A8B] hover:bg-[#3B7A8B]/90">Save Preferences</Button>
                  </div>

                  {/* Delete Account */}
                  <div className="rounded-lg border border-red-200 bg-red-50 p-4">
                    <h3 className="text-lg font-medium text-red-600">Delete Account</h3>
                    <p className="mt-1 text-sm text-red-500">
                      Once you delete your account, there is no going back. Please be certain.
                    </p>
                    <Button variant="destructive" className="mt-4">
                      Delete Account
                    </Button>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </main>
  )
}
