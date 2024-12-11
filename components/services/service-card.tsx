// components/services/service-card.tsx
'use client'

import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import type { Service } from '@/lib/types/services'
import { Package, ArrowRight } from 'lucide-react'

interface ServiceCardProps {
  service: Service
  onInstall: () => void
  onLearnMore?: () => void
}

export function ServiceCard({ service, onInstall, onLearnMore }: ServiceCardProps) {
  return (
    <Card className="p-6">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            {service.name}
          </h3>
          {service.popular && (
            <span className="inline-block px-2 py-1 text-xs font-medium text-blue-600 bg-blue-100 rounded-full">
              Popular
            </span>
          )}
        </div>
        <Package className="h-5 w-5 text-gray-400" />
      </div>

      <p className="text-gray-600 dark:text-gray-300 mb-4">
        {service.description}
      </p>

      <div className="space-y-2 mb-6">
        {service.requirements.map((req) => (
          <div key={req} className="flex items-center text-sm text-gray-500">
            <div className="w-2 h-2 rounded-full bg-blue-500 mr-2" />
            {req} required
          </div>
        ))}
      </div>

      <div className="flex space-x-3">
        <Button 
          onClick={onInstall}
          className="flex-1 flex items-center justify-center"
        >
          <span>Install</span>
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
        {onLearnMore && (
          <Button variant="outline" onClick={onLearnMore}>
            Learn more
          </Button>
        )}
      </div>
    </Card>
  )
}