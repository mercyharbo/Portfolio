import Link from 'next/link'
import { useEffect, useRef } from 'react'
import { BsLink45Deg, BsX } from 'react-icons/bs'

interface ProjectModalProps {
  project: {
    id: number
    title: string
    description: string
    website: string
    location: string
    categories: string[]
    tech_stack: string[]
    notes: string
  }
  isOpen: boolean
  onClose: () => void
}

export default function ProjectModal({
  project,
  isOpen,
  onClose,
}: ProjectModalProps) {
  const modalRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }

    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
      document.body.style.overflow = 'hidden'
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'unset'
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50'>
      <div
        ref={modalRef}
        className='relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-white dark:bg-[#1a1a1a] rounded-lg shadow-xl'
      >
        <div className='sticky top-0 flex justify-end p-4 border-b border-gray-200 bg-white dark:bg-dark z-20 '>
          <button
            onClick={onClose}
            className='p-2 rounded-full hover:bg-gray-100 transition-colors text-black dark:text-white dark:hover:bg-gray-800'
          >
            <BsX className='text-2xl' />
          </button>
        </div>

        <div className='p-6 space-y-6'>
          <div className='space-y-4'>
            <h2 className='text-3xl font-bold text-gray-900 dark:text-gray-100'>
              {project.title}
            </h2>
            <p className='text-gray-700 dark:text-gray-300'>
              {project.description}
            </p>
          </div>

          <div className='space-y-4'>
            <div>
              <h3 className='text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2'>
                Location
              </h3>
              <p className='text-gray-700 dark:text-gray-300'>
                {project.location}
              </p>
            </div>

            <div>
              <h3 className='text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2'>
                Categories
              </h3>
              <div className='flex flex-wrap gap-2'>
                {project.categories.map((category, index) => (
                  <span
                    key={index}
                    className='px-3 py-1 text-sm rounded-full bg-gray-100 dark:bg-gray-800 
                    text-gray-800 dark:text-gray-200'
                  >
                    {category}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className='text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2'>
                Technologies
              </h3>
              <div className='flex flex-wrap gap-2'>
                {project.tech_stack.map((tech, index) => (
                  <span
                    key={index}
                    className='px-3 py-1 text-sm rounded-full bg-gray-100 dark:bg-gray-800 
                    text-gray-800 dark:text-gray-200'
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {project.notes && (
              <div>
                <h3 className='text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2'>
                  Additional Notes
                </h3>
                <p className='text-gray-700 dark:text-gray-300'>
                  {project.notes}
                </p>
              </div>
            )}
          </div>

          <div className='pt-6 border-t border-gray-200 dark:border-gray-800'>
            <Link
              href={project.website}
              target='_blank'
              className='inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-white 
              bg-gray-900 dark:bg-gray-100 dark:text-gray-900 rounded-lg hover:bg-black 
              dark:hover:bg-white transition-colors duration-300'
            >
              <BsLink45Deg className='text-xl' />
              <span>Visit Website</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
