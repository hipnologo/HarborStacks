// components/services/category-filter.tsx
'use client'

import { Button } from '@/components/ui/button'
import { ServiceCategory } from '@/lib/types/services' // Add this import

interface CategoryFilterProps {
  categories: ServiceCategory[]  // Change this from string[] to ServiceCategory[]
  selectedCategory: string
  onSelectCategory: (category: string) => void
}

export function CategoryFilter({
  categories,
  selectedCategory,
  onSelectCategory,
}: CategoryFilterProps) {
  return (
    <div className="flex flex-wrap gap-2">
      <Button
        variant={selectedCategory === 'all' ? 'default' : 'outline'}
        onClick={() => onSelectCategory('all')}
      >
        All
      </Button>
      {categories.map((category) => (
        <Button
          key={category.id}  // Use category.id as the key
          variant={selectedCategory === category.id ? 'default' : 'outline'}
          onClick={() => onSelectCategory(category.id)}
        >
          {category.name}  // Display category.name
        </Button>
      ))}
    </div>
  )
}