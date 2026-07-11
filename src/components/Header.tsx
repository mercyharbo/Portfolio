'use client'

import { ContactDialog } from '@/components/ContactDialog'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import Link from 'next/link'
import { useState } from 'react'
import { HiOutlineBars3, HiOutlineHome } from 'react-icons/hi2'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Projects', href: '#works' },
  { label: 'FAQ', href: '#faq' },
]

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className='sticky top-0 z-50 w-full bg-dark/80 px-5 py-4 backdrop-blur-md transition-all duration-300 md:px-16 3xl:px-0'>
      <div className='mx-auto flex max-w-7xl items-center justify-between gap-6'>
        <Link href='/' className='flex items-center gap-3'>
          <div className='relative flex size-9 items-center justify-center rounded-full border border-primary'>
            <HiOutlineHome className='size-[18px] text-white' />
          </div>
          <span className='text-sm font-medium text-white transition-colors duration-300 hover:text-primary'>
            Code With Mercy
          </span>
        </Link>

        <nav aria-label='Primary navigation' className='hidden items-center gap-6 md:flex'>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className='text-sm font-medium text-gray-300 transition-colors hover:text-primary'
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className='hidden md:block'>
          <ContactDialog
            triggerText='Get in Touch'
            className='h-10 bg-primary px-6 text-sm text-white hover:bg-primary/90'
          />
        </div>

        <Dialog open={menuOpen} onOpenChange={setMenuOpen}>
          <DialogTrigger asChild>
            <button
              type='button'
              aria-label='Open navigation menu'
              className='flex size-10 items-center justify-center rounded-full border border-white/10 text-white transition-colors hover:border-primary hover:text-primary md:hidden'
            >
              <HiOutlineBars3 className='size-5' />
            </button>
          </DialogTrigger>
          <DialogContent className='max-w-sm bg-dark-accent text-white'>
            <DialogHeader>
              <DialogTitle>Navigation</DialogTitle>
            </DialogHeader>
            <div className='flex flex-col gap-4 py-2'>
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className='rounded-2xl border border-white/10 px-4 py-3 text-sm font-medium text-gray-200 transition-colors hover:border-primary hover:text-primary'
                >
                  {link.label}
                </Link>
              ))}
              <ContactDialog
                triggerText='Get in Touch'
                className='bg-primary text-white hover:bg-primary/90'
              />
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </header>
  )
}

export default Header
