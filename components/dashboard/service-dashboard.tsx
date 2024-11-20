// src/components/dashboard/service-dashboard.tsx
'use client';

import { useSession } from "next-auth/react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Plus, Search, MoreVertical } from "lucide-react";
import { NewStackDialog } from "./new-stack-dialog";
import { useState } from "react";

export function ServiceDashboard() {
  const { data: session } = useSession();
  const [showNewStack, setShowNewStack] = useState(false);

  return (
    <div className="container py-6">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Services</h1>
          <p className="text-muted-foreground">Manage your Docker services</p>
        </div>
        <Button onClick={() => setShowNewStack(true)}>
          <Plus className="w-4 h-4 mr-2" />
          New Service
        </Button>
      </div>

      <div className="relative mb-6">
        <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
        <Input className="pl-10" placeholder="Search services..." />
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>Traefik & Portainer</CardTitle>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="sm">
                    <MoreVertical className="w-4 h-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem>View Details</DropdownMenuItem>
                  <DropdownMenuItem>Restart</DropdownMenuItem>
                  <DropdownMenuItem className="text-destructive">
                    Stop
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            <CardDescription>Reverse proxy and container management</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-sm text-muted-foreground">
              Status: <span className="text-green-500">Running</span>
            </div>
          </CardContent>
        </Card>
      </div>

      <NewStackDialog open={showNewStack} onClose={() => setShowNewStack(false)} />
    </div>
  );
}