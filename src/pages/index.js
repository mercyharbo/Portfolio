import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Home() {
  return (
    <>
      <Head>
        <title>Code With Mercy - Frontend Developer | Portfolio Website</title>
        <meta
          name='description'
          content='Welcome to my portfolio website, where you can see some of the websites I have created for various clients and purposes. 
          I&#8217;m a frontend developer and WordPress expert based in New York. I love creating beautiful and functional websites that meet the 
          needs and expectations of my clients.'
        />
      </Head>
      <main className={`relative flex flex-col items-center sm:p-5 w-full`}>
        <section
          className='grid lg:grid-cols-2 lg:content-center lg:place-items-center lg:w-[80%] lg:my-20 md:grid-cols-2 md:place-items-center md:my-20 md:gap-8 
        sm:grid-cols-1 sm:gap-8 sm:place-items-start sm:my-16 '
        >
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 2, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.8 }}
            className='flex flex-col justify-start items-start lg:gap-6 md:gap-5 sm:gap-5'
          >
            <h3 className='lg:text-xl md:text-xl sm:text-lg '>
              I am <span className='font-semibold'>Ridwan Damilare</span>
            </h3>
            <h1 className='lg:text-6xl lg:w-[300px] lg:leading-[60px] md:text-5xl md:leading-[60px] sm:leading-[55px] sm:text-5xl font-extrabold '>
              a Frontend Developer{' '}
            </h1>
            <p className=' lg:leading-7 lg:text-xl md:w-full md:text-lg md:leading-8 sm:leading-8 sm:text-lg  '>
              from Nigeria. I have upto 3 years of experience in creating
              responsive and user-friendly websites and web applications using
              HTML, CSS, JavaScript, React, Nextjs, and Redux Toolkit.
            </p>
            <Link
              href='https://www.linkedin.com/in/codewithmercy/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3BsbB%2Fo6UpRNWXYmhHFYKHHQ%3D%3D'
              className='flex justify-center items-center shadow-2xl rounded-lg border-[2px] border-[#6245d7] text-[#6245d7] px-10 font-semibold hover:bg-[#6245d7]
              hover:text-white lg:h-[50px] md:h-[60px] sm:h-[55px] '
            >
              Let&#8217;s connect
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 2, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.8 }}
            className='lg:ml-auto md:ml-auto sm:mx-auto'
          >
            <Image
              src='/avatar2.jpeg'
              alt='Afolabi Ridwan Damilare'
              width={500}
              height={500}
              quality={100}
              className='rounded-xl lg:w-[600px] lg:h-[650px] md:w-full md:h-[500px] sm:h-[350px] sm:w-full shadow-lg shadow-[#6245d7] '
            />
          </motion.div>
        </section>
      </main>
    </>
  )
}
