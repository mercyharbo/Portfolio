'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function DecorativeAvatar() {
  return (
    <div className='relative'>
      {/* Background decorative elements */}
      <motion.div
        className='absolute -top-4 -left-4 w-72 h-72 bg-gradient-to-r from-blue-400/30 to-purple-400/30 rounded-full blur-2xl'
        animate={{
          scale: [1, 1.1, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 20,
          repeat: Number.POSITIVE_INFINITY,
          ease: 'linear',
        }}
      />

      {/* Main avatar container */}
      <motion.div
        className='relative w-64 h-64 lg:w-80 lg:h-80'
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        {/* Avatar image placeholder */}
        <div className='w-full h-full rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 p-1'>
          <div className='w-full h-full rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center overflow-hidden'>
            <Image
              src='/avatar1.JPEG'
              alt='Mercy - Frontend Developer'
              width={320}
              height={320}
              className='w-full h-full object-cover rounded-full'
            />
          </div>
        </div>

        {/* Floating elements */}
        <motion.div
          className='absolute -top-2 -right-2 w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-lg'
          animate={{
            y: [0, -10, 0],
          }}
          transition={{
            duration: 2,
            repeat: Number.POSITIVE_INFINITY,
            ease: 'easeInOut',
          }}
        >
          <span className='text-white text-xl'>⚡</span>
        </motion.div>

        <motion.div
          className='absolute -bottom-2 -left-2 w-10 h-10 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center shadow-lg'
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 2.5,
            repeat: Number.POSITIVE_INFINITY,
            ease: 'easeInOut',
            delay: 0.5,
          }}
        >
          <span className='text-white text-lg'>🚀</span>
        </motion.div>

        <motion.div
          className='absolute top-1/2 -right-4 w-8 h-8 bg-gradient-to-r from-pink-400 to-red-500 rounded-full flex items-center justify-center shadow-lg'
          animate={{
            x: [0, 10, 0],
          }}
          transition={{
            duration: 3,
            repeat: Number.POSITIVE_INFINITY,
            ease: 'easeInOut',
            delay: 1,
          }}
        >
          <span className='text-white text-sm'>💡</span>
        </motion.div>
      </motion.div>
    </div>
  )
}
