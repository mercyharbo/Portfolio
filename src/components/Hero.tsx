'use client'

import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

export default function Hero() {
  return (
    <section className='relative min-h-[80dvh] flex flex-col lg:flex-row items-center justify-between px-4 lg:px-20 py-14 lg:py-20 bg-secondary rounded-2xl '>
      {/* Content Side */}
      <div className='flex flex-col gap-12 w-full lg:w-1/2 z-10'>
        <div className='space-y-3'>
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className='text-sm lg:text-base text-gray-300 font-medium capitalize'
          >
            Hi, I&apos;m Afolabi Ridwan Damilare
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className='text-5xl md:text-6xl lg:text-6xl xl:text-4xl 2xl:text-5xl 3xl:text-6xl leading-tight font-bold text-white tracking-tight'
          >
            Architecting High-Performance <br className='hidden lg:block' />
            Web Applications at Scale.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className='text-gray-300 max-w-2xl leading-relaxed'
          >
            A result-driven Frontend Engineer focused on building scalable,
            accessible, and intuitive digital products. I specialize in bridging
            the gap between sophisticated technical logic and seamless user
            experiences.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Button
            asChild
            size='lg'
            className='rounded-full px-10 h-12 font-semibold transition-all'
          >
            <Link href='#contact'>Get In Touch</Link>
          </Button>
        </motion.div>
      </div>

      {/* Image Side */}
      <div className='relative w-full lg:w-1/2 flex justify-center lg:justify-end'>
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className='relative'
        >
          {/* The Arch Frame */}
          <div className='relative w-72 h-[420px] lg:w-[400px] lg:h-[400px] 3xl:w-[500px] 3xl:h-[600px]'>
            <Image
              src='/img2.JPEG'
              alt='Portrait'
              fill
              className='object-cover rounded-3xl'
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
