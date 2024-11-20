// src/components/dashboard/new-stack-dialog.tsx
'use client';

import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useDropzone } from "react-dropzone";
import { useToast } from "@/components/ui/use-toast";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { deployStack } from "@/lib/actions/deploy-stack";
import { useSession } from "next-auth/react";

interface NewStackDialogProps {
  open: boolean;
  onClose: () => void;
}

export function NewStackDialog({ open, onClose }: NewStackDialogProps) {
  const { data: session } = useSession();
  const { toast } = useToast();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [compose, setCompose] = useState("");
  const [isDeploying, setIsDeploying] = useState(false);

  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      "application/x-yaml": [".yml", ".yaml"],
    },
    maxFiles: 1,
    onDrop: async (acceptedFiles) => {
      const file = acceptedFiles[0];
      const text = await file.text();
      setCompose(text);
    },
  });

  const handleDeploy = async () => {
    if (!session?.user?.id) {
      toast({
        title: "Error",
        description: "You must be logged in to deploy services",
        variant: "destructive",
      });
      return;
    }

    setIsDeploying(true);
    try {
      const result = await deployStack({
        name,
        description,
        compose,
        userId: session.user.id,
      });

      if (result.success) {
        toast({
          title: "Success",
          description: "Service deployed successfully",
        });
        onClose();
      } else {
        throw new Error("Failed to deploy service");
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to deploy service",
        variant: "destructive",
      });
    } finally {
      setIsDeploying(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[625px]">
        <DialogHeader>
          <DialogTitle>Deploy New Service</DialogTitle>
        </DialogHeader>
        <Tabs defaultValue="upload">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="upload">Upload File</TabsTrigger>
            <TabsTrigger value="editor">Compose Editor</TabsTrigger>
          </TabsList>
          <TabsContent value="upload" className="space-y-4">
            <div
              {...getRootProps()}
              className="border-2 border-dashed rounded-lg p-6 text-center cursor-pointer hover:border-primary/50 transition-colors"
            >
              <input {...getInputProps()} />
              <p>Drag and drop a compose file here, or click to select</p>
              <p className="text-sm text-muted-foreground mt-2">
                Supports .yml and .yaml files
              </p>
            </div>
          </TabsContent>
          <TabsContent value="editor" className="space-y-4">
            <Textarea
              placeholder="Enter your Docker Compose YAML..."
              className="min-h-[200px] font-mono"
              value={compose}
              onChange={(e) => setCompose(e.target.value)}
            />
          </TabsContent>
        </Tabs>
        <div className="space-y-4">
          <div>
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="my-awesome-stack"
            />
          </div>
          <div>
            <Label htmlFor="description">Description</Label>
            <Input
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Optional description of your stack"
            />
          </div>
        </div>
        <div className="flex justify-end gap-2">
          <Button variant="outline" onClick={onClose}>
            Cancel
          </Button>
          <Button
            onClick={handleDeploy}
            disabled={!name || !compose || isDeploying}
          >
            {isDeploying ? "Deploying..." : "Deploy"}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}