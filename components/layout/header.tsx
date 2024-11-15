'use client'

import { Package } from 'lucide-react'
import { ThemeToggle } from '@/components/ThemeToggle'
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'

export function Header() {
  const router = useRouter()

  return (
    <header className="h-16 border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950">
      <div className="h-full container mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Package className="h-6 w-6 text-blue-500" />
          <h1 className="text-xl font-bold">HarborStacks</h1>
        </div>
        
        <div className="flex items-center space-x-4">
          <ThemeToggle />
          <Button
            variant="ghost"
            onClick={() => router.push('/auth/login')}
          >
            Logout
          </Button>
        </div>
      </div>
    </header>
  )
}