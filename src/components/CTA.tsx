'use client'

import { motion } from 'framer-motion'
import { ContactDialog } from './ContactDialog'

export default function CTA() {
  return (
    <section className='w-full'>
      <div className='mx-auto max-w-7xl'>
        {/* Left CTA Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className='relative group flex min-h-[350px] flex-col items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-primary p-8 text-center sm:p-10 lg:min-h-[420px] lg:p-16'
        >
          {/* Subtle Glow Effect */}
          <div className='absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500' />

          <div className='relative z-10 flex max-w-2xl flex-col items-center gap-6 lg:gap-8'>
            <div className='flex flex-col gap-4'>
              <p className='text-xs font-medium text-white/75 md:text-sm'>
                Ready to build with clarity?
              </p>
              <h2 className='text-3xl font-bold leading-tight text-white md:text-4xl'>
                Let&apos;s turn your product idea into a fast, reliable web
                experience.
              </h2>
              <p className='mx-auto max-w-xl text-sm leading-relaxed text-white/80 md:text-base'>
                Send the goal, the rough scope, or the problem you are trying
                to solve. I&apos;ll help shape the frontend path and build what
                actually needs to ship.
              </p>
            </div>

            <ContactDialog />
          </div>

          {/* Decorative mesh/gradient overlay */}
          <div className='absolute -top-1/2 -right-1/4 w-full h-full bg-primary/20 blur-[120px] rounded-full pointer-events-none' />
        </motion.div>
      </div>
    </section>
  )
}
