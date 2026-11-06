import experience from '@/data/experience.json'
import { ArrowUpRight } from 'lucide-react'
import { SectionHeading, SectionLabel } from './editorial'

export default function Experience() {
  return (
    <section id='experience' aria-labelledby='experience-heading' className='editorial-light bg-white text-black'>
      <div className='editorial-container editorial-grid grid gap-12 py-20 md:grid-cols-4 md:gap-0 md:py-28'>
        <div className='flex flex-col gap-8 self-start md:sticky md:top-8 md:col-span-2 md:pr-16'>
          <SectionLabel number='05'>Experience</SectionLabel>
          <SectionHeading id='experience-heading' text='Built alongside good teams.' />
          <a href='/Afolabi%20Ridwan%20Damilare.pdf' target='_blank' rel='noopener noreferrer' className='flex min-h-11 items-center gap-3 self-start text-sm hover:text-red-700'>View full résumé<ArrowUpRight aria-hidden='true' className='size-4' /></a>
        </div>
        <ol className='flex flex-col md:col-span-2'>
          {experience.map(item => (
            <li key={item.id} data-enter className='flex flex-col gap-5 border-t border-gray-200 py-8'>
              <div className='flex flex-wrap justify-between gap-3 text-xs text-gray-500'><span>{item.duration}</span><span>{item.type_of_job}</span></div>
              <div className='flex flex-col gap-2'><h3 className='text-2xl font-medium'>{item.company}</h3><p className='text-sm'>{item.role}</p></div>
              <p className='text-sm leading-relaxed text-gray-600'>{item.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
