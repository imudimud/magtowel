'use client'

import { SessionProvider } from 'next-auth/react'
import { ThemeProvider } from './theme-provider'
import { SearchProvider } from '@/lib/search-context'
import { Toaster } from './ui/toaster'
import type { ReactNode } from 'react'

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <SessionProvider>
      <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
        <SearchProvider>
          {children}
          <Toaster />
        </SearchProvider>
      </ThemeProvider>
    </SessionProvider>
  )
}
