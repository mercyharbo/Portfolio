'use client'

import type React from 'react'

import { motion } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { BsGithub, BsInstagram, BsLinkedin, BsTwitter } from 'react-icons/bs'
import {
  HiOutlineArrowUp,
  HiOutlineLocationMarker,
  HiOutlineMail,
} from 'react-icons/hi'
import { RiHeartFill, RiSendPlaneFill } from 'react-icons/ri'

gsap.registerPlugin(ScrollTrigger)

const socialLinks = [
  {
    name: 'GitHub',
    href: 'https://github.com/mercyharbo',
    icon: BsGithub,
    color: 'hover:text-gray-900 dark:hover:text-white',
    bgColor: 'hover:bg-gray-100 dark:hover:bg-gray-800',
  },
  {
    name: 'Twitter',
    href: 'https://twitter.com/codewithmercy',
    icon: BsTwitter,
    color: 'hover:text-blue-400',
    bgColor: 'hover:bg-blue-50 dark:hover:bg-blue-900/20',
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/codewithmercy',
    icon: BsLinkedin,
    color: 'hover:text-blue-600',
    bgColor: 'hover:bg-blue-50 dark:hover:bg-blue-900/20',
  },
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/codewithmercy/',
    icon: BsInstagram,
    color: 'hover:text-pink-500',
    bgColor: 'hover:bg-pink-50 dark:hover:bg-pink-900/20',
  },
]

const quickLinks = [
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#works' },
  { name: 'Skills', href: '#skills' },
  { name: 'Contact', href: '#contact' },
]

const services = [
  'Frontend Development',
  'React Applications',
  'Next.js Websites',
  'UI/UX Implementation',
  'Performance Optimization',
  'Responsive Design',
]

export default function Footer() {
  const [showBackToTop, setShowBackToTop] = useState(false)
  const [email, setEmail] = useState('')
  const [isSubscribed, setIsSubscribed] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 500)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    // Create main timeline for footer animations
    const footerTl = gsap.timeline({
      scrollTrigger: {
        trigger: '.footer',
        start: 'top bottom-=100',
        toggleActions: 'play none none reverse',
      },
    })

    // Staggered animation for footer sections
    footerTl
      .fromTo(
        '.footer-section',
        {
          opacity: 0,
          y: 40,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: 'power2.out',
        }
      )
      .fromTo(
        '.footer-divider',
        {
          scaleX: 0,
        },
        {
          scaleX: 1,
          duration: 1,
          ease: 'power2.out',
        },
        '-=0.3'
      )

    // Social icons animation
    gsap.fromTo(
      '.social-link',
      {
        scale: 0,
        opacity: 0,
      },
      {
        scale: 1,
        opacity: 1,
        duration: 0.6,
        stagger: 0.1,
        ease: 'back.out(1.7)',
        scrollTrigger: {
          trigger: '.social-links',
          start: 'top bottom-=50',
        },
      }
    )
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle newsletter signup
    setIsSubscribed(true)
    setTimeout(() => {
      setIsSubscribed(false)
      setEmail('')
    }, 3000)
  }

  const smoothScroll = (href: string) => {
    if (href.startsWith('#')) {
      const element = document.querySelector(href)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  return (
    <footer className='footer relative bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 border-t border-gray-200 dark:border-gray-700 overflow-hidden'>
      <div className='absolute inset-0 overflow-hidden'>
        <div className='absolute -top-40 -right-40 w-80 h-80 bg-blue-400/5 rounded-full blur-3xl' />
        <div className='absolute -bottom-40 -left-40 w-80 h-80 bg-purple-400/5 rounded-full blur-3xl' />
        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-blue-400/3 to-purple-400/3 rounded-full blur-3xl' />
      </div>

      <div className='relative px-5 lg:px-20 py-16 lg:py-20'>
        <div className='max-w-7xl mx-auto'>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16'>
            <div className='footer-section space-y-6 lg:col-span-1'>
              <div className='space-y-4'>
                <Link href='/' className='inline-block group'>
                  <h3 className='text-2xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300'>
                    Code With Mercy
                  </h3>
                </Link>
                <p className='text-gray-600 dark:text-gray-400 leading-relaxed'>
                  Crafting exceptional digital experiences with modern web
                  technologies. Passionate about creating beautiful, performant,
                  and accessible applications.
                </p>
              </div>

              <div className='space-y-3'>
                <div className='flex items-center gap-3 text-gray-600 dark:text-gray-400 group hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200'>
                  <HiOutlineLocationMarker className='text-lg text-blue-500 group-hover:scale-110 transition-transform duration-200' />
                  <span className='text-sm'>Osogbo, Nigeria</span>
                </div>
                <div className='flex items-center gap-3 text-gray-600 dark:text-gray-400 group hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200'>
                  <HiOutlineMail className='text-lg text-blue-500 group-hover:scale-110 transition-transform duration-200' />
                  <Link
                    href='mailto:codewithmercy@gmail.com'
                    className='text-sm hover:text-blue-600 dark:hover:text-blue-400 transition-colors'
                  >
                    damilare791@gmail.com
                  </Link>
                </div>
              </div>
            </div>

            <div className='footer-section space-y-6'>
              <h4 className='text-lg font-semibold text-gray-900 dark:text-white relative'>
                Quick Links
                <div className='absolute -bottom-2 left-0 w-8 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full' />
              </h4>
              <nav className='space-y-3'>
                {quickLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={(e) => {
                      if (link.href.startsWith('#')) {
                        e.preventDefault()
                        smoothScroll(link.href)
                      }
                    }}
                    className='block text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-200 text-sm hover:translate-x-1 group'
                  >
                    <span className='flex items-center gap-2'>
                      <div className='w-1 h-1 bg-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200' />
                      {link.name}
                    </span>
                  </Link>
                ))}
              </nav>
            </div>

            <div className='footer-section space-y-6'>
              <h4 className='text-lg font-semibold text-gray-900 dark:text-white relative'>
                Services
                <div className='absolute -bottom-2 left-0 w-8 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full' />
              </h4>
              <div className='space-y-3'>
                {services.map((service) => (
                  <div key={service} className='flex items-center gap-3 group'>
                    <div className='w-1.5 h-1.5 bg-blue-500 rounded-full group-hover:scale-125 transition-transform duration-200' />
                    <span className='text-gray-600 dark:text-gray-400 text-sm group-hover:text-gray-900 dark:group-hover:text-white transition-colors duration-200'>
                      {service}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className='footer-section space-y-6'>
              <h4 className='text-lg font-semibold text-gray-900 dark:text-white relative'>
                Stay Updated
                <div className='absolute -bottom-2 left-0 w-8 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full' />
              </h4>
              <div className='space-y-4'>
                <p className='text-gray-600 dark:text-gray-400 text-sm'>
                  Subscribe to get notified about new projects and articles.
                </p>
                {!isSubscribed ? (
                  <form onSubmit={handleNewsletterSubmit} className='space-y-3'>
                    <div className='relative'>
                      <input
                        type='email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder='Enter your email'
                        className='w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200 text-sm pr-12'
                        required
                      />
                      <HiOutlineMail className='absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400' />
                    </div>
                    <motion.button
                      type='submit'
                      className='w-full px-4 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 text-sm flex items-center justify-center gap-2'
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <RiSendPlaneFill className='text-base' />
                      Subscribe
                    </motion.button>
                  </form>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className='text-center py-4'
                  >
                    <div className='w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-2'>
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.2 }}
                        className='text-green-600 text-xl'
                      >
                        ✓
                      </motion.div>
                    </div>
                    <p className='text-green-600 dark:text-green-400 text-sm font-medium'>
                      Thanks for subscribing!
                    </p>
                  </motion.div>
                )}
              </div>
            </div>
          </div>

          <div className='footer-divider my-12 h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-600 to-transparent' />

          <div className='footer-section'>
            <div className='flex flex-col lg:flex-row justify-between items-center gap-8'>
              {/* Social Links */}
              <div className='social-links flex items-center gap-6'>
                <span className='text-sm text-gray-600 dark:text-gray-400 font-medium'>
                  Follow me:
                </span>
                <div className='flex gap-3'>
                  {socialLinks.map((social) => (
                    <motion.div
                      key={social.name}
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Link
                        href={social.href}
                        target='_blank'
                        rel='noopener noreferrer'
                        className={`social-link w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 transition-all duration-300 ${social.color} ${social.bgColor} hover:shadow-lg`}
                        aria-label={`Follow on ${social.name}`}
                      >
                        <social.icon className='text-lg' />
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className='text-center lg:text-right space-y-2'>
                <p className='text-sm text-gray-600 dark:text-gray-400 flex items-center justify-center lg:justify-end gap-1'>
                  © {new Date().getFullYear()} Made with{' '}
                  <RiHeartFill className='text-red-500 animate-pulse mx-1' /> by{' '}
                  <Link
                    href='https://twitter.com/codewithmercy'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-medium hover:opacity-80 transition-opacity'
                  >
                    Code With Mercy
                  </Link>
                </p>
                <p className='text-xs text-gray-500 dark:text-gray-500'>
                  Designed in Figma • Built with Next.js & Tailwind CSS
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <motion.button
        onClick={scrollToTop}
        className={`fixed bottom-8 left-10 w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-50 ${
          showBackToTop
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-4 pointer-events-none'
        }`}
        whileHover={{ scale: 1.1, rotate: -10 }}
        whileTap={{ scale: 0.9 }}
        aria-label='Back to top'
      >
        <HiOutlineArrowUp className='text-xl mx-auto' />
      </motion.button>
    </footer>
  )
}
