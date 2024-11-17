// app/layout.tsx
import { Providers } from './providers'
import { InstallationProvider } from '@/lib/context/installation'
import { Inter } from 'next/font/google'
import '../styles/globals.css'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} antialiased min-h-screen bg-background`}>
        <Providers>
          <InstallationProvider>
            <div className="relative flex min-h-screen flex-col">
              {children}
            </div>
          </InstallationProvider>
        </Providers>
      </body>
    </html>
  )
}