'use client'

import gsap from 'gsap'

import { AnimatePresence, motion } from 'framer-motion'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

import { AiOutlineClose } from 'react-icons/ai'
import { BsGithub, BsInstagram, BsLinkedin, BsTwitter } from 'react-icons/bs'
import { HiOutlineBars3CenterLeft } from 'react-icons/hi2'
import { ThemeSwitcher } from './ThemeSwitcher'

const navLinks = [
  { id: 1, name: 'home', href: '/' },
  { id: 2, name: 'about', href: '#about' },
  { id: 3, name: 'work', href: '#works' },
]

function Navbar() {
  const pathname = usePathname()
  const [isModalOpen, setIsModalOpen] = useState(false)
  const handleModalOpen = (e?: React.MouseEvent) => {
    e?.stopPropagation()
    setIsModalOpen(!isModalOpen)
  }

  const handleRouteClick = (e: React.MouseEvent) => {
    e.preventDefault()
    setIsModalOpen(false)
  }

  // Close menu on route change
  useEffect(() => {
    setIsModalOpen(false)
  }, [pathname])

  useEffect(() => {
    const tl = gsap.timeline()

    tl.from('.navbar-container', {
      y: -100,
      duration: 1,
      ease: 'power2.out',
      opacity: 0,
    })

    if (isModalOpen) {
      gsap.from('.nav-wrapper', {
        opacity: 0,
        x: -100,
        duration: 1,
        ease: 'power2.out',
      })

      gsap.from('.nav-link', {
        opacity: 0,
        x: -20,
        stagger: 0.5,
        duration: 0.5,
        ease: 'power2.inOut',
      })
    }
  }, [isModalOpen])

  return (
    <main className='w-full'>
      <nav className='bg-white dark:bg-dark fixed top-0 left-0 z-50 h-[5rem] w-full flex justify-between items-center px-5 py-2 lg:px-[10rem]'>
        <Link href='/' className={`logo text-2xl capitalize font-bold `}>
          code with mercy
        </Link>
        <div className='hidden lg:flex items-center gap-10 text-lg'>
          {navLinks.map((link) => {
            return (
              <Link
                href={link.href}
                key={link.id}
                className={`${
                  pathname === link.href
                    ? 'text-primary'
                    : ' hover:text-primary dark:hover:text-primary transition-colors duration-300'
                } capitalize`}
              >
                {link.name}
              </Link>
            )
          })}
        </div>
        <div className='hidden lg:flex items-center gap-5'>
          <div className='flex items-center gap-5 text-lg'>
            <Link
              href='https://github.com/mercyharbo'
              className='hover:text-primary dark:hover:text-primary transition-colors duration-300'
            >
              <BsGithub />
            </Link>
            <Link
              href='https://twitter.com/codewithmercy'
              className='hover:text-primary dark:hover:text-primary transition-colors duration-300'
            >
              <BsTwitter />
            </Link>
            <Link
              href='https://www.linkedin.com/in/codewithmercy'
              className='hover:text-primary dark:hover:text-primary transition-colors duration-300'
            >
              <BsLinkedin />
            </Link>
            <Link
              href=''
              className='hover:text-primary dark:hover:text-primary transition-colors duration-300'
            >
              <BsInstagram />
            </Link>
          </div>

          <ThemeSwitcher />
        </div>{' '}
        <button
          type='button'
          onClick={(e) => handleModalOpen(e)}
          className='text-3xl block lg:hidden text-gray-900 dark:text-white'
          aria-label='Open menu'
        >
          <HiOutlineBars3CenterLeft />
        </button>
      </nav>

      <AnimatePresence>
        {isModalOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              className='fixed inset-0 z-[30] bg-[#000000]/50 w-full h-screen'
              onClick={handleModalOpen}
            />

            <motion.nav
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className='fixed top-0 left-0 z-[70] h-screen w-[80%] flex flex-col justify-between 
                      py-8 px-6 lg:hidden bg-white dark:bg-gray-900 shadow-2xl'
            >
              <div className='space-y-10'>
                <div className='flex justify-between items-center'>
                  <Link href='/' className='text-xl font-bold'>
                    <h1 className='logo capitalize'>code with mercy</h1>
                  </Link>

                  <button
                    type='button'
                    onClick={handleModalOpen}
                    className='flex items-center justify-center w-10 h-10 rounded-full 
                            bg-gray-100 dark:bg-gray-800
                            hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300'
                    aria-label='Close menu'
                  >
                    <AiOutlineClose className='text-xl' />
                  </button>
                </div>

                <div className='flex flex-col w-full'>
                  {navLinks.map((link, index) => {
                    const isActive = pathname === link.href

                    return (
                      <motion.div
                        key={link.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        {' '}
                        <Link
                          href={link.href}
                          onClick={(e) => {
                            if (link.href.startsWith('#')) {
                              const element = document.querySelector(link.href)
                              if (element) {
                                e.preventDefault()
                                element.scrollIntoView({ behavior: 'smooth' })
                                setIsModalOpen(false)
                              }
                            }
                          }}
                          className={`relative group flex items-center py-4 border-b border-gray-100 dark:border-gray-800 capitalize text-lg ${
                            isActive
                              ? 'text-primary dark:text-primary font-medium'
                              : 'text-gray-600 dark:text-gray-400'
                          }`}
                        >
                          <span className='group-hover:text-primary dark:group-hover:text-primary transition-colors duration-300'>
                            {link.name}
                          </span>

                          {/* {isActive && (
                            <motion.span
                              layoutId='activeIndicator'
                              className='absolute left-0 w-1 h-6 bg-primary rounded-r-md'
                            />
                          )} */}
                        </Link>
                      </motion.div>
                    )
                  })}
                </div>
              </div>

              <div className='space-y-8'>
                <div className='grid grid-cols-4 gap-3'>
                  {[
                    {
                      icon: <BsGithub />,
                      href: 'https://github.com/mercyharbo',
                      label: 'GitHub',
                    },
                    {
                      icon: <BsTwitter />,
                      href: 'https://twitter.com/codewithmercy',
                      label: 'Twitter',
                    },
                    {
                      icon: <BsLinkedin />,
                      href: 'https://www.linkedin.com/in/codewithmercy',
                      label: 'LinkedIn',
                    },
                    {
                      icon: <BsInstagram />,
                      href: 'https://www.instagram.com/codewithmercy/',
                      label: 'Instagram',
                    },
                  ].map((social, index) => (
                    <Link
                      key={index}
                      href={social.href}
                      aria-label={social.label}
                      className='flex items-center justify-center w-12 h-12 rounded-full 
                              hover:bg-gray-200 dark:hover:bg-gray-700 hover:text-primary 
                              dark:hover:text-primary transition-all duration-300 text-xl'
                    >
                      {social.icon}
                    </Link>
                  ))}
                </div>

                <div className='flex justify-between items-center border-t border-gray-100 dark:border-gray-800 pt-6'>
                  <span className='text-sm text-gray-500 dark:text-gray-400'>
                    Switch Theme
                  </span>
                  <ThemeSwitcher />
                </div>
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </main>
  )
}

export default Navbar
