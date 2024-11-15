import { Database, Cloud, Monitor, Lock, Package, Boxes } from "lucide-react";
import { ServiceCategory, Service } from "@/lib/types/services";

export const categories: ServiceCategory[] = [
  { id: "all", label: "All Services", icon: Boxes },
  { id: "databases", label: "Databases", icon: Database },
  { id: "messaging", label: "Messaging", icon: Cloud },
  { id: "monitoring", label: "Monitoring", icon: Monitor },
  { id: "security", label: "Security", icon: Lock },
];

export const services: Service[] = [
  {
    id: "traefik",
    name: "Traefik & Portainer",
    description: "Modern reverse proxy and container management with automatic SSL",
    category: "security",
    requirements: ["domain", "email"],
    popular: true,
  },
  {
    id: "chatwoot",
    name: "Chatwoot",
    description: "Open-source customer engagement suite with live chat and email support",
    category: "messaging",
    requirements: ["domain", "email", "smtp"],
    popular: true,
  },
  {
    id: "minio",
    name: "MinIO",
    description: "High-performance S3 compatible object storage for modern data lakes",
    category: "databases",
    requirements: ["domain"],
    popular: false,
  },
  {
    id: "n8n",
    name: "n8n",
    description: "Powerful workflow automation tool with visual programming",
    category: "automation",
    requirements: ["domain", "smtp"],
    popular: true,
  },
  {
    id: "prometheus",
    name: "Prometheus Stack",
    description: "Complete monitoring solution with Grafana dashboards",
    category: "monitoring",
    requirements: ["domain"],
    popular: true,
  },
  {
    id: "postgres",
    name: "PostgreSQL",
    description: "Advanced open-source database with automatic backups",
    category: "databases",
    requirements: ["password", "backup_path"],
    popular: true,
  }
];