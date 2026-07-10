'use client'

import About from '@/components/About'
import CTA from '@/components/CTA'
import Experience from '@/components/Experience'
import FAQ from '@/components/FAQ'
import Hero from '@/components/Hero'
import ProjectSection from '@/components/project-section'
import Services from '@/components/Services'
import Skills from '@/components/Skills'
import Stats from '@/components/Stats'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import { useEffect, useRef } from 'react'

gsap.registerPlugin(ScrollTrigger)

export default function Home() {
  const revealRefs = useRef<Array<HTMLElement>>([])

  useEffect(() => {
    revealRefs.current.forEach((el, index) => {
      gsap.fromTo(
        el,
        { y: 60, autoAlpha: 0 },
        {
          y: 0,
          duration: 0.8,
          ease: 'power2.out',
          autoAlpha: 1,
          scrollTrigger: {
            id: `section-${index + 1}`,
            trigger: el,
            start: 'top center+=100',
            end: 'bottom center',
            toggleActions: 'play none none reverse',
          },
        },
      )
    })
  }, [])

  const addToRefs = (el: HTMLElement | null) => {
    if (el && !revealRefs.current.includes(el)) {
      revealRefs.current.push(el)
    }
  }

  return (
    <main className='flex flex-col items-center gap-30 px-5 md:px-16 3xl:px-0'>
      <Hero />
      <Stats />
      <About />
      <Services />
      <Skills />
      <ProjectSection addToRefs={addToRefs} />
      <Experience />
      <FAQ />
      <div className='flex w-full flex-col gap-16 3xl:max-w-7xl'>
        <CTA />
      </div>
    </main>
  )
}
