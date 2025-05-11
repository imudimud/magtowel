"use client"

import { useState } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { Filter, ChevronDown, ChevronUp } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Slider } from "@/components/ui/slider"

export default function ShopFilters() {
  const router = useRouter()
  const searchParams = useSearchParams()

  const [priceRange, setPriceRange] = useState([0, 100])
  const [expandedSections, setExpandedSections] = useState({
    availability: true,
    price: true,
    color: true,
    size: true,
  })

  const toggleSection = (section: keyof typeof expandedSections) => {
    setExpandedSections({
      ...expandedSections,
      [section]: !expandedSections[section],
    })
  }

  const handleFilterChange = () => {
    // In a real implementation, this would update the URL search params
    // and trigger a re-fetch of the products
    console.log("Filters changed:", { priceRange })
  }

  const clearFilters = () => {
    setPriceRange([0, 100])
    // In a real implementation, this would clear all filters
    router.push("/shop")
  }

  return (
    <div className="space-y-6 rounded-lg border p-4">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-medium text-[#3B7A8B]">Filters</h3>
        <Button variant="ghost" size="sm" onClick={clearFilters}>
          Clear All
        </Button>
      </div>

      {/* Availability Filter */}
      <div className="border-t pt-4">
        <button className="flex w-full items-center justify-between" onClick={() => toggleSection("availability")}>
          <h4 className="font-medium">Availability</h4>
          {expandedSections.availability ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
        </button>
        {expandedSections.availability && (
          <div className="mt-2 space-y-2">
            <div className="flex items-center space-x-2">
              <Checkbox id="in-stock" />
              <label htmlFor="in-stock" className="text-sm">
                In Stock
              </label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="out-of-stock" />
              <label htmlFor="out-of-stock" className="text-sm">
                Out of Stock
              </label>
            </div>
          </div>
        )}
      </div>

      {/* Price Filter */}
      <div className="border-t pt-4">
        <button className="flex w-full items-center justify-between" onClick={() => toggleSection("price")}>
          <h4 className="font-medium">Price</h4>
          {expandedSections.price ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
        </button>
        {expandedSections.price && (
          <div className="mt-4 space-y-4">
            <Slider defaultValue={priceRange} max={100} step={1} onValueChange={setPriceRange} />
            <div className="flex items-center justify-between">
              <span className="text-sm">${priceRange[0]}</span>
              <span className="text-sm">${priceRange[1]}</span>
            </div>
          </div>
        )}
      </div>

      {/* Color Filter */}
      <div className="border-t pt-4">
        <button className="flex w-full items-center justify-between" onClick={() => toggleSection("color")}>
          <h4 className="font-medium">Color</h4>
          {expandedSections.color ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
        </button>
        {expandedSections.color && (
          <div className="mt-2 space-y-2">
            <div className="flex items-center space-x-2">
              <Checkbox id="color-blue" />
              <label htmlFor="color-blue" className="text-sm">
                Blue
              </label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="color-black" />
              <label htmlFor="color-black" className="text-sm">
                Black
              </label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="color-gray" />
              <label htmlFor="color-gray" className="text-sm">
                Gray
              </label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="color-teal" />
              <label htmlFor="color-teal" className="text-sm">
                Teal
              </label>
            </div>
          </div>
        )}
      </div>

      {/* Size Filter */}
      <div className="border-t pt-4">
        <button className="flex w-full items-center justify-between" onClick={() => toggleSection("size")}>
          <h4 className="font-medium">Size</h4>
          {expandedSections.size ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
        </button>
        {expandedSections.size && (
          <div className="mt-2 space-y-2">
            <div className="flex items-center space-x-2">
              <Checkbox id="size-small" />
              <label htmlFor="size-small" className="text-sm">
                Small
              </label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="size-medium" />
              <label htmlFor="size-medium" className="text-sm">
                Medium
              </label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="size-large" />
              <label htmlFor="size-large" className="text-sm">
                Large
              </label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="size-xlarge" />
              <label htmlFor="size-xlarge" className="text-sm">
                X-Large
              </label>
            </div>
          </div>
        )}
      </div>

      <Button className="w-full bg-[#3B7A8B] hover:bg-[#3B7A8B]/90" onClick={handleFilterChange}>
        <Filter className="mr-2 h-4 w-4" /> Apply Filters
      </Button>
    </div>
  )
}
