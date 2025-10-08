
'use client'

import { motion } from 'framer-motion'
import { HeroSection } from '@/components/hero-section'
import { ServicesOverview } from '@/components/services-overview'
import { ValueProposition } from '@/components/value-proposition'
import { CTASection } from '@/components/cta-section'
import { StatsSection } from '@/components/stats-section'

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ServicesOverview />
      <ValueProposition />
      <StatsSection />
      <CTASection />
    </div>
  )
}
