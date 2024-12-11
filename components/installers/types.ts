// components/installers/types.ts
export type StepStatus = 'waiting' | 'active' | 'complete' | 'error'

export interface StepState {
  status: StepStatus
  message?: string
}

export interface ProgressTrackerProps {
  steps: string[]
  status: Record<number, StepState>
}