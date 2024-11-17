'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { Card, CardHeader, CardContent, CardTitle, CardDescription } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { Checkbox } from '@/components/ui/checkbox'
import { useToast } from '@/hooks/use-toast'
import type { Settings } from '@/lib/types/settings'

const settingsSchema = z.object({
  portainer: z.object({
    url: z.string().url('Please enter a valid URL'),
    username: z.string().min(1, 'Username is required'),
    password: z.string().min(1, 'Password is required'),
    apiKey: z.string().optional(),
  }),
  global: z.object({
    defaultDomain: z.string().min(1, 'Default domain is required'),
    defaultEmail: z.string().email('Please enter a valid email'),
    sslEnabled: z.boolean(),
  }),
  backup: z.object({
    enabled: z.boolean(),
    location: z.string().optional(),
    retention: z.number().min(1).max(90),
    schedule: z.string(),
  }),
})

export default function SettingsPage() {
  const { toast } = useToast()
  const [isLoading, setIsLoading] = useState(false)

  const form = useForm<Settings>({
    resolver: zodResolver(settingsSchema),
    defaultValues: {
      portainer: {
        url: '',
        username: '',
        password: '',
        apiKey: '',
      },
      global: {
        defaultDomain: '',
        defaultEmail: '',
        sslEnabled: true,
      },
      backup: {
        enabled: false,
        location: '',
        retention: 7,
        schedule: '0 0 * * *',
      },
    },
  })

  const onSubmit = async (data: Settings) => {
    setIsLoading(true)
    try {
      // Save settings to local storage for now
      localStorage.setItem('harborstack-settings', JSON.stringify(data))
      toast({
        title: 'Settings saved',
        description: 'Your settings have been saved successfully.',
      })
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to save settings. Please try again.',
        variant: 'destructive',
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Settings</h1>
        <p className="text-muted-foreground">
          Configure your HarborStacks installation and preferences.
        </p>
      </div>

      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Portainer Configuration</CardTitle>
            <CardDescription>
              Configure your Portainer connection settings.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="portainer.url">Portainer URL</Label>
              <Input
                id="portainer.url"
                {...form.register('portainer.url')}
                placeholder="https://portainer.yourdomain.com"
              />
              {form.formState.errors.portainer?.url && (
                <p className="text-sm text-destructive">
                  {form.formState.errors.portainer.url.message}
                </p>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="portainer.username">Username</Label>
              <Input
                id="portainer.username"
                {...form.register('portainer.username')}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="portainer.password">Password</Label>
              <Input
                id="portainer.password"
                type="password"
                {...form.register('portainer.password')}
              />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Global Settings</CardTitle>
            <CardDescription>
              Default settings for service deployments.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="global.defaultDomain">Default Domain</Label>
              <Input
                id="global.defaultDomain"
                {...form.register('global.defaultDomain')}
                placeholder="yourdomain.com"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="global.defaultEmail">Default Email</Label>
              <Input
                id="global.defaultEmail"
                type="email"
                {...form.register('global.defaultEmail')}
                placeholder="admin@yourdomain.com"
              />
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox
                id="global.sslEnabled"
                {...form.register('global.sslEnabled')}
              />
              <Label htmlFor="global.sslEnabled">Enable SSL by default</Label>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Backup Settings</CardTitle>
            <CardDescription>
              Configure automatic backup settings for your services.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center space-x-2">
              <Checkbox
                id="backup.enabled"
                {...form.register('backup.enabled')}
              />
              <Label htmlFor="backup.enabled">Enable automatic backups</Label>
            </div>
            <div className="space-y-2">
              <Label htmlFor="backup.location">Backup Location</Label>
              <Input
                id="backup.location"
                {...form.register('backup.location')}
                placeholder="/path/to/backups"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="backup.retention">Retention Period (days)</Label>
              <Input
                id="backup.retention"
                type="number"
                {...form.register('backup.retention', { valueAsNumber: true })}
              />
            </div>
          </CardContent>
        </Card>

        <div className="flex justify-end">
          <Button type="submit" disabled={isLoading}>
            {isLoading ? 'Saving...' : 'Save Settings'}
          </Button>
        </div>
      </form>
    </div>
  )
}