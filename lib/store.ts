import { create } from 'zustand'
import { type Service } from '@/lib/types/services'

interface StoreState {
  activeCategory: string
  searchQuery: string
  currentService: Service | null
  installationStatus: Record<number, 'waiting' | 'active' | 'complete' | 'error'>
  setActiveCategory: (category: string) => void
  setSearchQuery: (query: string) => void
  setCurrentService: (service: Service | null) => void
  setInstallationStatus: (status: Record<number, 'waiting' | 'active' | 'complete' | 'error'>) => void
}

export const useStore = create<StoreState>((set) => ({
  activeCategory: 'all',
  searchQuery: '',
  currentService: null,
  installationStatus: {},
  setActiveCategory: (category) => set({ activeCategory: category }),
  setSearchQuery: (query) => set({ searchQuery: query }),
  setCurrentService: (service) => set({ currentService: service }),
  setInstallationStatus: (status) => set({ installationStatus: status }),
}))