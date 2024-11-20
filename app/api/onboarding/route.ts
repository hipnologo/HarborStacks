import { NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { prisma } from '@/lib/prisma'

export async function POST(request: Request) {
  try {
    const session = await getServerSession()
    if (!session?.user?.email) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      )
    }

    const data = await request.json()

    const user = await prisma.user.update({
      where: { email: session.user.email },
      data: {
        name: data.name,
        organization: data.organization,
        role: data.role,
        portainerUrl: data.portainerUrl,
        portainerKey: data.portainerKey,
        onboarded: true
      }
    })

    return NextResponse.json({ success: true, user })
  } catch (error) {
    console.error('Onboarding error:', error)
    return NextResponse.json(
      { error: 'Failed to save onboarding data' },
      { status: 500 }
    )
  }
}