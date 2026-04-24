'use client'

import { motion } from 'framer-motion'
import { ContactDialog } from './ContactDialog'

export default function CTA() {
  return (
    <section className='w-full px-4 lg:px-20'>
      <div className='grid grid-cols-1 lg:grid-cols-[1.8fr_1fr] gap-5'>
        {/* Left CTA Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className='relative group overflow-hidden rounded-4xl bg-linear-to-br from-primary via-blue-800 to-purple-950 p-12 lg:p-20 flex flex-col items-center justify-center text-center min-h-[400px]'
        >
          {/* Subtle Glow Effect */}
          <div className='absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500' />

          <div className='relative z-10 flex flex-col items-center gap-10 max-w-2xl'>
            <h2 className='text-2xl md:text-4xl lg:text-5xl font-bold text-white'>
              Got an idea? Let&apos;s build something great.
            </h2>

            <ContactDialog />
          </div>

          {/* Decorative mesh/gradient overlay */}
          <div className='absolute -top-1/2 -right-1/4 w-full h-full bg-primary/10 blur-[120px] rounded-full pointer-events-none' />
        </motion.div>

        {/* Right Decorative Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className='rounded-4xl bg-dark-accent p-12 flex items-center justify-center overflow-hidden relative'
        ></motion.div>
      </div>
    </section>
  )
}
