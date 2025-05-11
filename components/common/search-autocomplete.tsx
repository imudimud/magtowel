"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { Search, X, Clock, ArrowRight, Trash2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useSearch, type SearchProduct } from "@/lib/search-context"
import { useClickOutside } from "@/hooks/use-click-outside"

export default function SearchAutocomplete() {
  const router = useRouter()
  const {
    searchQuery,
    setSearchQuery,
    searchResults,
    isSearchOpen,
    setIsSearchOpen,
    recentSearches,
    addToRecentSearches,
    clearRecentSearches,
  } = useSearch()
  const [isFocused, setIsFocused] = useState(false)
  const searchRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  // Close dropdown when clicking outside
  useClickOutside(searchRef, () => {
    setIsFocused(false)
  })

  // Focus input when search is opened
  useEffect(() => {
    if (isSearchOpen && inputRef.current) {
      inputRef.current.focus()
    }
  }, [isSearchOpen])

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      addToRecentSearches(searchQuery)
      router.push(`/shop?search=${encodeURIComponent(searchQuery)}`)
      setIsFocused(false)
      setIsSearchOpen(false)
    }
  }

  const handleRecentSearchClick = (query: string) => {
    setSearchQuery(query)
    router.push(`/shop?search=${encodeURIComponent(query)}`)
    setIsFocused(false)
    setIsSearchOpen(false)
  }

  const handleResultClick = (product: SearchProduct) => {
    addToRecentSearches(searchQuery)
    router.push(`/products/${product.slug}`)
    setIsFocused(false)
    setIsSearchOpen(false)
  }

  const closeSearch = () => {
    setIsSearchOpen(false)
    setSearchQuery("")
    setIsFocused(false)
  }

  return (
    <div ref={searchRef} className="relative w-full">
      <form onSubmit={handleSearch} className="relative">
        <Input
          ref={inputRef}
          type="search"
          placeholder="Search for products..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onFocus={() => setIsFocused(true)}
          className="pl-10 pr-10 h-11 border-[#3B7A8B]/20 focus:border-[#3B7A8B] focus:ring-[#3B7A8B]/20"
        />
        <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
        {searchQuery && (
          <button
            type="button"
            onClick={() => setSearchQuery("")}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
          >
            <X className="h-5 w-5" />
            <span className="sr-only">Clear search</span>
          </button>
        )}
      </form>

      {/* Autocomplete dropdown */}
      {isFocused && (isSearchOpen || searchQuery) && (
        <div className="absolute left-0 right-0 top-full z-50 mt-1 max-h-[80vh] overflow-y-auto rounded-lg border bg-white shadow-lg">
          {/* Recent searches */}
          {searchQuery === "" && recentSearches.length > 0 && (
            <div className="p-4">
              <div className="mb-2 flex items-center justify-between">
                <h3 className="text-sm font-medium text-gray-500">Recent Searches</h3>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={clearRecentSearches}
                  className="h-auto p-1 text-xs text-gray-500 hover:text-red-500"
                >
                  <Trash2 className="mr-1 h-3 w-3" />
                  Clear
                </Button>
              </div>
              <ul className="space-y-2">
                {recentSearches.map((query, index) => (
                  <li key={index}>
                    <button
                      onClick={() => handleRecentSearchClick(query)}
                      className="flex w-full items-center rounded-md p-2 text-left text-sm hover:bg-gray-100"
                    >
                      <Clock className="mr-2 h-4 w-4 text-gray-400" />
                      <span className="flex-1 truncate">{query}</span>
                      <ArrowRight className="h-4 w-4 text-gray-400" />
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Search results */}
          {searchQuery !== "" && (
            <div className="p-4">
              <h3 className="mb-2 text-sm font-medium text-gray-500">
                {searchResults.length > 0
                  ? `${searchResults.length} results for "${searchQuery}"`
                  : `No results for "${searchQuery}"`}
              </h3>

              {searchResults.length > 0 ? (
                <ul className="space-y-3">
                  {searchResults.map((product) => (
                    <li key={product.id}>
                      <button
                        onClick={() => handleResultClick(product)}
                        className="flex w-full items-center rounded-md p-2 text-left hover:bg-gray-100"
                      >
                        <div className="h-12 w-12 flex-shrink-0 overflow-hidden rounded-md border">
                          <Image
                            src={product.image || "/placeholder.svg"}
                            alt={product.name}
                            width={48}
                            height={48}
                            className="h-full w-full object-cover"
                          />
                        </div>
                        <div className="ml-3 flex-1">
                          <p className="text-sm font-medium">{product.name}</p>
                          <p className="text-xs text-gray-500">{product.category}</p>
                        </div>
                        <p className="text-sm font-medium text-[#3B7A8B]">${product.price.toFixed(2)}</p>
                      </button>
                    </li>
                  ))}
                </ul>
              ) : (
                <div className="py-3 text-center text-sm text-gray-500">
                  <p>Try a different search term or browse our categories</p>
                </div>
              )}

              {searchResults.length > 0 && (
                <div className="mt-4 text-center">
                  <Button onClick={handleSearch} className="text-sm bg-[#3B7A8B] hover:bg-[#3B7A8B]/90 text-white">
                    View All Results <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              )}
            </div>
          )}
        </div>
      )}

      {/* Close button for mobile */}
      {isSearchOpen && (
        <Button
          variant="ghost"
          size="sm"
          onClick={closeSearch}
          className="absolute right-0 top-full mt-2 text-sm text-gray-500"
        >
          Cancel
        </Button>
      )}
    </div>
  )
}
