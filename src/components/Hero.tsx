'use client'

import React, { useEffect } from 'react'
import { Poppins } from 'next/font/google'
import Image from 'next/image'
import Link from 'next/link'
import gsap from 'gsap'
import { AiOutlineDownload } from 'react-icons/ai'

const poppins = Poppins({ weight: '900', subsets: ['latin'] })

export default function Hero() {
  useEffect(() => {
    const tl = gsap.timeline()
    gsap.to('.greetings', {
      duration: 1,
      ease: 'sine.inOut',
      rotation: 360,
    })

    tl.fromTo(
      'h1',
      { scale: 0, opacity: 0 },
      {
        scale: 1,
        ease: 'back',
        duration: 1,
        opacity: 1,
      }
    )
      .fromTo(
        '.paragragh',
        { scale: 0, opacity: 0 },
        {
          scale: 1,
          ease: 'back',
          duration: 1,
          opacity: 1,
          delay: 0.5,
        }
      )
      .fromTo(
        '.btn',
        { scale: 0, opacity: 0 },
        {
          scale: 1,
          ease: 'back',
          duration: 1,
          opacity: 1,
          delay: 0.5,
        }
      )
      .fromTo(
        '.imgElem',
        { x: 100, opacity: 0 },
        {
          x: 0,
          ease: 'power2.inOut',
          duration: 1,
          opacity: 1,
          delay: 0.5,
        }
      )
  }, [])

  return (
    <main
      className='flex 3xl:py-[10rem] xl:flex-row xl:justify-center xl:items-center xl:gap-14 xl:px-0 md:flex-col md:justify-start md:items-start md:gap-10 md:px-10
        md:py-[5rem] sm:flex-col sm:justify-center sm:items-center sm:gap-10 sm:px-5 sm:pt-[5rem] '
    >
      <div className='content-container flex flex-col justify-start items-start gap-5 3xl:w-[50%] 2xl:w-[50%] xl:w-[50%]  '>
        <span className='greetings text-lg '>Hey,</span>
        <h1
          className={`title ${poppins} 3xl:text-6xl 3xl:leading-[70px] 2xl:text-5xl 2xl:leading-[65px] 2xl:w-full xl:text-5xl md:text-5xl md:leading-[70px] md:w-[80%]
          sm:w-full sm:text-3xl sm:leading-[45px] font-bold opacity-100 `}
        >
          I am Damilare, a{' '}
          <span className='text-gradient '>Frontend Developer</span> passionate
          about <span className='text-gradient'>building & solving</span>{' '}
          internet problem.
        </h1>
        <p className='paragragh'>
          I am a front-end developer with 4 years of experience in developing
          and maintaining web applications. Proven ability to work independently
          and as part of a team to deliver high-quality products. Strong skills
          in React, JavaScript, Tailwind CSS, Next.js, CSS, and Redux Toolkit.
        </p>
        <Link
          href='/AFOLABI RIDWAN DAMILARE - FRONTEND DEVELOPER.pdf'
          download='/AFOLABI RIDWAN DAMILARE - FRONTEND DEVELOPER.pdf'
          className='btn bg-black text-white dark:bg-white dark:text-black hover:bg-[#E70FAA] py-3 px-5 rounded-lg flex justify-center items-center gap-2 '
        >
          {' '}
          Download Resume <AiOutlineDownload />
        </Link>
      </div>
      <div className='imgElem xl:w-[50%] md:w-full sm:w-full '>
        <Image
          src='/avatar2.jpeg'
          alt='code with mercy'
          width={1000}
          height={1000}
          className='object-cover object-top rounded-xl mx-auto 3xl:w-[30rem] 3xl:h-[30rem] 2xl:w-[20rem] 2xl:h-[20rem] md:w-[20rem] md:h-[20rem] sm:w-[15rem] sm:h-[15rem] '
        />
      </div>
    </main>
  )
}
