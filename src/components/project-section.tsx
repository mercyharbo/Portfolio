'use client'

import { Card, CardContent, CardFooter } from '@/components/ui/card'
import projects from '@/data/projects.json'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function ProjectSection({
  addToRefs,
}: {
  addToRefs: (element: HTMLElement | null) => void
}) {
  return (
    <section id='works' className='flex flex-col gap-16 w-full px-4 lg:px-20'>
      {/* Section Header */}
      <div className='text-center space-y-4'>
        <motion.h2
          ref={addToRefs}
          className='text-3xl md:text-5xl font-bold text-white'
        >
          Featured Projects
        </motion.h2>
      </div>

      {/* Projects Grid */}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-8'>
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            ref={addToRefs}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -10 }}
            className='h-full'
          >
            <Card className='group relative h-full bg-dark-accent transition-all duration-500'>
              {/* Image Container */}
              <div className='relative aspect-video w-full overflow-hidden p-4 pb-0'>
                <div className='relative h-full w-full rounded-2xl overflow-hidden bg-gray-400/20'>
                  <Image
                    src={`/img${(index % 2) + 1}.JPEG`} // Placeholder pattern
                    alt={project.title}
                    fill
                    className='object-cover opacity-60 group-hover/card:opacity-100 group-hover/card:scale-105 transition-all duration-700'
                  />
                </div>
              </div>

              {/* Content Container */}
              <CardContent className='flex flex-col gap-5 grow'>
                {/* Tech Stack Tags */}
                <div className='flex flex-wrap gap-2'>
                  {project.tech_stack.slice(0, 4).map((tech, idx) => (
                    <span
                      key={idx}
                      className='px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs font-medium text-gray-400 group-hover/card:text-primary transition-colors'
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Title & Description */}
                <div className='space-y-3'>
                  <h3 className='text-base font-semibold text-white group-hover/card:text-primary transition-colors'>
                    {project.title}
                  </h3>
                  <p className='text-sm text-gray-300 leading-relaxed line-clamp-3 transition-colors'>
                    {project.description}
                  </p>
                </div>
              </CardContent>
              <CardFooter className='bg-transparent border-none'>
                {/* Visit Link */}
                <Link
                  href={project.website}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='inline-flex items-center gap-2 text-sm text-primary group/link'
                >
                  <ArrowUpRight className='size-5 transition-transform duration-300 group-hover/link:translate-x-1 group-hover/link:-translate-y-1' />
                  <span className='group-hover/link:underline underline-offset-4 decoration-2'>
                    Visit website
                  </span>
                </Link>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
