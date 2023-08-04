import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function About() {
  return (
    <>
      <Head>
        <title>Code With Mercy - Frontend Developer | About me</title>
        <meta
          name='description'
          content=' Learn more about me and my journey as a frontend developer and WordPress expert. Find out what I do when I&#8217;m not coding, 
          what I&#8217;m passionate about, and how to contact me.'
        />
      </Head>
      <main className='flex justify-center items-start xl:w-[90%] lg:flex-row lg:w-full lg:py-14 lg:gap-8 md:py-10 md:px-10 md:flex-col-reverse md:gap-5 sm:gap-8 sm:flex-col-reverse sm:py-10 sm:px-5 '>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 2, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className='flex flex-col justify-start items-start gap-5 lg:w-[50%] md:w-full sm:w-full'
        >
          <h1 className='lg:text-7xl md:text-5xl sm:text-4xl'>About</h1>
          <p className=''>
            I am a frontend developer from Nigeria. I have up-to 3 years of
            experience in creating responsive and user-friendly websites and web
            applications using HTML, CSS, JavaScript, React, Nextjs, and Redux
            Toolkit.
          </p>

          <ul className='list-disc list-outside space-y-5 lg:pl-8 md:pl-8 sm:pl-8 '>
            <li>
              I helped develop a reservation platform for space owners, event
              organizers, and users who need various facilities using React and
              JavaScript. The platform was styled using Tailwind and Sass to
              create a responsive and user-friendly interface.
            </li>

            <li>
              I created several landing pages for different clients using HTML,
              CSS, JavaScript, React, Next.js, and Tailwind. The landing pages
              were designed to showcase the client&#8217;s products or services,
              capture leads, and increase conversions. The landing pages were
              optimized for performance, accessibility, and SEO. I used React
              and Next.js to create dynamic and interactive web pages that
              loaded fast and had great user experience. I used Tailwind to
              style the web pages with a modern and consistent look and feel.
            </li>

            {/* <li>
              I gave Aseda Security website a new look from the old one they
              were using, a company that offers bodyguard, CCTV installation,
              vehicle with a driver, and other security services. I used Next.js
              and Tailwind to build a fast and responsive website that showcases
              the company&#8217;s services, portfolio, and testimonials. I also
              integrated Contentful as a headless CMS to enable the company to
              post blog articles easily without any prior knowledge. The blog
              model contains title, image, and rich text fields. I used Framer
              Motion to add animations to the website to make it more engaging
              and interactive. The website is optimized for performance,
              accessibility, and SEO.
            </li> */}
          </ul>

          <p className=''>
            When I&#8217;m not coding, I enjoy reading books, playing video
            games,watching movies, and listening to musics. I&#8217;m always
            eager to learn new skills and stay updated with the latest trends
            and best practices in web development. I&#8217;m always looking for
            new challenges and opportunities to grow as a developer and deliver
            high-quality work.
          </p>

          <p className=''>
            If you&#8217;re interested in working with me or want to know more
            about me, feel free to contact me anytime. I&#8217;d love to hear
            from you. You can reach me by email at{' '}
            <Link
              href={'mailto:damilare791@gmail.com'}
              className='text-red-500 font-semibold'
            >
              {' '}
              Email me
            </Link>{' '}
            or {''}
            <Link
              href={'tel:+234-907-847-2701'}
              className='text-red-500 font-semibold'
            >
              mobile call{' '}
            </Link>
            . You can also follow me on{' '}
            <Link
              href='www.twitter.com/codewithmercy'
              className='text-red-500 font-semibold'
            >
              {' '}
              Twitter{' '}
            </Link>{' '}
            or{' '}
            <Link
              href='https://www.linkedin.com/in/codewithmercy/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3BIJWxggz6SpKTWAs%2FuMNyDQ%3D%3D'
              className='text-red-500 font-semibold'
            >
              LinkedIn
            </Link>
            . Thank you for visiting my portfolio website.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 2, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className='lg:ml-auto md:mx-auto sm:mx-auto'
        >
          <Image
            src='/avatar1.jpeg'
            alt='Afolabi Ridwan Damilare'
            width={500}
            height={500}
            quality={100}
            className='rounded-xl xl:w-[500px] xl:h-[550px] lg:w-[450px] lg:h-[450px] md:w-[450px] md:h-[500px] sm:h-[350px] sm:w-full shadow-lg shadow-[#6245d7] md:mx-auto sm:mx-auto  '
          />
        </motion.div>
      </main>
    </>
  )
}
