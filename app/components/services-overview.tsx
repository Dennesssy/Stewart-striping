
'use client'

import { motion } from 'framer-motion'
import { Brush, Droplets, Calendar, Shield } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export function ServicesOverview() {
  const services = [
    {
      icon: Brush,
      title: "Parking Lot Striping",
      description: "Professional line striping, ADA compliance, and custom markings for your business property.",
      image: "https://i.ytimg.com/vi/ph8ZxgEsLDY/maxresdefault.jpg"
    },
    {
      icon: Droplets,
      title: "Power Washing",
      description: "Complete pressure washing services to remove stains, grime, and restore your property's appearance.",
      image: "https://i.ytimg.com/vi/z_03c87RuX4/maxresdefault.jpg"
    },
    {
      icon: Calendar,
      title: "Subscription Plans",
      description: "Regular maintenance schedules designed for SMBs with flexible pricing and priority service.",
      image: "https://i.pinimg.com/originals/e8/6f/ab/e86fab1aeef12a623d58822ac3dd0249.png"
    },
    {
      icon: Shield,
      title: "Quality Guarantee",
      description: "Fully licensed, insured, and bonded with comprehensive warranties on all our work.",
      image: "https://assets-global.website-files.com/5f688092bdf2ee0b6b010f87/647e15d8ea90a94ac15c61cf_Accredible_BadgePathways_03-Freeform.png"
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Complete Parking Lot Solutions
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            From fresh striping to deep cleaning, we provide everything your business needs to maintain a professional appearance.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group bg-gray-50 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="relative aspect-video bg-gray-200">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="bg-blue-600 rounded-lg p-3 mr-4">
                    <service.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3>
                </div>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <Link
                  href="/services"
                  className="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center group-hover:translate-x-1 transition-transform duration-300"
                >
                  Learn More →
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link
            href="/services"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300 inline-flex items-center"
          >
            View All Services
            <Brush className="ml-2 h-5 w-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
