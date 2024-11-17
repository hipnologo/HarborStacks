'use client'

import { useState } from "react"
import { categories, services } from "@/lib/data/services"
import { CategoryFilter } from "@/components/services/category-filter"
import { SearchHeader } from "@/components/services/search-header"
import { ServiceGrid } from "@/components/services/service-grid"
import { InstallationModal } from "@/components/installers/installation-modal"
import { useInstallation } from "@/lib/context/installation"

export default function ServicesPage() {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [searchQuery, setSearchQuery] = useState("")
  const [showAdvanced, setShowAdvanced] = useState(false)
  const { startInstallation } = useInstallation()

  const filteredServices = services.filter((service) => {
    const matchesCategory =
      selectedCategory === "all" || service.category === selectedCategory
    const matchesSearch =
      service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.description.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const handleInstall = (serviceId: string) => {
    const service = services.find(s => s.id === serviceId)
    if (service) {
      startInstallation(service)
    }
  }

  return (
    <>
      <div className="h-full space-y-8">
        <SearchHeader
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          onToggleAdvanced={() => setShowAdvanced(!showAdvanced)}
        />

        <CategoryFilter
          categories={categories}
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
        />

        <ServiceGrid
          services={filteredServices}
          onInstall={handleInstall}
          onLearnMore={(id) => console.log("Learn more:", id)}
        />
      </div>
      <InstallationModal />
    </>
  )
}