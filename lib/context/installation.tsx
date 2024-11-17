'use client';

import { createContext, useContext, useState } from 'react';
import type { Service } from '@/lib/types/services';

interface InstallationContextType {
  currentService: Service | null;
  status: Record<number, {
    status: 'waiting' | 'active' | 'complete' | 'error';
    message?: string;
  }>;
  startInstallation: (service: Service) => void;
  cancelInstallation: () => void;
  updateStatus: (step: number, status: string, message?: string) => void;
}

const InstallationContext = createContext<InstallationContextType | undefined>(undefined);

export function InstallationProvider({ children }: { children: React.ReactNode }) {
  const [currentService, setCurrentService] = useState<Service | null>(null);
  const [status, setStatus] = useState<Record<number, any>>({});

  const startInstallation = (service: Service) => {
    setCurrentService(service);
    // Initialize status for all installation steps
    const initialStatus = (service.installSteps || []).reduce((acc, _, index) => {
      acc[index] = { status: 'waiting' };
      return acc;
    }, {} as Record<number, any>);
    setStatus(initialStatus);
  };

  const cancelInstallation = () => {
    setCurrentService(null);
    setStatus({});
  };

  const updateStatus = (step: number, status: string, message?: string) => {
    setStatus(prev => ({
      ...prev,
      [step]: { status, message }
    }));
  };

  return (
    <InstallationContext.Provider value={{
      currentService,
      status,
      startInstallation,
      cancelInstallation,
      updateStatus
    }}>
      {children}
    </InstallationContext.Provider>
  );
}

export function useInstallation() {
  const context = useContext(InstallationContext);
  if (context === undefined) {
    throw new Error('useInstallation must be used within an InstallationProvider');
  }
  return context;
}