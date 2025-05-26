"use client"

import { create } from "zustand"
import { persist } from "zustand/middleware"

export type OrderStatus = "pending" | "fulfilled" | "shipped"

export interface OrderItem {
  id: number
  name: string
  price: number
  quantity: number
}

export interface Order {
  id: number
  customer: string
  total: number
  status: OrderStatus
  items: OrderItem[]
}

interface OrderState {
  orders: Order[]
  markFulfilled: (id: number) => void
  markShipped: (id: number) => void
  updateOrder: (id: number, data: Partial<Order>) => void
}

export const useOrderStore = create<OrderState>()(
  persist(
    (set) => ({
      orders: [
        {
          id: 1,
          customer: "John Doe",
          total: 69.98,
          status: "pending" as OrderStatus,
          items: [
            { id: 1, name: "Classic MagTowel", price: 29.99, quantity: 1 },
            { id: 2, name: "Premium MagTowel", price: 39.99, quantity: 1 },
          ],
        },
        {
          id: 2,
          customer: "Sarah Lee",
          total: 39.99,
          status: "pending" as OrderStatus,
          items: [
            { id: 2, name: "Premium MagTowel", price: 39.99, quantity: 1 },
          ],
        },
      ],
      markFulfilled: (id) =>
        set((state) => ({
          orders: state.orders.map((o) =>
            o.id === id ? { ...o, status: "fulfilled" } : o,
          ),
        })),
      markShipped: (id) =>
        set((state) => ({
          orders: state.orders.map((o) =>
            o.id === id ? { ...o, status: "shipped" } : o,
          ),
        })),
      updateOrder: (id, data) =>
        set((state) => ({
          orders: state.orders.map((o) => (o.id === id ? { ...o, ...data } : o)),
        })),
    }),
    {
      name: "magtowel-orders",
    },
  ),
)
