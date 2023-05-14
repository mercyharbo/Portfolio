import { useEffect, useRef } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  // Create refs for the nav and section elements
  const navRef = useRef(null)
  const sectionRef = useRef(null)

  // Define a function to handle the scroll event
  const handleScroll = () => {
    // Get the nav and section elements from the refs
    const nav = navRef.current
    const section = sectionRef.current

    // Get the scroll position and the section height
    const scrollY = window.scrollY
    const sectionHeight = section.offsetHeight

    // Check if the scroll position is greater than the section height
    if (scrollY > sectionHeight) {
      // Add a class to the nav to show it
      nav.classList.add('show')
    } else {
      // Remove the class from the nav to hide it
      nav.classList.remove('show')
    }
  }

  // Use useEffect to attach the event listener on mount and remove it on unmount
  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <>
      <Head>
        <title> Home | Code With Mercy </title>
        <meta
          name='description'
          content='I am a frontend developer from Nigeria with upto 3years of working experience in the tech space'
        />
        <link rel='icon' href='/' />
      </Head>
      <main
        className={`relative flex flex-col items-center sm:p-5 w-full ${inter.className}`}
      >
        <section
          ref={sectionRef}
          className='grid lg:grid-cols-2 lg:content-center lg:place-items-center lg:w-[80%] lg:my-20 '
        >
          <article className='flex flex-col justify-start items-start lg:gap-6'>
            <h3 className=''>
              I am <span className='font-semibold'>Ridwan Damilare</span>
            </h3>
            <h1 className='lg:text-6xl lg:w-[300px] lg:leading-[60px] font-bold '>
              a Frontend Developer{' '}
            </h1>
            <p className='lg:w-[60%] lg:leading-7 '>
              from Nigeria. I have upto 3 years of experience in creating
              responsive and user-friendly websites and web applications using
              HTML, CSS, JavaScript, React, Nextjs, and Redux Toolkit.
            </p>
            <Link
              href='https://www.linkedin.com/in/codewithmercy/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3BsbB%2Fo6UpRNWXYmhHFYKHHQ%3D%3D'
              className='flex justify-center items-center shadow-2xl rounded-lg border-[2px] border-[#6245d7] text-[#6245d7] lg:px-10 lg:h-[40px] '
            >
              Let&#8217;s connect
            </Link>
          </article>
          <article className='ml-auto'>
            <Image
              src='/avatar2.jpeg'
              alt='Afolabi Ridwan Damilare'
              width={500}
              height={500}
              quality={100}
              className='rounded-xl lg:w-[600px] lg:h-[650px] shadow-lg shadow-[#6245d7]  '
            />
          </article>
        </section>
      </main>
    </>
  )
}
