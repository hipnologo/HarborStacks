'use client'

import { ThemeProvider } from 'next-themes'
import { InstallationProvider } from '@/lib/context/installation'

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <InstallationProvider>
        {children}
      </InstallationProvider>
    </ThemeProvider>
  )
}