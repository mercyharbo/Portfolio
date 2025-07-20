'use client'

import type React from 'react'

import { AnimatePresence, motion } from 'framer-motion'
import gsap from 'gsap'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useCallback, useEffect, useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { BsGithub, BsInstagram, BsLinkedin, BsTwitter } from 'react-icons/bs'
import { HiOutlineBars3CenterLeft } from 'react-icons/hi2'
import { MdEmail } from 'react-icons/md'
import { ThemeSwitcher } from './ThemeSwitcher'

const navLinks = [
  { id: 1, name: 'home', href: '/' },
  { id: 2, name: 'about', href: '#about' },
  { id: 3, name: 'work', href: '#works' },
  { id: 4, name: 'contact', href: '#contact' },
]

const socialLinks = [
  { Icon: BsGithub, href: 'https://github.com/mercyharbo', label: 'GitHub' },
  {
    Icon: BsTwitter,
    href: 'https://twitter.com/codewithmercy',
    label: 'Twitter',
  },
  {
    Icon: BsLinkedin,
    href: 'https://www.linkedin.com/in/codewithmercy',
    label: 'LinkedIn',
  },
  {
    Icon: BsInstagram,
    href: 'https://www.instagram.com/codewithmercy/',
    label: 'Instagram',
  },
]

function Navbar() {
  const pathname = usePathname()
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  const handleModalOpen = useCallback(
    (e?: React.MouseEvent) => {
      e?.stopPropagation()
      setIsModalOpen(!isModalOpen)
    },
    [isModalOpen]
  )

  // Handle scroll effects - only for styling changes, not visibility
  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY
    setScrolled(currentScrollY > 50)
  }, [])

  // Throttled scroll handler for better performance
  useEffect(() => {
    let ticking = false

    const throttledHandleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll()
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener('scroll', throttledHandleScroll, { passive: true })
    return () => window.removeEventListener('scroll', throttledHandleScroll)
  }, [handleScroll])

  // Handle active section detection
  useEffect(() => {
    const handleSectionScroll = () => {
      const sections = navLinks
        .map((link) => link.href.replace('#', ''))
        .filter((href) => href !== '/')
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section)
            return
          }
        }
      }

      if (window.scrollY < 100) {
        setActiveSection('home')
      }
    }

    let ticking = false
    const throttledSectionScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleSectionScroll()
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener('scroll', throttledSectionScroll, { passive: true })
    return () => window.removeEventListener('scroll', throttledSectionScroll)
  }, [])

  useEffect(() => {
    setIsModalOpen(false)
  }, [pathname])

  // Initial animation - simplified and more reliable
  useEffect(() => {
    const timer = setTimeout(() => {
      gsap.fromTo(
        '.navbar-container',
        {
          y: -80,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: 'power3.out',
        }
      )

      gsap.fromTo(
        '.logo',
        {
          opacity: 0,
          y: -20,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power2.out',
          delay: 0.5,
        }
      )
    }, 100)

    return () => clearTimeout(timer)
  }, [])

  const smoothScroll = (href: string) => {
    if (href.startsWith('#')) {
      const element = document.querySelector(href)
      if (element) {
        const offsetTop =
          element.getBoundingClientRect().top + window.scrollY - 100
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth',
        })
      }
    }
  }

  return (
    <nav
      className={`navbar-container fixed top-0 left-0 z-50 w-full transition-all duration-500 ${
        scrolled
          ? 'h-16 px-4 lg:px-16 backdrop-blur-xl bg-white/90 dark:bg-gray-900/90 shadow-lg border-b border-gray-200/50 dark:border-gray-700/50'
          : 'h-20 px-5 lg:px-20 backdrop-blur-md bg-white/80 dark:bg-gray-900/80 border-b border-gray-200/30 dark:border-gray-700/30'
      } flex items-center justify-between`}
    >
      {/* Logo */}
      <Link href='/' className='logo group'>
        <motion.div
          className={`font-bold capitalize transition-all duration-300 ${
            scrolled ? 'text-xl' : 'text-2xl'
          }`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className='bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent'>
            code with mercy
          </span>
          <motion.div className='h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left' />
        </motion.div>
      </Link>

      {/* Desktop Navigation */}
      <div className='hidden lg:flex gap-8 text-base items-center'>
        {navLinks.map((link) => {
          const isActive =
            pathname === link.href ||
            (link.href.startsWith('#') &&
              activeSection === link.href.replace('#', ''))

          return (
            <Link
              key={link.id}
              href={link.href}
              onClick={(e) => {
                if (link.href.startsWith('#')) {
                  e.preventDefault()
                  smoothScroll(link.href)
                }
              }}
              className='group relative'
            >
              <motion.span
                className={`capitalize font-medium transition-all duration-300 ${
                  isActive
                    ? 'text-blue-600 dark:text-blue-400'
                    : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
                }`}
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2 }}
              >
                {link.name}
              </motion.span>
              <motion.span
                className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-300 ${
                  isActive ? 'w-full' : 'w-0 group-hover:w-full'
                }`}
              />
            </Link>
          )
        })}
      </div>

      {/* Desktop Actions */}
      <div className='hidden lg:flex gap-4 items-center'>
        <div className='flex gap-3 items-center'>
          {socialLinks.map(({ Icon, href, label }, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <Link
                href={href}
                target='_blank'
                rel='noopener noreferrer'
                aria-label={label}
                className='w-9 h-9 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-600 hover:text-white transition-all duration-300 text-gray-600 dark:text-gray-400'
              >
                <Icon className='text-sm' />
              </Link>
            </motion.div>
          ))}
        </div>

        <div className='w-px h-6 bg-gray-300 dark:bg-gray-600' />

        <ThemeSwitcher />

        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Link
            href='#contact'
            onClick={(e) => {
              e.preventDefault()
              smoothScroll('#contact')
            }}
            className='px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-medium hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 flex items-center gap-2 text-sm'
          >
            <MdEmail className='text-base' />
            Hire Me
          </Link>
        </motion.div>
      </div>

      {/* Mobile Menu Button */}
      <motion.button
        type='button'
        onClick={handleModalOpen}
        className='lg:hidden w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200'
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        aria-label='Toggle menu'
      >
        <HiOutlineBars3CenterLeft className='text-xl text-gray-700 dark:text-gray-300' />
      </motion.button>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isModalOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className='fixed inset-0 z-40 bg-black/60 backdrop-blur-sm'
              onClick={handleModalOpen}
            />
            <motion.nav
              initial={{ x: '-100%', opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: '-100%', opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className='fixed top-0 left-0 z-50 h-screen w-[85%] max-w-sm bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl border-r border-gray-200 dark:border-gray-700 shadow-2xl'
            >
              <div className='flex flex-col h-full'>
                {/* Header */}
                <div className='flex justify-between items-center p-6 border-b border-gray-200 dark:border-gray-700'>
                  <Link href='/' className='text-lg font-bold'>
                    <span className='bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent'>
                      code with mercy
                    </span>
                  </Link>
                  <motion.button
                    onClick={handleModalOpen}
                    className='w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200'
                    whileHover={{ scale: 1.05, rotate: 90 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <AiOutlineClose className='text-lg' />
                  </motion.button>
                </div>

                {/* Navigation Links */}
                <div className='flex-1 px-6 py-8'>
                  <div className='space-y-2'>
                    {navLinks.map((link, index) => {
                      const isActive =
                        pathname === link.href ||
                        (link.href.startsWith('#') &&
                          activeSection === link.href.replace('#', ''))

                      return (
                        <motion.div
                          key={link.id}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                        >
                          <Link
                            href={link.href}
                            onClick={(e) => {
                              if (link.href.startsWith('#')) {
                                e.preventDefault()
                                smoothScroll(link.href)
                                setIsModalOpen(false)
                              }
                            }}
                            className={`block px-4 py-3 rounded-xl font-medium transition-all duration-300 ${
                              isActive
                                ? 'bg-gradient-to-r from-blue-500/10 to-purple-500/10 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-800'
                                : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-blue-600 dark:hover:text-blue-400'
                            }`}
                          >
                            <span className='capitalize'>{link.name}</span>
                          </Link>
                        </motion.div>
                      )
                    })}
                  </div>
                </div>

                {/* Footer */}
                <div className='p-6 border-t border-gray-200 dark:border-gray-700 space-y-6'>
                  {/* Social Links */}
                  <div className='grid grid-cols-4 gap-3'>
                    {socialLinks.map(({ Icon, href, label }, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 + idx * 0.1 }}
                      >
                        <Link
                          href={href}
                          target='_blank'
                          rel='noopener noreferrer'
                          aria-label={label}
                          className='flex items-center justify-center w-12 h-12 rounded-xl bg-gray-100 dark:bg-gray-800 hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-600 hover:text-white transition-all duration-300 text-gray-600 dark:text-gray-400'
                        >
                          <Icon className='text-lg' />
                        </Link>
                      </motion.div>
                    ))}
                  </div>

                  {/* Theme Switcher */}
                  <div className='flex items-center justify-between'>
                    <span className='text-sm text-gray-500 dark:text-gray-400 font-medium'>
                      Switch Theme
                    </span>
                    <ThemeSwitcher />
                  </div>

                  {/* CTA Button */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                  >
                    <Link
                      href='#contact'
                      onClick={(e) => {
                        e.preventDefault()
                        smoothScroll('#contact')
                        setIsModalOpen(false)
                      }}
                      className='w-full flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-medium hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300'
                    >
                      <MdEmail className='text-lg' />
                      Let&apos;s Work Together
                    </Link>
                  </motion.div>
                </div>
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </nav>
  )
}

export default Navbar
