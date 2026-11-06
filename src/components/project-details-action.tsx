'use client'

import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { getProjectDetailHref, type Project } from '@/lib/projects'

export default function ProjectDetailsAction({ project, onExplore, variant = 'outline' }: {
  project: Project
  onExplore: () => void
  variant?: 'panel' | 'outline'
}) {
  const href = getProjectDetailHref(project)
  const panel = variant === 'panel'
  const className = panel
    ? 'editorial-button group flex min-h-14 w-full items-center justify-between bg-black text-sm text-white md:col-span-1'
    : 'flex min-h-12 items-center justify-between gap-6 border border-gray-300 px-5 text-sm transition-colors hover:border-black hover:bg-gray-100'
  const label = panel ? 'Explore project' : 'Project details'
  const content = <>
    <span className={panel ? 'px-5' : undefined}>{label}</span>
    <span className={panel ? 'flex min-h-14 w-14 shrink-0 items-center justify-center bg-red-600' : undefined}><ArrowUpRight aria-hidden='true' className={panel ? 'size-5' : 'size-4'} /></span>
  </>
  const accessibleName = `${label}: ${project.name}`

  return href
    ? <Link href={href} className={className} aria-label={accessibleName}>{content}</Link>
    : <button type='button' onClick={onExplore} className={className} aria-label={accessibleName}>{content}</button>
}
