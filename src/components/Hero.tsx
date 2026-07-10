'use client'

import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { ContactDialog } from './ContactDialog'

export default function Hero() {
  return (
    <section className='relative min-h-[70dvh] lg:min-h-[80dvh] flex w-full flex-col lg:flex-row items-center justify-between gap-12 lg:gap-0 px-5 py-8 lg:px-10 lg:py-16 2xl:px-16 3xl:max-w-7xl 3xl:px-20 bg-secondary rounded-3xl overflow-hidden'>
      {/* Content Side */}
      <div className='flex flex-col gap-8 w-full lg:w-1/2 z-10 text-left items-center md:items-start'>
        <div className='space-y-4'>
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className='text-xs md:text-base lg:text-sm text-gray-300'
          >
            Hi, I&apos;m Afolabi Ridwan Damilare
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className='text-3xl sm:text-4xl md:text-4xl lg:text-3xl xl:text-4xl 2xl:text-4xl 3xl:text-5xl leading-tight font-bold text-white'
          >
            Frontend Engineer building products that drive real business
            results.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className='text-gray-300 max-w-2xl text-sm md:text-xl lg:text-base leading-relaxed'
          >
            I help startups and teams turn messy ideas into fast, scalable
            products that are easy to use, built to perform, and focused on
            measurable growth.
          </motion.p>
        </div>

        <div className='flex flex-col sm:flex-row gap-4 w-full sm:w-auto'>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6 }}
            className='w-full sm:w-auto'
          >
            <ContactDialog
              triggerText='Get In Touch'
              className='bg-primary text-white hover:bg-primary/90'
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.7 }}
            className='w-full sm:w-auto'
          >
            <Button
              asChild
              variant='outline'
              size='lg'
              className='rounded-full px-10 h-12 w-full sm:w-auto border-white/20 text-white hover:bg-white/10'
            >
              <a
                href='/Afolabi Ridwan Damilare.pdf'
                target='_blank'
                rel='noopener noreferrer'
              >
                View Resume
              </a>
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Image Side */}
      <div className='relative w-full lg:w-1/2 flex justify-center lg:justify-end'>
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className='relative group w-full flex justify-center lg:justify-end'
        >
          {/* The Arch Frame */}
          <div className='relative w-full h-[350px] md:h-[450px] lg:w-[400px] lg:h-[400px] 3xl:w-[500px] 3xl:h-[600px] overflow-hidden rounded-xl lg:rounded-3xl '>
            <Image
              src='/IMG-1.png'
              alt='Afolabi Ridwan Damilare, CodeWithMercy frontend engineer'
              fill
              className='object-cover hover:scale-105 transition-transform duration-700'
              sizes='(max-width: 1024px) 100vw, (max-width: 1920px) 40vw, 500px'
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
