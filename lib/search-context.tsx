"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

// Mock product data for search
// In a real implementation, this would come from an API or database
export interface SearchProduct {
  id: number
  name: string
  price: number
  image: string
  slug: string
  category: string
  description: string
}

const mockProducts: SearchProduct[] = [
  {
    id: 1,
    name: "Classic MagTowel",
    price: 29.99,
    image: "/placeholder.svg?height=300&width=300",
    slug: "classic-magtowel",
    category: "Towels",
    description: "The original MagTowel that started it all. Perfect for everyday use.",
  },
  {
    id: 2,
    name: "Premium MagTowel",
    price: 39.99,
    image: "/placeholder.svg?height=300&width=300",
    slug: "premium-magtowel",
    category: "Towels",
    description: "Our premium version with extra features for the discerning customer.",
  },
  {
    id: 3,
    name: "Travel MagTowel",
    price: 24.99,
    image: "/placeholder.svg?height=300&width=300",
    slug: "travel-magtowel",
    category: "Towels",
    description: "Compact and lightweight, perfect for travelers and those on the go.",
  },
  {
    id: 4,
    name: "Sport MagTowel",
    price: 34.99,
    image: "/placeholder.svg?height=300&width=300",
    slug: "sport-magtowel",
    category: "Towels",
    description: "Designed specifically for sports and fitness activities.",
  },
  {
    id: 5,
    name: "Beach MagTowel",
    price: 44.99,
    image: "/placeholder.svg?height=300&width=300",
    slug: "beach-magtowel",
    category: "Towels",
    description: "Extra large size perfect for beach days and sunbathing.",
  },
  {
    id: 6,
    name: "Gym MagTowel",
    price: 32.99,
    image: "/placeholder.svg?height=300&width=300",
    slug: "gym-magtowel",
    category: "Towels",
    description: "Compact size perfect for gym workouts and fitness classes.",
  },
  {
    id: 7,
    name: "MagTowel Carrying Pouch",
    price: 12.99,
    image: "/placeholder.svg?height=300&width=300",
    slug: "magtowel-carrying-pouch",
    category: "Accessories",
    description: "Waterproof pouch to carry your MagTowel wherever you go.",
  },
  {
    id: 8,
    name: "MagTowel Hanging Hooks",
    price: 9.99,
    image: "/placeholder.svg?height=300&width=300",
    slug: "magtowel-hanging-hooks",
    category: "Accessories",
    description: "Metal hooks for hanging your MagTowel at home or in the gym.",
  },
]

interface SearchContextType {
  searchQuery: string
  setSearchQuery: (query: string) => void
  searchResults: SearchProduct[]
  isSearchOpen: boolean
  setIsSearchOpen: (isOpen: boolean) => void
  recentSearches: string[]
  addToRecentSearches: (query: string) => void
  clearRecentSearches: () => void
}

const SearchContext = createContext<SearchContextType | undefined>(undefined)

export function SearchProvider({ children }: { children: ReactNode }) {
  const [searchQuery, setSearchQuery] = useState("")
  const [searchResults, setSearchResults] = useState<SearchProduct[]>([])
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [recentSearches, setRecentSearches] = useState<string[]>([])

  // Load recent searches from localStorage on mount
  useEffect(() => {
    const savedSearches = localStorage.getItem("recentSearches")
    if (savedSearches) {
      setRecentSearches(JSON.parse(savedSearches))
    }
  }, [])

  // Save recent searches to localStorage when updated
  useEffect(() => {
    localStorage.setItem("recentSearches", JSON.stringify(recentSearches))
  }, [recentSearches])

  // Update search results when query changes
  useEffect(() => {
    if (searchQuery.trim() === "") {
      setSearchResults([])
      return
    }

    const query = searchQuery.toLowerCase()
    const results = mockProducts.filter(
      (product) =>
        product.name.toLowerCase().includes(query) ||
        product.description.toLowerCase().includes(query) ||
        product.category.toLowerCase().includes(query),
    )

    setSearchResults(results)
  }, [searchQuery])

  const addToRecentSearches = (query: string) => {
    if (query.trim() === "") return

    setRecentSearches((prev) => {
      // Remove the query if it already exists to avoid duplicates
      const filtered = prev.filter((item) => item !== query)
      // Add the new query to the beginning and limit to 5 items
      return [query, ...filtered].slice(0, 5)
    })
  }

  const clearRecentSearches = () => {
    setRecentSearches([])
    localStorage.removeItem("recentSearches")
  }

  return (
    <SearchContext.Provider
      value={{
        searchQuery,
        setSearchQuery,
        searchResults,
        isSearchOpen,
        setIsSearchOpen,
        recentSearches,
        addToRecentSearches,
        clearRecentSearches,
      }}
    >
      {children}
    </SearchContext.Provider>
  )
}

export function useSearch() {
  const context = useContext(SearchContext)
  if (context === undefined) {
    throw new Error("useSearch must be used within a SearchProvider")
  }
  return context
}
