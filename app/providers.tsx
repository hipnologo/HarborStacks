// app/providers.tsx
'use client'

import { ThemeProvider } from 'next-themes'
import { ToastProvider } from '@/components/ui/toast'
import { Toaster } from '@/components/ui/toaster'
import { InstallationProvider } from '@/lib/context/installation'
import { SessionProvider } from 'next-auth/react'

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <SessionProvider>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <InstallationProvider>
          <ToastProvider>
            {children}
            <Toaster />
          </ToastProvider>
        </InstallationProvider>
      </ThemeProvider>
    </SessionProvider>
  )
}