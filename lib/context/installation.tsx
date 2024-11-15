'use client'

import React, { createContext, useContext, useState } from 'react'
import type { Service } from '@/lib/types/services'

interface InstallationStatus {
  step: number
  status: 'waiting' | 'active' | 'complete' | 'error'
  message?: string
}

interface InstallationContextType {
  currentService: Service | null
  status: Record<number, InstallationStatus>
  startInstallation: (service: Service) => void
  cancelInstallation: () => void
  setInstallationStatus: (step: number, status: InstallationStatus) => void
}

const InstallationContext = createContext<InstallationContextType | undefined>(undefined)

export function InstallationProvider({ children }: { children: React.ReactNode }) {
  const [currentService, setCurrentService] = useState<Service | null>(null)
  const [status, setStatus] = useState<Record<number, InstallationStatus>>({})

  const startInstallation = (service: Service) => {
    setCurrentService(service)
    setStatus({
      0: { step: 0, status: 'waiting', message: 'Starting installation...' }
    })
  }

  const cancelInstallation = () => {
    setCurrentService(null)
    setStatus({})
  }

  const setInstallationStatus = (step: number, status: InstallationStatus) => {
    setStatus(prev => ({
      ...prev,
      [step]: status
    }))
  }

  return (
    <InstallationContext.Provider
      value={{
        currentService,
        status,
        startInstallation,
        cancelInstallation,
        setInstallationStatus
      }}
    >
      {children}
    </InstallationContext.Provider>
  )
}

export function useInstallation() {
  const context = useContext(InstallationContext)
  if (context === undefined) {
    throw new Error('useInstallation must be used within an InstallationProvider')
  }
  return context
}