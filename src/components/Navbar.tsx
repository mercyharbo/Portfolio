'use client'

import React, { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { Poppins } from 'next/font/google'
import gsap from 'gsap'
import { Power2 } from 'gsap/all'

import { BsGithub, BsTwitter, BsLinkedin, BsInstagram } from 'react-icons/bs'
import { HiOutlineBars3CenterLeft } from 'react-icons/hi2'
import { AiOutlineClose } from 'react-icons/ai'

const poppins = Poppins({ weight: '900', subsets: ['latin'] })

const navLinks = [
  { id: 1, name: 'home', href: '/' },
  { id: 2, name: 'about', href: '#about' },
  { id: 3, name: 'tech stacks', href: '#stack' },
  { id: 4, name: 'projects', href: '#projects' },
  { id: 5, name: 'contact', href: '#contact' },
]

function Navbar() {
  const pathname = usePathname()
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleModalOpen = () => {
    setIsModalOpen((prev: boolean) => !prev)
  }

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
      <nav className=' sticky top-0 left-0 flex justify-between items-center mx-auto 3xl:h-[5rem] 3xl:w-[90%] xl:w-[90%] 2xl:h-[5rem] md:h-[5rem] md:w-[90%] sm:w-[90%] sm:h-[5rem] '>
        <Link href='/' className={`${poppins} text-2xl capitalize`}>
          code with mercy
        </Link>

        <div className='xl:flex xl:justify-center xl:items-center xl:gap-14 md:hidden sm:hidden'>
          {navLinks.map((link) => {
            return (
              <Link
                href={link.href}
                key={link.id}
                className={`${
                  pathname === link.href
                    ? 'dark:text-white text-black'
                    : 'hover:dark:text-white hover:text-black'
                } text-[#A7A7A7] capitalize`}
              >
                {link.name}
              </Link>
            )
          })}
        </div>

        <div className='xl:flex xl:justify-center xl:items-center xl:gap-5 xl:text-2xl md:hidden sm:hidden'>
          <Link href='https://github.com/mercyharbo'>
            <BsGithub />
          </Link>
          <Link href='https://twitter.com/codewithmercy'>
            <BsTwitter />
          </Link>
          <Link href='https://www.linkedin.com/in/codewithmercy'>
            <BsLinkedin />
          </Link>
          <Link href=''>
            <BsInstagram />
          </Link>
        </div>

        <button
          type='button'
          onClick={handleModalOpen}
          className='text-3xl xl:hidden md:flex sm:flex'
        >
          <HiOutlineBars3CenterLeft />
        </button>
      </nav>

      {isModalOpen && (
        <>
          <div
            onClick={handleModalOpen}
            className='fixed h-screen w-full top-0 left-0 dark:bg-[#f1f0f060] bg-[#0000004d] '
          ></div>
          <div className='nav-wrapper absolute top-0 left-0 p-5 flex-col justify-start items-start gap-10 h-screen bg-[#191919] xl:hidden md:flex md:w-[50%] sm:flex '>
            <div className='nav-link flex justify-between items-center w-full'>
              <h1 className='uppercase '>cwm</h1>
              <button
                type='button'
                onClick={handleModalOpen}
                className='text-2xl ml-auto'
              >
                <AiOutlineClose />
              </button>
            </div>

            <div className='flex flex-col justify-start items-start gap-10 md:text-xl'>
              {navLinks.map((link) => {
                return (
                  <Link
                    key={link.id}
                    href={link.href}
                    className={`nav-link ${
                      pathname === link.href ? 'dark:text-white text-black' : ''
                    } text-[#A7A7A7] capitalize`}
                  >
                    {link.name}
                  </Link>
                )
              })}
            </div>

            <div className='nav-link flex justify-center items-center gap-10 w-full md:text-2xl md:mt-[5em] sm:mt-[3rem] sm:text-xl '>
              <Link href='https://github.com/mercyharbo'>
                <BsGithub />
              </Link>
              <Link href='https://twitter.com/codewithmercy'>
                <BsTwitter />
              </Link>
              <Link href='https://www.linkedin.com/in/codewithmercy'>
                <BsLinkedin />
              </Link>
              <Link href='https://www.instagram.com/codewithmercy/'>
                <BsInstagram />
              </Link>
            </div>
          </div>
        </>
      )}
    </main>
  )
}

export default Navbar
