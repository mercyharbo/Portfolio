import Image from 'next/image'
import Link from 'next/link'
import { ArrowDown, ArrowUpRight } from 'lucide-react'
import CTA from '@/components/CTA'
import Experience from '@/components/Experience'
import HeroMotion from '@/components/hero-motion'
import HomeMotion from '@/components/home-motion'
import { SectionHeading, SectionLabel } from '@/components/editorial'
import { capabilities, workingPrinciples } from '@/data/about'
import { absoluteUrl, createMetadata, siteConfig } from '@/lib/seo'

export const metadata = createMetadata({
  title: 'About',
  description: 'Meet Afolabi Ridwan Damilare, the frontend engineer behind Codewithmercy. Explore career experience, technical strengths, and an approach to building thoughtful web products.',
  path: '/about',
})

export default function AboutPage() {
  const schema = {
    '@context': 'https://schema.org', '@type': 'AboutPage',
    name: 'About Afolabi Ridwan Damilare', url: absoluteUrl('/about'),
    mainEntity: { '@type': 'Person', name: siteConfig.author.name, alternateName: 'Codewithmercy', jobTitle: 'Frontend Engineer', url: siteConfig.url },
  }

  return (
    <>
      <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section aria-labelledby='about-title' className='relative bg-dark text-white'>
        <HeroMotion />
        <div className='editorial-container grid gap-12 pb-16 pt-40 md:grid-cols-3 md:items-center md:gap-10 md:pb-24 md:pt-48'>
          <div className='flex flex-col gap-8 md:col-span-2 md:pr-8'>
            <div data-hero-reveal><SectionLabel>About Codewithmercy</SectionLabel></div>
            <h1 id='about-title' data-hero-reveal className='text-5xl leading-none font-medium sm:text-6xl lg:text-7xl'>Afolabi Ridwan<br className='hidden sm:block' /> Damilare<span className='text-red-500'>.</span></h1>
            <p data-hero-reveal className='max-w-xl text-lg leading-relaxed text-gray-300'>Frontend engineer. Product thinker. I help turn complex requirements into clear, dependable web experiences.</p>
            <div data-hero-reveal className='flex flex-wrap gap-4'>
              <a href='/Afolabi%20Ridwan%20Damilare.pdf' target='_blank' rel='noopener noreferrer' className='flex min-h-12 w-full items-center justify-between gap-8 bg-red-600 px-5 text-sm text-white hover:bg-red-700 sm:w-auto'>View résumé<ArrowUpRight aria-hidden='true' className='size-4' /></a>
              <a href='/contact' className='flex min-h-12 w-full items-center justify-between gap-8 border border-white/20 px-5 text-sm hover:bg-white/5 sm:w-auto'>Let’s talk<ArrowUpRight aria-hidden='true' className='size-4' /></a>
            </div>
            <a data-hero-reveal href='#about-story' className='flex min-h-11 items-center gap-3 self-start text-sm text-gray-400 hover:text-white'>A little more about me<ArrowDown aria-hidden='true' className='size-4' /></a>
          </div>
          <figure data-hero-reveal className='flex w-full max-w-sm flex-col gap-5 justify-self-center md:justify-self-end'>
            <div className='relative aspect-[3/4] w-full border-t-2 border-red-600 bg-gray-200'>
              <Image src='/IMG-1.png' alt='Afolabi Ridwan Damilare, frontend engineer and Codewithmercy' fill priority sizes='(max-width: 767px) 90vw, 33vw' className='object-cover' />
            </div>
            <figcaption className='flex items-center justify-between gap-4 text-xs text-gray-400'><span>Frontend engineering</span><span>4+ years of experience</span></figcaption>
          </figure>
        </div>
      </section>

      <HomeMotion>
        <section id='about-story' aria-labelledby='story-title' className='editorial-light bg-white text-black'>
          <div className='editorial-container editorial-grid grid gap-12 py-20 md:grid-cols-4 md:gap-0 md:py-28'>
            <div className='self-start'><SectionLabel number='01'>Product thinking meets execution</SectionLabel></div>
            <div className='flex flex-col gap-8 md:col-span-2 md:col-start-3'>
              <SectionHeading id='story-title' text='Clarity is part of the engineering.' />
              <p className='text-lg leading-relaxed'>I work close to product, design, and engineering so an idea can move from a rough flow to a shipped interface without losing the business goal along the way.</p>
              <p className='text-base leading-relaxed text-gray-600'>My experience spans SaaS dashboards, AI-assisted product workflows, commerce, and business websites. Across those projects, the recurring challenge is making the interface clear while handling the complexity behind it.</p>
              <p className='text-base leading-relaxed text-gray-600'>I care about how the product feels to use and how the code feels to maintain. That means thinking through user journeys, component structure, data flows, loading states, accessibility, and performance as connected parts of the same work.</p>
              <Link href='/work' className='flex min-h-11 items-center gap-3 self-start text-sm hover:text-red-700'>Explore the work<ArrowUpRight aria-hidden='true' className='size-4' /></Link>
            </div>
          </div>
        </section>

        <section aria-labelledby='capabilities-title' className='editorial-dark bg-dark text-white'>
          <div className='editorial-container editorial-grid grid gap-12 py-20 md:grid-cols-4 md:gap-0 md:py-28'>
            <div className='flex flex-col gap-8 self-start md:sticky md:top-8 md:col-span-2 md:pr-16'><SectionLabel number='02'>Technical strengths</SectionLabel><SectionHeading id='capabilities-title' text='The tools support the thinking.' /><p className='max-w-md text-base leading-relaxed text-gray-400'>A focused set of capabilities I use to connect good interface decisions with dependable implementation.</p></div>
            <div className='flex flex-col md:col-span-2'>
              {capabilities.map((group, index) => (
                <div key={group.title} data-enter className='flex flex-col gap-5 border-t border-white/15 py-8'>
                  <p className='text-xs text-gray-400'>0{index + 1}</p><h3 className='text-2xl font-medium'>{group.title}</h3>
                  <p className='text-sm leading-relaxed text-gray-400'>{group.description}</p>
                  <ul className='flex flex-wrap gap-x-5 gap-y-3 text-xs text-gray-300'>{group.skills.map(skill => <li key={skill}>{skill}</li>)}</ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Experience number='03' />

        <section aria-labelledby='principles-title' className='editorial-dark bg-dark text-white'>
          <div className='editorial-container editorial-grid grid gap-12 py-20 md:grid-cols-4 md:gap-0 md:py-28'>
            <div className='flex flex-col gap-8 self-start md:sticky md:top-8 md:col-span-2 md:pr-16'><SectionLabel number='04'>Working together</SectionLabel><SectionHeading id='principles-title' text='A practical way to move forward.' /></div>
            <div className='flex flex-col md:col-span-2'>
              {workingPrinciples.map(principle => <div key={principle.title} data-enter className='flex flex-col gap-5 border-t border-white/15 py-8'><h3 className='text-2xl font-medium'>{principle.title}</h3><p className='text-sm leading-relaxed text-gray-400'>{principle.description}</p></div>)}
            </div>
          </div>
        </section>
        <div className='border-t border-white/10'><CTA number='05' /></div>
      </HomeMotion>
    </>
  )
}
