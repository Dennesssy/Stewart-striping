
'use client'

import { motion } from 'framer-motion'
import { Bot, Search, Target, TrendingUp, Zap, Clock } from 'lucide-react'
import Image from 'next/image'

export default function AutomationPage() {
  const automationFeatures = [
    {
      icon: Bot,
      title: "Automated Lead Generation",
      description: "Our advanced systems identify and reach out to potential clients automatically, ensuring consistent business growth without manual effort.",
      benefits: [
        "24/7 lead identification",
        "Personalized outreach campaigns",
        "CRM integration and tracking",
        "Automated follow-up sequences"
      ]
    },
    {
      icon: Search,
      title: "SEO Optimization",
      description: "We leverage cutting-edge SEO techniques to ensure your business appears at the top of search results when customers need parking lot services.",
      benefits: [
        "Local search optimization",
        "Google My Business management",
        "Content marketing automation",
        "Review management systems"
      ]
    },
    {
      icon: Target,
      title: "Targeted Marketing",
      description: "Smart algorithms help us identify and target the right businesses at the right time, maximizing conversion rates and ROI.",
      benefits: [
        "Demographic targeting",
        "Behavioral analysis",
        "Optimal timing algorithms",
        "Multi-channel campaigns"
      ]
    }
  ]

  const seoStrategies = [
    {
      icon: TrendingUp,
      title: "Local Market Dominance",
      description: "We focus on dominating local search results for parking lot services in North Texas."
    },
    {
      icon: Zap,
      title: "Fast Results",
      description: "Our proven strategies deliver measurable results within the first 30-60 days."
    },
    {
      icon: Clock,
      title: "Continuous Optimization",
      description: "We constantly monitor and adjust our strategies based on performance data."
    }
  ]

  return (
    <div className="min-h-screen pt-20">
      {/* Header Section */}
      <section className="py-16 bg-gradient-to-br from-indigo-50 to-purple-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Automation & <span className="text-indigo-600">SEO Excellence</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Discover how Stewart Striping leverages cutting-edge automation and SEO strategies to deliver exceptional results for our clients and grow our business efficiently.
            </p>
            <div className="relative aspect-video max-w-4xl mx-auto rounded-lg overflow-hidden shadow-xl bg-gray-200">
              <Image
                src="/images/automation/analytics-dashboard.png"
                alt="Digital marketing automation and SEO dashboard"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Automation Features */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How We Automate Success
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our sophisticated automation systems work around the clock to grow our business and deliver better service to our clients.
            </p>
          </motion.div>

          <div className="space-y-12">
            {automationFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-8`}
              >
                <div className="flex-1">
                  <div className="bg-indigo-100 rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <div className="flex items-center mb-4">
                      <div className="bg-indigo-600 rounded-lg p-3 mr-4">
                        <feature.icon className="h-6 w-6 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900">{feature.title}</h3>
                    </div>
                    <p className="text-gray-600 mb-6">{feature.description}</p>
                    <ul className="space-y-2">
                      {feature.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center text-gray-700">
                          <div className="w-2 h-2 bg-indigo-600 rounded-full mr-3"></div>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="flex-1">
                  <div className="relative aspect-square max-w-md mx-auto rounded-lg overflow-hidden shadow-lg bg-gray-200">
                    <Image
                      src="/images/automation/seo-tools.jpg"
                      alt={`${feature.title} automation system`}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SEO Strategy */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our SEO Strategy
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We don't just provide services – we dominate the digital landscape to ensure maximum visibility and growth.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {seoStrategies.map((strategy, index) => (
              <motion.div
                key={strategy.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="bg-indigo-100 rounded-lg p-3 w-fit mb-4">
                  <strategy.icon className="h-6 w-6 text-indigo-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{strategy.title}</h3>
                <p className="text-gray-600">{strategy.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Results Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white rounded-lg shadow-xl p-8"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              The Results Speak for Themselves
            </h3>
            <div className="grid md:grid-cols-4 gap-6 text-center">
              <div className="bg-indigo-50 rounded-lg p-6">
                <div className="text-3xl font-bold text-indigo-600 mb-2 count-up">300%</div>
                <div className="text-gray-600">Increase in Online Visibility</div>
              </div>
              <div className="bg-green-50 rounded-lg p-6">
                <div className="text-3xl font-bold text-green-600 mb-2 count-up">85%</div>
                <div className="text-gray-600">Lead Conversion Rate</div>
              </div>
              <div className="bg-blue-50 rounded-lg p-6">
                <div className="text-3xl font-bold text-blue-600 mb-2 count-up">24/7</div>
                <div className="text-gray-600">Automated Operations</div>
              </div>
              <div className="bg-purple-50 rounded-lg p-6">
                <div className="text-3xl font-bold text-purple-600 mb-2 count-up">50+</div>
                <div className="text-gray-600">Keywords Ranking #1</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits for Clients */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What This Means for You
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our automation and SEO expertise translates directly into better service and value for our clients.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Faster Response Times",
                description: "Automated systems ensure we respond to your needs quickly and efficiently."
              },
              {
                title: "Competitive Pricing",
                description: "Operational efficiency allows us to offer better prices without compromising quality."
              },
              {
                title: "Consistent Quality",
                description: "Standardized processes ensure every job meets our high standards."
              },
              {
                title: "Proactive Service",
                description: "We identify and address potential issues before they become problems."
              },
              {
                title: "Transparent Communication",
                description: "Automated updates keep you informed throughout the entire process."
              },
              {
                title: "Scalable Solutions",
                description: "Our systems grow with your business needs, ensuring long-term partnership."
              }
            ].map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="bg-gray-50 rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
