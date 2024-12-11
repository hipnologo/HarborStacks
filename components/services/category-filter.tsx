// components/services/category-filter.tsx
'use client'

import { Button } from '@/components/ui/button'
import { ServiceCategory } from '@/lib/types/services'

interface CategoryFilterProps {
  categories: ServiceCategory[]
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
      {categories.map((category) => {
        const Icon = category.icon;
        return (
          <Button
            key={category.id}
            variant={selectedCategory === category.id ? 'default' : 'outline'}
            onClick={() => onSelectCategory(category.id)}
          >
            <Icon className="mr-2 h-4 w-4" />
            {category.label}
          </Button>
        );
      })}
    </div>
  )
}