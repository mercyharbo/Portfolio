import { ProfileCard, SectionLabel } from './editorial'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'

const introduction = 'I’m Afolabi Ridwan Damilare. I build thoughtful interfaces for products with real complexity — turning business goals, design decisions, and APIs into experiences people can actually use.'
const facts = [
  { value: '4+', title: 'Years of experience', text: 'Building for the web across product teams and independent projects.' },
  { value: 'React', title: 'Core expertise', text: 'React, Next.js, and TypeScript — from reusable UI to complete workflows.' },
  { value: 'Product', title: 'Engineering mindset', text: 'SaaS dashboards, commerce, and interfaces that support real operations.' },
  { value: 'Delivery', title: 'From idea to interface', text: 'Architecture, integration, accessibility, performance, and the final polish.' },
]

export default function About() {
  return (
    <section id='about' aria-label='About and expertise' className='editorial-light bg-white text-black'>
      <div className='editorial-container editorial-grid grid gap-12 py-20 md:grid-cols-4 md:gap-0 md:py-28'>
        <aside className='hidden self-start md:sticky md:top-8 md:col-span-1 md:block'>
          <ProfileCard />
        </aside>
        <div className='flex flex-col gap-12 md:col-span-2 md:col-start-3 md:gap-20'>
          <SectionLabel number='01'>The person behind the work</SectionLabel>
          <p data-reading aria-label={introduction} className='text-3xl leading-tight font-medium sm:text-4xl lg:text-5xl'>
            {introduction.split(' ').map((word, index) => <span key={index} data-word aria-hidden='true'>{word} </span>)}
          </p>
          <p className='max-w-lg text-base leading-relaxed text-gray-600'>
            I work closely with founders, designers, and product teams. My focus is a frontend that is clear to use, dependable in production, and straightforward for the next engineer to maintain.
          </p>
          <Link href='/about' className='flex min-h-11 items-center gap-3 self-start text-sm hover:text-red-700'>More about me<ArrowUpRight aria-hidden='true' className='size-4' /></Link>
          <div className='grid grid-cols-1 gap-0 sm:grid-cols-2'>
            {facts.map((fact, index) => (
              <div key={fact.title} data-enter className={`flex flex-col gap-5 border-t border-gray-200 p-6 lg:p-8 ${index % 2 === 1 ? 'sm:translate-y-12 sm:border-l' : ''}`}>
                <p className='text-xs text-gray-500'>{fact.title}</p>
                <p className='text-4xl font-medium lg:text-5xl'>{fact.value}</p>
                <p className='text-sm leading-relaxed text-gray-600'>{fact.text}</p>
              </div>
            ))}
          </div>
          <div className='max-w-sm self-start md:hidden'><ProfileCard /></div>
        </div>
      </div>
    </section>
  )
}
