"use client";

import { useState } from "react";
import { categories, services } from "@/lib/data/services";
import { CategoryFilter } from "@/components/services/category-filter";
import { SearchHeader } from "@/components/services/search-header";
import { ServiceCard } from "@/components/services/service-card";
import { ServiceGrid } from "@/components/services/service-grid";

export default function ServicesPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [showAdvanced, setShowAdvanced] = useState(false);

  const filteredServices = services.filter((service) => {
    const matchesCategory =
      selectedCategory === "all" || service.category === selectedCategory;
    const matchesSearch =
      service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleInstall = (serviceId: string) => {
    // Will be implemented in the next step
    console.log("Installing service:", serviceId);
  };

  const handleLearnMore = (serviceId: string) => {
    // Will be implemented in the next step
    console.log("Learn more about service:", serviceId);
  };

  return (
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

      <ServiceGrid>
        {filteredServices.map((service) => (
          <ServiceCard
            key={service.id}
            service={service}
            onInstall={handleInstall}
            onLearnMore={handleLearnMore}
          />
        ))}
      </ServiceGrid>
    </div>
  );
}