
export const dynamic = "force-dynamic";

import { NextRequest, NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function GET(request: NextRequest) {
  try {
    const invoices = await prisma.invoice.findMany({
      orderBy: { createdAt: 'desc' }
    })

    // If no invoices exist, create some sample data
    if (invoices.length === 0) {
      const sampleInvoices = [
        {
          clientName: 'ABC Corporation',
          amount: 2500.00,
          description: 'Parking lot striping - 50 spaces with ADA compliance',
          status: 'paid',
          dueDate: new Date('2024-06-01')
        },
        {
          clientName: 'Retail Plaza LLC',
          amount: 1800.00,
          description: 'Power washing and re-striping service',
          status: 'pending',
          dueDate: new Date('2024-06-15')
        },
        {
          clientName: 'Office Complex Management',
          amount: 3200.00,
          description: 'Full parking lot maintenance - quarterly service',
          status: 'paid',
          dueDate: new Date('2024-05-30')
        },
        {
          clientName: 'Shopping Center Inc',
          amount: 4500.00,
          description: 'Large lot striping - 120 spaces',
          status: 'overdue',
          dueDate: new Date('2024-05-15')
        },
        {
          clientName: 'Medical Plaza',
          amount: 1200.00,
          description: 'ADA compliance update and touch-up work',
          status: 'pending',
          dueDate: new Date('2024-06-20')
        }
      ]

      await prisma.invoice.createMany({
        data: sampleInvoices
      })

      return NextResponse.json({
        invoices: sampleInvoices.map((inv, index) => ({
          ...inv,
          id: `sample-${index}`,
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString()
        }))
      })
    }

    return NextResponse.json({ invoices })

  } catch (error) {
    console.error('Invoices error:', error)
    return NextResponse.json(
      { error: 'Failed to fetch invoices' },
      { status: 500 }
    )
  }
}

export async function POST(request: NextRequest) {
  try {
    const { clientName, amount, description, dueDate } = await request.json()

    const invoice = await prisma.invoice.create({
      data: {
        clientName,
        amount: parseFloat(amount),
        description,
        dueDate: new Date(dueDate),
        status: 'pending'
      }
    })

    return NextResponse.json({ invoice })

  } catch (error) {
    console.error('Create invoice error:', error)
    return NextResponse.json(
      { error: 'Failed to create invoice' },
      { status: 500 }
    )
  }
}
