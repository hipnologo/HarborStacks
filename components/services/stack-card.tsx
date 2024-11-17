'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Package, Star } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardContent, CardFooter } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import type { Service } from '@/lib/types/services'

interface StackCardProps {
  service: Service
  onInstall: (service: Service) => void
  onDetails: (service: Service) => void
}

export function StackCard({ service, onInstall, onDetails }: StackCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      whileHover={{ y: -5 }}
    >
      <Card className="h-full flex flex-col">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <div className="flex items-center space-x-2">
            <Package className="h-5 w-5 text-muted-foreground" />
            <h3 className="font-semibold">{service.name}</h3>
          </div>
          {service.popular && (
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <Badge variant="secondary" className="flex items-center gap-1">
                    <Star className="h-3 w-3" />
                    Popular
                  </Badge>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Frequently deployed by users</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          )}
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">{service.description}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {service.requirements.map((req) => (
              <Badge key={req} variant="outline">
                {req}
              </Badge>
            ))}
          </div>
        </CardContent>
        <CardFooter className="mt-auto pt-6">
          <div className="flex w-full gap-2">
            <Button
              variant="outline"
              className="flex-1"
              onClick={() => onDetails(service)}
            >
              Details
            </Button>
            <Button 
              className="flex-1"
              onClick={() => onInstall(service)}
            >
              <span>Install</span>
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </CardFooter>
      </Card>
    </motion.div>
  )
}