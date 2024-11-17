export interface PortainerConfig {
  url: string;
  username: string;
  password: string;
  apiKey?: string;
}

export interface GlobalConfig {
  defaultDomain: string;
  defaultEmail: string;
  sslEnabled: boolean;
}

export interface BackupConfig {
  enabled: boolean;
  location: string;
  retention: number;
  schedule: string;
}

export type Settings = {
  portainer: PortainerConfig;
  global: GlobalConfig;
  backup: BackupConfig;
}