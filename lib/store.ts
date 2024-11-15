import { create } from 'zustand';
import { type Service } from '@/lib/types/services';

interface StoreState {
  activeCategory: string;
  searchQuery: string;
  currentService: Service | null;
  installationStatus: Record<number, 'waiting' | 'active' | 'complete' | 'error'>;
  sidebarOpen: boolean;
  setActiveCategory: (category: string) => void;
  setSearchQuery: (query: string) => void;
  setCurrentService: (service: Service | null) => void;
  setInstallationStatus: (status: Record<number, 'waiting' | 'active' | 'complete' | 'error'>) => void;
  setSidebarOpen: (open: boolean) => void;
}

// Export default store hook
export const useStore = create<StoreState>((set) => ({
  activeCategory: 'all',
  searchQuery: '',
  currentService: null,
  installationStatus: {},
  sidebarOpen: true,
  setActiveCategory: (category) => set({ activeCategory: category }),
  setSearchQuery: (query) => set({ searchQuery: query }),
  setCurrentService: (service) => set({ currentService: service }),
  setInstallationStatus: (status) => set({ installationStatus: status }),
  setSidebarOpen: (open) => set({ sidebarOpen: open }),
}));

// Alias if needed, for multiple roles or direct UI store export:
export const useUIStore = useStore;
