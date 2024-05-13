'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'

import About from '@/components/About'
import Project from '@/components/Project'
// import Blog from '@/components/Blog'
import ContactForm from '@/components/ContactForm'
import Hero from '@/components/Hero'

gsap.registerPlugin(ScrollTrigger)

export default function Home() {
  const revealRefs = useRef<Array<HTMLElement>>([])

  useEffect(() => {
    revealRefs.current.forEach((el, index) => [
      gsap.fromTo(
        el,
        { y: -100, autoAlpha: 0 },
        {
          y: 0,
          duration: 1,
          ease: 'power2.out',
          autoAlpha: 1,
          stagger: 0.5,
          delay: 0.5,
          scrollTrigger: {
            id: `section-${index + 1}`,
            trigger: el,
            start: 'top center+=20',
            end: 'bottom center',
            toggleActions: 'play none none reverse',
          },
        }
      ),
    ])
  }, [revealRefs])

  const addToRefs = (el: HTMLElement | null) => {
    if (el && !revealRefs.current.includes(el)) {
      revealRefs.current.push(el)
    }
  }

  return (
    <main className='flex flex-col justify-center items-center gap-5 mx-auto overflow-hidden xl:w-[90%] md:w-full sm:w-full '>
      <Hero />
      <About addToRefs={addToRefs} />
      <Project addToRefs={addToRefs} />
      {/* <Blog /> */}
      <ContactForm addToRefs={addToRefs} />
    </main>
  )
}
