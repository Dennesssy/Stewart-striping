
export const dynamic = "force-dynamic";

import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import bcrypt from 'bcryptjs'

const validNames = ['Dennis', 'Dennis Jr', 'Malik', 'Kaiden']

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { names, type } = body

    // Check if any of the names are valid
    const validFields = names.filter((name: string) => 
      validNames.some(validName => 
        validName.toLowerCase() === name?.toLowerCase()?.trim()
      )
    )

    if (validFields.length === 0) {
      return NextResponse.json(
        { error: 'Invalid credentials' },
        { status: 401 }
      )
    }

    // Use the first valid name
    const validName = validFields[0]
    const email = `${validName.toLowerCase().replace(/\s+/g, '')}@stewartstriping.com`
    const defaultPassword = 'password123' // Default password for management users

    let user = await prisma.user.findUnique({
      where: { email }
    })

    if (!user) {
      const hashedPassword = await bcrypt.hash(defaultPassword, 12)
      user = await prisma.user.create({
        data: {
          name: validName,
          email,
          password: hashedPassword,
          type: type || 'management'
        }
      })
    }

    return NextResponse.json(
      { 
        message: 'Login successful',
        user: { id: user.id, name: user.name, email: user.email, type: user.type }
      },
      { status: 200 }
    )

  } catch (error) {
    console.error('Login error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
