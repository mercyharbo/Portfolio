'use client'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { ArrowUpRight, Globe, MapPin, Tag } from 'lucide-react'
import Link from 'next/link'

interface Project {
  id: number
  title: string
  description: string
  website: string
  image: string
  location: string
  categories: string[]
  tech_stack: string[]
  notes: string
}

interface ProjectDetailsDialogProps {
  project: Project | null
  isOpen: boolean
  onClose: () => void
}

export function ProjectDetailsDialog({
  project,
  isOpen,
  onClose,
}: ProjectDetailsDialogProps) {
  if (!project) return null

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className='lg:max-w-3xl md:max-w-3xl h-fit max-h-[60dvh] overflow-auto scrollbar-hide bg-dark-accent text-white'>
        <div className='p-6 md:p-8 space-y-6'>
          <DialogHeader className='space-y-4'>
            <div className='flex flex-wrap gap-2'>
              {project.categories.map((category) => (
                <Badge
                  key={category}
                  variant='secondary'
                  className='bg-primary/10 text-white py-2 h-8 border-primary/20'
                >
                  <Tag className='size-3 mr-1' />
                  {category}
                </Badge>
              ))}
            </div>
            <DialogTitle className='text-base md:text-2xl lg:text-lg font-bold'>
              {project.title}
            </DialogTitle>
          </DialogHeader>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            <div className='md:col-span-2 space-y-6'>
              <div className='space-y-3'>
                <h4 className='text-sm font-medium md:text-base lg:text-sm text-gray-300'>
                  About Project
                </h4>
                <p className='text-gray-300 leading-relaxed md:text-base lg:text-sm text-sm'>
                  {project.description}
                </p>
              </div>

              {project.notes && (
                <div className='p-4 rounded-xl bg-white/5 border border-white/10 space-y-2'>
                  <h4 className='text-sm font-semibold text-primary uppercase tracking-wider'>
                    Key Focus
                  </h4>
                  <p className='text-sm text-gray-400 italic'>
                    "{project.notes}"
                  </p>
                </div>
              )}
            </div>

            <div className='space-y-6'>
              <div className='space-y-3'>
                <h4 className='text-sm font-semibold text-gray-400 uppercase tracking-wider'>
                  Tech Stack
                </h4>
                <div className='flex flex-wrap gap-2'>
                  {project.tech_stack.map((tech) => (
                    <Badge
                      key={tech}
                      variant='outline'
                      className='border-white/10 bg-white/5 text-gray-300'
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className='space-y-4 pt-4 border-t border-white/10'>
                <div className='flex items-center gap-3 text-sm text-gray-400'>
                  <MapPin className='size-4 text-primary' />
                  <span>{project.location}</span>
                </div>
                {project.website && (
                  <div className='flex items-center gap-3 text-sm text-gray-400'>
                    <Globe className='size-4 text-primary' />
                    <Link
                      href={project.website}
                      target='_blank'
                      className='hover:text-primary transition-colors'
                    >
                      {new URL(project.website).hostname}
                    </Link>
                  </div>
                )}
              </div>

              {project.website && (
                <Button
                  asChild
                  size={'lg'}
                  className='w-full bg-primary hover:bg-primary/90 text-white group'
                >
                  <Link
                    href={project.website}
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    Visit Live Site
                    <ArrowUpRight className='ml-2 size-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1' />
                  </Link>
                </Button>
              )}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
