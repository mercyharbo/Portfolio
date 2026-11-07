import Link from 'next/link'
import { ArrowDown, ArrowUpRight } from 'lucide-react'
import CTA from '@/components/CTA'
import WorkCollection from '@/components/work-collection'
import { SectionLabel } from '@/components/editorial'
import { createMetadata, siteUrl } from '@/lib/seo'
import { getProjectDetailHref, workProjects } from '@/lib/projects'

export const metadata = createMetadata({
  title: 'Work',
  description: 'Explore frontend engineering work by Afolabi Ridwan Damilare: SaaS products, enterprise dashboards, commerce, and business websites, with project contributions and available live links.',
  path: '/work',
})

export default function WorkPage() {
  const collection = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Frontend engineering projects by Codewithmercy',
    itemListElement: workProjects.map((project, index) => ({
      '@type': 'ListItem', position: index + 1, name: project.name,
      url: `${siteUrl}${getProjectDetailHref(project)}`,
    })),
  }

  return (
    <>
      <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(collection) }} />
      <section aria-labelledby='collection-title' className='bg-dark text-white'>
        <div className='editorial-container flex flex-col gap-12 pb-12 pt-40 md:gap-16 md:pb-16 md:pt-48'>
          <div className='flex items-center justify-between gap-5'>
            <SectionLabel>The work</SectionLabel>
            <Link href='/#home' className='flex min-h-11 items-center gap-2 text-xs text-gray-400 hover:text-white'>Back to home<ArrowUpRight aria-hidden='true' className='size-4' /></Link>
          </div>
          <div className='grid gap-8 md:grid-cols-3 md:items-end'>
            <h1 id='collection-title' className='text-5xl leading-none font-medium sm:text-6xl md:col-span-2 lg:text-7xl xl:text-8xl'>Selected work.<br /><span className='text-gray-400'>Real contributions.</span></h1>
            <div className='flex max-w-md flex-col gap-6 md:justify-self-end'>
              <p className='text-base leading-relaxed text-gray-300'>From complex product workflows to customer-facing websites. A collection of the interfaces I’ve helped build, and the engineering behind them.</p>
              <a href='#collection' className='flex min-h-11 items-center gap-3 self-start text-sm hover:text-red-300'>Explore {workProjects.length} projects<ArrowDown aria-hidden='true' className='size-4' /></a>
            </div>
          </div>
          <nav aria-label='Jump to a project' className='flex flex-wrap gap-x-8 gap-y-2 border-t border-white/15 pt-6'>
            {workProjects.map(project => <a key={project.slug} href={`#${project.slug}`} className='flex min-h-11 items-center gap-2 text-sm text-gray-300 hover:text-white'>{project.name}<ArrowDown aria-hidden='true' className='size-3' /></a>)}
          </nav>
        </div>
      </section>
      <WorkCollection projects={workProjects} />
      <CTA />
    </>
  )
}
