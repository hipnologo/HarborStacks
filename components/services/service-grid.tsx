'use client'

import { ServiceCard } from './service-card'
import type { Service } from '@/lib/types/services'

interface ServiceGridProps {
  services: Service[]
  onInstall: (serviceId: string) => void
  onLearnMore?: (serviceId: string) => void
}

export function ServiceGrid({ services, onInstall, onLearnMore }: ServiceGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {services.map((service) => (
        <ServiceCard
          key={service.id}
          service={service}
          onInstall={() => onInstall(service.id)}
          onLearnMore={onLearnMore ? () => onLearnMore(service.id) : undefined}
        />
      ))}
    </div>
  )
}