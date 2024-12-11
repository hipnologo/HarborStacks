// lib/types/services.ts
import { LucideIcon } from "lucide-react";

export interface ServiceCategory {
  id: string;
  label: string;
  icon: LucideIcon;
}

export interface Service {
  id: string;
  name: string;
  description: string;
  category: string;
  popular?: boolean;
  requirements: string[]; // Updated from requiresConfig
  configSteps?: ConfigStep[]; 
  installSteps?: string[]; 
}

export interface ConfigStep {
  title: string
  description?: string
  fields: ConfigField[]
}

export interface ConfigField {
  name: string
  label: string
  type: 'text' | 'email' | 'password' | 'number'
  placeholder?: string
  required?: boolean
  validation?: {
    pattern?: string
    min?: number
    max?: number
    message?: string
  }
}

export interface InstallationConfig {
  [key: string]: string | number | boolean
}

interface PortainerService {
  executeCommand: (command: string) => Promise<void>;
  checkHealth: (serviceId: string) => Promise<HealthStatus>;
  monitorResources: (serviceId: string) => Promise<ResourceMetrics>;
}

interface MonitoringProps {
  serviceId: string;
  onHealthChange: (status: HealthStatus) => void;
  onResourceUpdate: (metrics: ResourceMetrics) => void;
}

interface ThemeProps {
  theme: 'light' | 'dark';
  setTheme: (theme: 'light' | 'dark') => void;
}

interface CommandExecutor {
  execute: (command: string) => Promise<{
    success: boolean;
    output: string;
    error?: string;
  }>;
}