"use client";

import { useState } from "react";

export default function StacksPage() {
  return (
    <div className="h-full space-y-8">
      <h1 className="text-2xl font-bold">Stacks</h1>
      <p className="text-muted-foreground">
        Manage your Docker service stacks and configurations.
      </p>
    </div>
  );
}
