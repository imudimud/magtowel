import { create } from "zustand"
import { persist } from "zustand/middleware"

export interface WishlistItem {
  id: number
  name: string
  price: number
  image: string
  slug: string
  color?: string
  size?: string
  salePrice?: number
}

interface WishlistState {
  items: WishlistItem[]
  addItem: (item: WishlistItem) => void
  removeItem: (id: number) => void
  isInWishlist: (id: number) => boolean
  clearWishlist: () => void
}

export const useWishlistStore = create<WishlistState>()(
  persist(
    (set, get) => ({
      items: [],
      addItem: (item) =>
        set((state) => {
          // Check if item already exists in wishlist
          const existingItem = state.items.find((i) => i.id === item.id)
          if (existingItem) {
            return state // Item already exists, no change
          }
          return { items: [...state.items, item] }
        }),
      removeItem: (id) =>
        set((state) => ({
          items: state.items.filter((i) => i.id !== id),
        })),
      isInWishlist: (id) => {
        const state = get()
        return state.items.some((item) => item.id === id)
      },
      clearWishlist: () => set({ items: [] }),
    }),
    {
      name: "magtowel-wishlist",
    },
  ),
)
