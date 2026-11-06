'use client'

import { Plus } from 'lucide-react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useId, useState, type ReactNode } from 'react'

export interface AccordionItem {
  title: string
  content: ReactNode
}

export default function AnimatedAccordion({ items, defaultOpen = -1 }: { items: AccordionItem[]; defaultOpen?: number }) {
  const [open, setOpen] = useState(defaultOpen)
  const id = useId()
  return (
    <div className='flex flex-col border-b border-current/10'>
      {items.map((item, index) => {
        const expanded = open === index
        return (
          <div key={item.title} className={`editorial-accordion border-t ${expanded ? 'border-red-600' : 'border-current/10'}`}>
            <h3>
              <button type='button' id={`${id}-trigger-${index}`} aria-expanded={expanded} aria-controls={`${id}-panel-${index}`} onClick={() => setOpen(expanded ? -1 : index)} className='group flex min-h-20 w-full items-center gap-4 px-5 py-5 text-left text-sm transition-colors hover:bg-gray-500/10 md:px-8 md:text-base'>
                <span className={expanded ? 'text-red-600' : 'text-gray-500'}>{String(index + 1).padStart(2, '0')}</span>
                <span className='flex-1'>{item.title}</span>
                <Plus aria-hidden='true' className={`accordion-icon size-5 shrink-0 ${expanded ? 'rotate-45' : ''}`} />
              </button>
            </h3>
            <div id={`${id}-panel-${index}`} role='region' aria-labelledby={`${id}-trigger-${index}`} aria-hidden={!expanded} inert={!expanded} data-open={expanded} className='accordion-panel grid' onTransitionEnd={event => { if (event.target === event.currentTarget) ScrollTrigger.refresh() }}>
              <div className='min-h-0 overflow-hidden'>
                <div className='px-5 pb-8 pt-4 md:px-8'>{item.content}</div>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
