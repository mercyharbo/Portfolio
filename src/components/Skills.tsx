'use client'

import { motion } from 'framer-motion'

const skillGroups = [
  {
    title: 'Frontend Engineering',
    skills: [
      'React',
      'Next.js',
      'TypeScript',
      'JavaScript',
      'HTML',
      'CSS',
      'Responsive Design',
      'Accessibility',
    ],
  },
  {
    title: 'UI Engineering',
    skills: [
      'Tailwind CSS',
      'Shadcn UI',
      'Design Systems',
      'Component Architecture',
      'Reusable UI',
      'Modern CSS',
    ],
  },
  {
    title: 'Architecture',
    skills: [
      'Scalable Frontend',
      'Feature Structure',
      'Clean Code',
      'Reusable Components',
      'Maintainable Codebases',
    ],
  },
  {
    title: 'State and Forms',
    skills: ['Zustand', 'Redux Toolkit', 'React Context', 'React Hook Form', 'Zod'],
  },
  {
    title: 'API and Auth',
    skills: [
      'REST APIs',
      'Axios',
      'Fetch API',
      'JWT Auth',
      'OAuth',
      'RBAC',
      'Secure Client Auth',
    ],
  },
  {
    title: 'Performance and SEO',
    skills: [
      'Core Web Vitals',
      'Technical SEO',
      'Metadata',
      'Open Graph',
      'Structured Data',
      'Image Optimization',
      'Lazy Loading',
    ],
  },
  {
    title: 'Workflow',
    skills: ['Git', 'GitHub', 'Vercel', 'Contentful', 'Figma', 'VS Code', 'pnpm', 'npm'],
  },
]

export default function Skills() {
  return (
    <section id='skills' className='w-full 3xl:max-w-7xl'>
      <div className='flex flex-col gap-8'>
        <div className='flex flex-col gap-3 text-center'>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className='text-3xl font-bold text-white md:text-4xl'
          >
            Capabilities behind the work
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className='mx-auto max-w-3xl text-sm leading-relaxed text-gray-300 md:text-base'
          >
            A practical mix of frontend craft, architecture, performance, SEO,
            and workflow skills I use to turn product ideas into usable web
            experiences.
          </motion.p>
        </div>

        <div className='grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3'>
          {skillGroups.map((group, index) => (
            <motion.article
              key={group.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.06 }}
              viewport={{ once: true }}
              className='rounded-2xl border border-white/5 bg-dark-accent/40 p-6 transition-colors hover:border-blue-500/30'
            >
              <div className='flex flex-col gap-5'>
                <div className='flex items-center justify-between gap-4'>
                  <h3 className='text-base font-semibold text-white'>
                    {group.title}
                  </h3>
                  <span className='text-xs font-medium text-primary'>
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>

                <div className='flex flex-wrap gap-2'>
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className='rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-gray-300'
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
