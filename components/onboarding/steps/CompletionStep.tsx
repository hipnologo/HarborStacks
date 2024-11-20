'use client'

import { Button } from '@/components/ui/button'
import { CheckCircle } from 'lucide-react'

interface CompletionStepProps {
  onComplete: () => void
  onBack: () => void
}

export function CompletionStep({ onComplete, onBack }: CompletionStepProps) {
  return (
    <div className="space-y-6">
      <div className="flex flex-col items-center justify-center space-y-4">
        <CheckCircle className="h-12 w-12 text-green-500" />
        <h2 className="text-2xl font-bold text-center">Ready to Start!</h2>
        <p className="text-center text-muted-foreground">
          Your environment is configured and ready to deploy services.
          Click complete to start exploring available stacks.
        </p>
      </div>

      <div className="flex justify-between">
        <Button variant="outline" onClick={onBack}>
          Back
        </Button>
        <Button onClick={onComplete}>
          Complete Setup
        </Button>
      </div>
    </div>
  )
}