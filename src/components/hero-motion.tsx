'use client'

import gsap from 'gsap'
import { useLayoutEffect, useRef } from 'react'

export default function HeroMotion() {
  const marker = useRef<HTMLSpanElement>(null)

  useLayoutEffect(() => {
    const section = marker.current?.parentElement
    if (!section) return
    const media = gsap.matchMedia()
    media.add('(prefers-reduced-motion: no-preference)', () => {
      const context = gsap.context(() => {
        gsap.from('[data-hero-reveal]', {
          y: 20, opacity: 0, duration: 0.85, stagger: 0.1,
          ease: 'power3.out', clearProps: 'all',
        })
        gsap.fromTo('[data-hero-art]', { scale: 1.035 }, {
          scale: 1, duration: 2.4, ease: 'power2.out', clearProps: 'transform',
        })
      }, section)
      return () => context.revert()
    })
    return () => media.revert()
  }, [])

  return <span ref={marker} hidden />
}
