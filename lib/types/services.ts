import { LucideIcon } from "lucide-react"

export interface ServiceCategory {
  id: string
  label: string
  icon: LucideIcon
  description?: string
}

export interface Service {
  id: string
  name: string
  description: string
  category: string
  image?: string
  popular?: boolean
  documentation?: string
  requirements: string[]
  configSteps?: ConfigStep[]
  installSteps?: InstallStep[]
  ports?: PortConfig[]
  volumes?: VolumeConfig[]
  environment?: EnvironmentConfig[]
  dependencies?: string[]
  resources?: ResourceLimits
  healthCheck?: HealthCheckConfig
}

export interface ConfigStep {
  title: string
  description?: string
  fields: ConfigField[]
}

export interface ConfigField {
  name: string
  label: string
  type: 'text' | 'email' | 'password' | 'number' | 'select' | 'toggle'
  placeholder?: string
  required?: boolean
  options?: { label: string; value: string }[]
  validation?: {
    pattern?: string
    min?: number
    max?: number
    message?: string
  }
  defaultValue?: string | number | boolean
}

export interface InstallStep {
  id: string
  title: string
  description?: string
  status: 'pending' | 'running' | 'completed' | 'failed'
  command?: string
}

export interface PortConfig {
  container: number
  host?: number
  protocol?: 'tcp' | 'udp'
  description?: string
}

export interface VolumeConfig {
  container: string
  host?: string
  mode?: 'rw' | 'ro'
  description?: string
}

export interface EnvironmentConfig {
  name: string
  description?: string
  required?: boolean
  defaultValue?: string
  sensitive?: boolean
}

export interface ResourceLimits {
  cpu?: string
  memory?: string
  storage?: string
}

export interface HealthCheckConfig {
  test: string[]
  interval?: string
  timeout?: string
  retries?: number
  startPeriod?: string
}

export interface InstallationConfig {
  [key: string]: string | number | boolean
}

export interface InstallationStatus {
  status: 'pending' | 'installing' | 'completed' | 'failed'
  currentStep?: string
  error?: string
  logs: string[]
}

export interface ServiceMetrics {
  cpu: number
  memory: number
  network: {
    rx: number
    tx: number
  }
  storage: {
    used: number
    total: number
  }
}

export type HealthStatus = 'healthy' | 'unhealthy' | 'starting' | 'unknown'

export interface ServiceState {
  status: HealthStatus
  metrics: ServiceMetrics
  lastUpdated: Date
}