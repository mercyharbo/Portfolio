'use client'

import DecorativeAvatar from '@/components/avatar'
import ProjectSection from '@/components/project-section'
import experience from '@/data/experience.json'
import { ValidationError, useForm } from '@formspree/react'
import { motion, useScroll, useTransform } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import { AiOutlineDownload } from 'react-icons/ai'
import { BsGit } from 'react-icons/bs'
import { HiOutlineCode } from 'react-icons/hi'
import { HiOutlineLightBulb, HiOutlineUsers } from 'react-icons/hi2'
import { RiMailSendFill } from 'react-icons/ri'
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

gsap.registerPlugin(ScrollTrigger)

const skills = [
  {
    name: 'JavaScript',
    icon: SiJavascript,
    color: 'text-yellow-400',
    bgColor: 'from-yellow-400/20',
  },
  {
    name: 'React',
    icon: SiReact,
    color: 'text-blue-400',
    bgColor: 'from-blue-400/20',
  },
  {
    name: 'Next.js',
    icon: SiNextdotjs,
    color: 'text-gray-800 dark:text-white',
    bgColor: 'from-gray-800/20 dark:from-white/20',
  },
  {
    name: 'TypeScript',
    icon: SiTypescript,
    color: 'text-blue-600',
    bgColor: 'from-blue-600/20',
  },
  {
    name: 'Tailwind CSS',
    icon: SiTailwindcss,
    color: 'text-cyan-400',
    bgColor: 'from-cyan-400/20',
  },
  {
    name: 'Framer Motion',
    icon: TbBrandFramerMotion,
    color: 'text-purple-500',
    bgColor: 'from-purple-500/20',
  },
  {
    name: 'Git',
    icon: BsGit,
    color: 'text-orange-500',
    bgColor: 'from-orange-500/20',
  },
  {
    name: 'GitHub',
    icon: SiGithub,
    color: 'text-gray-800 dark:text-white',
    bgColor: 'from-gray-800/20 dark:from-white/20',
  },
  {
    name: 'Redux Toolkit',
    icon: SiRedux,
    color: 'text-purple-600',
    bgColor: 'from-purple-600/20',
  },
]

const achievements = [
  { icon: HiOutlineCode, number: '20+', label: 'Projects Completed' },
  { icon: HiOutlineUsers, number: '15+', label: 'Happy Clients' },
  { icon: HiOutlineLightBulb, number: '4+', label: 'Years Experience' },
]

export default function Home() {
  const [state, handleSubmit] = useForm('mgebqlnb')
  const [isVisible, setIsVisible] = useState(false)
  const revealRefs = useRef<Array<HTMLElement>>([])
  const heroRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%'])

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 500)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    revealRefs.current.forEach((el, index) => {
      gsap.fromTo(
        el,
        { y: 60, autoAlpha: 0 },
        {
          y: 0,
          duration: 0.8,
          ease: 'power2.out',
          autoAlpha: 1,
          scrollTrigger: {
            id: `section-${index + 1}`,
            trigger: el,
            start: 'top center+=100',
            end: 'bottom center',
            toggleActions: 'play none none reverse',
          },
        }
      )
    })

    // Hero animations
    const tl = gsap.timeline({ delay: 0.2 })
    tl.fromTo(
      '.hero-title',
      { scale: 0.8, opacity: 0, y: 30 },
      { scale: 1, ease: 'back.out(1.7)', duration: 0.8, opacity: 1, y: 0 }
    )
      .fromTo(
        '.hero-subtitle',
        { scale: 0.8, opacity: 0, y: 20 },
        { scale: 1, ease: 'back.out(1.7)', duration: 0.6, opacity: 1, y: 0 },
        '-=0.4'
      )
      .fromTo(
        '.hero-description',
        { opacity: 0, y: 20 },
        { ease: 'power2.out', duration: 0.6, opacity: 1, y: 0 },
        '-=0.3'
      )
      .fromTo(
        '.hero-cta',
        { scale: 0.8, opacity: 0 },
        { scale: 1, ease: 'back.out(1.7)', duration: 0.6, opacity: 1 },
        '-=0.2'
      )
      .fromTo(
        '.hero-avatar',
        { x: 100, opacity: 0, scale: 0.8 },
        { x: 0, ease: 'power2.out', duration: 0.8, opacity: 1, scale: 1 },
        '-=0.6'
      )
  }, [])

  if (state.succeeded) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className='flex flex-col justify-center items-center gap-8 text-center mx-auto py-20 px-5'
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
          className='w-24 h-24 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center'
        >
          <RiMailSendFill size={40} className='text-white' />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className='space-y-4'
        >
          <h1 className='text-4xl lg:text-6xl font-bold bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 bg-clip-text text-transparent'>
            Message Sent!
          </h1>
          <p className='text-gray-600 dark:text-gray-300 max-w-md text-lg'>
            Thanks for reaching out! I&lsquo;ll get back to you as soon as
            possible.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <Link
            href='/'
            className='inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-medium hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300'
          >
            Back to Home
          </Link>
        </motion.div>
      </motion.div>
    )
  }

  const addToRefs = (el: HTMLElement | null) => {
    if (el && !revealRefs.current.includes(el)) {
      revealRefs.current.push(el)
    }
  }

  return (
    <main className='flex flex-col gap-16 lg:gap-24 px-5 lg:px-20 overflow-hidden'>
      <section
        ref={heroRef}
        className='relative flex flex-col lg:flex-row items-center justify-between w-full min-h-screen pt-20 lg:pt-32'
      >
        <motion.div style={{ y }} className='absolute inset-0 -z-10'>
          <div className='absolute top-20 left-10 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl' />
          <div className='absolute bottom-20 right-10 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl' />
        </motion.div>

        <div className='flex flex-col justify-center items-start gap-6 lg:gap-8 w-full lg:w-1/2 z-10'>
          <motion.div className='space-y-2'>
            <span className='hero-title text-lg lg:text-xl font-semibold text-gray-600 dark:text-gray-400'>
              I&apos;m Mercy 👋
            </span>
            <h1 className='hero-subtitle text-5xl lg:text-7xl font-extrabold leading-tight'>
              <span className='bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-gradient'>
                Frontend
              </span>
              <br />
              <span className='text-gray-900 dark:text-white'>Developer</span>
            </h1>
            <p className='hero-description text-lg lg:text-xl text-gray-600 dark:text-gray-400 font-medium'>
              Based in Osogbo, Nigeria 🇳🇬
            </p>
          </motion.div>

          <p className='hero-description text-gray-600 dark:text-gray-300 text-lg max-w-lg leading-relaxed'>
            I craft exceptional digital experiences with modern web
            technologies, focusing on performance, accessibility, and beautiful
            user interfaces.
          </p>

          <div className='hero-cta flex flex-col sm:flex-row gap-4 w-full sm:w-auto'>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href='/resume.pdf'
                download
                className='group relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold text-lg shadow-lg hover:shadow-xl hover:shadow-blue-500/25 transition-all duration-300'
              >
                <span>Download Resume</span>
                <AiOutlineDownload className='text-xl group-hover:translate-y-0.5 transition-transform duration-200' />
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href='#contact'
                className='inline-flex items-center gap-3 px-8 py-4 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-full font-semibold text-lg hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300'
              >
                Let&apos;s Talk
              </Link>
            </motion.div>
          </div>
        </div>

        <div className='hero-avatar w-full lg:w-1/2 flex justify-center lg:justify-end mt-12 lg:mt-0'>
          <motion.div
            whileHover={{ scale: 1.05, rotate: 2 }}
            transition={{ duration: 0.3 }}
            className='relative'
          >
            <DecorativeAvatar />
          </motion.div>
        </div>
      </section>

      <section className='w-full'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              ref={addToRefs}
              className='text-center p-8 rounded-2xl bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 shadow-lg hover:shadow-xl'
              whileHover={{ y: -5 }}
            >
              <div className='w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center'>
                <achievement.icon className='text-2xl text-white' />
              </div>
              <h3 className='text-3xl lg:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2'>
                {achievement.number}
              </h3>
              <p className='text-gray-600 dark:text-gray-400 font-medium'>
                {achievement.label}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      <section id='about' className='flex flex-col gap-16 w-full'>
        <div className='flex flex-col gap-8 max-w-4xl'>
          <motion.h2
            ref={addToRefs}
            className='text-4xl lg:text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent'
          >
            About Me
          </motion.h2>
          <div className='space-y-6 text-lg leading-relaxed'>
            <motion.p
              ref={addToRefs}
              className='text-gray-700 dark:text-gray-300'
            >
              Frontend Developer with 4+ years of expertise in React.js and
              Next.js, specializing in building responsive and accessible web
              applications. I transform complex design requirements into clean,
              performant code using modern tools like TypeScript, Tailwind CSS,
              and Redux Toolkit.
            </motion.p>
            <motion.p
              ref={addToRefs}
              className='text-gray-700 dark:text-gray-300'
            >
              My focus is on creating exceptional user experiences through
              optimized performance, smooth animations with GSAP, and
              pixel-perfect implementations. Passionate about web accessibility
              and staying current with frontend best practices, I bring both
              technical expertise and collaborative spirit to every project.
            </motion.p>
          </div>
        </div>

        {/* Work Experience */}
        <div className='flex flex-col gap-8'>
          <motion.h3
            ref={addToRefs}
            className='text-3xl lg:text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent'
          >
            Work Experience
          </motion.h3>
          <div className='space-y-8'>
            {experience.map((item) => (
              <motion.div
                key={item.id}
                ref={addToRefs}
                className='relative p-8 rounded-2xl bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 shadow-lg hover:shadow-xl '
                whileHover={{ y: -2 }}
              >
                <div className='flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-6'>
                  <div className='space-y-2'>
                    <h4 className='text-xl lg:text-2xl font-bold text-gray-900 dark:text-white'>
                      {item.role}
                    </h4>
                    <p className='text-blue-600 dark:text-blue-400 font-semibold'>
                      {item.company}
                    </p>
                  </div>
                  <div className='flex flex-col lg:items-end gap-2'>
                    <span className='inline-flex px-3 py-1 bg-green-100 text-green-800 text-sm font-medium rounded-full'>
                      {item.type_of_job}
                    </span>
                    <p className='text-gray-500 dark:text-gray-400 text-sm'>
                      {item.duration}
                    </p>
                  </div>
                </div>
                <ul className='space-y-3'>
                  {item.achievements?.map((achievement, idx) => (
                    <li
                      key={idx}
                      className='flex items-start gap-3 text-gray-700 dark:text-gray-300'
                    >
                      <div className='w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0' />
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <ProjectSection addToRefs={addToRefs} />

      <section id='skills' className='flex flex-col gap-12 w-full'>
        <div className='text-center space-y-4'>
          <motion.h2
            ref={addToRefs}
            className='text-4xl lg:text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent'
          >
            Skills & Technologies
          </motion.h2>
          <motion.p
            ref={addToRefs}
            className='text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto'
          >
            Here are the technologies and tools I work with to bring ideas to
            life.
          </motion.p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              ref={addToRefs}
              className='group relative p-6 rounded-2xl bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200/50 dark:border-gray-700/50'
              whileHover={{ y: -8, scale: 1.05 }}
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1 }}
            >
              <div
                className={`absolute inset-0 bg-gradient-to-r ${skill.bgColor} to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
              />
              <div className='relative z-10 flex flex-col items-center gap-4'>
                <div className='w-14 h-14 flex items-center justify-center rounded-xl bg-gray-100 dark:bg-gray-700 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300'>
                  <skill.icon className={`text-2xl ${skill.color}`} />
                </div>
                <div className='text-center'>
                  <h3 className='font-semibold text-gray-900 dark:text-white text-sm group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300'>
                    {skill.name}
                  </h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section id='contact' className='flex flex-col gap-12 w-full pb-20'>
        <div className='text-center space-y-4'>
          <motion.h2
            ref={addToRefs}
            className='text-4xl lg:text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent'
          >
            Get In Touch
          </motion.h2>
          <motion.p
            ref={addToRefs}
            className='text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto'
          >
            Have a project in mind or want to discuss potential opportunities?
            I&apos;d love to hear from you!
          </motion.p>
        </div>

        <motion.form
          ref={addToRefs}
          onSubmit={handleSubmit}
          className='max-w-2xl mx-auto w-full space-y-8 p-8 rounded-2xl bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 shadow-xl'
        >
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            <div className='space-y-2'>
              <label
                htmlFor='name'
                className='block text-sm font-semibold text-gray-700 dark:text-gray-300'
              >
                Name *
              </label>
              <input
                type='text'
                id='name'
                name='name'
                placeholder='Your name'
                required
                className='w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all duration-300'
              />
              <ValidationError
                prefix='Name'
                field='name'
                errors={state.errors}
                className='text-red-500 text-sm'
              />
            </div>
            <div className='space-y-2'>
              <label
                htmlFor='email'
                className='block text-sm font-semibold text-gray-700 dark:text-gray-300'
              >
                Email *
              </label>
              <input
                type='email'
                id='email'
                name='email'
                placeholder='your@email.com'
                required
                className='w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all duration-300'
              />
              <ValidationError
                prefix='Email'
                field='email'
                errors={state.errors}
                className='text-red-500 text-sm'
              />
            </div>
          </div>
          <div className='space-y-2'>
            <label
              htmlFor='message'
              className='block text-sm font-semibold text-gray-700 dark:text-gray-300'
            >
              Message *
            </label>
            <textarea
              id='message'
              name='message'
              placeholder='Tell me about your project...'
              required
              rows={6}
              className='w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all duration-300 resize-y'
            />
            <ValidationError
              prefix='Message'
              field='message'
              errors={state.errors}
              className='text-red-500 text-sm'
            />
          </div>
          <motion.button
            type='submit'
            disabled={state.submitting}
            className='w-full px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl hover:shadow-blue-500/25 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3'
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {state.submitting ? (
              <>
                <div className='w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin' />
                Sending...
              </>
            ) : (
              <>
                Send Message
                <RiMailSendFill className='text-xl' />
              </>
            )}
          </motion.button>
        </motion.form>
      </section>
    </main>
  )
}
