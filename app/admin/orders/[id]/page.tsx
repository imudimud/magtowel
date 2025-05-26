"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { useOrderStore } from "@/lib/order-store"
import { useAuthStore } from "@/lib/auth-store"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"

export default function OrderDetail({ params }: { params: { id: string } }) {
  const { isAuthenticated } = useAuthStore()
  const { orders, updateOrder, markFulfilled, markShipped } = useOrderStore()
  const router = useRouter()
  const order = orders.find((o) => o.id === Number(params.id))
  const [customer, setCustomer] = useState(order?.customer || "")

  if (!isAuthenticated) {
    return <div className="p-6">Please login to access admin.</div>
  }

  if (!order) {
    return <div className="p-6">Order not found.</div>
  }

  const handleSave = () => {
    updateOrder(order.id, { customer })
    router.push("/admin/orders")
  }

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-[#3B7A8B]">Edit Order #{order.id}</h1>
      <Card>
        <CardHeader>
          <CardTitle>Order Details</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <label className="mb-2 block text-sm font-medium">Customer</label>
            <Input value={customer} onChange={(e) => setCustomer(e.target.value)} />
          </div>
          <div>Status: {order.status}</div>
          <div>Total: ${order.total.toFixed(2)}</div>
          <div className="space-x-2">
            {order.status !== "fulfilled" && (
              <Button size="sm" onClick={() => markFulfilled(order.id)}>
                Mark Fulfilled
              </Button>
            )}
            {order.status === "fulfilled" && (
              <Button size="sm" onClick={() => markShipped(order.id)}>
                Mark Shipped
              </Button>
            )}
          </div>
          <Button onClick={handleSave} className="bg-[#3B7A8B] hover:bg-[#3B7A8B]/90">
            Save
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
