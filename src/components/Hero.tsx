import Image from 'next/image'
import { ArrowDown, ArrowUpRight } from 'lucide-react'
import HeroMotion from './hero-motion'

const services = ['Frontend engineering', 'React & Next.js', 'Product interfaces']

export default function Hero() {
  return (
    <section id='home' aria-label='Introduction' className='portfolio-hero relative isolate flex w-full flex-col justify-end overflow-hidden bg-black text-white'>
      <HeroMotion />
      <Image data-hero-art src='/images/hero-red-fabric.webp' alt='' fill priority sizes='100vw' className='pointer-events-none -z-20 object-cover' />
      <div aria-hidden='true' className='hero-grid pointer-events-none absolute inset-y-0 -z-10 grid grid-cols-2 border-x border-white/10 md:grid-cols-4'>
        <span className='border-r border-white/10' /><span className='border-r border-white/10' />
        <span className='hidden border-r border-white/10 md:block' /><span className='hidden md:block' />
      </div>
      <div className='hero-content flex flex-col gap-10 md:gap-12'>
        <div className='grid grid-cols-1 gap-8 md:grid-cols-4 md:gap-6'>
          <div className='hidden flex-col justify-end gap-2 md:flex' data-hero-reveal>
            <span className='flex items-center gap-2 text-xs'><span className='size-1.5 bg-red-600' />Afolabi Ridwan Damilare</span>
            <p className='text-sm text-gray-300'>Frontend engineer</p>
          </div>
          <div className='hidden md:block' />
          <p data-hero-reveal className='max-w-sm text-lg leading-snug font-medium md:col-span-2 md:text-base lg:col-span-1 lg:text-xl'>
            I help teams turn complex ideas into thoughtful digital products.
          </p>
          <ol data-hero-reveal aria-label='Specialties' className='hidden flex-col gap-2 text-sm lg:flex'>
            {services.map((service, index) => (
              <li key={service} className='flex gap-3'>
                <span className='text-gray-300'>/0{index + 1}</span>{service}
              </li>
            ))}
          </ol>
        </div>
        <div className='flex flex-col gap-5'>
          <h1 data-hero-reveal className='hero-wordmark font-medium'>CodeWithMercy<span className='sr-only'> — Afolabi Ridwan Damilare, frontend engineer</span></h1>
          <div data-hero-reveal className='flex items-center justify-between gap-4 border-t border-white/20 py-5 text-xs md:text-sm'>
            <a className='hero-link flex items-center gap-3' href='#works'>Explore selected work<ArrowDown className='size-4' aria-hidden='true' /></a>
            <a className='hero-link flex items-center gap-2' href='/Afolabi%20Ridwan%20Damilare.pdf' target='_blank' rel='noopener noreferrer'>View résumé<ArrowUpRight className='size-4' aria-hidden='true' /></a>
          </div>
        </div>
      </div>
    </section>
  )
}
