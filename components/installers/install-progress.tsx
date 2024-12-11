// components/installers/install-progress.tsx
'use client'

import { useEffect } from 'react'
import { ProgressTracker } from './progress-tracker'
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert'
import { Button } from '@/components/ui/button'
import { useToast } from '@/hooks/use-toast'
import { RefreshCw, AlertCircle } from 'lucide-react'
import { StepState } from './types'

interface InstallProgressProps {
  steps: string[]
  status: Record<number, StepState>
  onRetry?: (step: number) => void
}

export function InstallProgress({ steps, status, onRetry }: InstallProgressProps) {
  const { toast } = useToast()

  useEffect(() => {
    Object.entries(status).forEach(([step, info]) => {
      if (info.status === 'error' && info.message) {
        toast({
          title: 'Installation Error',
          description: info.message,
          variant: 'destructive',
        })
      }
    })
  }, [status, toast])

  const errorStep = Object.entries(status).find(
    ([_, info]) => info.status === 'error'
  )

  return (
    <div className="space-y-6">
      <ProgressTracker steps={steps} status={status} />

      {errorStep && (
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Installation Error</AlertTitle>
          <AlertDescription>
            {status[parseInt(errorStep[0])].message}
            {onRetry && (
              <Button
                variant="outline"
                size="sm"
                className="mt-2"
                onClick={() => onRetry(parseInt(errorStep[0]))}
              >
                <RefreshCw className="mr-2 h-4 w-4" />
                Retry Step
              </Button>
            )}
          </AlertDescription>
        </Alert>
      )}

      <div className="h-32 overflow-y-auto rounded-lg bg-black/90 p-4">
        <pre className="text-xs text-green-400">
          {Object.entries(status).map(([step, info]) => (
            info.message && (
              <div key={step} className="mb-1">
                {`[Step ${parseInt(step) + 1}] ${info.message}`}
              </div>
            )
          ))}
        </pre>
      </div>
    </div>
  )
}