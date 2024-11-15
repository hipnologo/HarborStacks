"use client";

import { useState } from "react";

export default function SettingsPage() {
  return (
    <div className="h-full space-y-8">
      <h1 className="text-2xl font-bold">Settings</h1>
      <p className="text-muted-foreground">
        Configure your HarborStacks installation and preferences.
      </p>

      <div className="space-y-6">
        <div className="space-y-2">
          <h2 className="text-lg font-semibold">Docker Configuration</h2>
          <div className="rounded-lg border p-4">
            <p className="text-sm text-muted-foreground">
              Configure Docker connection settings and default parameters.
            </p>
          </div>
        </div>

        <div className="space-y-2">
          <h2 className="text-lg font-semibold">Appearance</h2>
          <div className="rounded-lg border p-4">
            <p className="text-sm text-muted-foreground">
              Customize the look and feel of your dashboard.
            </p>
          </div>
        </div>

        <div className="space-y-2">
          <h2 className="text-lg font-semibold">Notifications</h2>
          <div className="rounded-lg border p-4">
            <p className="text-sm text-muted-foreground">
              Manage notification preferences and alerts.
            </p>
          </div>
        </div>

        <div className="space-y-2">
          <h2 className="text-lg font-semibold">Backup & Storage</h2>
          <div className="rounded-lg border p-4">
            <p className="text-sm text-muted-foreground">
              Configure backup settings and manage storage locations.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
