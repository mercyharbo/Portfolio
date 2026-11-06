'use client'

import { ArrowUpRight } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'
import { unavailableLinkLabel, type Project } from '@/lib/projects'
import { ProjectDetailsDialog } from './project-details-dialog'

export default function WorkCollection({ projects }: { projects: Project[] }) {
  const [selected, setSelected] = useState<Project | null>(null)
  const [open, setOpen] = useState(false)

  return (
    <>
      <section id='collection' aria-label='Project collection' className='bg-white text-black'>
        {projects.map((project, index) => (
          <article id={project.slug} key={project.slug} className='scroll-mt-8 border-b border-gray-200'>
            <div className='editorial-container grid gap-8 py-12 md:grid-cols-12 md:gap-10 md:py-20'>
              <div className='flex flex-col gap-5 md:col-span-7'>
                <div className='flex items-center justify-between gap-4 text-xs text-gray-500'>
                  <span className='flex items-center gap-2'><span aria-hidden='true' className='size-1.5 bg-red-600' />0{index + 1}</span>
                  <span>{project.categories.slice(0, 2).join(' / ')}</span>
                </div>
                <div className='relative aspect-[4/3] overflow-hidden bg-gray-100'>
                  <Image src={project.image} alt={`Interface preview of ${project.name}`} fill sizes='(max-width: 767px) 100vw, 60vw' className='object-contain' />
                </div>
              </div>
              <div className='flex flex-col justify-center gap-8 md:col-span-5'>
                <div className='flex flex-col gap-4'>
                  <h2 className='text-3xl leading-tight font-medium md:text-4xl lg:text-5xl'>{project.name}</h2>
                  <p className='text-sm leading-relaxed text-gray-600'>{project.description}</p>
                </div>
                <div className='flex flex-col gap-3 border-l-2 border-red-600 pl-5'>
                  <h3 className='text-sm font-medium'>My contribution</h3>
                  <p className='text-sm leading-relaxed text-gray-600'>{project.notes}</p>
                </div>
                <ul aria-label={`${project.name} technologies`} className='flex flex-wrap gap-x-4 gap-y-2 text-xs text-gray-600'>
                  {project.tech_stack.slice(0, 6).map(tech => <li key={tech}>{tech}</li>)}
                </ul>
                <div className='flex flex-col gap-4 border-t border-gray-200 pt-6'>
                  <div className='flex flex-wrap gap-3'>
                    <button type='button' onClick={() => { setSelected(project); setOpen(true) }} aria-label={`View details for ${project.name}`} className='flex min-h-12 items-center justify-between gap-6 border border-gray-300 px-5 text-sm transition-colors hover:border-black hover:bg-gray-100'>
                      Project details<ArrowUpRight aria-hidden='true' className='size-4' />
                    </button>
                    {project.website ? (
                      <a href={project.website} target='_blank' rel='noopener noreferrer' aria-label={`Visit ${project.name} live website`} className='flex min-h-12 items-center justify-between gap-6 bg-red-600 px-5 text-sm text-white transition-colors hover:bg-red-700'>
                        Live website<ArrowUpRight aria-hidden='true' className='size-4' />
                      </a>
                    ) : null}
                  </div>
                  {!project.website ? (
                    <div className='flex flex-col gap-1 text-xs text-gray-600'>
                      <p className='font-medium text-black'>{unavailableLinkLabel}</p>
                      <p>Explore the screenshots and my contribution in the project details.</p>
                    </div>
                  ) : null}
                </div>
              </div>
            </div>
          </article>
        ))}
      </section>
      <ProjectDetailsDialog project={selected} isOpen={open} onClose={() => setOpen(false)} />
    </>
  )
}
