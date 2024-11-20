'use client'

import { Card } from "@/components/ui/card"
import { FeatureCard } from "./feature-card"
import { Database, MessageSquare, Monitor } from "lucide-react"

const features = [
  {
    icon: Database,
    title: "Databases",
    description: "MySQL, PostgreSQL, MongoDB"
  },
  {
    icon: MessageSquare,
    title: "Messaging",
    description: "RabbitMQ, Redis, Kafka"
  },
  {
    icon: Monitor,
    title: "Monitoring",
    description: "Prometheus, Grafana"
  }
]

export function FeaturesSection() {
  return (
    <Card className="relative w-full max-w-lg">
      <div className="p-6">
        <div className="grid gap-4">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </Card>
  )
}