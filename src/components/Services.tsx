'use client'

import { motion } from 'framer-motion'

const services = [
  {
    id: '01',
    title: 'Frontend Architecture',
    description:
      "Building robust, type-safe React and Next.js foundations that won't break as your user base or product complexity grows.",
  },
  {
    id: '02',
    title: 'Website Development',
    description:
      'Creating responsive landing pages, marketing sites, and product interfaces that feel polished, load quickly, and support clear business goals.',
  },
  {
    id: '03',
    title: 'Performance Optimization',
    description:
      'Speed matters. I optimize Core Web Vitals to slash load times, significantly improving both SEO rankings and user retention.',
  },
  {
    id: '04',
    title: 'Dashboard and API Integration',
    description:
      'Connecting complex APIs, auth flows, and real-time data into intuitive dashboards that stay usable as information density grows.',
  },
]

export default function Services() {
  return (
    <section id='services' className='w-full 3xl:max-w-7xl'>
      <div className='flex flex-col gap-8'>
        {/* Section Header */}
        <div className='text-center space-y-4'>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className='text-3xl md:text-4xl font-bold text-white'
          >
            How I Can Help You
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className='mx-auto max-w-3xl text-sm leading-relaxed text-gray-300 md:text-base'
          >
            I help teams and founders ship frontend experiences that combine
            strong UI execution, scalable architecture, performance, and
            practical SEO foundations.
          </motion.p>
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
                <h3 className='text-lg font-medium text-white group-hover:text-primary transition-colors'>
                  {service.title}
                </h3>
                <p className='text-gray-300 text-sm leading-relaxed group-hover:text-gray-200 transition-colors'>
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
