'use client'

import Link from 'next/link'
import { BsGithub, BsInstagram, BsLinkedin, BsTwitterX } from 'react-icons/bs'
import { HiOutlineHome } from 'react-icons/hi2'

const Footer = () => {
  return (
    <footer className='w-full relative py-10 px-8 lg:px-16'>
      {/* Gradient Border Line */}
      <div className='absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-px bg-linear-to-r from-transparent via-primary via-50% to-transparent opacity-80' />
      <div className='max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6'>
        {/* Left Side: Brand */}
        <div className='flex items-center gap-3'>
          <div className='flex items-center justify-center size-9 rounded-full border border-primary text-white'>
            <HiOutlineHome size={18} />
          </div>
          <span className='text-white text-sm font-medium tracking-tight hover:text-primary transition-colors duration-300 cursor-pointer'>
            Afolabi Ridwan Damilare
          </span>
        </div>

        {/* Right Side: Social Icons */}
        <div className='flex items-center gap-3'>
          <Link
            href='https://github.com/mercyharbo'
            target='_blank'
            aria-label='Visit my GitHub profile'
            className='flex items-center justify-center size-9 rounded-full border border-primary text-white hover:text-primary transition-all duration-300'
          >
            <BsGithub size={14} />
          </Link>
          <Link
            href='https://x.com/codewithmercy'
            target='_blank'
            aria-label='Visit my X (Twitter) profile'
            className='flex items-center justify-center size-9 rounded-full border border-primary text-white hover:text-primary transition-all duration-300'
          >
            <BsTwitterX size={14} />
          </Link>
          <Link
            href='https://linkedin.com/in/codewithmercy1'
            target='_blank'
            aria-label='Visit my LinkedIn profile'
            className='flex items-center justify-center size-9 rounded-full border border-primary text-white hover:text-primary transition-all duration-300'
          >
            <BsLinkedin size={14} />
          </Link>
          <Link
            href='https://instagram.com/codewithmercy'
            target='_blank'
            aria-label='Visit my Instagram profile'
            className='flex items-center justify-center size-9 rounded-full border border-primary text-white hover:text-primary transition-all duration-300'
          >
            <BsInstagram size={14} />
          </Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer
