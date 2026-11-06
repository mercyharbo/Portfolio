import { ArrowUpRight } from 'lucide-react'
import { ContactDialog } from './ContactDialog'
import { ProfileCard, SectionHeading, SectionLabel } from './editorial'

export default function CTA({ number = '06' }: { number?: string }) {
  return (
    <section id='contact' aria-labelledby='contact-heading' className='editorial-dark bg-dark text-white'>
      <div className='editorial-container editorial-grid grid gap-12 py-20 md:grid-cols-4 md:gap-0 md:py-28'>
        <aside className='hidden self-start md:col-span-1 md:block'><ProfileCard dark /></aside>
        <div className='flex flex-col gap-10 md:col-span-2 md:col-start-3'>
          <SectionLabel number={number}>Let’s make it happen</SectionLabel>
          <SectionHeading id='contact-heading' text='Your next idea. Built with care.' />
          <p className='max-w-lg text-base leading-relaxed text-gray-400'>A new product, a frontend that needs a rethink, or a team that could use another pair of hands. Tell me where you want to go.</p>
          <ContactDialog triggerText='Start a conversation' className='min-h-14 w-full justify-between rounded-none bg-red-600 px-6 text-white hover:scale-100 hover:bg-red-700 active:scale-100 sm:w-fit' />
          <a href='mailto:damilare791@gmail.com' className='flex min-h-11 items-center gap-3 self-start text-sm hover:text-red-300'>damilare791@gmail.com<ArrowUpRight className='size-4' aria-hidden='true' /></a>
        </div>
      </div>
    </section>
  )
}
