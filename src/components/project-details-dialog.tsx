'use client'

import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { ArrowUpRight } from 'lucide-react'
import { unavailableLinkLabel, type Project } from '@/lib/projects'
import ProjectGallery from './project-media'

interface ProjectDetailsDialogProps {
  project: Project | null
  isOpen: boolean
  onClose: () => void
}

export function ProjectDetailsDialog({ project, isOpen, onClose }: ProjectDetailsDialogProps) {
  if (!project) return null

  return (
    <Dialog open={isOpen} onOpenChange={open => { if (!open) onClose() }}>
      <DialogContent className='flex max-h-[85svh] flex-col gap-6 overflow-y-auto rounded-none bg-dark p-6 text-white [&>*]:shrink-0 md:max-w-3xl md:p-10'>
        <DialogHeader className='gap-4'>
          <p className='text-xs text-gray-400'>{project.categories.join(' / ')}</p>
          <DialogTitle className='pr-8 text-2xl leading-tight font-medium md:text-3xl'>{project.title}</DialogTitle>
          <DialogDescription className='text-sm leading-relaxed text-gray-400'>{project.description}</DialogDescription>
        </DialogHeader>
        <div className='bg-white p-4 text-black sm:p-6'><ProjectGallery project={project} /></div>
        <div className='grid gap-8 border-t border-white/10 py-6 md:grid-cols-3'>
          <div className='flex flex-col gap-4 md:col-span-2'>
            <h3 className='text-base font-medium'>My contribution</h3>
            <p className='text-sm leading-relaxed text-gray-400'>{project.notes}</p>
          </div>
          <div className='flex flex-col gap-4'>
            <h3 className='text-base font-medium'>Technologies</h3>
            <ul className='flex flex-wrap gap-x-3 gap-y-2 text-xs text-gray-400'>
              {project.tech_stack.map(tech => <li key={tech}>{tech}</li>)}
            </ul>
          </div>
        </div>
        <div className='flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-5 text-sm'>
          <span className='text-gray-400'>{project.location}</span>
          {project.website ? (
            <a href={project.website} target='_blank' rel='noopener noreferrer' className='flex min-h-11 items-center gap-3 hover:text-red-300'>
              Visit live website<ArrowUpRight aria-hidden='true' className='size-4' />
            </a>
          ) : <span className='text-xs text-gray-400'>{unavailableLinkLabel}</span>}
        </div>
      </DialogContent>
    </Dialog>
  )
}
