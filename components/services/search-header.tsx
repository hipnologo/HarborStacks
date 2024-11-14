'use client'

import { Search } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { useStore } from '@/lib/store'

export function SearchHeader() {
  const { searchQuery, setSearchQuery } = useStore()

  return (
    <div className="flex items-center space-x-4 mb-8">
      <div className="relative flex-1">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
        <Input
          type="text"
          placeholder="Search services..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="pl-10"
        />
      </div>
    </div>
  )
}