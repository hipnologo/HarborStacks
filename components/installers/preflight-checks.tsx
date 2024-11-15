'use client'

import { Check, Loader2, AlertCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface PreflightChecksProps {
  checks: Array<{
    name: string
    status: 'pending' | 'checking' | 'success' | 'error'
    message?: string
  }>
  onRetry: () => void
}

export function PreflightChecks({ checks, onRetry }: PreflightChecksProps) {
  const hasError = checks.some(check => check.status === 'error')
  const allComplete = checks.every(check => check.status === 'success')

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-medium">Pre-flight Checks</h3>
      
      <div className="space-y-2">
        {checks.map((check) => (
          <div
            key={check.name}
            className="flex items-center justify-between p-3 rounded-lg bg-gray-50 dark:bg-gray-800"
          >
            <div className="flex items-center space-x-3">
              {check.status === 'pending' && (
                <div className="w-5 h-5 rounded-full bg-gray-200 dark:bg-gray-700" />
              )}
              {check.status === 'checking' && (
                <Loader2 className="w-5 h-5 text-blue-500 animate-spin" />
              )}
              {check.status === 'success' && (
                <Check className="w-5 h-5 text-green-500" />
              )}
              {check.status === 'error' && (
                <AlertCircle className="w-5 h-5 text-red-500" />
              )}
              <span className="text-sm font-medium">{check.name}</span>
            </div>
            
            {check.status === 'error' && check.message && (
              <span className="text-sm text-red-500">{check.message}</span>
            )}
          </div>
        ))}
      </div>

      {hasError && (
        <div className="flex justify-end">
          <Button onClick={onRetry} variant="outline">
            Retry Checks
          </Button>
        </div>
      )}

      {allComplete && (
        <div className="text-sm text-green-500 font-medium">
          All checks passed successfully!
        </div>
      )}
    </div>
  )
}