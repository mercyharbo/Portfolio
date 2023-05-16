import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { RxDotFilled, RxExternalLink, RxGithubLogo } from 'react-icons/rx'

import Projects from '@/components/projects.json'

const Project = () => {
  return (
    <>
      <Head>
        <title>Code With Mercy - Frontend Developer | Projects</title>
        <meta
          name='description'
          content='Check out some of the amazing websites I have created using Next.js, React, Tailwind, WordPress, and other web technologies. 
          These projects demonstrate my skills and experience in frontend development and WordPress development.'
        />
      </Head>
      <main className='flex flex-col justify-start items-start w-full lg:gap-5 lg:p-10 md:p-10 md:gap-8 sm:gap-5 sm:p-5'>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 2, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className='flex flex-col justify-start items-start gap-5'
        >
          <h1 className='lg:text-6xl md:text-5xl sm:text-4xl'>Projects</h1>
          <p className='lg:w-[60%] lg:text-lg md:text-lg md:w-full sm:text-base sm:w-full '>
            On this page, you can see some of the websites I have created for
            various clients and purposes. These projects showcase my skills and
            experience in frontend development. You can click on each project to
            see more details and screenshots. I hope you enjoy browsing through
            my portfolio.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 2, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.7 }}
          className='projectScroll lg:py-5 grid-flow-col lg:gap-5 lg:px-5 md:px-5 md:py-5 md:gap-8 sm:gap-5 sm:px-5 sm:py-5 overflow-auto rounded-lg grid  w-full  '
        >
          {Projects.map((project) => (
            <article
              key={project.title}
              className='flex flex-col bg-white shadow-2xl rounded-lg p-5 lg:gap-3 lg:w-[350px] md:w-[450px] md:gap-5 sm:w-[310px] sm:gap-3 '
            >
              <h3 className='lg:text-2xl md:text-2xl sm:text-xl font-semibold'>
                {project.title}
              </h3>

              <div className='flex flex-wrap justify-start items-center gap-2 list-disc capitalize'>
                {' '}
                {project.stack.map((x, i) => {
                  return (
                    <span
                      key={i}
                      className={`flex justify-start items-center lg:text-sm md:text-lg sm:text-base before:content-[${
                        i > 0 ? "''" : "''"
                      }] ${
                        i === 0 || i === project.stack.length - 1
                          ? ''
                          : 'not:first '
                      }`}
                    >
                      {i > 0 && i < project.stack.length - 1 && (
                        <RxDotFilled className='text-xl' />
                      )}
                      {x}
                    </span>
                  )
                })}{' '}
              </div>
              <div className='border-[1px] w-[30%] border-[#6245d7] '></div>
              <p className='py-2 lg:text-base md:text-lg sm:text-base '>
                {project.description}
              </p>
              <Image
                src={project.imagePath}
                alt={project.title}
                width={500}
                height={500}
                className='w-full h-[200px] rounded-lg shadow-2xl '
              />
              <div className='flex justify-start items-center gap-5 mt-auto'>
                <Link href={project.github}>
                  {' '}
                  <RxGithubLogo size={30} color='#6245d7' />{' '}
                </Link>
                <Link href={project.liveSite}>
                  {' '}
                  <RxExternalLink size={30} color='#6245d7' />{' '}
                </Link>
              </div>
            </article>
          ))}
        </motion.div>
      </main>
    </>
  )
}

export default Project
