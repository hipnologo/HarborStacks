'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useToast } from '@/hooks/use-toast'

const schema = z.object({
  portainerUrl: z.string().url('Please enter a valid URL'),
  portainerKey: z.string().min(1, 'API key is required')
})

type FormData = z.infer<typeof schema>

interface PortainerConfigStepProps {
  initialData: Partial<FormData>
  onNext: (data: FormData) => void
  onBack: () => void
}

export function PortainerConfigStep({ initialData, onNext, onBack }: PortainerConfigStepProps) {
  const { toast } = useToast()
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: initialData
  })

  const testConnection = async (data: FormData) => {
    try {
      const response = await fetch('/api/portainer/test', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      })

      if (!response.ok) throw new Error('Connection failed')

      toast({
        title: 'Connection Successful',
        description: 'Successfully connected to Portainer'
      })

      onNext(data)
    } catch (error) {
      toast({
        title: 'Connection Failed',
        description: 'Failed to connect to Portainer. Please check your credentials.',
        variant: 'destructive'
      })
    }
  }

  return (
    <form onSubmit={handleSubmit(testConnection)} className="space-y-6">
      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="portainerUrl">Portainer URL</Label>
          <Input
            id="portainerUrl"
            {...register('portainerUrl')}
            placeholder="https://portainer.yourdomain.com"
          />
          {errors.portainerUrl && (
            <p className="text-sm text-destructive">{errors.portainerUrl.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="portainerKey">API Key</Label>
          <Input
            id="portainerKey"
            type="password"
            {...register('portainerKey')}
            placeholder="Enter your Portainer API key"
          />
          {errors.portainerKey && (
            <p className="text-sm text-destructive">{errors.portainerKey.message}</p>
          )}
        </div>
      </div>

      <div className="flex justify-between">
        <Button type="button" variant="outline" onClick={onBack}>
          Back
        </Button>
        <Button type="submit">Test Connection</Button>
      </div>
    </form>
  )
}