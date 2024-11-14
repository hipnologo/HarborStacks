'use client'

import { useState } from 'react'
import { Dialog } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { ConfigForm } from './config-form'
import { ProgressTracker } from './progress-tracker'
import { useInstallation } from '@/lib/hooks/use-installation'
import { X } from 'lucide-react'

export function InstallationModal() {
  const { currentService, status, cancelInstallation } = useInstallation()
  const [step, setStep] = useState(0)

  if (!currentService) return null

  return (
    <Dialog open onOpenChange={() => cancelInstallation()}>
      <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center">
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 w-full max-w-2xl m-4">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xl font-semibold">
              Installing {currentService.name}
            </h3>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => cancelInstallation()}
            >
              <X className="h-4 w-4" />
            </Button>
          </div>

          {step < currentService.configSteps.length ? (
            <ConfigForm
              step={currentService.configSteps[step]}
              onNext={() => setStep(step + 1)}
              onComplete={() => setStep(currentService.configSteps.length)}
            />
          ) : (
            <ProgressTracker
              steps={currentService.installSteps}
              status={status}
            />
          )}
        </div>
      </div>
    </Dialog>
  )
}