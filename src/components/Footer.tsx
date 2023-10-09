import Link from 'next/link'
import React from 'react'
import { BsGithub, BsInstagram, BsLinkedin, BsTwitter } from 'react-icons/bs'

const navLinks = [
  { id: 1, name: 'home', href: '/' },
  { id: 2, name: 'about', href: '#about' },
  { id: 3, name: 'tech stacks', href: '#tect-stack' },
  { id: 4, name: 'projects', href: '#projects' },
  { id: 5, name: 'contact', href: '#contact' },
]

export default function Footer() {
  return (
    <footer className='flex flex-col justify-center items-center gap-10 py-[5rem]  mx-auto xl:px-0 xl:w-[90%] md:w-full md:px-10 sm:px-5 sm:w-full '>
      <div className='flex justify-between items-center w-full xl:flex-row xl:gap-0 md:flex-col md:gap-10 sm:flex-col sm:gap-10  '>
        <div className='xl:w-[50%] md:w-full sm:w-full '>
          <div className='flex capitalize xl:justify-start xl:items-center xl:gap-10 md:justify-center md:items-center md:gap-5 sm:justify-center sm:items-center sm:gap-5 '>
            {navLinks.slice(0, 4).map((link) => {
              return (
                <Link href={link.href} key={link.id} className=''>
                  {link.name}
                </Link>
              )
            })}
          </div>
        </div>

        <div className='flex justify-end items-center gap-10 text-xl'>
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
      <hr className='w-full ' />
      <p className='text-center'>
        Design inspiration from <span className='text-gradient'>Figma</span>,
        Developed by{' '}
        <Link
          href='https://twitter.com/codewithmercy'
          className='text-gradient'
        >
          Code With Mercy
        </Link>{' '}
      </p>
    </footer>
  )
}
