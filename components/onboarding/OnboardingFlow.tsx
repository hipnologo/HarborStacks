'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'
import { useToast } from '@/hooks/use-toast'
import { CheckCircle } from 'lucide-react'
import { UserInfoStep } from './steps/UserInfoStep'
import { PortainerConfigStep } from './steps/PortainerConfigStep'
import { CompletionStep } from './steps/CompletionStep'

const steps = [
  { id: 'user-info', title: 'Basic Information' },
  { id: 'portainer', title: 'Portainer Configuration' },
  { id: 'completion', title: 'Ready to Start' }
]

export function OnboardingFlow() {
  const [currentStep, setCurrentStep] = useState(0)
  const [formData, setFormData] = useState({
    name: '',
    organization: '',
    role: '',
    portainerUrl: '',
    portainerKey: ''
  })
  const router = useRouter()
  const { toast } = useToast()

  const progress = ((currentStep + 1) / steps.length) * 100

  const handleNext = async (stepData: Partial<typeof formData>) => {
    setFormData(prev => ({ ...prev, ...stepData }))
    
    if (currentStep === steps.length - 1) {
      try {
        const response = await fetch('/api/onboarding', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData)
        })

        if (!response.ok) throw new Error('Failed to save onboarding data')

        toast({
          title: 'Setup Complete!',
          description: 'You can now start deploying services.'
        })
        
        router.push('/dashboard/services')
      } catch (error) {
        toast({
          title: 'Error',
          description: 'Failed to complete setup. Please try again.',
          variant: 'destructive'
        })
      }
    } else {
      setCurrentStep(prev => prev + 1)
    }
  }

  const handleBack = () => {
    setCurrentStep(prev => prev - 1)
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4">
      <Card className="w-full max-w-3xl p-6 space-y-8">
        <div className="space-y-2">
          <h1 className="text-2xl font-bold">Welcome to HarborStacks</h1>
          <p className="text-muted-foreground">Let's get your environment set up</p>
        </div>

        <div className="space-y-2">
          <Progress value={progress} className="h-2" />
          <div className="flex justify-between">
            {steps.map((step, index) => (
              <div
                key={step.id}
                className={`flex items-center gap-2 ${
                  index <= currentStep ? 'text-primary' : 'text-muted-foreground'
                }`}
              >
                {index < currentStep && (
                  <CheckCircle className="h-4 w-4 text-green-500" />
                )}
                <span className="text-sm font-medium">{step.title}</span>
              </div>
            ))}
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.2 }}
          >
            {currentStep === 0 && (
              <UserInfoStep
                initialData={formData}
                onNext={handleNext}
              />
            )}
            {currentStep === 1 && (
              <PortainerConfigStep
                initialData={formData}
                onNext={handleNext}
                onBack={handleBack}
              />
            )}
            {currentStep === 2 && (
              <CompletionStep
                onComplete={handleNext}
                onBack={handleBack}
              />
            )}
          </motion.div>
        </AnimatePresence>
      </Card>
    </div>
  )
}