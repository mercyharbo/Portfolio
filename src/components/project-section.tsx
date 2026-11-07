'use client'

import { featuredProjects, type Project } from '@/lib/projects'
import { ArrowUpRight } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'
import { SectionHeading, SectionLabel } from './editorial'
import { ProjectDetailsDialog } from './project-details-dialog'
import ProjectDetailsAction from './project-details-action'
import { ProjectPreview } from './project-media'

const featured = featuredProjects.map(project => ({
  project, name: project.name,
  type: project.title.split(' - ')[1],
}))

export default function ProjectSection() {
  const [selected, setSelected] = useState<Project | null>(null)
  const [open, setOpen] = useState(false)

  return (
    <section id='works' aria-labelledby='work-heading' className='bg-white text-black'>
      <div className='editorial-container editorial-grid grid gap-8 py-20 md:grid-cols-4 md:gap-0 md:py-28'>
        <SectionLabel number='02'>Selected work</SectionLabel>
        <div className='flex flex-col gap-8 md:col-span-2 md:col-start-3'>
          <SectionHeading id='work-heading' text='Built for real use.' />
          <p className='max-w-md text-base leading-relaxed text-gray-600'>A closer look at the products, systems, and business experiences I’ve helped bring to life.</p>
          <Link href='/work' className='flex min-h-11 items-center gap-3 self-start text-sm hover:text-red-700'>View all work<ArrowUpRight aria-hidden='true' className='size-4' /></Link>
        </div>
      </div>

      {featured.map(({ project, name, type }, index) => (
        <article key={project.id} className={`project-panel relative isolate flex flex-col justify-between overflow-hidden ${index % 2 === 0 ? 'bg-gray-100 text-black' : 'bg-dark text-white'}`}>
          <div className='editorial-container grid w-full grid-cols-2 gap-6 py-8 text-xs md:grid-cols-4 md:py-10'>
            <p className='flex items-center gap-2'><span className='size-1.5 bg-red-600' />0{index + 1}</p>
            <p className='hidden md:block'>{project.role ?? 'Frontend development'}</p>
            <p>{name}</p>
            <p className='hidden md:block'>{type}</p>
          </div>
          <div className='editorial-container py-4'>
            <ProjectPreview media={project.cover} sizes='(max-width: 767px) 100vw, 90vw' />
            {project.galleryNote ? <p className='border-t border-gray-300 py-3 text-xs leading-relaxed text-gray-600'>Interface previews using fictional demo data.</p> : null}
          </div>
          <div className='editorial-container grid w-full grid-cols-1 items-end gap-6 py-8 md:grid-cols-4 md:gap-0 md:py-10'>
            <ProjectDetailsAction project={project} variant='panel' onExplore={() => { setSelected(project); setOpen(true) }} />
            <div className='project-caption flex flex-col gap-2 md:col-span-2 md:col-start-3 md:px-8'>
              <h3 className='text-3xl font-medium md:text-4xl'>{name}</h3>
              <p className='text-sm'>{type}</p>
            </div>
          </div>
        </article>
      ))}
      <div className='editorial-container flex flex-col justify-between gap-5 py-8 text-sm sm:flex-row sm:items-center'>
        <p className='text-gray-600'>More engineering work: job-search tooling and workforce management.</p>
        <div className='flex flex-wrap gap-x-6 gap-y-2'>
          <Link href='/work#openrolehq' className='flex min-h-11 items-center gap-3 hover:text-red-700'>OpenRoleHQ<ArrowUpRight className='size-4' aria-hidden='true' /></Link>
          <Link href='/work#hris' className='flex min-h-11 items-center gap-3 hover:text-red-700'>HRIS<ArrowUpRight className='size-4' aria-hidden='true' /></Link>
        </div>
      </div>
      <ProjectDetailsDialog project={selected} isOpen={open} onClose={() => setOpen(false)} />
    </section>
  )
}
