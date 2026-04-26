'use client'

import { motion } from 'framer-motion'

const stats = [
  { number: '4+', label: 'Years Experience' },
  { number: '20+', label: 'Projects Completed' },
  { number: '15+', label: 'Happy Clients' },
]

export default function Stats() {
  return (
    <section className='w-full px-5'>
      <div className='bg-secondary/30 border border-white/5 rounded-3xl p-8 lg:p-12 backdrop-blur-sm'>
        <div className='flex flex-col md:flex-row w-full'>
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`flex-1 flex flex-col items-center justify-center text-center py-8 md:py-0 first:pt-0 last:pb-0 ${
                index !== stats.length - 1
                  ? 'border-b md:border-b-0 md:border-r border-white/10'
                  : ''
              }`}
            >
              <h3 className='text-4xl md:text-5xl lg:text-6xl font-bold bg-linear-to-r from-white to-gray-400 bg-clip-text text-transparent mb-2'>
                {stat.number}
              </h3>
              <p className='text-gray-400 text-sm md:text-base font-medium uppercase tracking-wider'>
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
