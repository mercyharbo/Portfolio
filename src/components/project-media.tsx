import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'
import type { Project, ProjectMedia } from '@/lib/projects'

export function ProjectPreview({ media, sizes, priority = false }: { media: ProjectMedia; sizes: string; priority?: boolean }) {
  return (
    <div className='flex aspect-video items-center justify-center overflow-hidden bg-gray-100'>
      <Image src={media.src} alt={media.alt} width={media.width} height={media.height} sizes={sizes} priority={priority} className='h-auto max-h-full w-auto max-w-full object-contain' />
    </div>
  )
}

export function ProjectFigure({ media, priority = false }: { media: ProjectMedia; priority?: boolean }) {
  const portrait = media.height > media.width
  return (
    <figure className={`flex min-w-0 flex-col gap-4 ${portrait ? 'w-full max-w-sm justify-self-center' : 'w-full'}`}>
      <a href={media.original} target='_blank' rel='noopener noreferrer' aria-label={`Open full-resolution image: ${media.alt}`} className='block border border-gray-200 bg-gray-100'>
        <Image src={media.src} alt={media.alt} width={media.width} height={media.height} priority={priority} sizes={portrait ? '(max-width: 767px) 90vw, 384px' : '(max-width: 767px) 100vw, 1280px'} className='mx-auto h-auto max-w-full' />
      </a>
      <figcaption className='flex flex-col gap-2 text-sm leading-relaxed text-gray-600'>
        <p>{media.caption}</p>
        <a href={media.original} target='_blank' rel='noopener noreferrer' className='flex min-h-11 items-center gap-2 self-start text-xs text-black hover:text-red-700'>View full resolution<ArrowUpRight aria-hidden='true' className='size-3' /><span className='sr-only'>: {media.alt}</span></a>
      </figcaption>
    </figure>
  )
}

export default function ProjectGallery({ project, includeCover = true }: { project: Project; includeCover?: boolean }) {
  const images = project.gallery?.length ? project.gallery : [project.cover]
  const media = includeCover ? images : images.slice(1)
  if (!media.length) return null
  return (
    <div className='flex flex-col gap-8'>
      {project.galleryNote ? <p className='border-l-2 border-red-600 pl-4 text-sm leading-relaxed text-gray-600'>{project.galleryNote}</p> : null}
      <div className='grid items-start gap-x-10 gap-y-12 md:grid-cols-2'>
        {media.map(image => <div key={image.src} className={image.width >= image.height ? 'md:col-span-2' : 'flex justify-center'}><ProjectFigure media={image} /></div>)}
      </div>
    </div>
  )
}
