import { ArrowUp, ArrowUpRight } from 'lucide-react'
import Link from 'next/link'

const socialLinks = [
  { label: 'GitHub', href: 'https://github.com/mercyharbo' },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/codewithmercy1' },
  { label: 'X', href: 'https://x.com/codewithmercy' },
]

export default function Footer() {
  return (
    <footer className='border-t border-white/10 bg-dark text-white'>
      <div className='editorial-container flex flex-col gap-10 py-10'>
        <div className='flex flex-col justify-between gap-8 md:flex-row md:items-center'>
          <Link href='/#home' className='text-2xl font-medium'>CodeWithMercy<span className='text-red-500'>.</span></Link>
          <nav aria-label='Social links' className='flex flex-wrap gap-6'>
            {socialLinks.map(link => <a key={link.label} href={link.href} target='_blank' rel='noopener noreferrer' className='flex min-h-11 items-center gap-2 text-sm hover:text-red-300'>{link.label}<ArrowUpRight aria-hidden='true' className='size-4' /></a>)}
          </nav>
        </div>
        <div className='flex flex-col justify-between gap-4 border-t border-white/10 pt-6 text-xs text-gray-400 sm:flex-row'><p>© {new Date().getFullYear()} Afolabi Ridwan Damilare</p><a href='#main-content' className='flex min-h-11 items-center gap-2 self-start hover:text-white'>Back to the top<ArrowUp aria-hidden='true' className='size-4' /></a></div>
      </div>
    </footer>
  )
}
