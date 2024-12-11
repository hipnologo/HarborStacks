// components/installers/installation-modal.tsx
'use client'

import { useState } from 'react'
import { Dialog } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { useInstallation } from '@/lib/context/installation'
import { X } from 'lucide-react'
import { ConfigurationForm } from './configuration-form'
import { InstallProgress } from './install-progress'

export function InstallationModal() {
  const { currentService, status, cancelInstallation } = useInstallation()
  const [step, setStep] = useState(0)

  if (!currentService) return null

  return (
    <Dialog open onOpenChange={cancelInstallation}>
      <div className="fixed inset-0 bg-black/50 z-50">
        <div className="fixed inset-x-4 top-[50%] translate-y-[-50%] max-w-2xl mx-auto bg-white dark:bg-gray-800 rounded-xl p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold">
              Installing {currentService.name}
            </h2>
            <Button
              variant="ghost"
              size="icon"
              onClick={cancelInstallation}
            >
              <X className="h-4 w-4" />
            </Button>
          </div>

          <div className="space-y-6">
            {currentService.configSteps && step < currentService.configSteps.length ? (
              <ConfigurationForm
                step={currentService.configSteps[step]}
                onNext={() => setStep(s => s + 1)}
                onComplete={() => setStep(currentService.configSteps?.length || 0)}
              />
            ) : (
              <InstallProgress
                steps={currentService.installSteps || []}
                status={status}
              />
            )}
          </div>
        </div>
      </div>
    </Dialog>
  )
}