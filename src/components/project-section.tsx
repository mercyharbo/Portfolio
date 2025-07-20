'use client'

import projects from '@/data/projects.json'
import { motion } from 'framer-motion'
import { HiOutlineExternalLink, HiOutlineLocationMarker } from 'react-icons/hi'
import {
  SiNextdotjs,
  SiReact,
  SiRedux,
  SiTailwindcss,
  SiTypescript,
} from 'react-icons/si'
import { TbBrandVercel } from 'react-icons/tb'

const techIcons: { [key: string]: React.ComponentType<{ className?: string }> } = {
  'Next.js': SiNextdotjs,
  React: SiReact,
  'Tailwind CSS': SiTailwindcss,
  TypeScript: SiTypescript,
  'Redux Toolkit': SiRedux,
  Vercel: TbBrandVercel,
}

const categoryColors: { [key: string]: string } = {
  Construction:
    'bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300',
  Infrastructure:
    'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300',
  'Project Management':
    'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300',
  'Content Management System':
    'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300',
  'Blogging Platform':
    'bg-indigo-100 text-indigo-800 dark:bg-indigo-900/30 dark:text-indigo-300',
  'Web Application':
    'bg-cyan-100 text-cyan-800 dark:bg-cyan-900/30 dark:text-cyan-300',
  Beauty: 'bg-pink-100 text-pink-800 dark:bg-pink-900/30 dark:text-pink-300',
  Wellness:
    'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-300',
  'Booking Platform':
    'bg-violet-100 text-violet-800 dark:bg-violet-900/30 dark:text-violet-300',
  'Business Management':
    'bg-slate-100 text-slate-800 dark:bg-slate-900/30 dark:text-slate-300',
  'Creative Writing':
    'bg-rose-100 text-rose-800 dark:bg-rose-900/30 dark:text-rose-300',
  Blogging:
    'bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300',
  Entertainment: 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300',
  Technology:
    'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300',
  Anime:
    'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300',
}

export default function ProjectSection({
  addToRefs,
}: {
  addToRefs: (element: HTMLElement | null) => void
}) {
  const truncateDescription = (description: string, maxLength = 150) => {
    if (description.length <= maxLength) return description
    return description.substring(0, maxLength).trim() + '...'
  }

  return (
    <section id='works' className='flex flex-col gap-12 w-full'>
      <div className='text-center space-y-4'>
        <motion.h2
          ref={addToRefs}
          className='text-4xl lg:text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent'
        >
          Featured Projects
        </motion.h2>
        <motion.p
          ref={addToRefs}
          className='text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto'
        >
          A showcase of real-world projects I&apos;ve built, from construction
          websites to content management platforms.
        </motion.p>
      </div>

      <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            ref={addToRefs}
            className='group relative p-8 rounded-2xl bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 shadow-lg hover:shadow-2xl border border-gray-200/50 dark:border-gray-700/50'
            whileHover={{ y: -8, scale: 1.02 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            {/* Gradient overlay on hover */}
            <div className='absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500' />

            <div className='relative z-10 space-y-6'>
              <div className='space-y-3'>
                <div className='flex items-start justify-between gap-4'>
                  <h3 className='text-2xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300'>
                    {project.title}
                  </h3>
                  {project.year_founded && (
                    <span className='px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-sm font-medium rounded-full'>
                      {project.year_founded}
                    </span>
                  )}
                </div>

                <div className='flex items-center gap-2 text-gray-600 dark:text-gray-400'>
                  <HiOutlineLocationMarker className='text-lg' />
                  <span className='text-sm font-medium'>
                    {project.location}
                  </span>
                </div>
              </div>

              <p className='text-gray-700 dark:text-gray-300 leading-relaxed'>
                {truncateDescription(project.description)}
              </p>

              <div className='space-y-3'>
                <h4 className='text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wide'>
                  Categories
                </h4>
                <div className='flex flex-wrap gap-2'>
                  {project.categories.map((category, idx) => (
                    <span
                      key={idx}
                      className={`px-3 py-1 text-xs font-medium rounded-full ${
                        categoryColors[category] ||
                        'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300'
                      }`}
                    >
                      {category}
                    </span>
                  ))}
                </div>
              </div>

              <div className='space-y-3'>
                <h4 className='text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wide'>
                  Tech Stack
                </h4>
                <div className='flex flex-wrap gap-3'>
                  {project.tech_stack.map((tech, idx) => {
                    const IconComponent = techIcons[tech]
                    return (
                      <div
                        key={idx}
                        className='flex items-center gap-2 px-3 py-2 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-200'
                      >
                        {IconComponent && <IconComponent className='text-lg' />}
                        <span className='text-sm font-medium text-gray-700 dark:text-gray-300'>
                          {tech}
                        </span>
                      </div>
                    )
                  })}
                </div>
              </div>

              {project.notes && (
                <div className='p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border-l-4 border-blue-500'>
                  <p className='text-sm text-blue-800 dark:text-blue-300 italic'>
                    {project.notes}
                  </p>
                </div>
              )}

              <div className='pt-4'>
                <motion.a
                  href={project.website}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 group/btn'
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>Visit Website</span>
                  <HiOutlineExternalLink className='text-lg group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform duration-200' />
                </motion.a>
              </div>
            </div>

            {/* Decorative elements */}
            <div className='absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500' />
            <div className='absolute bottom-4 left-4 w-16 h-16 bg-gradient-to-br from-purple-400/10 to-pink-400/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500' />
          </motion.div>
        ))}
      </div>

      <motion.div
        ref={addToRefs}
        className='text-center pt-8'
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <p className='text-gray-600 dark:text-gray-400 mb-6'>
          Interested in working together on your next project?
        </p>
        <motion.a
          href='#contact'
          className='inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold text-lg shadow-lg hover:shadow-xl hover:shadow-blue-500/25 transition-all duration-300'
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Let&apos;s Build Something Amazing
        </motion.a>
      </motion.div>
    </section>
  )
}
