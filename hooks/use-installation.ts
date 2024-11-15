// hooks/use-installation.ts

'use client';

import { useState } from 'react';
import type { Service } from '@/lib/types/services';

export function useInstallation() {
  const [installing, setInstalling] = useState(false);

  const startInstallation = (service: Service) => {
    setInstalling(true);
    console.log(`Installing ${service.name}...`);
    
    // Simulate installation process
    setTimeout(() => {
      setInstalling(false);
      console.log(`${service.name} installed successfully!`);
    }, 2000);
  };

  return { installing, startInstallation };
}
