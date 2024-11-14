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
  requiresConfig: string[];
  popular: boolean;
}