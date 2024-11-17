'use client'

import { categories } from '@/lib/data/services'
import { useStore } from '@/lib/store'
import { cn } from '@/lib/utils'

export function CategoryFilter() {
  const { activeCategory, setActiveCategory } = useStore()

  return (
    <div className="flex flex-wrap gap-2 mb-8">
      {categories.map((category) => {
        const Icon = category.icon
        return (
          <button
            key={category.id}
            onClick={() => setActiveCategory(category.id)}
            className={cn(
              "inline-flex items-center px-4 py-2 rounded-lg transition-colors",
              activeCategory === category.id
                ? "bg-blue-500 text-white"
                : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
            )}
          >
            <Icon className="h-4 w-4 mr-2" />
            {category.label}
          </button>
        )
      })}
    </div>
  )
}