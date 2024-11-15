'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import type { ConfigStep } from '@/lib/types/services'

interface ConfigurationFormProps {
  step: ConfigStep
  onNext: () => void
  onComplete: () => void
}

export function ConfigurationForm({ step, onNext, onComplete }: ConfigurationFormProps) {
  // Create dynamic schema based on fields
  const schema = z.object(
    Object.fromEntries(
      step.fields.map(field => [
        field.name,
        field.required ? z.string().min(1, 'This field is required') : z.string().optional()
      ])
    )
  )

  const form = useForm({
    resolver: zodResolver(schema)
  })

  const onSubmit = (data: any) => {
    // Here you would typically save the configuration
    console.log('Form data:', data)
    onNext()
  }

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
      <div className="space-y-2">
        <h3 className="text-lg font-medium">{step.title}</h3>
        {step.description && (
          <p className="text-sm text-gray-500 dark:text-gray-400">
            {step.description}
          </p>
        )}
      </div>

      {step.fields.map((field) => (
        <div key={field.name} className="space-y-1">
          <label
            htmlFor={field.name}
            className="text-sm font-medium text-gray-700 dark:text-gray-300"
          >
            {field.label}
            {field.required && <span className="text-red-500 ml-1">*</span>}
          </label>
          <Input
            id={field.name}
            type={field.type}
            placeholder={field.placeholder}
            {...form.register(field.name)}
          />
          {form.formState.errors[field.name] && (
            <p className="text-sm text-red-500">
              {form.formState.errors[field.name]?.message as string}
            </p>
          )}
        </div>
      ))}

      <div className="flex justify-end gap-3 mt-6">
        <Button type="button" variant="outline" onClick={onComplete}>
          Cancel
        </Button>
        <Button type="submit">
          Continue
        </Button>
      </div>
    </form>
  )
}