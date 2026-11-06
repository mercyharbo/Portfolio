import { ArrowUpRight } from 'lucide-react'
import { SectionHeading, SectionLabel } from './editorial'

const steps = [
  { title: 'Discovery', text: 'Understand the product, the people using it, and the constraints that matter before deciding what to build.' },
  { title: 'Interface planning', text: 'Map the user journeys, component structure, and the states the interface needs to handle.' },
  { title: 'Implementation', text: 'Build in clear milestones, connecting the UI, data, and interactions with maintainable frontend patterns.' },
  { title: 'Validation', text: 'Check responsive behaviour, keyboard access, integration states, performance, and the details that affect real use.' },
  { title: 'Delivery', text: 'Resolve the final issues, document the important decisions, and leave the work ready for the next iteration.' },
]

export default function Process() {
  return (
    <section aria-labelledby='process-heading' className='editorial-dark border-t border-white/10 bg-dark text-white'>
      <div className='editorial-container editorial-grid grid gap-12 py-20 md:grid-cols-4 md:gap-0 md:py-28'>
        <div className='self-start md:sticky md:top-8'><SectionLabel number='04'>The approach</SectionLabel></div>
        <div className='flex flex-col gap-14 md:col-span-3'>
          <div className='flex max-w-xl flex-col gap-8'><SectionHeading id='process-heading' text='Clarity at every step.' /><p className='max-w-md text-base leading-relaxed text-gray-400'>A practical path from the first conversation to a product that is ready to use.</p></div>
          <div className='process-grid grid gap-0 md:grid-cols-3'>
            {steps.map((step, index) => (
              <div key={step.title} data-enter className={`process-step flex flex-col gap-12 border-t border-white/10 bg-dark-accent p-6 lg:p-8 process-step-${index + 1}`}>
                <span className='text-4xl font-medium'>0{index + 1}</span>
                <div className='flex flex-col gap-5'><h3 className='text-2xl font-medium'>{step.title}</h3><p className='text-sm leading-relaxed text-gray-400'>{step.text}</p></div>
              </div>
            ))}
            <a href='#contact' className='editorial-button flex flex-col justify-between gap-10 bg-red-600 p-6 text-white lg:p-8'><p className='text-3xl leading-tight font-medium'>Have something in mind?</p><span className='flex items-center justify-between gap-4 text-sm'>Let’s talk<ArrowUpRight aria-hidden='true' className='size-5' /></span></a>
          </div>
        </div>
      </div>
    </section>
  )
}
