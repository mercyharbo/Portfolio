'use client'

import { featuredProjects, workProjects, type Project } from '@/lib/projects'
import { ArrowUpRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { SectionHeading, SectionLabel } from './editorial'
import { ProjectDetailsDialog } from './project-details-dialog'

const featured = featuredProjects.map(project => ({
  project, name: project.name,
  type: project.title.split(' - ')[1], light: project.slug !== 'bukky-group',
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

      {featured.map(({ project, name, type, light }, index) => (
        <article key={project.id} className={`project-panel relative isolate flex flex-col justify-between overflow-hidden ${light ? 'bg-gray-100 text-black' : 'bg-black text-white'}`}>
          <div className='editorial-container grid w-full grid-cols-2 gap-6 py-8 text-xs md:grid-cols-4 md:py-10'>
            <p className='flex items-center gap-2'><span className='size-1.5 bg-red-600' />0{index + 1}</p>
            <p className='hidden md:block'>Frontend development</p>
            <p>{name}</p>
            <p className='hidden md:block'>{type}</p>
          </div>
          <div className='project-media relative w-full overflow-hidden'>
            <Image src={project.image} alt={`Interface preview for ${name}`} fill sizes='100vw' className='object-cover' />
          </div>
          <div className='editorial-container grid w-full grid-cols-1 items-end gap-6 py-8 md:grid-cols-4 md:gap-0 md:py-10'>
            <button type='button' onClick={() => { setSelected(project); setOpen(true) }} className='editorial-button group flex min-h-14 w-full items-center justify-between bg-black text-sm text-white md:col-span-1'>
              <span className='px-5'>Explore project</span><span className='flex min-h-14 w-14 shrink-0 items-center justify-center bg-red-600'><ArrowUpRight aria-hidden='true' className='size-5' /></span>
              <span className='sr-only'>: {name}</span>
            </button>
            <div className='project-caption flex flex-col gap-2 md:col-span-2 md:col-start-3 md:px-8'>
              <h3 className='text-3xl font-medium md:text-4xl'>{name}</h3>
              <p className='text-sm'>{type}</p>
            </div>
          </div>
        </article>
      ))}
      <div className='editorial-container flex flex-col justify-between gap-5 py-8 text-sm sm:flex-row sm:items-center'>
        <p className='text-gray-600'>Also in the collection: a location-aware restaurant ordering experience.</p>
        <button type='button' onClick={() => { setSelected(workProjects[3]); setOpen(true) }} className='flex min-h-11 shrink-0 items-center gap-3 hover:text-red-700'>Explore Leban Street<ArrowUpRight className='size-4' aria-hidden='true' /></button>
      </div>
      <ProjectDetailsDialog project={selected} isOpen={open} onClose={() => setOpen(false)} />
    </section>
  )
}
