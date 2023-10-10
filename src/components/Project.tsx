import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { BsGithub, BsLink45Deg } from 'react-icons/bs'

import projectJSON from '@/components/projects.json'

type ProjectProps = {
  addToRefs: any
}

export default function Project({ addToRefs }: ProjectProps) {
  return (
    <main className='flex flex-col justify-center items-center xl:gap-5 xl:my-[5rem] xl:px-0 md:px-10 md:my-[3rem] md:gap-10 sm:gap-10 sm:px-5 sm:my-[2rem] '>
      <div className='flex flex-col justify-center items-center gap-5'>
        <h1
          ref={addToRefs}
          className='text-gradient xl:text-5xl md:text-4xl sm:text-3xl capitalize'
        >
          Projects
        </h1>
        <p ref={addToRefs} className=''>
          Here are some of the projects I have worked on and you can find more
          on my github:
        </p>
        <div
          className='grid 3xl:grid-cols-4 2xl:grid-cols-3 2xl:gap-10 xl:grid-cols-3 xl:content-start xl:place-items-start xl:pt-[3rem] md:grid-cols-2 md:content-center
        md:place-items-center md:gap-10 md:pt-[5rem] sm:grid-cols-1 sm:content-center sm:place-items-center sm:gap-10 sm:pt-[5rem]  '
        >
          {projectJSON.map((item) => {
            return (
              <div
                key={item.id}
                ref={addToRefs}
                className='flex flex-col justify-start items-start gap-2 dark:bg-white dark:text-black text-white bg-[#363636] shadow-2xl rounded-lg w-full h-full cursor-pointer hover:scale-110 
                active:scale-100 duration-200  '
              >
                <Image
                  src={item.imagePath}
                  alt={item.title}
                  width={500}
                  height={500}
                  className='rounded-t-lg w-full h-auto'
                />
                <div className='flex flex-col justify-between items-start gap-4 p-4 h-full'>
                  <h1 className='text-xl '>{item.title}</h1>
                  <p>
                    {item.description.join(' ').substring(0, 250)}
                    {item.description.join(' ').length > 250 ? '...' : ''}
                  </p>
                  <div className='flex justify-between items-center gap-4 w-full'>
                    <Link
                      href={item.liveSite}
                      target='_blank'
                      className='flex justify-center items-center gap-2 capitalize hover:underline hover:text-[red] '
                    >
                      <BsLink45Deg className='text-xl' /> live preview
                    </Link>
                    <Link
                      href={item.github}
                      target='_blank'
                      className='flex justify-center items-center gap-2 capitalize hover:underline hover:text-[red] '
                    >
                      <BsGithub className='text-xl' /> view code
                    </Link>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </main>
  )
}
