import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'
import type { ReactNode } from 'react'

export function SectionLabel({ number, children }: { number?: string; children: ReactNode }) {
  return (
    <p className='flex items-center gap-2 text-xs'>
      <span aria-hidden='true' className='size-1.5 shrink-0 bg-red-600' />
      {number ? <span className='text-gray-500'>{number}</span> : null}
      {children}
    </p>
  )
}

export function SectionHeading({ text, id, className = '' }: { text: string; id?: string; className?: string }) {
  return (
    <h2 id={id} aria-label={text} data-reveal-chars className={`editorial-heading text-4xl leading-none font-medium sm:text-5xl lg:text-6xl ${className}`}>
      {text.split(' ').map((word, index) => (
        <span key={`${word}-${index}`} aria-hidden='true' className='inline-block'>
          {[...word].map((char, i) => <span key={i} className='reveal-char inline-block'>{char}</span>)}
          {index < text.split(' ').length - 1 ? '\u00a0' : ''}
        </span>
      ))}
    </h2>
  )
}

export function ProfileCard({ dark = false }: { dark?: boolean }) {
  return (
    <div className={`flex flex-col border-t-2 border-red-600 ${dark ? 'text-white' : 'text-black'}`}>
      <div className='relative aspect-[3/4] overflow-hidden bg-gray-200'>
        <Image src='/IMG-1.png' alt='Afolabi Ridwan Damilare, frontend engineer' fill sizes='(max-width: 767px) 80vw, 25vw' className='object-cover' />
      </div>
      <a href={dark ? '/Afolabi%20Ridwan%20Damilare.pdf' : '/contact'} className='editorial-button group flex min-h-14 items-center justify-between bg-black text-sm text-white' {...(dark ? { target: '_blank', rel: 'noopener noreferrer' } : {})}>
        <span className='px-5'>{dark ? 'View résumé' : 'Let’s work together'}</span>
        <span className='flex min-h-14 w-14 items-center justify-center bg-red-600'><ArrowUpRight aria-hidden='true' className='size-5' /></span>
      </a>
      <div className={`flex flex-col gap-5 border-x border-b p-5 ${dark ? 'border-white/10' : 'border-gray-200'}`}>
        <p className='text-sm font-medium'>Afolabi Ridwan Damilare</p>
        <dl className='flex flex-col gap-4 text-xs'>
          <div className='flex justify-between gap-4'><dt className={dark ? 'text-gray-400' : 'text-gray-500'}>Discipline</dt><dd className='text-right'>Frontend engineering</dd></div>
          <div className='flex justify-between gap-4'><dt className={dark ? 'text-gray-400' : 'text-gray-500'}>Working with</dt><dd className='text-right'>Founders & product teams</dd></div>
        </dl>
      </div>
    </div>
  )
}
