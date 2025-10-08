
'use client'

import { motion } from 'framer-motion'
import { Check, Star } from 'lucide-react'
import Link from 'next/link'

export function PricingSection() {
  const plans = [
    {
      name: "Basic",
      price: "$199",
      period: "/month",
      description: "Perfect for small businesses with minimal parking needs",
      features: [
        "Quarterly line striping",
        "Basic power washing",
        "ADA compliance check",
        "Email support",
        "Standard scheduling"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$349",
      period: "/month",
      description: "Ideal for medium businesses with regular maintenance needs",
      features: [
        "Monthly line striping",
        "Complete power washing",
        "ADA compliance & updates",
        "Priority phone support",
        "Flexible scheduling",
        "Emergency service included",
        "Free touch-ups"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "pricing",
      description: "Comprehensive solutions for larger properties and multiple locations",
      features: [
        "Bi-weekly maintenance",
        "Full property cleaning",
        "Complete ADA management",
        "Dedicated account manager",
        "24/7 emergency response",
        "Multiple location support",
        "Custom service agreements"
      ],
      popular: false
    }
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Subscription Plans for Every Business
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Choose the perfect maintenance plan for your business. All plans include our quality guarantee and flexible terms.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 p-8 ${
                plan.popular ? 'ring-2 ring-blue-600 scale-105' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center">
                    <Star className="h-4 w-4 mr-1" />
                    Most Popular
                  </div>
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{plan.name}</h3>
                <div className="flex items-baseline justify-center mb-2">
                  <span className="text-3xl font-bold text-gray-900">{plan.price}</span>
                  <span className="text-gray-600 ml-1">{plan.period}</span>
                </div>
                <p className="text-gray-600 text-sm">{plan.description}</p>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="/contact"
                className={`block w-full text-center py-3 px-6 rounded-lg font-semibold transition-colors duration-300 ${
                  plan.popular
                    ? 'bg-blue-600 text-white hover:bg-blue-700'
                    : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                }`}
              >
                Get Started
              </Link>
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
          <p className="text-gray-600 mb-4">
            All plans include free consultations and can be customized to your specific needs.
          </p>
          <Link
            href="/contact"
            className="text-blue-600 hover:text-blue-700 font-medium"
          >
            Contact us for a custom quote →
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
