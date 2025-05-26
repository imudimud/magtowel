"use client"

import Link from "next/link"
import { useOrderStore } from "@/lib/order-store"
import { useAuthStore } from "@/lib/auth-store"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Button } from "@/components/ui/button"

export default function OrdersPage() {
  const { isAuthenticated } = useAuthStore()
  const { orders, markFulfilled, markShipped } = useOrderStore()

  if (!isAuthenticated) {
    return <div className="p-6">Please login to access admin.</div>
  }

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-[#3B7A8B]">Orders</h1>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>ID</TableHead>
            <TableHead>Customer</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Total</TableHead>
            <TableHead></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {orders.map((order) => (
            <TableRow key={order.id}>
              <TableCell>
                <Link href={`/admin/orders/${order.id}`}>#{order.id}</Link>
              </TableCell>
              <TableCell>{order.customer}</TableCell>
              <TableCell>{order.status}</TableCell>
              <TableCell>${order.total.toFixed(2)}</TableCell>
              <TableCell className="space-x-2">
                {order.status !== "fulfilled" && (
                  <Button size="sm" onClick={() => markFulfilled(order.id)}>
                    Fulfill
                  </Button>
                )}
                {order.status === "fulfilled" && (
                  <Button size="sm" onClick={() => markShipped(order.id)}>
                    Ship
                  </Button>
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
