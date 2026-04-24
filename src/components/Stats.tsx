'use client'

import { motion } from 'framer-motion'
import { Rocket, Star, Users } from 'lucide-react'

const stats = [
  {
    value: '20+',
    label: 'Projects Delivered',
    icon: Rocket,
  },
  {
    value: '4+',
    label: 'Years Experience',
    icon: Rocket, // Matching the UI attachment's icon choice
  },
  {
    value: '95%',
    label: 'Client Satisfaction',
    icon: Star,
  },  
  {
    value: '20+',
    label: 'Happy Clients',
    icon: Users,
  },
]

export default function Stats() {
  return (
    <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5'>
      {stats.map((stat, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1, duration: 0.5 }}
          viewport={{ once: true }}
          className='flex items-start justify-between lg:px-12 relative group'
        >
          {/* Content */}
          <div className='flex flex-col gap-1.5'>
            <span className='text-2xl lg:text-4xl font-medium text-white'>
              {stat.value}
            </span>
            <span className='text-sm text-gray-300 font-medium whitespace-nowrap'>
              {stat.label}
            </span>
          </div>

          {/* Icon Circle */}
          <div className='size-8 lg:size-10 rounded-full bg-linear-to-br from-white/10 to-white/5 border border-white/10 flex items-center justify-center backdrop-blur-xl relative z-10 group-hover:border-blue-500/30 transition-all duration-500 shadow-xl shadow-black/20'>
            <stat.icon className='size-3 lg:size-5 text-primary' />
          </div>

          {/* Vertical Divider (Desktop Only) */}
          {index !== stats.length - 1 && (
            <div className='hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-0.5 h-20 bg-linear-to-b from-transparent via-primary to-transparent' />
          )}
        </motion.div>
      ))}
    </section>
  )
}
