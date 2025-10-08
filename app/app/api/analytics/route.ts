
export const dynamic = "force-dynamic";

import { NextRequest, NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function GET(request: NextRequest) {
  try {
    // Get analytics data from database
    const analytics = await prisma.websiteAnalytics.findMany({
      orderBy: { date: 'desc' },
      take: 30
    })

    // If no data exists, create some sample data
    if (analytics.length === 0) {
      const sampleData = []
      for (let i = 29; i >= 0; i--) {
        const date = new Date()
        date.setDate(date.getDate() - i)
        
        sampleData.push({
          date: date,
          visitors: Math.floor(Math.random() * 100) + 50,
          pageViews: Math.floor(Math.random() * 300) + 150,
          conversions: Math.floor(Math.random() * 10) + 2,
          bounceRate: Math.random() * 0.4 + 0.2
        })
      }

      await prisma.websiteAnalytics.createMany({
        data: sampleData
      })

      return NextResponse.json({
        analytics: sampleData,
        summary: {
          totalVisitors: sampleData.reduce((sum, day) => sum + day.visitors, 0),
          totalPageViews: sampleData.reduce((sum, day) => sum + day.pageViews, 0),
          totalConversions: sampleData.reduce((sum, day) => sum + day.conversions, 0),
          avgBounceRate: sampleData.reduce((sum, day) => sum + day.bounceRate, 0) / sampleData.length
        }
      })
    }

    const summary = {
      totalVisitors: analytics.reduce((sum: number, day: any) => sum + day.visitors, 0),
      totalPageViews: analytics.reduce((sum: number, day: any) => sum + day.pageViews, 0),
      totalConversions: analytics.reduce((sum: number, day: any) => sum + day.conversions, 0),
      avgBounceRate: analytics.reduce((sum: number, day: any) => sum + day.bounceRate, 0) / analytics.length
    }

    return NextResponse.json({
      analytics,
      summary
    })

  } catch (error) {
    console.error('Analytics error:', error)
    return NextResponse.json(
      { error: 'Failed to fetch analytics' },
      { status: 500 }
    )
  }
}
