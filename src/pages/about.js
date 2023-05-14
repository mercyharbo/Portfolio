import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function About() {
  return (
    <>
      <Head>
        <title> About me | Code With Mercy </title>
        <meta
          name='description'
          content='I am a frontend developer from Nigeria with upto 3years of working experience in the tech space'
        />
        <link rel='icon' href='/' />
      </Head>
      <main className='flex justify-center items-center lg:w-[80%] lg:py-14 '>
        <section className='flex flex-col justify-start items-start gap-5 lg:w-[50%]'>
          <h1 className='lg:text-7xl md:text-4xl sm:text-3xl'>About</h1>
          <p className=''>
            I am a frontend developer from Nigeria. I have upto 3 years of
            experience in creating responsive and user-friendly websites and web
            applications using HTML, CSS, JavaScript, React, Nextjs, and Redux
            Toolkit.
          </p>

          <ul className='list-disc list-outside space-y-5 lg:pl-8 '>
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

            <li>
              I created a website for XYZ Security, a company that offers
              bodyguard, CCTV installation, vehicle with a driver, and other
              security services. I used Next.js and Tailwind to build a fast and
              responsive website that showcases the company&#8217;s services,
              portfolio, and testimonials. I also integrated Contentful as a
              headless CMS to enable the company to post blog articles easily
              without any prior knowledge. The blog model contains title, image,
              and rich text fields. I used Framer Motion to add animations to
              the website to make it more engaging and interactive. The website
              is optimized for performance, accessibility, and SEO.
            </li>
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
            from you. You can reach me by email at damilare791@gmail.com or {''}
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
        </section>
        <section className='lg:ml-auto'>
          <Image
            src='/avatar1.jpeg'
            alt='Afolabi Ridwan Damilare'
            width={500}
            height={500}
            quality={100}
            className='rounded-xl xl:w-[600px] xl:h-[650px] lg:w-[500px] lg:h-[500px] shadow-lg shadow-[#6245d7]  '
          />
        </section>
      </main>
    </>
  )
}
