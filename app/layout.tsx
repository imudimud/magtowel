import type React from "react"
import { Inter, Montserrat } from "next/font/google"
import type { Metadata } from "next"

import "./globals.css"
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import { Providers } from "@/components/providers"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
})

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-heading",
})

export const metadata: Metadata = {
  title: "MagTowel - Innovative Magnetic Towels",
  description:
    "Experience the convenience of MagTowel - innovative magnetic towels for gym, beach, and outdoor activities.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${montserrat.variable}`}>
      <body className="font-sans">
        <Providers>
          <div className="flex min-h-screen flex-col">
            <Header />
            <div className="flex-1">{children}</div>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  )
}
