// src/lib/actions/deploy-stack.ts
'use server';

import { revalidatePath } from 'next/cache';
import { prisma } from '@/lib/prisma';
import { deployToPortainer } from '@/lib/portainer';

export async function deployStack(stackData: {
  name: string;
  description?: string;
  compose: string;
  userId: string;
}) {
  try {
    // Deploy to Portainer
    const portainerResponse = await deployToPortainer(stackData);

    // Save to database
    const stack = await prisma.stack.create({
      data: {
        name: stackData.name,
        description: stackData.description,
        compose: stackData.compose,
        status: 'running',
        userId: stackData.userId
      }
    });

    revalidatePath('/dashboard');
    return { success: true, stack };
  } catch (error) {
    console.error('Failed to deploy stack:', error);
    return { success: false, error };
  }
}