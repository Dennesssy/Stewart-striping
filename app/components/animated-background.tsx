
'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

export function AnimatedBackground() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  // Create multiple animated lines from different edges
  const lines = [
    // Left side lines
    { id: 1, startX: 0, startY: 20, endX: 30, endY: 20, delay: 0 },
    { id: 2, startX: 0, startY: 40, endX: 35, endY: 40, delay: 0.5 },
    { id: 3, startX: 0, startY: 60, endX: 25, endY: 60, delay: 1 },
    { id: 4, startX: 0, startY: 80, endX: 30, endY: 80, delay: 1.5 },
    
    // Right side lines
    { id: 5, startX: 100, startY: 15, endX: 70, endY: 15, delay: 0.3 },
    { id: 6, startX: 100, startY: 35, endX: 65, endY: 35, delay: 0.8 },
    { id: 7, startX: 100, startY: 55, endX: 75, endY: 55, delay: 1.3 },
    { id: 8, startX: 100, startY: 75, endX: 70, endY: 75, delay: 1.8 },
    
    // Top lines
    { id: 9, startX: 20, startY: 0, endX: 20, endY: 25, delay: 0.2 },
    { id: 10, startX: 40, startY: 0, endX: 40, endY: 30, delay: 0.7 },
    { id: 11, startX: 60, startY: 0, endX: 60, endY: 25, delay: 1.2 },
    { id: 12, startX: 80, startY: 0, endX: 80, endY: 30, delay: 1.7 },
    
    // Bottom lines
    { id: 13, startX: 25, startY: 100, endX: 25, endY: 75, delay: 0.4 },
    { id: 14, startX: 45, startY: 100, endX: 45, endY: 70, delay: 0.9 },
    { id: 15, startX: 65, startY: 100, endX: 65, endY: 75, delay: 1.4 },
    { id: 16, startX: 85, startY: 100, endX: 85, endY: 70, delay: 1.9 },
  ]

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        {lines.map((line) => (
          <motion.line
            key={line.id}
            x1={`${line.startX}%`}
            y1={`${line.startY}%`}
            x2={`${line.startX}%`}
            y2={`${line.startY}%`}
            stroke="rgba(255, 255, 255, 0.3)"
            strokeWidth="0.5"
            strokeLinecap="round"
            initial={{
              x2: `${line.startX}%`,
              y2: `${line.startY}%`,
              pathLength: 0,
            }}
            animate={{
              x2: `${line.endX}%`,
              y2: `${line.endY}%`,
              pathLength: 1,
            }}
            transition={{
              duration: 2,
              delay: line.delay,
              ease: "easeInOut",
            }}
          />
        ))}
        
        {/* Additional decorative elements */}
        <motion.circle
          cx="15%"
          cy="25%"
          r="0.5"
          fill="rgba(255, 255, 255, 0.4)"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 2.5 }}
        />
        <motion.circle
          cx="85%"
          cy="70%"
          r="0.5"
          fill="rgba(255, 255, 255, 0.4)"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 3 }}
        />
        <motion.circle
          cx="30%"
          cy="85%"
          r="0.5"
          fill="rgba(255, 255, 255, 0.4)"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 3.5 }}
        />
        <motion.circle
          cx="70%"
          cy="15%"
          r="0.5"
          fill="rgba(255, 255, 255, 0.4)"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 4 }}
        />
      </svg>
      
      {/* Subtle gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-blue-900/5 to-transparent" />
    </div>
  )
}
