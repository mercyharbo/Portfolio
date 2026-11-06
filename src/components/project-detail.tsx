import type { ProjectStory } from '@/data/project-stories'
import type { Project } from '@/lib/projects'
import { ArrowDown, ArrowLeft, ArrowUpRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import CTA from './CTA'
import { SectionHeading, SectionLabel } from './editorial'
import HeroMotion from './hero-motion'
import HomeMotion from './home-motion'

export default function ProjectDetail({
  project,
  story,
}: {
  project: Project
  story: ProjectStory
}) {
  return (
    <>
      <section
        aria-labelledby='project-title'
        className='relative bg-dark text-white'
      >
        <HeroMotion />
        <div className='editorial-container flex flex-col gap-12 pb-14 pt-40 md:gap-16 md:pb-20 md:pt-48'>
          <Link
            href='/work'
            className='flex min-h-11 items-center gap-3 self-start text-sm text-gray-300 hover:text-white'
          >
            <ArrowLeft aria-hidden='true' className='size-4' />
            All work
          </Link>
          <div className='grid gap-10 md:grid-cols-3 md:items-end'>
            <div className='flex flex-col gap-6 md:col-span-2'>
              <div data-hero-reveal>
                <SectionLabel>{project.categories.join(' / ')}</SectionLabel>
              </div>
              <h1
                id='project-title'
                data-hero-reveal
                className='text-5xl leading-none font-medium sm:text-6xl lg:text-8xl'
              >
                {project.name}
              </h1>
              <p
                data-hero-reveal
                className='max-w-xl text-lg leading-relaxed text-gray-300'
              >
                {story.introduction}
              </p>
            </div>
            <dl
              data-hero-reveal
              className='flex flex-col gap-5 border-t border-white/15 pt-6 text-sm'
            >
              <div className='flex flex-col gap-2'>
                <dt className='text-xs text-gray-400'>My role</dt>
                <dd>{story.role}</dd>
              </div>
              <div className='flex flex-col gap-2'>
                <dt className='text-xs text-gray-400'>Scope</dt>
                <dd className='leading-relaxed'>{story.scope}</dd>
              </div>
              <div className='flex flex-col gap-2'>
                <dt className='text-xs text-gray-400'>Engagement</dt>
                <dd>{project.location}</dd>
              </div>
            </dl>
          </div>
          <div
            data-hero-reveal
            className='flex flex-wrap items-center justify-between gap-5 border-t border-white/15 pt-6'
          >
            <a
              href='#project-story'
              className='flex min-h-12 items-center gap-3 text-sm hover:text-red-300'
            >
              Explore the work
              <ArrowDown aria-hidden='true' className='size-4' />
            </a>
            {project.website ? (
              <a
                href={project.website}
                target='_blank'
                rel='noopener noreferrer'
                className='flex min-h-12 items-center justify-between gap-8 bg-red-600 px-5 text-sm text-white hover:bg-red-700'
              >
                Visit live website
                <ArrowUpRight aria-hidden='true' className='size-4' />
              </a>
            ) : null}
          </div>
        </div>
      </section>

      <figure className='bg-gray-100 text-black'>
        <div className='relative h-80 sm:h-[32rem] lg:h-[44rem]'>
          <Image
            src={project.image}
            alt={`Interface preview of ${project.name}`}
            fill
            priority
            sizes='100vw'
            className='object-contain'
          />
        </div>
        <figcaption className='editorial-container border-t border-gray-200 py-5 text-xs text-gray-600'>
          {story.screenshotCaption}
        </figcaption>
      </figure>

      <HomeMotion>
        <section
          id='project-story'
          aria-labelledby='problem-title'
          className='editorial-light bg-white text-black'
        >
          <div className='editorial-container editorial-grid grid gap-10 py-20 md:grid-cols-4 md:gap-0 md:py-28'>
            <SectionLabel number='01'>The brief</SectionLabel>
            <div className='flex flex-col gap-8 md:col-span-2 md:col-start-3'>
              <SectionHeading
                id='problem-title'
                text={story.problemTitle}
              />
              <p className='text-base leading-relaxed text-gray-600'>
                {story.problem}
              </p>
              <div className='flex flex-col gap-4 border-l-2 border-red-600 pl-6'>
                <h3 className='text-base font-medium'>My contribution</h3>
                <p className='text-sm leading-relaxed text-gray-600'>
                  {project.notes}
                </p>
              </div>
            </div>
          </div>
        </section>

        <section
          aria-labelledby='focus-title'
          className='editorial-dark bg-dark text-white'
        >
          <div className='editorial-container editorial-grid grid gap-12 py-20 md:grid-cols-4 md:gap-0 md:py-28'>
            <div className='flex flex-col gap-8 self-start md:sticky md:top-8 md:col-span-2 md:pr-16'>
              <SectionLabel number='02'>Engineering focus</SectionLabel>
              <SectionHeading
                id='focus-title'
                text={story.focusTitle}
              />
            </div>
            <div className='flex flex-col md:col-span-2'>
              {story.focus.map((item, index) => (
                <div
                  key={item.title}
                  data-enter
                  className='flex flex-col gap-5 border-t border-white/15 py-8'
                >
                  <p className='text-xs text-gray-400'>0{index + 1}</p>
                  <h3 className='text-2xl font-medium'>{item.title}</h3>
                  <p className='text-sm leading-relaxed text-gray-400'>
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          aria-labelledby='delivery-title'
          className='editorial-light bg-white text-black'
        >
          <div className='editorial-container editorial-grid grid gap-12 py-20 md:grid-cols-4 md:gap-0 md:py-28'>
            <div className='flex flex-col gap-8 md:col-span-2 md:pr-16'>
              <SectionLabel number='03'>Delivered capabilities</SectionLabel>
              <SectionHeading
                id='delivery-title'
                text={story.deliveryTitle}
              />
            </div>
            <div className='flex flex-col gap-10 md:col-span-2'>
              <ul className='flex flex-col gap-6'>
                {story.delivered.map((item) => (
                  <li
                    key={item}
                    className='flex gap-4 border-t border-gray-200 pt-6 text-base leading-relaxed'
                  >
                    <span
                      aria-hidden='true'
                      className='relative top-2 size-1.5 shrink-0 bg-red-600'
                    />
                    {item}
                  </li>
                ))}
              </ul>
              <div className='flex flex-col gap-5'>
                <h3 className='text-sm font-medium'>Project technologies</h3>
                <ul className='flex flex-wrap gap-x-5 gap-y-3 text-xs text-gray-600'>
                  {project.tech_stack.map((tech) => (
                    <li key={tech}>{tech}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
        <div className='border-t border-gray-200 bg-white text-black'>
          <div className='editorial-container flex flex-wrap items-center justify-between gap-6 py-8'>
            <Link
              href='/work'
              className='flex min-h-12 items-center gap-3 text-sm hover:text-red-700'
            >
              <ArrowLeft aria-hidden='true' className='size-4' />
              Back to all work
            </Link>
            <a
              href='#contact'
              className='flex min-h-12 items-center gap-3 text-sm hover:text-red-700'
            >
              Discuss a similar project
              <ArrowUpRight aria-hidden='true' className='size-4' />
            </a>
          </div>
        </div>
        <CTA />
      </HomeMotion>
    </>
  )
}
