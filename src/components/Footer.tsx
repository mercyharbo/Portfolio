'use client'

import { ContactDialog } from '@/components/ContactDialog'
import Link from 'next/link'
import { BsGithub, BsInstagram, BsLinkedin, BsTwitterX } from 'react-icons/bs'
import { HiOutlineEnvelope, HiOutlineHome } from 'react-icons/hi2'

const Footer = () => {
  const year = new Date().getFullYear()

  return (
    <footer className='w-full relative px-5 pt-20 pb-10 md:px-16 3xl:px-0'>
      {/* Gradient Border Line */}
      <div className='absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-px bg-linear-to-r from-transparent via-primary via-50% to-transparent opacity-80' />
      <div className='mx-auto flex max-w-7xl flex-col gap-8'>
        {/* Left Side: Brand */}
        <div className='flex flex-col items-start justify-between gap-6 md:flex-row md:items-center'>
          <div className='flex max-w-xl items-start gap-3'>
            <div className='flex size-10 shrink-0 items-center justify-center rounded-full border border-primary text-white'>
              <HiOutlineHome size={18} />
            </div>
            <div className='flex flex-col gap-2'>
              <Link
                href='/'
                className='text-base font-semibold text-white transition-colors duration-300 hover:text-primary'
              >
                Afolabi Ridwan Damilare
              </Link>
              <p className='text-sm leading-relaxed text-gray-400'>
                Frontend Engineer building clean, fast, and practical web
                experiences with CodeWithMercy.
              </p>
            </div>
          </div>

          <div className='flex flex-col gap-4 sm:flex-row sm:items-center'>
            <ContactDialog
              triggerText='Start a Project'
              className='bg-primary text-white hover:bg-primary/90'
            />
            <div className='flex items-center gap-3'>
              <Link
                href='https://github.com/mercyharbo'
                target='_blank'
                rel='noopener noreferrer'
                aria-label='Visit Afolabi Ridwan Damilare on GitHub'
                className='flex size-9 items-center justify-center rounded-full border border-primary text-white transition-all duration-300 hover:text-primary'
              >
                <BsGithub size={14} />
              </Link>
              <Link
                href='https://x.com/codewithmercy'
                target='_blank'
                rel='noopener noreferrer'
                aria-label='Visit CodeWithMercy on X'
                className='flex size-9 items-center justify-center rounded-full border border-primary text-white transition-all duration-300 hover:text-primary'
              >
                <BsTwitterX size={14} />
              </Link>
              <Link
                href='https://linkedin.com/in/codewithmercy1'
                target='_blank'
                rel='noopener noreferrer'
                aria-label='Visit Afolabi Ridwan Damilare on LinkedIn'
                className='flex size-9 items-center justify-center rounded-full border border-primary text-white transition-all duration-300 hover:text-primary'
              >
                <BsLinkedin size={14} />
              </Link>
              <Link
                href='https://instagram.com/codewithmercy'
                target='_blank'
                rel='noopener noreferrer'
                aria-label='Visit CodeWithMercy on Instagram'
                className='flex size-9 items-center justify-center rounded-full border border-primary text-white transition-all duration-300 hover:text-primary'
              >
                <BsInstagram size={14} />
              </Link>
            </div>
          </div>
        </div>

        <div className='flex flex-col justify-between gap-3 border-t border-white/10 pt-5 text-sm text-gray-500 md:flex-row md:items-center'>
          <p>&copy; {year} CodeWithMercy. Built with care and performance in mind.</p>
          <a
            href='mailto:afolabiridwandamilare@gmail.com'
            className='inline-flex items-center gap-2 text-gray-400 transition-colors hover:text-primary'
          >
            <HiOutlineEnvelope className='size-4' />
            afolabiridwandamilare@gmail.com
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
