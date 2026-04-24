'use client'

import React from 'react'
import Marquee from 'react-fast-marquee'
import Image from 'next/image'

const projects = [
  { id: 1, src: '/leban-street.jpg' },
  { id: 2, src: '/leban-street.jpg' },
  { id: 3, src: '/leban-street.jpg' },
  { id: 4, src: '/leban-street.jpg' },
  { id: 5, src: '/leban-street.jpg' },
  { id: 6, src: '/leban-street.jpg' },
]

export default function ProjectMarquee() {
  return (
    <section className='w-full py-10 bg-background/50 overflow-hidden'>
      <Marquee
        gradient={false}
        speed={40}
        pauseOnHover={true}
        className='flex items-center'
      >
        {projects.map((project, index) => (
          <div
            key={index}
            className='relative mx-3 overflow-hidden rounded-2xl border border-white/5 bg-secondary/30 group transition-all duration-500 hover:border-blue-500/30 w-[400px] lg:w-[600px] aspect-video'
          >
            {/* Skeleton State / Placeholder */}
            <div className='absolute inset-0 bg-linear-to-br from-white/5 to-white/10 animate-pulse z-0' />

            <Image
              src={project.src}
              alt={`Project ${project.id}`}
              fill
              className='object-cover z-10 opacity-80 group-hover:opacity-100 transition-opacity duration-500'
              sizes='(max-width: 768px) 100vw, 50vw'
            />

            {/* Shine effect on hover */}
            <div className='absolute inset-0 bg-linear-to-tr from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 z-20' />
          </div>
        ))}
      </Marquee>
    </section>
  )
}
