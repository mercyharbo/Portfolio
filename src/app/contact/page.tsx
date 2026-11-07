import { ArrowUpRight } from 'lucide-react'
import ContactForm from '@/components/contact-form'
import { SectionLabel } from '@/components/editorial'
import HeroMotion from '@/components/hero-motion'
import { createMetadata } from '@/lib/seo'

export const metadata = createMetadata({
  title: 'Contact',
  description: 'Contact Afolabi Ridwan Damilare at Codewithmercy about frontend engineering, product collaboration, or a role on your team.',
  path: '/contact',
})

export default function ContactPage() {
  return (
    <>
      <section aria-labelledby='contact-title' className='relative bg-dark text-white'>
        <HeroMotion />
        <div className='editorial-container flex flex-col gap-8 pb-16 pt-40 md:pb-24 md:pt-48'>
          <div data-hero-reveal><SectionLabel>Contact Codewithmercy</SectionLabel></div>
          <h1 id='contact-title' data-hero-reveal className='max-w-4xl text-5xl leading-none font-medium sm:text-6xl lg:text-8xl'>Good work starts<br className='hidden sm:block' /> with a conversation<span className='text-red-500'>.</span></h1>
          <p data-hero-reveal className='max-w-xl text-lg leading-relaxed text-gray-300'>A product to build, an interface to improve, or a role on your team. Tell me what you have in mind.</p>
        </div>
      </section>
      <section aria-labelledby='enquiry-title' className='bg-white text-black'>
        <div className='editorial-container editorial-grid grid gap-12 py-16 md:grid-cols-2 md:gap-16 md:py-24 lg:gap-24'>
          <aside className='flex flex-col gap-10'>
            <div className='flex flex-col gap-5'>
              <SectionLabel number='01'>Let’s work together</SectionLabel>
              <h2 id='enquiry-title' className='text-3xl leading-tight font-medium sm:text-4xl'>What’s next for you?</h2>
              <p className='max-w-md text-base leading-relaxed text-gray-600'>Share the context, where you need help, and any timing you’re working towards. For opportunities, include a little about the team and the role.</p>
              <p className='max-w-md text-sm leading-relaxed text-gray-600'>Your message comes directly to me. I’ll read it and reply by email.</p>
            </div>
            <div className='flex flex-col gap-4 border-t border-gray-200 pt-6'>
              <p className='text-xs text-gray-600'>Prefer email?</p>
              <a href='mailto:damilare791@gmail.com' className='flex min-h-11 items-center gap-3 self-start break-all text-base hover:text-red-700'>damilare791@gmail.com<ArrowUpRight aria-hidden='true' className='size-4 shrink-0' /></a>
            </div>
            <div className='flex flex-col gap-4 border-t border-gray-200 pt-6'>
              <p className='text-xs text-gray-600'>A little more context</p>
              <div className='flex flex-wrap gap-x-6 gap-y-2'>
                <a href='/Afolabi%20Ridwan%20Damilare.pdf' target='_blank' rel='noopener noreferrer' className='flex min-h-11 items-center gap-2 text-sm hover:text-red-700'>View résumé<ArrowUpRight aria-hidden='true' className='size-4' /></a>
                <a href='https://linkedin.com/in/codewithmercy1' target='_blank' rel='noopener noreferrer' className='flex min-h-11 items-center gap-2 text-sm hover:text-red-700'>LinkedIn<ArrowUpRight aria-hidden='true' className='size-4' /></a>
                <a href='https://github.com/mercyharbo' target='_blank' rel='noopener noreferrer' className='flex min-h-11 items-center gap-2 text-sm hover:text-red-700'>GitHub<ArrowUpRight aria-hidden='true' className='size-4' /></a>
              </div>
            </div>
          </aside>
          <div className='flex flex-col gap-8'>
            <h3 className='text-2xl font-medium'>Send an enquiry</h3>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  )
}
