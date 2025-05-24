import projectJSON from '@/data/projects.json'
import Link from 'next/link'
import { useState } from 'react'
import { BsLink45Deg } from 'react-icons/bs'
import ProjectModal from './ProjectModal'

export default function ProjectSection({
  addToRefs,
}: {
  addToRefs: (element: HTMLElement | null) => void
}) {
  const [selectedProject, setSelectedProject] = useState<
    (typeof projectJSON)[0] | null
  >(null)

  return (
    <section id='works' className='section flex flex-col gap-8 w-full'>
      <div className='flex flex-col gap-5'>
        <h1
          ref={addToRefs}
          className='section-heading text-3xl lg:text-5xl font-bold capitalize'
        >
          Work
        </h1>
        <p
          ref={addToRefs}
          className='section-content max-w-2xl'
        >
          Here are some of the projects I&apos;ve worked on.
        </p>
      </div>

      <div className='section-content grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full'>
        {projectJSON.map((item) => (
          <div
            key={item.id}
            ref={addToRefs}
            onClick={() => setSelectedProject(item)}
            className='group relative overflow-hidden bg-white dark:bg-[#1a1a1a] text-black dark:text-white 
            border-[1px] border-gray-200 dark:border-gray-800 rounded-lg hover:border-gray-400 dark:hover:border-gray-600 hover:shadow-lg h-full cursor-pointer'
          >
            <div className='flex flex-col justify-between p-6 h-full'>
              <div className='flex flex-col gap-5'>
                <div className='flex justify-between items-start'>
                  <h1 className='text-2xl font-bold text-gray-900 dark:text-gray-100 group-hover:text-black dark:group-hover:text-white transition-colors duration-300'>
                    {item.title}
                  </h1>
                  <div className='h-8 w-8 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                    <BsLink45Deg className='text-xl ' />
                  </div>
                </div>

                <p className=' line-clamp-3'>
                  {item.description.substring(0, 200)}
                  {item.description.length > 200 ? '...' : ''}
                </p>

                <div className='flex flex-wrap gap-2 mt-auto'>
                  {item.tech_stack.map((tech: string, index: number) => (
                    <span
                      key={index}
                      className='px-3 py-1 text-sm rounded-full bg-gray-100 dark:bg-gray-800 
                      text-gray-800 dark:text-gray-200 transition-colors duration-300
                      group-hover:bg-gray-200 dark:group-hover:bg-gray-700'
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div
                className='mt-6 pt-4 border-t border-gray-100 dark:border-gray-800'
                onClick={(e) => e.stopPropagation()} // Prevent modal from opening when clicking the link
              >
                <Link
                  href={item.website}
                  target='_blank'
                  className='flex items-center gap-2 text-sm font-medium text-gray-900 dark:text-gray-100 
                  hover:text-black dark:hover:text-white transition-colors duration-300'
                >
                  <BsLink45Deg className='text-xl' />
                  <span>View Project</span>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          isOpen={true}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  )
}
