"use client"

import { useState } from "react"
import { useRouter, useSearchParams } from "next/navigation"

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function ShopSort() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [sort, setSort] = useState("featured")

  const handleSortChange = (value: string) => {
    setSort(value)

    // In a real implementation, this would update the URL search params
    // and trigger a re-fetch of the products
    const params = new URLSearchParams(searchParams.toString())
    params.set("sort", value)
    router.push(`/shop?${params.toString()}`)
  }

  return (
    <div className="flex items-center space-x-2">
      <span className="text-sm font-medium">Sort by:</span>
      <Select value={sort} onValueChange={handleSortChange}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Sort by" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="featured">Featured</SelectItem>
          <SelectItem value="newest">Newest</SelectItem>
          <SelectItem value="price-low-high">Price: Low to High</SelectItem>
          <SelectItem value="price-high-low">Price: High to Low</SelectItem>
          <SelectItem value="best-selling">Best Selling</SelectItem>
        </SelectContent>
      </Select>
    </div>
  )
}
