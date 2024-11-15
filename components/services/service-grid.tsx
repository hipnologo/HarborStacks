'use client';

import { ServiceCard } from './service-card';
import { useStore } from '@/lib/store';
import { Service } from '@/lib/types/services';

interface ServiceGridProps {
  services: Service[];
  onInstall: (serviceId: string) => void;
}

export function ServiceGrid({ services, onInstall }: ServiceGridProps) {
  const { activeCategory, searchQuery } = useStore();

  const filteredServices = services.filter((service) => {
    const matchesCategory =
      activeCategory === 'all' || service.category === activeCategory;
    const matchesSearch =
      service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.description.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {filteredServices.map((service) => (
        <ServiceCard
          key={service.id}
          service={service}
          onInstall={() => onInstall(service.id)}
        />
      ))}
    </div>
  );
}