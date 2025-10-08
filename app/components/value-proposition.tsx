
'use client'

import { motion } from 'framer-motion'
import { Building2, DollarSign, Clock, Users } from 'lucide-react'
import Image from 'next/image'

export function ValueProposition() {
  const values = [
    {
      icon: Building2,
      title: "Built for SMBs",
      description: "Our services are specifically designed for small to medium businesses, with flexible solutions that fit your budget and schedule."
    },
    {
      icon: DollarSign,
      title: "Subscription Savings",
      description: "Regular maintenance plans offer significant cost savings compared to one-time services, with predictable monthly pricing."
    },
    {
      icon: Clock,
      title: "Minimal Disruption",
      description: "We work around your business hours to ensure minimal disruption to your operations and customer experience."
    },
    {
      icon: Users,
      title: "Local Expertise",
      description: "As a North Texas company, we understand local regulations, weather conditions, and business needs in our community."
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Why Small & Medium Businesses Choose <span className="text-blue-600">Stewart Striping</span>
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              We understand the unique challenges facing SMBs in North Texas. Our tailored approach delivers professional results without breaking the budget.
            </p>

            <div className="space-y-6">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-4"
                >
                  <div className="bg-blue-600 rounded-lg p-3 flex-shrink-0">
                    <value.icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{value.title}</h3>
                    <p className="text-gray-600">{value.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative aspect-square rounded-lg overflow-hidden shadow-2xl bg-gray-200">
              <Image
                src="https://as2.ftcdn.net/v2/jpg/03/16/06/87/1000_F_316068747_Op8ozS0V3yIEUtSQ7ucD6m5iInH23qQH.jpg"
                alt="Small business with professional parking lot"
                fill
                className="object-cover"
              />
            </div>
            
            {/* Floating Stats */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="absolute -bottom-6 -left-6 bg-white rounded-lg shadow-xl p-6"
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600 count-up">500+</div>
                <div className="text-sm text-gray-600">SMBs Served</div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="absolute -top-6 -right-6 bg-white rounded-lg shadow-xl p-6"
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600 count-up">98%</div>
                <div className="text-sm text-gray-600">Satisfaction Rate</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
