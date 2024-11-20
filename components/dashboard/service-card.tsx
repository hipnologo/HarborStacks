// src/components/dashboard/service-card.tsx
'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MoreVertical, Play, Square, RefreshCw } from "lucide-react";
import { useState } from "react";

interface ServiceCardProps {
  name: string;
  description?: string;
  status: string;
  onRestart: () => Promise<void>;
  onStop: () => Promise<void>;
  onStart: () => Promise<void>;
}

export function ServiceCard({
  name,
  description,
  status,
  onRestart,
  onStop,
  onStart,
}: ServiceCardProps) {
  const [isLoading, setIsLoading] = useState(false);

  const handleAction = async (action: () => Promise<void>) => {
    setIsLoading(true);
    try {
      await action();
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>{name}</CardTitle>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="sm" disabled={isLoading}>
                <MoreVertical className="w-4 h-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              {status === "running" ? (
                <>
                  <DropdownMenuItem
                    onClick={() => handleAction(onRestart)}
                    disabled={isLoading}
                  >
                    <RefreshCw className="w-4 h-4 mr-2" />
                    Restart
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    onClick={() => handleAction(onStop)}
                    disabled={isLoading}
                    className="text-destructive"
                  >
                    <Square className="w-4 h-4 mr-2" />
                    Stop
                  </DropdownMenuItem>
                </>
              ) : (
                <DropdownMenuItem
                  onClick={() => handleAction(onStart)}
                  disabled={isLoading}
                >
                  <Play className="w-4 h-4 mr-2" />
                  Start
                </DropdownMenuItem>
              )}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        {description && <CardDescription>{description}</CardDescription>}
      </CardHeader>
      <CardContent>
        <div className="text-sm text-muted-foreground">
          Status:{" "}
          <span
            className={
              status === "running"
                ? "text-green-500"
                : status === "stopped"
                ? "text-yellow-500"
                : "text-red-500"
            }
          >
            {status.charAt(0).toUpperCase() + status.slice(1)}
          </span>
        </div>
      </CardContent>
    </Card>
  );
}
