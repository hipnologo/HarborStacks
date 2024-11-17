import { ServiceGrid } from '@/components/services/service-grid'
import { CategoryFilter } from '@/components/services/category-filter'

export default function DashboardPage() {
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
      
      <CategoryFilter />
      <ServiceGrid />
    </div>
  )
}