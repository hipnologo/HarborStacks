import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import type { Settings } from '@/lib/types/settings'
import type { Service } from '@/lib/types/services'

interface StoreState {
  settings: Settings | null
  activeCategory: string
  searchQuery: string
  currentService: Service | null
  installationStatus: Record<number, 'waiting' | 'active' | 'complete' | 'error'>
  sidebarOpen: boolean
  setSettings: (settings: Settings) => void
  setActiveCategory: (category: string) => void
  setSearchQuery: (query: string) => void
  setCurrentService: (service: Service | null) => void
  setInstallationStatus: (status: Record<number, 'waiting' | 'active' | 'complete' | 'error'>) => void
  setSidebarOpen: (open: boolean) => void
}

export const useStore = create<StoreState>()(
  persist(
    (set) => ({
      settings: null,
      activeCategory: 'all',
      searchQuery: '',
      currentService: null,
      installationStatus: {},
      sidebarOpen: true,
      setSettings: (settings) => set({ settings }),
      setActiveCategory: (category) => set({ activeCategory: category }),
      setSearchQuery: (query) => set({ searchQuery: query }),
      setCurrentService: (service) => set({ currentService: service }),
      setInstallationStatus: (status) => set({ installationStatus: status }),
      setSidebarOpen: (open) => set({ sidebarOpen: open }),
    }),
    {
      name: 'harborstack-store',
    }
  )
)