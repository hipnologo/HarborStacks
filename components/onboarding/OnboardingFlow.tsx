'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { CheckCircle, AlertCircle, Loader2 } from 'lucide-react';

interface Step {
  id: string;
  title: string;
  description: string;
  status: 'pending' | 'in-progress' | 'completed' | 'error';
}

export default function OnboardingFlow() {
  const [currentStep, setCurrentStep] = useState(0);
  const [steps, setSteps] = useState<Step[]>([
    {
      id: 'environment',
      title: 'Environment Check',
      description: 'Verifying system requirements and configurations',
      status: 'pending'
    },
    {
      id: 'configuration',
      title: 'Service Configuration',
      description: 'Setting up service parameters and connections',
      status: 'pending'
    },
    {
      id: 'deployment',
      title: 'Deployment',
      description: 'Installing and configuring services',
      status: 'pending'
    }
  ]);

  const getStepIcon = (status: Step['status']) => {
    switch (status) {
      case 'completed':
        return <CheckCircle className="h-6 w-6 text-green-500" />;
      case 'error':
        return <AlertCircle className="h-6 w-6 text-red-500" />;
      case 'in-progress':
        return <Loader2 className="h-6 w-6 animate-spin text-blue-500" />;
      default:
        return <div className="h-6 w-6 rounded-full border-2" />;
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-background p-4">
      <Card className="w-full max-w-3xl">
        <CardHeader>
          <CardTitle className="text-2xl">Installation Setup</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            {steps.map((step, index) => (
              <div key={step.id} className="flex items-center space-x-4">
                {getStepIcon(step.status)}
                <div className="flex-1">
                  <h3 className="font-medium">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
          
          <Progress value={(currentStep / steps.length) * 100} />
          
          <div className="flex justify-end space-x-2">
            <Button
              variant="outline"
              disabled={currentStep === 0}
              onClick={() => setCurrentStep(prev => prev - 1)}
            >
              Previous
            </Button>
            <Button
              disabled={currentStep === steps.length - 1}
              onClick={() => setCurrentStep(prev => prev + 1)}
            >
              Next
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}