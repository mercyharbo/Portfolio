'use client'

import About from '@/components/About'
import CTA from '@/components/CTA'
import Experience from '@/components/Experience'
import Hero from '@/components/Hero'
import ProjectSection from '@/components/project-section'
import ProjectMarquee from '@/components/ProjectMarquee'
import Services from '@/components/Services'
import Stats from '@/components/Stats'
import { useForm } from '@formspree/react'
import { motion } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import { BsGit } from 'react-icons/bs'
import { HiOutlineCode } from 'react-icons/hi'
import { HiOutlineLightBulb, HiOutlineUsers } from 'react-icons/hi2'
import { RiMailSendFill } from 'react-icons/ri'
import {
  SiGithub,
  SiJavascript,
  SiNextdotjs,
  SiReact,
  SiRedux,
  SiTailwindcss,
  SiTypescript,
} from 'react-icons/si'
import { TbBrandFramerMotion } from 'react-icons/tb'

gsap.registerPlugin(ScrollTrigger)

const skills = [
  {
    name: 'JavaScript',
    icon: SiJavascript,
    color: 'text-yellow-400',
    bgColor: 'from-yellow-400/20',
  },
  {
    name: 'React',
    icon: SiReact,
    color: 'text-blue-400',
    bgColor: 'from-blue-400/20',
  },
  {
    name: 'Next.js',
    icon: SiNextdotjs,
    color: 'text-white',
    bgColor: 'from-white/20',
  },
  {
    name: 'TypeScript',
    icon: SiTypescript,
    color: 'text-blue-600',
    bgColor: 'from-blue-600/20',
  },
  {
    name: 'Tailwind CSS',
    icon: SiTailwindcss,
    color: 'text-cyan-400',
    bgColor: 'from-cyan-400/20',
  },
  {
    name: 'Framer Motion',
    icon: TbBrandFramerMotion,
    color: 'text-purple-500',
    bgColor: 'from-purple-500/20',
  },
  {
    name: 'Git',
    icon: BsGit,
    color: 'text-orange-500',
    bgColor: 'from-orange-500/20',
  },
  {
    name: 'GitHub',
    icon: SiGithub,
    color: 'text-white',
    bgColor: 'from-white/20',
  },
  {
    name: 'Redux Toolkit',
    icon: SiRedux,
    color: 'text-purple-600',
    bgColor: 'from-purple-600/20',
  },
]

const achievements = [
  { icon: HiOutlineCode, number: '20+', label: 'Projects Completed' },
  { icon: HiOutlineUsers, number: '15+', label: 'Happy Clients' },
  { icon: HiOutlineLightBulb, number: '4+', label: 'Years Experience' },
]

export default function Home() {
  const [state, handleSubmit] = useForm('mgebqlnb')
  const [isVisible, setIsVisible] = useState(false)
  const revealRefs = useRef<Array<HTMLElement>>([])

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 500)
    return () => clearTimeout(timer)
  }, [])

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

  if (state.succeeded) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className='flex flex-col justify-center items-center gap-8 text-center mx-auto py-20 px-5'
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
          className='w-24 h-24 bg-linear-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center'
        >
          <RiMailSendFill size={40} className='text-white' />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className='space-y-4'
        >
          <h1 className='text-4xl lg:text-6xl font-bold bg-linear-to-r from-green-400 via-blue-500 to-purple-600 bg-clip-text text-transparent'>
            Message Sent!
          </h1>
          <p className='text-gray-300 max-w-md text-lg'>
            Thanks for reaching out! I&lsquo;ll get back to you as soon as
            possible.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <Link
            href='/'
            className='inline-flex items-center gap-2 px-6 py-3 bg-linear-to-r from-blue-600 to-purple-600 text-white rounded-full font-medium hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300'
          >
            Back to Home
          </Link>
        </motion.div>
      </motion.div>
    )
  }

  const addToRefs = (el: HTMLElement | null) => {
    if (el && !revealRefs.current.includes(el)) {
      revealRefs.current.push(el)
    }
  }

  return (
    <main className='flex flex-col gap-16 lg:gap-24 px-5 lg:px-20 overflow-hidden'>
      <Hero />
      <Stats />
      <About />
      <ProjectMarquee />
      <Services />
      <ProjectSection addToRefs={addToRefs} />
      <Experience />
      <CTA />
    </main>
  )
}
