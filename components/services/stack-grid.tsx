'use client'

import { motion } from 'framer-motion'
import { StackCard } from './stack-card'
import type { Service } from '@/lib/types/services'

interface StackGridProps {
  services: Service[]
  onInstall: (service: Service) => void
  onDetails: (service: Service) => void
}

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

export function StackGrid({ services, onInstall, onDetails }: StackGridProps) {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
    >
      {services.map((service) => (
        <StackCard
          key={service.id}
          service={service}
          onInstall={onInstall}
          onDetails={onDetails}
        />
      ))}
    </motion.div>
  )
}