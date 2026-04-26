'use client'

import { motion } from 'framer-motion'

const skills = [
  { name: 'React', row: 1, col: 1 },
  { name: 'TypeScript', row: 1, col: 3 },
  { name: 'Next.js', row: 2, col: 2 },
  { name: 'JavaScript', row: 2, col: 4 },
  { name: 'Redux', row: 3, col: 1 },
  { name: 'REST APIs', row: 3, col: 3 },
  { name: 'TailwindCSS', row: 4, col: 2 },
  { name: 'Framer Motion', row: 4, col: 4 },
]

export default function About() {
  return (
    <section id='about' className='w-full px-5'>
      <div className='flex flex-col lg:flex-row md:items-start items-center justify-between gap-12 lg:gap-24'>
        {/* Left Column: Text */}
        <div className='flex flex-col gap-6 lg:gap-8 lg:w-1/2 text-left'>
          <motion.h2
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className='text-3xl sm:text-3xl md:text-4xl lg:text-3xl 2xl:text-5xl 3xl:text-6xl font-bold text-white leading-snug'
          >
            I write code that solves <br className='hidden sm:block' /> actual
            business problems.
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className='flex flex-col gap-6 text-sm md:text-lg lg:text-sm text-gray-300 max-w-xl mx-auto lg:mx-0 leading-relaxed'
          >
            <p>
              With over 4 years of experience, I don&apos;t just build React
              components—I architect entire frontend systems that are secure,
              scalable, and lightning-fast.
            </p>
            <p>
              Whether it&apos;s engineering a complex HR platform from scratch,
              or building a &apos;Smart Cart&apos; system that helped generate
              $30,000+ in its first 60 days, my focus is always on the final
              outcome.
            </p>
            <p>
              I care about Core Web Vitals, clean architecture, and building
              products that users actually enjoy using.
            </p>
            <p>
              When I&apos;m not coding, I am active in the Osun tech community,
              mentoring developers and building in public on social media. I
              believe the best software is built by people who understand the
              real-world problems their users face every day.
            </p>
          </motion.div>
        </div>

        {/* Right Column: Skill Grid */}
        <div className='lg:w-1/2 w-full max-w-2xl'>
          {/* Desktop Grid (Original Look) */}
          <div className='hidden lg:grid grid-cols-4 gap-3'>
            {[...Array(16)].map((_, i) => {
              const row = Math.floor(i / 4) + 1
              const col = (i % 4) + 1
              const skill = skills.find((s) => s.row === row && s.col === col)

              if (skill) {
                return (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{
                      delay: (row + col) * 0.1,
                      duration: 0.5,
                      ease: 'easeOut',
                    }}
                    viewport={{ once: true }}
                    className='bg-secondary/50 border border-white/5 rounded-xl flex items-center justify-center p-2 lg:aspect-square 2xl:aspect-video shadow-xl hover:border-blue-500/30 transition-all group cursor-default'
                  >
                    <span className='text-gray-300 font-medium text-[10px] lg:text-xs xl:text-sm group-hover:text-white transition-colors text-center wrap-break-word'>
                      {skill.name}
                    </span>
                  </motion.div>
                )
              }

              return <div key={i} className='invisible lg:aspect-square 2xl:aspect-video' />
            })}
          </div>

          {/* Mobile & Tablet Grid (Responsive Look) */}
          <div className='grid lg:hidden grid-cols-2 sm:grid-cols-4 gap-4'>
            {skills.map((skill, i) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{
                  delay: i * 0.05,
                  duration: 0.5,
                  ease: 'easeOut',
                }}
                viewport={{ once: true }}
                className='bg-secondary/50 border border-white/5 rounded-2xl flex items-center justify-center p-5 sm:p-6 shadow-xl hover:border-blue-500/30 transition-all group cursor-default'
              >
                <span className='text-gray-300 font-medium text-xs sm:text-sm group-hover:text-white transition-colors text-center'>
                  {skill.name}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
