"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Menu, ShoppingCart, Search, User, Heart } from "lucide-react"
import { useSession } from "next-auth/react"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetClose, SheetTrigger } from "@/components/ui/sheet"
import { Badge } from "@/components/ui/badge"
import { useMobile } from "@/hooks/use-mobile"
import { useCartStore } from "@/lib/store"
import { useWishlistStore } from "@/lib/wishlist-store"
import SearchAutocomplete from "@/components/common/search-autocomplete"
import { useSearch } from "@/lib/search-context"

export default function Header() {
  const pathname = usePathname()
  const isMobile = useMobile()
  const { data: session } = useSession()
  const [isScrolled, setIsScrolled] = useState(false)
  const cartItems = useCartStore((state) => state.items)
  const wishlistItems = useWishlistStore((state) => state.items)
  const [mounted, setMounted] = useState(false)

  const cartItemCount = cartItems.reduce((total, item) => total + item.quantity, 0)
  const wishlistItemCount = wishlistItems.length

  const { isSearchOpen, setIsSearchOpen } = useSearch()

  // Fix hydration issues by only rendering counts after mount
  useEffect(() => {
    setMounted(true)
  }, [])

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen)
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/shop", label: "Shop" },
    { href: "/about", label: "About" },
    { href: "/giveback", label: "Giveback" },
    { href: "/blog", label: "Blog" },
    { href: "/support", label: "Support" },
  ]

  return (
    <header
      className={`sticky top-0 z-50 w-full bg-white transition-all duration-300 ${isScrolled ? "shadow-md" : ""}`}
    >
      {/* Announcement Bar */}
      <div className="bg-gradient-to-r from-[#3B7A8B] to-[#5B8C5A] py-2 text-center text-sm text-white">
        <p>Free shipping on orders over $50 • Use code MAGTOWEL10 for 10% off</p>
      </div>

      <div className="container-custom">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/placeholder.svg?height=40&width=150"
              alt="MagTowel Logo"
              width={150}
              height={40}
              className="h-10 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex md:items-center md:space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-[#3B7A8B] ${
                  pathname === link.href ? "text-[#3B7A8B] font-semibold" : "text-secondary"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden items-center space-x-4 md:flex">
            <Button
              onClick={toggleSearch}
              variant="ghost"
              size="icon"
              className="rounded-full text-secondary hover:bg-[#3B7A8B]/10 hover:text-[#3B7A8B]"
            >
              <Search className="h-5 w-5" />
              <span className="sr-only">Search</span>
            </Button>
            <Link href={session ? "/account" : "/login"} className="flex items-center space-x-2">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full text-secondary hover:bg-[#3B7A8B]/10 hover:text-[#3B7A8B]"
              >
                <User className="h-5 w-5" />
                <span className="sr-only">Account</span>
              </Button>
              {session?.user?.name && (
                <span className="hidden text-sm font-medium md:block">{session.user.name}</span>
              )}
            </Link>
            <Link href="/wishlist" className="relative">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full text-secondary hover:bg-[#3B7A8B]/10 hover:text-[#3B7A8B]"
              >
                <Heart className="h-5 w-5" />
                <span className="sr-only">Wishlist</span>
              </Button>
              {mounted && wishlistItemCount > 0 && (
                <Badge className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-[#3B7A8B] p-0 text-xs font-bold text-white">
                  {wishlistItemCount}
                </Badge>
              )}
            </Link>
            <Link href="/cart" className="relative">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full text-secondary hover:bg-[#3B7A8B]/10 hover:text-[#3B7A8B]"
              >
                <ShoppingCart className="h-5 w-5" />
                <span className="sr-only">Cart</span>
              </Button>
              {mounted && cartItemCount > 0 && (
                <Badge className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-[#3B7A8B] p-0 text-xs font-bold text-white">
                  {cartItemCount}
                </Badge>
              )}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center space-x-4 md:hidden">
            <Link href="/wishlist" className="relative">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full text-secondary hover:bg-[#3B7A8B]/10 hover:text-[#3B7A8B]"
              >
                <Heart className="h-5 w-5" />
                <span className="sr-only">Wishlist</span>
              </Button>
              {mounted && wishlistItemCount > 0 && (
                <Badge className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-[#3B7A8B] p-0 text-xs font-bold text-white">
                  {wishlistItemCount}
                </Badge>
              )}
            </Link>

            <Link href="/cart" className="relative">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full text-secondary hover:bg-[#3B7A8B]/10 hover:text-[#3B7A8B]"
              >
                <ShoppingCart className="h-5 w-5" />
                <span className="sr-only">Cart</span>
              </Button>
              {mounted && cartItemCount > 0 && (
                <Badge className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-[#3B7A8B] p-0 text-xs font-bold text-white">
                  {cartItemCount}
                </Badge>
              )}
            </Link>

            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full text-secondary hover:bg-[#3B7A8B]/10 hover:text-[#3B7A8B]"
                >
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-[300px] sm:w-[350px]">
                <SheetHeader className="mb-6">
                  <SheetTitle className="text-left">Menu</SheetTitle>
                </SheetHeader>
                <nav className="flex flex-col space-y-4">
                  {navLinks.map((link) => (
                    <SheetClose asChild key={link.href}>
                      <Link
                        href={link.href}
                        className={`flex items-center py-2 text-base font-medium transition-colors hover:text-[#3B7A8B] ${
                          pathname === link.href ? "text-[#3B7A8B] font-semibold" : "text-secondary"
                        }`}
                      >
                        {link.label}
                      </Link>
                    </SheetClose>
                  ))}
                  <div className="my-4 border-t pt-4">
                    <div className="mb-4">
                      <SearchAutocomplete />
                    </div>
                    <SheetClose asChild>
                      <Link
                        href={session ? "/account" : "/login"}
                        className="flex items-center py-2 text-base font-medium text-secondary transition-colors hover:text-[#3B7A8B]"
                      >
                        <User className="mr-3 h-5 w-5" />
                        <span>{session?.user?.name ?? 'Account'}</span>
                      </Link>
                    </SheetClose>
                    <SheetClose asChild>
                      <Link
                        href="/wishlist"
                        className="flex items-center py-2 text-base font-medium text-secondary transition-colors hover:text-[#3B7A8B]"
                      >
                        <Heart className="mr-3 h-5 w-5" />
                        <span>Wishlist</span>
                        {mounted && wishlistItemCount > 0 && (
                          <Badge className="ml-2 bg-[#3B7A8B]">{wishlistItemCount}</Badge>
                        )}
                      </Link>
                    </SheetClose>
                  </div>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>

        {/* Search Bar */}
        {isSearchOpen && (
          <div className="border-t py-4 animate-fade-in">
            <SearchAutocomplete />
          </div>
        )}
      </div>
    </header>
  )
}
