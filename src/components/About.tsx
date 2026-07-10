'use client'

import { motion } from 'framer-motion'

const capabilities = [
  {
    title: 'Frontend Engineering',
    description:
      'Building responsive, maintainable web applications with clean component structure and production-ready implementation.',
  },
  {
    title: 'UI Implementation',
    description:
      'Turning design ideas into polished interfaces that feel consistent, accessible, and easy to use across screen sizes.',
  },
  {
    title: 'Technical SEO',
    description:
      'Creating pages that load fast, describe themselves clearly, and give search engines the right structure to understand them.',
  },
  {
    title: 'Product Thinking',
    description:
      'Keeping the user journey, business goal, and implementation details connected from the first screen to the shipped product.',
  },
]

export default function About() {
  return (
    <section id='about' className='w-full 3xl:max-w-7xl'>
      <div className='flex flex-col items-center justify-between gap-12 md:items-start lg:flex-row lg:gap-24'>
        <div className='flex flex-col gap-6 text-left lg:w-1/2 lg:gap-8'>
          <motion.h2
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className='text-3xl font-bold leading-snug text-white md:text-4xl lg:text-3xl 2xl:text-4xl 3xl:text-5xl'
          >
            I write code that solves <br className='hidden sm:block' /> actual
            business problems.
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className='mx-auto flex max-w-xl flex-col gap-6 text-sm leading-relaxed text-gray-300 md:text-lg lg:mx-0 lg:text-sm'
          >
            <p>
              I&apos;m Afolabi Ridwan Damilare, known online as CodeWithMercy. I
              solve business problems with software, sitting close to product,
              design, and engineering so ideas can move from rough flow to
              shipped interface without losing the business goal.
            </p>
            <p>
              Over the past 4+ years, I&apos;ve built dashboards, SaaS workflows,
              e-commerce experiences, and API-backed interfaces for teams that
              need more than a good-looking screen. The work has to be clear,
              fast, usable, and useful to the people paying for it.
            </p>
            <p>
              My strongest work happens where product thinking meets frontend
              execution: turning complex requirements into clean user journeys,
              reliable architecture, and measurable outcomes.
            </p>
            <p>
              If you need someone who can care about the user experience, the
              implementation details, and the business result at the same time,
              that is the kind of work I like to own.
            </p>
          </motion.div>
        </div>

        <div className='grid w-full max-w-2xl grid-cols-1 gap-4 sm:grid-cols-2 lg:w-1/2'>
          {capabilities.map((capability, index) => (
            <motion.article
              key={capability.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: index * 0.08,
                duration: 0.5,
                ease: 'easeOut',
              }}
              viewport={{ once: true }}
              className='group flex min-h-[190px] flex-col justify-between rounded-2xl border border-white/5 bg-secondary/50 p-5 transition-colors hover:border-blue-500/30'
            >
              <div className='flex items-center justify-between gap-4'>
                <h3 className='text-base font-semibold text-white transition-colors group-hover:text-primary'>
                  {capability.title}
                </h3>
                <span className='text-xs font-medium text-primary'>
                  0{index + 1}
                </span>
              </div>
              <p className='text-sm leading-relaxed text-gray-300'>
                {capability.description}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
