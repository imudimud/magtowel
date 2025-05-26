'use client'

import { SessionProvider } from 'next-auth/react'
import type { ReactNode } from 'react'
import { ThemeProvider } from '@/components/theme-provider'
import { SearchProvider } from '@/lib/search-context'
import { Toaster } from '@/components/ui/toaster'

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
