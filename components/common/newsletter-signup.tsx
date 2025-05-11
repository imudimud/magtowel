"use client"

import type React from "react"

import { useState } from "react"
import { Mail, ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useToast } from "@/hooks/use-toast"

export default function NewsletterSignup() {
  const [email, setEmail] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const { toast } = useToast()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate API call
    setTimeout(() => {
      // In a real implementation, this would submit the email to a newsletter service
      toast({
        title: "Success!",
        description: "You've been subscribed to our newsletter.",
      })

      setEmail("")
      setIsLoading(false)
    }, 1000)
  }

  return (
    <div className="flex flex-col items-center justify-center space-y-6 text-center">
      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#3B7A8B] text-white">
        <Mail className="h-8 w-8" />
      </div>
      <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-[#3B7A8B]">Stay Updated</h2>
      <p className="max-w-[600px] text-gray-600 md:text-lg">
        Subscribe to our newsletter for exclusive offers, new product announcements, and more.
      </p>
      <form onSubmit={handleSubmit} className="newsletter-form flex w-full max-w-md flex-col gap-3 sm:flex-row">
        <Input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="flex-1 border-0 focus:ring-2 focus:ring-[#3B7A8B]/20"
        />
        <Button type="submit" className="bg-[#E6C288] text-[#3B7A8B] hover:bg-[#E6C288]/90" disabled={isLoading}>
          {isLoading ? (
            <span className="flex items-center">
              <svg
                className="animate-spin -ml-1 mr-2 h-4 w-4 text-[#3B7A8B]"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              Subscribing...
            </span>
          ) : (
            <span className="flex items-center">
              Subscribe <ArrowRight className="ml-2 h-4 w-4" />
            </span>
          )}
        </Button>
      </form>
      <p className="text-xs text-gray-500">We respect your privacy. Unsubscribe at any time.</p>
    </div>
  )
}
