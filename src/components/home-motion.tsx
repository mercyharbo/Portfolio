'use client'

import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useLayoutEffect, useRef, type ReactNode } from 'react'

gsap.registerPlugin(ScrollTrigger)

export default function HomeMotion({ children }: { children: ReactNode }) {
  const root = useRef<HTMLDivElement>(null)
  useLayoutEffect(() => {
    if (!root.current) return
    const element = root.current
    const media = gsap.matchMedia()
    media.add('(prefers-reduced-motion: no-preference)', () => {
      const context = gsap.context(() => {
        element.querySelectorAll('[data-reveal-chars]').forEach(heading => {
          gsap.from(heading.querySelectorAll('.reveal-char'), {
            y: 20, opacity: 0, duration: 0.65, stagger: 0.025,
            ease: 'power3.out', clearProps: 'transform,opacity',
            scrollTrigger: { trigger: heading, start: 'top 90%', once: true },
          })
        })
        element.querySelectorAll('[data-reading]').forEach(passage => {
          gsap.fromTo(passage.querySelectorAll('[data-word]'), { color: '#737373' }, {
            color: '#121212', stagger: 0.1, ease: 'none',
            scrollTrigger: { trigger: passage, start: 'top 80%', end: 'bottom 45%', scrub: 0.3 },
          })
        })
        element.querySelectorAll('[data-enter]').forEach(item => {
          gsap.from(item, {
            y: 24, opacity: 0, duration: 0.7, ease: 'power3.out', clearProps: 'transform,opacity',
            scrollTrigger: { trigger: item, start: 'top 95%', once: true },
          })
        })
      }, element)
      return () => context.revert()
    })

    let active = true
    let frame = 0
    const refresh = () => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(() => { if (active) ScrollTrigger.refresh() })
    }
    element.addEventListener('load', refresh, true)
    document.fonts.ready.then(() => { if (active) refresh() })
    refresh()
    return () => {
      active = false
      cancelAnimationFrame(frame)
      element.removeEventListener('load', refresh, true)
      media.revert()
    }
  }, [])

  return <div ref={root}>{children}</div>
}
