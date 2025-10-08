
'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useEffect, useState } from 'react'

export function StatsSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const stats = [
    { number: 500, suffix: '+', label: 'Businesses Served', color: 'text-blue-600' },
    { number: 98, suffix: '%', label: 'Customer Satisfaction', color: 'text-green-600' },
    { number: 5, suffix: ' Years', label: 'Industry Experience', color: 'text-purple-600' },
    { number: 24, suffix: '/7', label: 'Emergency Response', color: 'text-orange-600' },
  ]

  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Trusted by North Texas Businesses
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Our track record speaks for itself. See why hundreds of SMBs trust Stewart Striping for their parking lot needs.
          </p>
        </motion.div>

        <div ref={ref} className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className={`text-4xl md:text-5xl font-bold mb-2 count-up ${stat.color}`}>
                <CountUpNumber target={stat.number} suffix={stat.suffix} inView={inView} />
              </div>
              <div className="text-gray-300 text-sm md:text-base">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function CountUpNumber({ target, suffix, inView }: { target: number; suffix: string; inView: boolean }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (inView) {
      let start = 0
      const end = target
      const duration = 2000
      const increment = end / (duration / 16)

      const timer = setInterval(() => {
        start += increment
        if (start >= end) {
          setCount(end)
          clearInterval(timer)
        } else {
          setCount(Math.floor(start))
        }
      }, 16)

      return () => clearInterval(timer)
    }
  }, [target, inView])

  return <span>{count}{suffix}</span>
}
