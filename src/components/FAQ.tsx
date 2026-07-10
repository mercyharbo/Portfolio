'use client'

import { createFaqPageJsonLd, type FaqItem } from '@/lib/seo'
import { motion } from 'framer-motion'
import { Minus, Plus } from 'lucide-react'
import { useState } from 'react'

const faqs: FaqItem[] = [
  {
    question: 'What kind of frontend projects do you work on?',
    answer:
      'I build production web applications, SaaS dashboards, e-commerce interfaces, landing pages, and product workflows using React, Next.js, TypeScript, and Tailwind CSS.',
  },
  {
    question: 'Can you improve an existing React or Next.js app?',
    answer:
      'Yes. I can audit the current frontend, improve performance, clean up architecture, fix UX issues, and ship focused updates without forcing a full redesign.',
  },
  {
    question: 'Do you handle performance and SEO implementation?',
    answer:
      'Yes. I work on Core Web Vitals, metadata, sitemap and robots setup, structured data, image optimization, and crawlable page structure for Next.js websites.',
  },
  {
    question: 'What is your usual project process?',
    answer:
      'I start by understanding the goal, current codebase, users, and business constraints. From there I plan the implementation, build in scoped milestones, and verify the result with practical checks.',
  },
  {
    question: 'Are you available for freelance or contract work?',
    answer:
      'Yes. I am available for frontend engineering, React and Next.js development, performance work, and product-focused implementation support.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(1)

  return (
    <section id='faq' className='w-full 3xl:max-w-7xl'>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(createFaqPageJsonLd(faqs)),
        }}
      />

      <div className='mx-auto flex max-w-5xl flex-col gap-8'>
        <div className='mx-auto flex max-w-3xl flex-col gap-4 text-center'>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className='text-3xl font-bold leading-tight text-white md:text-4xl'
          >
            Questions clients usually ask
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className='text-sm leading-relaxed text-gray-300 md:text-base'
          >
            A quick view of how I approach frontend engineering, performance,
            SEO, and project delivery.
          </motion.p>
        </div>

        <div className='mx-auto flex w-full max-w-3xl flex-col gap-3'>
          {faqs.map((faq, index) => (
            <motion.div
              key={faq.question}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.06 }}
              viewport={{ once: true }}
              className={`overflow-hidden rounded-3xl border transition-colors ${
                openIndex === index
                  ? 'border-primary/70 bg-dark-accent/70'
                  : 'border-white/5 bg-white/5 hover:border-blue-500/30'
              }`}
            >
              <button
                type='button'
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
                onClick={() =>
                  setOpenIndex((current) => (current === index ? -1 : index))
                }
                className='flex w-full items-center gap-4 p-4 text-left sm:p-5'
              >
                <span className='flex size-7 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 text-xs font-medium text-gray-300'>
                  {index + 1}
                </span>
                <span className='grow text-sm font-medium text-white sm:text-base'>
                  {faq.question}
                </span>
                <span
                  aria-hidden='true'
                  className={`flex size-9 shrink-0 items-center justify-center rounded-full transition-colors ${
                    openIndex === index
                      ? 'border border-primary/40 bg-white text-gray-950'
                      : 'bg-gray-950 text-white'
                  }`}
                >
                  {openIndex === index ? (
                    <Minus className='size-4' />
                  ) : (
                    <Plus className='size-4' />
                  )}
                </span>
              </button>

              {openIndex === index && (
                <motion.div
                  id={`faq-answer-${index}`}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25 }}
                  className='px-4 pb-5 sm:px-5'
                >
                  <p className='max-w-2xl pl-11 text-sm leading-relaxed text-gray-300 sm:pl-11'>
                    {faq.answer}
                  </p>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
