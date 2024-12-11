// components/installers/progress-tracker.tsx
'use client'

import { ProgressTrackerProps } from "./types"

// import { Check, Loader2, AlertCircle } from 'lucide-react'

export function ProgressTracker({ steps, status }: ProgressTrackerProps) {
  return (
    <div className="space-y-4">
      {steps.map((step, index) => (
        <div key={index} className="flex items-center space-x-3">
          <div className={`
            w-8 h-8 rounded-full flex items-center justify-center
            ${status[index] === 'complete' ? 'bg-green-100' :
              status[index] === 'active' ? 'bg-blue-100' :
              status[index] === 'error' ? 'bg-red-100' :
              'bg-gray-100'
            }
          `}>
            {status[index] === 'complete' && (
              <Check className="w-5 h-5 text-green-600" />
            )}
            {status[index] === 'active' && (
              <Loader2 className="w-5 h-5 text-blue-600 animate-spin" />
            )}
            {status[index] === 'error' && (
              <AlertCircle className="w-5 h-5 text-red-600" />
            )}
            {status[index] === 'waiting' && (
              <span className="text-gray-500">{index + 1}</span>
            )}
          </div>
          <span className={`flex-1 ${
            status[index] === 'complete' ? 'text-green-600' :
            status[index] === 'active' ? 'text-blue-600' :
            status[index] === 'error' ? 'text-red-600' :
            'text-gray-500'
          }`}>
            {step}
          </span>
        </div>
      ))}
    </div>
  )
}