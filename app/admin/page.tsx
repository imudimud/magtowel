"use client"

import { useState } from "react"
import Link from "next/link"
import { useAuthStore } from "@/lib/auth-store"
import { useOrderStore } from "@/lib/order-store"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function AdminPage() {
  const { isAuthenticated, login, logout } = useAuthStore()
  const { orders } = useOrderStore()
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    login(username, password)
  }

  const totalSales = orders.reduce((sum, order) => sum + order.total, 0)

  if (!isAuthenticated) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <Card className="w-full max-w-sm">
          <CardHeader>
            <CardTitle>Admin Login</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-4">
              <Input
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <Input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <Button
                type="submit"
                className="w-full bg-[#3B7A8B] hover:bg-[#3B7A8B]/90"
              >
                Login
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-[#3B7A8B]">Admin Dashboard</h1>
        <Button variant="outline" onClick={logout}>
          Logout
        </Button>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Metrics</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-xl font-semibold">
            Total Sales: ${totalSales.toFixed(2)}
          </p>
        </CardContent>
      </Card>
      <Link href="/admin/orders">
        <Button className="bg-[#3B7A8B] hover:bg-[#3B7A8B]/90">View Orders</Button>
      </Link>
    </div>
  )
}
