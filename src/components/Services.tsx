import AnimatedAccordion from './animated-accordion'
import { ArrowUpRight } from 'lucide-react'
import { SectionHeading, SectionLabel } from './editorial'

const services = [
  { title: 'Frontend engineering', heading: 'A foundation that holds up.', description: 'React, Next.js, and TypeScript applications built around clear component boundaries, dependable state, and a codebase your team can keep working in.', deliverables: ['Frontend architecture', 'Reusable components', 'State and form workflows'] },
  { title: 'Product UI implementation', heading: 'From design to a working product.', description: 'Responsive interfaces that carry the design intent through the real details: loading states, empty screens, keyboard interactions, and the small moments between pages.', deliverables: ['Responsive UI', 'Accessible interactions', 'Consistent design systems'] },
  { title: 'Dashboards and API integration', heading: 'Complex data. Clear interfaces.', description: 'Connect authentication, APIs, tables, charts, and business workflows without making the interface feel as complicated as the system underneath it.', deliverables: ['API-backed workflows', 'Authentication and roles', 'Operational dashboards'] },
  { title: 'Performance and technical SEO', heading: 'The work behind a faster experience.', description: 'Focused improvements to rendering, images, metadata, and crawlable structure, guided by the product’s actual needs and the behaviour of its users.', deliverables: ['Performance investigation', 'Image and loading strategy', 'Metadata and structured data'] },
]

export default function Services() {
  return (
    <section id='services' aria-labelledby='services-heading' className='editorial-dark bg-dark text-white'>
      <div className='editorial-container editorial-grid grid gap-10 py-20 md:grid-cols-4 md:gap-0 md:py-28'>
        <div className='self-start md:sticky md:top-8'><SectionLabel number='03'>How I can help</SectionLabel></div>
        <div className='flex flex-col gap-12 md:col-span-3'>
          <div className='grid gap-8 md:grid-cols-3'>
            <div className='flex flex-col gap-8 md:col-span-2 md:pr-12'>
              <SectionHeading id='services-heading' text='Thoughtful work. Solid engineering.' />
              <p className='max-w-md text-base leading-relaxed text-gray-400'>From a new product to a frontend that needs a better foundation, I help teams turn the next step into something they can ship.</p>
            </div>
            <a href='#contact' className='flex min-h-14 items-center justify-between gap-3 self-end border-b border-red-600 py-4 text-sm transition-colors hover:text-red-300'>Tell me what you’re building<ArrowUpRight aria-hidden='true' className='size-4 shrink-0' /></a>
          </div>
          <AnimatedAccordion items={services.map(service => ({
            title: service.title,
            content: <div className='grid gap-8 md:grid-cols-3'>
              <h4 className='text-2xl leading-tight font-medium md:text-3xl'>{service.heading}</h4>
              <p className='text-sm leading-relaxed text-gray-400'>{service.description}</p>
              <ul className='flex flex-col gap-4 text-sm'>{service.deliverables.map(item => <li key={item} className='flex items-start gap-2'><span aria-hidden='true' className='relative top-2 size-1.5 shrink-0 bg-red-600' />{item}</li>)}</ul>
            </div>,
          }))} />
        </div>
      </div>
    </section>
  )
}
