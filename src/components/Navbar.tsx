'use client'

import gsap from 'gsap'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

import { AiOutlineClose } from 'react-icons/ai'
import { BsGithub, BsInstagram, BsLinkedin, BsTwitter } from 'react-icons/bs'
import { HiOutlineBars3CenterLeft } from 'react-icons/hi2'

const navLinks = [
  { id: 1, name: 'home', href: '/' },
  { id: 2, name: 'about', href: '#about' },
  { id: 3, name: 'work', href: '#works' },
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
      <nav className='fixed top-0 left-0 z-50 h-[5rem] bg-white border-b border-gray-200 w-full flex justify-between items-center px-5 py-2 lg:px-[10rem]'>
        <Link href='/' className={` text-2xl italic font-bold`}>
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
                    ? 'text-primary dark:text-primary'
                    : 'text-[#A7A7A7] hover:text-primary dark:hover:text-primary transition-colors duration-300'
                } capitalize`}
              >
                {link.name}
              </Link>
            )
          })}
        </div>

        <div className='hidden lg:flex items-center gap-5 text-lg'>
          <Link
            href='https://github.com/mercyharbo'
            className='hover:text-primary transition-colors duration-300'
          >
            <BsGithub />
          </Link>
          <Link
            href='https://twitter.com/codewithmercy'
            className='hover:text-primary transition-colors duration-300'
          >
            <BsTwitter />
          </Link>
          <Link
            href='https://www.linkedin.com/in/codewithmercy'
            className='hover:text-primary transition-colors duration-300'
          >
            <BsLinkedin />
          </Link>
          <Link
            href=''
            className='hover:text-primary transition-colors duration-300'
          >
            <BsInstagram />
          </Link>
        </div>

        <button
          type='button'
          onClick={handleModalOpen}
          className='text-3xl block lg:hidden'
        >
          <HiOutlineBars3CenterLeft />
        </button>
      </nav>

      {isModalOpen && (
        <nav className='nav-wrapper absolute top-0 left-0 h-screen flex flex-col justify-start items-start gap-[5rem] py-10 px-5 bg-nav-bg dark:bg-nav-bg-dark lg:hidden w-[80%] transition-colors duration-300'>
          <div className='flex justify-between items-center w-full'>
            <Link href='/' className={` text-2xl italic font-bold`}>
              <h1 className='capitalize'>code with mercy</h1>
            </Link>

            <button
              type='button'
              onClick={handleModalOpen}
              className='text-2xl'
            >
              <AiOutlineClose />
            </button>
          </div>

          <div className='flex flex-col gap-8 w-full'>
            {navLinks.map((link) => {
              return (
                <Link
                  key={link.id}
                  href={link.href}
                  className={`${
                    pathname === link.href
                      ? 'text-primary dark:text-primary'
                      : 'text-[#A7A7A7] hover:text-primary dark:hover:text-primary transition-colors duration-300'
                  } capitalize`}
                >
                  {link.name}
                </Link>
              )
            })}
          </div>

          <div className='flex items-center gap-7 text-3xl mt-[7rem]'>
            <Link
              href='https://github.com/mercyharbo'
              className='hover:text-primary transition-colors duration-300'
            >
              <BsGithub />
            </Link>
            <Link
              href='https://twitter.com/codewithmercy'
              className='hover:text-primary transition-colors duration-300'
            >
              <BsTwitter />
            </Link>
            <Link
              href='https://www.linkedin.com/in/codewithmercy'
              className='hover:text-primary transition-colors duration-300'
            >
              <BsLinkedin />
            </Link>
            <Link
              href='https://www.instagram.com/codewithmercy/'
              className='hover:text-primary transition-colors duration-300'
            >
              <BsInstagram />
            </Link>
          </div>
        </nav>
      )}
    </main>
  )
}

export default Navbar
