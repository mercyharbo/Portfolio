'use client'

import experience from '@/data/experience.json'
import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'

export default function Experience() {
  return (
    <section id='experience' className='w-full px-5'>
      <div className='flex flex-col gap-8'>
        {/* Section Header */}
        <div className='text-left'>
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className='text-3xl md:text-5xl font-bold text-white tracking-tight'
          >
            Experience Timeline
          </motion.h2>
        </div>

        {/* Experience Grid */}
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
          {experience.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className='group relative h-full border-primary/50 rounded-2xl overflow-hidden transition-all duration-300 flex flex-col border'>
                <CardContent className='p-8 flex flex-col h-full'>
                  {/* Role & Duration Header */}
                  <div className='flex justify-between items-start gap-4 mb-4'>
                    <div className='space-y-1'>
                      <h3 className='text-xl font-bold text-white group-hover:text-primary transition-colors'>
                        {item.role}
                      </h3>
                      <p className='text-gray-300 font-medium'>
                        {item.company}
                      </p>
                    </div>
                    <span className='text-sm text-gray-400 whitespace-nowrap pt-1'>
                      {item.duration}
                    </span>
                  </div>

                  {/* Achievements List */}
                  <ul className='space-y-4 mt-4'>
                    {item.achievements?.map((achievement, idx) => (
                      <li
                        key={idx}
                        className='flex items-start gap-3 text-sm text-gray-300 leading-relaxed transition-colors'
                      >
                        <span className='text-primary mt-1.5'>•</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
