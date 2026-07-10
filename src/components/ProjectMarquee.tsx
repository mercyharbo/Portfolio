'use client'

import Image from 'next/image'
import Marquee from 'react-fast-marquee'

const projects = [
  {
    id: 1,
    src: '/leban-street.jpg',
    alt: 'Leban Street Resturant online ordering website interface',
  },
  {
    id: 2,
    src: '/project (1).png',
    alt: 'CodeWithMercy frontend project landing page preview',
  },
  {
    id: 3,
    src: '/project (2).png',
    alt: 'Responsive web application interface preview',
  },
  {
    id: 4,
    src: '/project (3).png',
    alt: 'Dashboard interface for a product management project',
  },
  {
    id: 5,
    src: '/project (4).png',
    alt: 'Frontend portfolio website project preview',
  },
  {
    id: 6,
    src: '/bukky.png',
    alt: 'Bukky Group multi-brand business website interface',
  },
]

export default function ProjectMarquee() {
  return (
    <section className='w-full bg-background/50 overflow-hidden 3xl:max-w-7xl'>
      <Marquee
        gradient={false}
        speed={40}
        pauseOnHover={true}
        className='flex items-center'
      >
        {projects.map((project, index) => (
          <div
            key={index}
            className='relative mx-3 overflow-hidden rounded-xl border border-white/5 bg-secondary/30 group transition-all duration-500 hover:border-blue-500/30 w-[300px] sm:w-[400px] lg:w-[600px] aspect-video'
          >
            <Image
              src={project.src}
              alt={project.alt}
              fill
              className='object-cover '
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
