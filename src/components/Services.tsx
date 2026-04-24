'use client'

import { motion } from 'framer-motion'

const services = [
  {
    id: '01',
    title: 'Scalable Architecture',
    description:
      'Architecting robust, type-safe frontend systems using Next.js and TypeScript, designed for long-term maintainability and high-traffic scale.',
  },
  {
    id: '02',
    title: 'High-Conversion UI',
    description:
      'Transforming design systems into pixel-perfect, interactive interfaces with a proven track record of driving significant business revenue.',
  },
  {
    id: '03',
    title: 'Performance Engineering',
    description:
      'Optimizing Core Web Vitals and slashing initial load times by up to 40% to boost user retention and organic SEO performance.',
  },
  {
    id: '04',
    title: 'System Integration',
    description:
      'Connecting complex REST/GraphQL APIs with secure RBAC systems and real-time dashboards for data-driven applications.',
  },
]

export default function Services() {
  return (
    <section className='w-full py-20 px-4 lg:px-20'>
      <div className='flex flex-col gap-16'>
        {/* Section Header */}
        <div className='text-center space-y-4'>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className='text-3xl md:text-5xl font-bold text-white tracking-tight'
          >
            How I Can Help You
          </motion.h2>
        </div>

        {/* Services Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5'>
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className='group relative bg-dark-accent/40 border border-white/5 p-8 rounded-3xl overflow-hidden transition-all duration-500 hover:border-blue-500/30'
            >
              {/* Background Number */}
              <div className='absolute -top-4 -right-2 text-8xl font-black text-blue-500/10 transition-colors duration-500 group-hover:text-blue-500/20 select-none pointer-events-none'>
                {service.id}
              </div>

              {/* Card Content */}
              <div className='relative z-10 flex flex-col gap-4 h-full pt-6'>
                <h3 className='text-xl font-medium text-white group-hover:text-primary transition-colors'>
                  {service.title}
                </h3>
                <p className='text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors'>
                  {service.description}
                </p>
              </div>

              {/* Decorative Corner Light */}
              <div className='absolute top-0 right-0 w-24 h-24 bg-blue-500/5 blur-2xl rounded-full group-hover:bg-blue-500/10 transition-colors' />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
