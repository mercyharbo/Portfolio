'use client'

import { Dialog } from '@base-ui/react/dialog'
import { ArrowRight, ArrowUpRight, X } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { featuredProjects } from '@/lib/projects'
import { useEffect, useState } from 'react'
import { BsGithub, BsLinkedin } from 'react-icons/bs'

const links = [
  { label: 'Home', href: '/#home' },
  { label: 'Work', href: '/work' },
  { label: 'About', href: '/#about' },
  { label: 'Contact', href: '/#contact' },
]

const menuProjects = [featuredProjects[0], featuredProjects[2]]

function LocalTime() {
  const [time, setTime] = useState('—:—')
  useEffect(() => {
    const formatter = new Intl.DateTimeFormat('en-GB', {
      timeZone: 'Africa/Lagos', hour: '2-digit', minute: '2-digit',
    })
    const update = () => setTime(formatter.format(new Date()))
    update()
    const timer = setInterval(update, 60000)
    return () => clearInterval(timer)
  }, [])
  return (
    <div className='hidden items-center gap-3 text-xs md:flex'>
      <span className='tabular-nums'>{time}</span>
      <span className='text-gray-300'>Lagos time</span>
    </div>
  )
}

export default function Header() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()
  return (
    <header className='portfolio-header absolute inset-x-0 top-0 z-40 text-white'>
      <a href='#main-content' className='sr-only focus:not-sr-only focus:absolute focus:left-6 focus:top-2 focus:bg-white focus:p-3 focus:text-black'>Skip to content</a>
      <div className='flex items-center justify-between gap-6'>
        <Dialog.Root open={open} onOpenChange={setOpen}>
          <div className='header-brand flex items-center gap-6 md:gap-8'>
            <Dialog.Trigger className='menu-trigger order-2 flex min-h-11 items-center gap-2 text-sm md:order-1' aria-label='Open navigation menu'>
              <span aria-hidden='true' className='grid size-3 grid-cols-2 gap-0.5'><i className='bg-current' /><i className='bg-current' /><i className='bg-current' /><i className='bg-current' /></span>
              Menu
            </Dialog.Trigger>
            <Link href='/#home' aria-label='CodeWithMercy home' className='order-1 text-base font-semibold md:order-2'>CodeWithMercy<span className='text-red-500'>.</span></Link>
          </div>
          <Dialog.Portal>
            <Dialog.Backdrop className='portfolio-menu-backdrop fixed inset-0 z-50 bg-black/45 backdrop-blur-sm' />
            <Dialog.Popup className='portfolio-menu fixed z-50 grid overflow-y-auto bg-dark-accent text-white outline-none md:grid-cols-5'>
              <Dialog.Title className='sr-only'>Site navigation</Dialog.Title>
              <Dialog.Description className='sr-only'>Explore my work, background, and contact information.</Dialog.Description>
              <div className='flex flex-col justify-between gap-12 p-6 md:col-span-2 md:p-8'>
                <div className='flex flex-col gap-4'>
                  <div className='flex items-center justify-between gap-4 border-b border-white/15 pb-4 text-xs text-gray-400'><span>Explore</span><Dialog.Close aria-label='Close navigation menu' className='flex size-9 items-center justify-center text-white hover:bg-white/10'><X className='size-5' /></Dialog.Close></div>
                  <nav aria-label='Primary navigation' className='flex flex-col gap-1'>
                    {links.map(link => (
                      <Link key={link.label} href={link.href} aria-current={link.href === pathname ? 'page' : undefined} onClick={() => setOpen(false)} className='menu-link flex min-h-11 items-center justify-between gap-6 text-lg'>
                        {link.label}
                        <ArrowUpRight aria-hidden='true' className='size-4' />
                      </Link>
                    ))}
                  </nav>
                </div>
                <div className='flex flex-col gap-4'>
                  <Image src='/IMG-1.png' width={64} height={80} alt='Afolabi Ridwan Damilare' className='h-20 w-16 object-cover grayscale' />
                  <div className='flex flex-col gap-1'><p className='text-sm font-medium'>Afolabi Ridwan Damilare</p><p className='text-xs text-gray-400'>Frontend engineer</p></div>
                  <div className='flex items-center gap-5'>
                    <a aria-label='GitHub' href='https://github.com/mercyharbo' target='_blank' rel='noopener noreferrer' className='hero-link flex min-h-11 items-center'><BsGithub className='size-4' /></a>
                    <a aria-label='LinkedIn' href='https://linkedin.com/in/codewithmercy1' target='_blank' rel='noopener noreferrer' className='hero-link flex min-h-11 items-center'><BsLinkedin className='size-4' /></a>
                    <a href='/Afolabi%20Ridwan%20Damilare.pdf' target='_blank' rel='noopener noreferrer' className='hero-link flex min-h-11 items-center gap-2 text-xs'>Résumé<ArrowUpRight aria-hidden='true' className='size-3' /></a>
                  </div>
                </div>
              </div>
              <div className='hidden grid-rows-2 md:col-span-3 md:grid'>
                {menuProjects.map(project => (
                  <Link key={project.slug} href={`/work#${project.slug}`} onClick={() => setOpen(false)} className='menu-project relative isolate flex min-h-56 items-end overflow-hidden p-6'>
                    <Image src={project.image} alt='' fill sizes='400px' className='-z-10 object-cover brightness-50' />
                    <span className='flex w-full items-center justify-between gap-4 text-sm font-medium'>
                      {project.name}<ArrowUpRight className='size-4' aria-hidden='true' />
                    </span>
                  </Link>
                ))}
              </div>
            </Dialog.Popup>
          </Dialog.Portal>
        </Dialog.Root>
        <LocalTime />
        <Link href='/#contact' className='header-contact hidden h-12 items-center bg-black text-sm md:flex'>
          <Image src='/IMG-1.png' alt='' width={48} height={48} className='h-12 w-12 object-cover grayscale' />
          <span className='px-5'>Let’s talk</span><span className='flex h-full w-12 items-center justify-center bg-red-600'><ArrowRight aria-hidden='true' className='size-5' /></span>
        </Link>
      </div>
    </header>
  )
}
