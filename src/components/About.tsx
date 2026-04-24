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
    <section id='about' className='w-full py-20 px-4 lg:px-20'>
      <div className='flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-24'>
        {/* Left Column: Text */}
        <div className='flex flex-col gap-8 lg:w-1/2'>
          <motion.h2
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className='text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1] tracking-tight'
          >
            Engineering High-Impact <br /> Solutions That Bridge Logic & UX.
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className='flex flex-col gap-6 text-base text-gray-300 max-w-xl leading-relaxed'
          >
            <p>
              I am a Performance-Focused Engineer with 4+ years of experience
              architecting scalable systems. I specialize in turning complex
              technical requirements into seamless, revenue-driving digital
              products.
            </p>
            <p>
              I have a proven track record of architecting complex systems, from
              engineering secure RBAC-enabled authentication and real-time HRIS
              dashboards to building sophisticated &quot;Smart Cart&quot;
              features for high-volume e-commerce. My work consistently bridges
              the gap between technical excellence and measurable business
              growth.
            </p>
            <p className='text-base lg:text-lg border-l-2 border-blue-500/50 pl-6 italic'>
              Notable achievement: Spearheaded the Leban Street launch,
              generating $30,000+ in revenue within 60 days while slashing page
              load times by 40%.
            </p>
          </motion.div>
        </div>

        {/* Right Column: Skill Grid */}
        <div className='lg:w-1/2 w-full max-w-2xl'>
          <div className='grid grid-cols-4 gap-4 aspect-square lg:aspect-video'>
            {/* Grid Items */}
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
                    className='bg-[#161d2f] border border-white/5 rounded-xl flex items-center justify-center p-4 shadow-xl hover:border-blue-500/30 transition-colors group cursor-default'
                  >
                    <span className='text-gray-300 font-medium text-sm lg:text-base group-hover:text-white transition-colors'>
                      {skill.name}
                    </span>
                  </motion.div>
                )
              }

              return <div key={i} className='invisible lg:visible' />
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
