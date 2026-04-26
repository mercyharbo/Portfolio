'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { ContactDialog } from './ContactDialog'

export default function CTA() {
  return (
    <section className='w-full px-5'>
      <div className='grid grid-cols-1 lg:grid-cols-[1.8fr_1fr] gap-5'>
        {/* Left CTA Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className='relative group overflow-hidden rounded-2xl bg-linear-to-br from-primary via-primary to-indigo-950 p-10 lg:p-20 flex flex-col items-center justify-center text-center min-h-[350px] lg:min-h-[450px]'
        >
          {/* Subtle Glow Effect */}
          <div className='absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500' />

          <div className='relative z-10 flex flex-col items-center gap-8 lg:gap-10 max-w-2xl'>
            <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight'>
              Got an idea? <br className='sm:hidden' /> Let&apos;s build something great.
            </h2>

            <ContactDialog />
          </div>

          {/* Decorative mesh/gradient overlay */}
          <div className='absolute -top-1/2 -right-1/4 w-full h-full bg-primary/20 blur-[120px] rounded-full pointer-events-none' />
        </motion.div>

        {/* Right Decorative Card - Optimized with Image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className='rounded-2xl overflow-hidden relative min-h-[300px] lg:min-h-full group'
        >
          <Image
            src='/img1.JPEG'
            alt='Decorative'
            fill
            className='object-cover group-hover:scale-105 transition-transform duration-700'
          />
          {/* Overlay to match the theme */}
          <div className='absolute inset-0 bg-linear-to-t from-secondary/40 via-transparent to-transparent' />
        </motion.div>
      </div>
    </section>
  )
}
