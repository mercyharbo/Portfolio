import React from 'react'

import experience from './workExperience.json'

type AboutProps = {
  addToRefs: any
}

export default function About({ addToRefs }: AboutProps) {
  return (
    <main
      id='about'
      className='flex flex-col justify-start items-start gap-5 3xl:my-[7rem] xl:my-[5rem] xl:px-0 md:my-[2rem] md:px-10 sm:my-[5rem] sm:px-5 '
    >
      <h1
        ref={addToRefs}
        className=' text-gradient xl:text-5xl md:text-4xl sm:text-3xl capitalize '
      >
        about me
      </h1>

      <p ref={addToRefs}>
        I am a proficient front-end developer with over 4 years of experience in
        creating modern and responsive web applications. My skillset encompasses
        a robust knowledge of several programming languages and tools, including
        JavaScript, React, Tailwind, Next.js, Redux Toolkit, Sass, and CSS. In
        addition, I demonstrate proficiency in the use of various web
        development tools and frameworks, such as Webpack, Babel, ESLint, and
        React Testing Library. My passion lies in designing user-friendly and
        accessible interfaces that cater to the needs and expectations of both
        clients and users.
      </p>
      <p ref={addToRefs}>
        I am consistently driven by the desire to acquire knowledge of new
        technologies and enhance my skills. My team-oriented approach to work
        and ability to collaborate with other developers, designers, and
        stakeholders are qualities that I hold in high regard. Furthermore, I
        possess the capability to work independently, and efficiently manage my
        time and tasks.
      </p>

      <p ref={addToRefs}>
        My proficiencies include excellent communication and problem-solving
        skills, as well as a commitment to delivering high-quality and
        maintainable code. I am currently seeking a challenging and fulfilling
        opportunity to apply my expertise and contribute to the success of your
        organization.
      </p>

      <div className='flex flex-col justify-start items-start gap-5 3xl:w-[50%] 2xl:w-[50%] xl:w-[50%] md:w-full md:pt-10 sm:w-full sm:pt-10 '>
        <h1
          ref={addToRefs}
          className='text-gradient xl:text-5xl md:text-4xl sm:text-3xl capitalize'
        >
          work experience{' '}
        </h1>
        <div className='flex flex-col justify-start items-start gap-5 w-full '>
          {experience.map((item) => {
            return (
              <section
                key={item.id}
                ref={addToRefs}
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
      </div>

      <div className='flex flex-col justify-start items-start gap-5 3xl:w-[50%] 2xl:w-[50%] xl:w-[50%] md:w-full md:pt-10 sm:w-full sm:pt-10 '>
        <h1
          ref={addToRefs}
          className='text-gradient xl:text-5xl md:text-4xl sm:text-3xl capitalize'
        >
          education
        </h1>

        <section
          ref={addToRefs}
          className='flex w-full xl:flex-row xl:justify-between xl:items-center xl:py-5 md:justify-between md:items-center md:py-5 sm:justify-between
            sm:items-center sm:py-2'
        >
          <div className='flex flex-col justify-start items-start gap-2'>
            <h3 className='xl:text-xl md:text-lg sm:text-base'>
              Bachelor in Computer Science
            </h3>
            <li className='text-[#A7A7A7] list-[square] xl:text-sm md:text-sm sm:text-xs'>
              National Open University Of Nigeria
            </li>
          </div>
          <div className='flex flex-col justify-end items-end gap-2'>
            <span className='bg-[#D7FFE0] text-[#018C0F] xl:text-sm md:text-sm sm:text-xs px-2 py-1 rounded-full '>
              Full Time
            </span>
            <p className='text-[#A7A7A7] xl:text-sm md:text-sm sm:text-xs '>
              2014 - 2020
            </p>
          </div>
        </section>
      </div>
    </main>
  )
}
