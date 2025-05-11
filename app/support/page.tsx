"use client"

import type React from "react"

import { useState } from "react"
import { MessageSquare, Phone, Mail, HelpCircle } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useToast } from "@/hooks/use-toast"

export default function SupportPage() {
  const { toast } = useToast()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    issueType: "",
    message: "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleSelectChange = (value: string) => {
    setFormData({
      ...formData,
      issueType: value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // In a real implementation, this would submit the support ticket to a backend API
    toast({
      title: "Support ticket submitted",
      description: "We'll get back to you as soon as possible.",
    })

    // Reset form
    setFormData({
      name: "",
      email: "",
      subject: "",
      issueType: "",
      message: "",
    })
  }

  return (
    <main className="flex min-h-screen flex-col">
      <div className="container mx-auto px-4 py-8 md:px-6">
        <h1 className="mb-8 text-3xl font-bold text-[#29ABE2]">Customer Support</h1>

        <div className="grid gap-8 lg:grid-cols-3">
          {/* Support Form */}
          <div className="lg:col-span-2">
            <div className="rounded-lg border p-6 shadow-sm">
              <h2 className="mb-6 text-xl font-semibold">Submit a Support Ticket</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="name">Your Name *</Label>
                    <Input id="name" name="name" value={formData.name} onChange={handleInputChange} required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject *</Label>
                  <Input id="subject" name="subject" value={formData.subject} onChange={handleInputChange} required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="issueType">Issue Type *</Label>
                  <Select value={formData.issueType} onValueChange={handleSelectChange} required>
                    <SelectTrigger>
                      <SelectValue placeholder="Select an issue type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="order">Order Status</SelectItem>
                      <SelectItem value="shipping">Shipping & Delivery</SelectItem>
                      <SelectItem value="product">Product Information</SelectItem>
                      <SelectItem value="returns">Returns & Refunds</SelectItem>
                      <SelectItem value="technical">Technical Issues</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={6}
                    required
                  />
                </div>
                <Button type="submit" className="bg-[#29ABE2] hover:bg-[#29ABE2]/90">
                  <MessageSquare className="mr-2 h-4 w-4" /> Submit Ticket
                </Button>
              </form>
            </div>
          </div>

          {/* Contact Information */}
          <div className="lg:col-span-1">
            <div className="rounded-lg border p-6 shadow-sm">
              <h2 className="mb-6 text-xl font-semibold">Contact Information</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Phone className="mt-1 h-5 w-5 text-[#29ABE2]" />
                  <div>
                    <h3 className="font-medium">Phone Support</h3>
                    <p className="mt-1 text-sm text-gray-600">+213 XX XX XX XX</p>
                    <p className="mt-1 text-sm text-gray-600">Monday - Friday: 9:00 AM - 5:00 PM (Algerian Time)</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Mail className="mt-1 h-5 w-5 text-[#29ABE2]" />
                  <div>
                    <h3 className="font-medium">Email Support</h3>
                    <p className="mt-1 text-sm text-gray-600">support@magtowel.com</p>
                    <p className="mt-1 text-sm text-gray-600">We typically respond within 24 hours</p>
                  </div>
                </div>
              </div>
            </div>

            {/* FAQ Section */}
            <div className="mt-8 rounded-lg border p-6 shadow-sm">
              <h2 className="mb-6 text-xl font-semibold">Frequently Asked Questions</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="flex items-center font-medium">
                    <HelpCircle className="mr-2 h-4 w-4 text-[#29ABE2]" />
                    How do I track my order?
                  </h3>
                  <p className="mt-1 text-sm text-gray-600">
                    You will receive a tracking number via email once your order has been shipped.
                  </p>
                </div>
                <div>
                  <h3 className="flex items-center font-medium">
                    <HelpCircle className="mr-2 h-4 w-4 text-[#29ABE2]" />
                    What is your return policy?
                  </h3>
                  <p className="mt-1 text-sm text-gray-600">
                    We offer a 30-day return policy for unused items in original packaging.
                  </p>
                </div>
                <div>
                  <h3 className="flex items-center font-medium">
                    <HelpCircle className="mr-2 h-4 w-4 text-[#29ABE2]" />
                    How do I care for my MagTowel?
                  </h3>
                  <p className="mt-1 text-sm text-gray-600">
                    Machine wash cold with like colors. Do not use bleach or fabric softener. Tumble dry low.
                  </p>
                </div>
                <div className="text-center">
                  <Button variant="link" className="text-[#29ABE2]" asChild>
                    <a href="/faq">View All FAQs</a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
