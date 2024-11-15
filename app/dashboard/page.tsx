'use client'

import { useState } from 'react'
import { ServiceGrid } from '@/components/services/service-grid'
import { CategoryFilter } from '@/components/services/category-filter'
import { InstallationModal } from '@/components/installers/installation-modal'
import { useInstallation } from '@/lib/context/installation'
import { services } from '@/lib/data/services'

export default function DashboardPage() {
  const { startInstallation } = useInstallation()
  const [selectedCategory, setSelectedCategory] = useState('all')

  const handleInstall = (serviceId: string) => {
    const service = services.find(s => s.id === serviceId)
    if (service) {
      startInstallation(service)
    }
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
          Docker Service Installer
        </h1>
        <p className="text-gray-600 dark:text-gray-300">
          Deploy containerized services with ease
        </p>
      </div>
      
      <CategoryFilter 
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />
      <ServiceGrid 
        services={services}
        selectedCategory={selectedCategory}
        onInstall={handleInstall}
      />
      <InstallationModal />
    </div>
  )
}