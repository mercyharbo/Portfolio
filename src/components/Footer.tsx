import React from 'react'
import Link from 'next/link'
import { BsGithub, BsInstagram, BsLinkedin, BsTwitter } from 'react-icons/bs'

export default function Footer() {
  return (
    <footer className='flex flex-col justify-center items-center gap-10 py-[5rem]  mx-auto xl:px-0 xl:w-[90%] md:w-full md:px-10 sm:px-5 sm:w-full '>
      <div className='flex xl:justify-start md:justify-center sm:justify-center items-center gap-10 text-xl w-full'>
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
