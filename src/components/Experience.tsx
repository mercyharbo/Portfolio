'use client'

import experience from '@/data/experience.json'
import { motion } from 'framer-motion'

export default function Experience() {
  return (
    <section id='experience' className='w-full 3xl:max-w-7xl'>
      <div className='flex flex-col gap-8'>
        <div className='flex flex-col gap-3 text-left'>
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className='text-3xl font-bold text-white md:text-4xl'
          >
            Experience
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className='max-w-2xl text-sm leading-relaxed text-gray-300 md:text-base'
          >
            A focused view of the roles, products, and teams I have helped move
            forward through frontend engineering.
          </motion.p>
        </div>

        <div className='flex flex-col gap-4'>
          {experience.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              viewport={{ once: true }}
            >
              <article className='group flex flex-col gap-5 rounded-2xl border border-white/10 bg-dark-accent/60 p-5 transition-colors hover:border-primary/50 md:flex-row md:items-start md:justify-between md:p-6'>
                <div className='flex flex-col gap-3'>
                  <div className='flex flex-wrap items-center gap-2 text-xs font-medium text-gray-400'>
                    <span className='rounded-full border border-white/10 bg-white/5 px-3 py-1'>
                      {item.type_of_job}
                    </span>
                    <span>{item.duration}</span>
                  </div>
                  <div className='flex flex-col gap-1'>
                    <h3 className='text-lg font-semibold text-white transition-colors group-hover:text-primary md:text-xl'>
                      {item.role}
                    </h3>
                    <p className='text-sm font-medium text-gray-300'>
                      {item.company}
                    </p>
                  </div>
                </div>

                <p className='line-clamp-2 max-w-2xl text-sm leading-relaxed text-gray-300 md:text-right'>
                  {item.description}
                </p>
              </article>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
