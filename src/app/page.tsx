'use client'

import DecorativeAvatar from '@/components/avatar'
import gsap from 'gsap'
import Link from 'next/link'
import { useEffect, useRef } from 'react'
import { AiOutlineDownload } from 'react-icons/ai'
import { BsGit } from 'react-icons/bs'
import {
  SiGithub,
  SiJavascript,
  SiNextdotjs,
  SiReact,
  SiRedux,
  SiTailwindcss,
  SiTypescript,
} from 'react-icons/si'
import { TbBrandFramerMotion } from 'react-icons/tb'

import experience from '@/data/experience.json'

import ProjectSection from '@/components/project-section'
import { useForm, ValidationError } from '@formspree/react'
import { ScrollTrigger } from 'gsap/all'
import { RiMailSendFill } from 'react-icons/ri'

gsap.registerPlugin(ScrollTrigger)

export default function Home() {
  const [state, handleSubmit] = useForm('mgebqlnb')

  const revealRefs = useRef<Array<HTMLElement>>([])

  useEffect(() => {
    const tl = gsap.timeline()

    revealRefs.current.forEach((el, index) => [
      gsap.fromTo(
        el,
        { y: -100, autoAlpha: 0 },
        {
          y: 0,
          duration: 1,
          ease: 'power2.out',
          autoAlpha: 1,
          stagger: 0.5,
          delay: 0.5,
          scrollTrigger: {
            id: `section-${index + 1}`,
            trigger: el,
            start: 'top center+=20',
            end: 'bottom center',
            toggleActions: 'play none none reverse',
          },
        }
      ),
    ])

    tl.fromTo(
      '.title',
      { scale: 0, opacity: 0 },
      {
        scale: 1,
        ease: 'back',
        duration: 0.5,
        opacity: 1,
        // delay: 0.5,
      }
    )
      .fromTo(
        '.headings',
        { scale: 0, opacity: 0 },
        {
          scale: 1,
          ease: 'back',
          duration: 0.5,
          opacity: 1,
          // delay: 0.5,
        }
      )
      .fromTo(
        '.sub-title',
        { scale: 0, opacity: 0 },
        {
          scale: 1,
          ease: 'back',
          duration: 0.5,
          opacity: 1,
          // delay: 0.5,
        }
      )
      .fromTo(
        '.resume-btn',
        { scale: 0, opacity: 0 },
        {
          scale: 1,
          ease: 'back',
          duration: 0.5,
          opacity: 1,
          // delay: 0.5,
        }
      )
      .fromTo(
        '.imgElem',
        { x: 100, opacity: 0 },
        {
          x: 0,
          ease: 'power2.inOut',
          duration: 0.5,
          opacity: 1,
          delay: 0.5,
        }
      )
  }, [revealRefs])

  if (state.succeeded) {
    return (
      <div className='flex flex-col justify-center items-center gap-5 text-center mx-auto py-20'>
        <div className='success-icon'>
          <RiMailSendFill size={80} className='text-primary' />
        </div>
        <h1 className='success-text text-4xl font-bold bg-gradient-to-r from-primary via-blue-400 to-violet-500 inline-block text-transparent bg-clip-text'>
          Message Sent!
        </h1>
        <p className='success-text text-gray-600 dark:text-gray-300 max-w-md'>
          Thanks for reaching out! I&apos;ll get back to you as soon as
          possible.
        </p>
      </div>
    )
  }

  const addToRefs = (el: HTMLElement | null) => {
    if (el && !revealRefs.current.includes(el)) {
      revealRefs.current.push(el)
    }
  }

  return (
    <main className='flex flex-col gap-10 lg:gap-[5rem] px-5 lg:px-[10rem]'>
      <section className='flex flex-col lg:flex-row items-center justify-between w-full px-0 lg:px-[3rem] lg:mt-[4rem] gap-10'>
        <div className='flex flex-col justify-start items-start gap-3 lg:gap-5 w-full lg:w-1/2'>
          <span className='title font-semibold'>Hello, I&apos;m Mercy, </span>
          <h1
            className={` headings text-5xl lg:text-7xl/none capitalize font-extrabold flex flex-wrap`}
          >
            <span className='gradient-text bg-gradient-to-r from-primary via-blue-400 to-violet-500 inline-block text-transparent bg-clip-text animate-gradient'>
              frontend
            </span>{' '}
            <br />
            <span className='regular-text'>developer</span>
          </h1>
          <span className='sub-title font-semibold '>
            based in Osogbo, Nigeria
          </span>
          <Link
            href='/AFOLABI RIDWAN DAMILARE - FRONTEND DEVELOPER.pdf'
            download='/AFOLABI RIDWAN DAMILARE - FRONTEND DEVELOPER.pdf'
            className='resume-btn group relative'
          >
            <div className='absolute inset-0 bg-primary/60 rounded-lg translate-x-1 translate-y-1'></div>
            <div className='relative border-2 border-black text-white bg-primary/80 hover:bg-primary/60 transition-colors rounded-lg px-8 py-4 flex items-center gap-3 text-lg font-medium'>
              Resume <AiOutlineDownload className='text-xl' />
            </div>
          </Link>
        </div>

        <div className='imgElem'>
          <DecorativeAvatar />
        </div>
      </section>

      <section
        id='about'
        className='section flex flex-col gap-[5rem] w-full mt-8 lg:mt-0 lg:w-2/3'
      >
        <div className='flex flex-col gap-5 w-full'>
          <h1
            ref={addToRefs}
            className='section-heading bg-gradient-to-r from-primary via-blue-400 to-violet-500 inline-block text-transparent bg-clip-text text-3xl lg:text-5xl capitalize'
          >
            about me
          </h1>

          <p ref={addToRefs} className='section-content '>
            Frontend Developer with 4+ years of expertise in React.js and
            Next.js, specializing in building responsive and accessible web
            applications. I transform complex design requirements into clean,
            performant code using modern tools like TypeScript, Tailwind CSS,
            and Redux Toolkit.
          </p>

          <p ref={addToRefs} className='section-content '>
            My focus is on creating exceptional user experiences through
            optimized performance, smooth animations with GSAP, and
            pixel-perfect implementations. Passionate about web accessibility
            and staying current with frontend best practices, I bring both
            technical expertise and collaborative spirit to every project.
          </p>
        </div>

        <div className='flex flex-col gap-5 w-full'>
          <h1
            ref={addToRefs}
            className='section-heading bg-gradient-to-r from-primary via-blue-400 to-violet-500 inline-block text-transparent bg-clip-text text-3xl lg:text-5xl capitalize'
          >
            work experience
          </h1>
          <div className='flex flex-col justify-start items-start gap-5 w-full'>
            {experience.map((item, index) => {
              return (
                <section
                  key={item.id}
                  ref={addToRefs}
                  className={`section-content flex flex-col w-full relative py-8 ${
                    index !== experience.length - 1
                      ? 'after:absolute after:border-b-[1px] after:w-full after:bottom-0 after:left-0 after:h-5 after:border-[#EBEAED] after:dark:border-[#A7A7A7]'
                      : ''
                  }`}
                >
                  <div className='flex justify-between items-start w-full mb-4'>
                    <div className='flex flex-col justify-start items-start gap-2'>
                      <h3 className='xl:text-xl md:text-lg sm:text-base font-semibold dark:text-white'>
                        {item.role}
                      </h3>
                      <span className='text-[#A7A7A7] xl:text-sm md:text-sm sm:text-xs'>
                        {item.company}
                      </span>
                    </div>
                    <div className='flex flex-col justify-end items-end gap-2'>
                      <span className='bg-[#D7FFE0] text-[#018C0F] xl:text-sm md:text-sm sm:text-xs px-2 py-1 rounded-full'>
                        {item.type_of_job}
                      </span>
                      <p className='text-[#A7A7A7] xl:text-sm md:text-sm sm:text-xs'>
                        {item.duration}
                      </p>
                    </div>
                  </div>
                  <ul className='list-disc pl-4 space-y-2'>
                    {item.achievements?.map((achievement, index) => (
                      <li key={index} className='text-sm '>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </section>
              )
            })}
          </div>
        </div>
      </section>

      <ProjectSection addToRefs={addToRefs} />

      <section id='skills' className='section flex flex-col gap-5 w-full'>
        <div className='flex flex-col gap-5'>
          <h1
            ref={addToRefs}
            className='section-heading bg-gradient-to-r from-primary via-blue-400 to-violet-500 inline-block text-transparent bg-clip-text text-3xl lg:text-5xl capitalize'
          >
            Skills & Technologies
          </h1>
          <p ref={addToRefs} className='section-content '>
            Here are the technologies and tools I work with.
          </p>
        </div>

        <div className='section-content grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
          <div
            ref={addToRefs}
            className='group relative flex flex-col items-center gap-3 p-6 rounded-lg cursor-pointer shadow-lg hover:shadow-primary/20 hover:-translate-y-1'
          >
            <div className='absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
            <SiJavascript className='text-4xl text-yellow-400 group-hover:scale-110 transition-transform duration-300' />
            <span className='font-medium relative z-10 '>JavaScript</span>
          </div>
          <div
            ref={addToRefs}
            className='group relative flex flex-col items-center gap-3 p-6 rounded-lg cursor-pointer shadow-lg hover:shadow-primary/20  hover:-translate-y-1'
          >
            <div className='absolute inset-0 bg-gradient-to-r from-blue-400/20 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
            <SiReact className='text-4xl text-blue-400 group-hover:scale-110 transition-transform duration-300' />
            <span className='font-medium relative z-10 '>React</span>
          </div>
          <div
            ref={addToRefs}
            className='group relative flex flex-col items-center gap-3 p-6 rounded-lg cursor-pointer shadow-lg hover:shadow-primary/20  hover:-translate-y-1'
          >
            <div className='absolute inset-0 bg-gradient-to-r from-black/20 dark:from-white/20 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
            <SiNextdotjs className='text-4xl group-hover:scale-110 transition-transform duration-300' />
            <span className='font-medium relative z-10 '>Next.js</span>
          </div>
          <div
            ref={addToRefs}
            className='group relative flex flex-col items-center gap-3 p-6 rounded-lg cursor-pointer shadow-lg hover:shadow-primary/20 hover:-translate-y-1'
          >
            <div className='absolute inset-0 bg-gradient-to-r from-blue-600/20 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
            <SiTypescript className='text-4xl text-blue-600 group-hover:scale-110 transition-transform duration-300' />
            <span className='font-medium relative z-10 '>TypeScript</span>
          </div>
          <div
            ref={addToRefs}
            className='group relative flex flex-col items-center gap-3 p-6 rounded-lg cursor-pointer shadow-lg hover:shadow-primary/20 hover:-translate-y-1'
          >
            <div className='absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
            <SiTailwindcss className='text-4xl text-cyan-400 group-hover:scale-110 transition-transform duration-300' />
            <span className='font-medium relative z-10 '>Tailwind CSS</span>
          </div>
          <div
            ref={addToRefs}
            className='group relative flex flex-col items-center gap-3 p-6 rounded-lg cursor-pointer shadow-lg hover:shadow-primary/20 hover:-translate-y-1'
          >
            <div className='absolute inset-0 bg-gradient-to-r from-purple-500/20 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
            <TbBrandFramerMotion className='text-4xl text-purple-500 group-hover:scale-110 transition-transform duration-300' />
            <span className='font-medium relative z-10 '>Framer Motion</span>
          </div>
          <div
            ref={addToRefs}
            className='group relative flex flex-col items-center gap-3 p-6 rounded-lg cursor-pointer shadow-lg hover:shadow-primary/20 hover:-translate-y-1'
          >
            <div className='absolute inset-0 bg-gradient-to-r from-orange-500/20 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
            <BsGit className='text-4xl text-orange-500 group-hover:scale-110 transition-transform duration-300' />
            <span className='font-medium relative z-10 '>Git</span>
          </div>
          <div
            ref={addToRefs}
            className='group relative flex flex-col items-center gap-3 p-6 rounded-lg cursor-pointer shadow-lg hover:shadow-primary/20 hover:-translate-y-1'
          >
            <div className='absolute inset-0 bg-gradient-to-r from-gray-800/20 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
            <SiGithub className='text-4xl group-hover:scale-110 transition-transform duration-300' />
            <span className='font-medium relative z-10 '>GitHub</span>
          </div>
          <div
            ref={addToRefs}
            className='group relative flex flex-col items-center gap-3 p-6 rounded-lg cursor-pointer shadow-lg hover:shadow-primary/20 hover:-translate-y-1'
          >
            <div className='absolute inset-0 bg-gradient-to-r from-purple-600/20 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
            <SiRedux className='text-4xl text-purple-600 group-hover:scale-110 transition-transform duration-300' />
            <span className='font-medium relative z-10 '>Redux Toolkit</span>
          </div>
        </div>
      </section>

      <section id='contact' className='section flex flex-col gap-8 w-full'>
        <div className='flex flex-col gap-3'>
          <h1 className='section-heading bg-gradient-to-r from-primary via-blue-400 to-violet-500 inline-block text-transparent bg-clip-text text-3xl lg:text-5xl capitalize'>
            Get In Touch
          </h1>
          <p className='section-content  max-w-2xl'>
            Have a project in mind or want to discuss potential opportunities?
            Feel free to reach out!
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className='section-content contact-form py-5 w-full lg:w-1/2 space-y-6'
        >
          <div className='group flex flex-col justify-start items-start gap-2'>
            <label
              htmlFor='name'
              className='font-medium  group-focus-within:text-primary transition-colors duration-300'
            >
              Name
            </label>
            <input
              type='text'
              id='name'
              name='name'
              placeholder='Enter your name'
              required
              className='w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 cursor-pointer  focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none'
              onFocus={(e) => {
                gsap.to(e.target, {
                  scale: 1.02,
                  duration: 0.3,
                  ease: 'power2.out',
                })
              }}
              onBlur={(e) => {
                gsap.to(e.target, {
                  scale: 1,
                  duration: 0.3,
                  ease: 'power2.out',
                })
              }}
            />
            <ValidationError
              prefix='Name'
              field='name'
              errors={state.errors}
              className='text-[#E70FAA] text-sm py-1'
            />
          </div>

          <div className='group flex flex-col justify-start items-start gap-2'>
            <label
              htmlFor='email'
              className='font-medium  group-focus-within:text-primary transition-colors duration-300'
            >
              Email
            </label>
            <input
              type='email'
              id='email'
              name='email'
              placeholder='Enter your email'
              required
              className='w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 cursor-pointer  focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none'
              onFocus={(e) => {
                gsap.to(e.target, {
                  scale: 1.02,
                  duration: 0.3,
                  ease: 'power2.out',
                })
              }}
              onBlur={(e) => {
                gsap.to(e.target, {
                  scale: 1,
                  duration: 0.3,
                  ease: 'power2.out',
                })
              }}
            />
            <ValidationError
              prefix='Email'
              field='email'
              errors={state.errors}
              className='text-[#E70FAA] text-sm py-1'
            />
          </div>

          <div className='group flex flex-col justify-start items-start gap-2'>
            <label
              htmlFor='message'
              className='font-medium  group-focus-within:text-primary transition-colors duration-300'
            >
              Message
            </label>
            <textarea
              id='message'
              name='message'
              placeholder='Enter your message'
              required
              className='w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 cursor-pointer  focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none min-h-[150px] resize-y'
              onFocus={(e) => {
                gsap.to(e.target, {
                  scale: 1.02,
                  duration: 0.3,
                  ease: 'power2.out',
                })
              }}
              onBlur={(e) => {
                gsap.to(e.target, {
                  scale: 1,
                  duration: 0.3,
                  ease: 'power2.out',
                })
              }}
            ></textarea>
            <ValidationError
              prefix='Message'
              field='message'
              errors={state.errors}
              className='text-[#E70FAA] text-sm py-1'
            />
          </div>

          <button
            type='submit'
            disabled={state.submitting}
            className='submit-btn w-full px-6 py-4 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2'
            onMouseEnter={(e) => {
              gsap.to(e.target, {
                scale: 1.02,
                duration: 0.3,
                ease: 'power2.out',
              })
            }}
            onMouseLeave={(e) => {
              gsap.to(e.target, {
                scale: 1,
                duration: 0.3,
                ease: 'power2.out',
              })
            }}
          >
            {state.submitting ? (
              <>
                <div className='w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin'></div>
                Sending...
              </>
            ) : (
              <>
                Send Message
                <RiMailSendFill className='text-xl' />
              </>
            )}
          </button>
        </form>
      </section>
    </main>
  )
}
