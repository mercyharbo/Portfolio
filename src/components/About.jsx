import React from 'react'
import experience from './workExperience.json'

export default function About() {
  return (
    <main className='flex flex-col justify-start items-start gap-5 3xl:py-[5rem] xl:py-[5rem] xl:px-0 md:py-[2rem] md:px-10 sm:py-[5rem] sm:px-5 '>
      <h1 className='xl:text-5xl md:text-4xl sm:text-3xl dark:text-white text-[#42446E] capitalize '>
        about me
      </h1>
      <p className=''>
        I am a seasoned front-end developer with a rich background in crafting
        and nurturing web applications. My journey is marked by mastery of an
        array of cutting-edge technologies, including{' '}
        <strong>
          React, JavaScript, BootStrap, SASS, TypeScript, VS Code, Git & GitHub,
          Tailwind, Next.js, CSS, HTML, and Redux Toolkit.
        </strong>{' '}
        My skills are not just a reflection of my experience; they are a
        testament to my unwavering commitment to staying at the forefront of web
        development.
      </p>
      <p className=''>
        Collaboration is my second nature, and my thirst for knowledge is
        unquenchable. I thrive in dynamic, forward-thinking environments, where
        innovation is the driving force. My true passion lies in the art of
        fashioning user-friendly, visually captivating web applications that
        resonate with users.
      </p>
      <p className=''>
        At this juncture, I am fervently seeking a Frontend Developer role that
        aligns with my aspirations in a high-octane, forward-looking setting. I
        hold the firm belief that I can bring a transformative influence to your
        team, elevating your projects to new heights. Let&apos;s embark on this
        exciting journey together.
      </p>

      <div className='flex flex-col justify-start items-start gap-5 3xl:w-[50%] 2xl:w-[50%] xl:w-[50%] md:w-full md:pt-10 sm:w-full sm:pt-10 '>
        <h1 className='xl:text-5xl md:text-4xl sm:text-3xl dark:text-white text-[#42446E] capitalize'>
          work experience{' '}
        </h1>
        {experience.map((item) => {
          return (
            <section
              key={item.id}
              className='flex w-full relative after:absolute after:border-b-[1px] after:w-full after:bottom-0 after:left-0 after:h-5 after:border-[#EBEAED] 
            after:dark:border-[#A7A7A7] xl:flex-row xl:justify-between xl:items-center xl:py-5 md:justify-between md:items-center md:py-5 sm:justify-between
            sm:items-center sm:py-2'
            >
              <div className='flex flex-col justify-start items-start gap-2'>
                <h3 className='xl:text-xl md:text-lg sm:text-base'>
                  {item.role}
                </h3>
                <li className='text-[#A7A7A7] list-[square] xl:text-sm md:text-sm sm:text-xs'>
                  {item.company}
                </li>
              </div>
              <div className='flex flex-col justify-end items-end gap-2'>
                <span className='bg-[#D7FFE0] text-[#018C0F] xl:text-sm md:text-sm sm:text-xs px-2 py-1 rounded-full '>
                  {item.type_of_job}
                </span>
                <p className='text-[#A7A7A7] xl:text-sm md:text-sm sm:text-xs '>
                  {item.duration}
                </p>
              </div>
            </section>
          )
        })}
      </div>
    </main>
  )
}
