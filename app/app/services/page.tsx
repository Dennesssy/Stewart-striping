
'use client'

import { motion } from 'framer-motion'
import { ServiceCard } from '@/components/service-card'
import { PricingSection } from '@/components/pricing-section'
import { Brush, Droplets, Calendar, Shield } from 'lucide-react'
import Image from 'next/image'

export default function ServicesPage() {
  const services = [
    {
      icon: Brush,
      title: "Parking Lot Striping",
      description: "Professional line striping for parking lots, handicap spaces, fire lanes, and directional arrows. We use high-quality paint that lasts longer and looks better.",
      features: [
        "ADA compliant handicap spaces",
        "Fire lane markings",
        "Directional arrows and signage",
        "Custom stenciling available",
        "High-visibility paint application"
      ]
    },
    {
      icon: Droplets,
      title: "Power Washing Services",
      description: "Complete pressure washing solutions for parking lots, sidewalks, building exteriors, and more. Remove oil stains, gum, and years of built-up grime.",
      features: [
        "Oil stain removal",
        "Gum and debris cleaning",
        "Sidewalk and walkway washing",
        "Building exterior cleaning",
        "Eco-friendly cleaning solutions"
      ]
    },
    {
      icon: Calendar,
      title: "Subscription Maintenance",
      description: "Regular maintenance schedules to keep your property looking professional year-round. Perfect for businesses that want consistent, worry-free service.",
      features: [
        "Monthly, quarterly, or annual plans",
        "Scheduled maintenance reminders",
        "Priority booking for urgent needs",
        "Discounted rates for subscribers",
        "Comprehensive property assessments"
      ]
    },
    {
      icon: Shield,
      title: "Quality Guarantee",
      description: "We stand behind our work with comprehensive warranties and insurance coverage. Your satisfaction and peace of mind are our top priorities.",
      features: [
        "Fully licensed and insured",
        "Work quality guarantee",
        "Free touch-ups within warranty",
        "Professional liability coverage",
        "Bonded service technicians"
      ]
    }
  ]

  return (
    <div className="min-h-screen pt-20">
      {/* Header Section */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Professional <span className="text-blue-600">Parking Lot Services</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Comprehensive striping and power washing solutions designed specifically for small to medium businesses in North Texas.
            </p>
            <div className="relative aspect-video max-w-4xl mx-auto rounded-lg overflow-hidden shadow-xl bg-gray-200">
              <Image
                src="/images/services/parking-striping-detail.jpg"
                alt="Professional parking lot striping services"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Everything you need to maintain a professional appearance for your business property.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
              >
                <ServiceCard {...service} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <PricingSection />

      {/* Service Area */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Serving North Texas
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
              We proudly serve small to medium businesses throughout the North Texas region, including Dallas, Fort Worth, Plano, Irving, and surrounding areas.
            </p>
            <div className="bg-white rounded-lg shadow-lg p-8 max-w-2xl mx-auto">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Service Areas Include:</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-gray-600">
                <div>Dallas</div>
                <div>Fort Worth</div>
                <div>Plano</div>
                <div>Irving</div>
                <div>Arlington</div>
                <div>Garland</div>
                <div>Mesquite</div>
                <div>Richardson</div>
                <div>Carrollton</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
