// components/installers/progress-tracker.tsx
'use client'

import { Check, Loader2, AlertCircle } from 'lucide-react'
import { ProgressTrackerProps } from "./types"

export function ProgressTracker({ steps, status }: ProgressTrackerProps) {
  return (
    <div className="space-y-4">
      {steps.map((step, index) => (
        <div key={index} className="flex items-center space-x-3">
          <div className={`
            w-8 h-8 rounded-full flex items-center justify-center
            ${status[index]?.status === 'complete' ? 'bg-green-100' :
              status[index]?.status === 'active' ? 'bg-blue-100' :
              status[index]?.status === 'error' ? 'bg-red-100' :
              'bg-gray-100'
            }
          `}>
            {status[index]?.status === 'complete' && (
              <Check className="w-5 h-5 text-green-600" />
            )}
            {status[index]?.status === 'active' && (
              <Loader2 className="w-5 h-5 text-blue-600 animate-spin" />
            )}
            {status[index]?.status === 'error' && (
              <AlertCircle className="w-5 h-5 text-red-600" />
            )}
            {status[index]?.status === 'waiting' && (
              <span className="text-gray-500">{index + 1}</span>
            )}
          </div>
          <span className={`flex-1 ${
            status[index]?.status === 'complete' ? 'text-green-600' :
            status[index]?.status === 'active' ? 'text-blue-600' :
            status[index]?.status === 'error' ? 'text-red-600' :
            'text-gray-500'
          }`}>
            {step}
          </span>
        </div>
      ))}
    </div>
  )
}