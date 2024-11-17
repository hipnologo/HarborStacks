// lib/context/installation.tsx
'use client'

import { createContext, useContext, useState } from 'react'
import type { Service } from '@/lib/types/services'

interface InstallationContextType {
  isInstalling: boolean
  currentService: Service | null
  startInstallation: (service: Service) => void
  stopInstallation: () => void
}

const InstallationContext = createContext<InstallationContextType | undefined>(undefined)

export function InstallationProvider({ children }: { children: React.ReactNode }) {
  const [isInstalling, setIsInstalling] = useState(false)
  const [currentService, setCurrentService] = useState<Service | null>(null)

  const startInstallation = (service: Service) => {
    setCurrentService(service)
    setIsInstalling(true)
  }

  const stopInstallation = () => {
    setCurrentService(null)
    setIsInstalling(false)
  }

  const value = {
    isInstalling,
    currentService,
    startInstallation,
    stopInstallation,
  }

  return (
    <InstallationContext.Provider value={value}>
      {children}
    </InstallationContext.Provider>
  )
}

export function useInstallation() {
  const context = useContext(InstallationContext)
  if (!context) {
    throw new Error('useInstallation must be used within an InstallationProvider')
  }
  return context
}