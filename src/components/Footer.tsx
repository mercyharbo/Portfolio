'use client'

import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import Link from 'next/link'
import { useEffect } from 'react'
import { BsGithub, BsInstagram, BsLinkedin, BsTwitter } from 'react-icons/bs'

gsap.registerPlugin(ScrollTrigger)

export default function Footer() {
  useEffect(() => {
    // Create main timeline for footer animations
    const footerTl = gsap.timeline({
      scrollTrigger: {
        trigger: '.footer',
        start: 'top bottom-=100',
        toggleActions: 'play none none reverse',
      },
    })

    // Staggered animation for footer sections
    footerTl
      .fromTo(
        '.footer-heading',
        {
          opacity: 0,
          y: 30,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: 'power2.out',
        }
      )
      .fromTo(
        '.footer-content',
        {
          opacity: 0,
          y: 20,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: 'power2.out',
        },
        '-=0.3'
      )

    // Separate timeline for social icons with bounce effect
    gsap.fromTo(
      '.social-link',
      {
        scale: 0,
        opacity: 0,
      },
      {
        scale: 1,
        opacity: 1,
        duration: 0.5,
        stagger: 0.1,
        ease: 'back.out(1.7)',
        scrollTrigger: {
          trigger: '.social-links',
          start: 'top bottom-=50',
        },
      }
    )

    // Copyright section animation
    gsap.fromTo(
      '.copyright-section',
      {
        opacity: 0,
        y: 20,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.copyright-section',
          start: 'top bottom-=30',
        },
      }
    )
  }, [])

  return (
    <footer className='footer bg-white dark:bg-[#1a1a1a] border-t border-gray-200 dark:border-gray-800'>
      <div className='max-w-7xl mx-auto px-4 py-12 lg:py-16'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12'>
          <div className='space-y-4'>
            <h3 className='footer-heading text-xl font-bold bg-gradient-to-r from-primary via-blue-400 to-violet-500 inline-block text-transparent bg-clip-text'>
              Code With Mercy
            </h3>
            <p className='footer-content text-gray-600 dark:text-gray-400 text-sm'>
              Crafting beautiful and performant web experiences with modern
              technologies.
            </p>
          </div>

          <div className='space-y-4'>
            <h4 className='footer-heading font-semibold dark:text-white'>
              Quick Links
            </h4>
            <nav className='footer-content flex flex-col space-y-2 text-sm'>
              <Link
                href='#about'
                className='text-gray-600 dark:text-gray-400 hover:text-primary transition-colors'
              >
                About
              </Link>
              <Link
                href='#work'
                className='text-gray-600 dark:text-gray-400 hover:text-primary transition-colors'
              >
                Work
              </Link>
              <Link
                href='#skills'
                className='text-gray-600 dark:text-gray-400 hover:text-primary transition-colors'
              >
                Skills
              </Link>
              <Link
                href='#contact'
                className='text-gray-600 dark:text-gray-400 hover:text-primary transition-colors'
              >
                Contact
              </Link>
            </nav>
          </div>

          <div className='space-y-4'>
            <h4 className='footer-heading font-semibold dark:text-white'>
              Contact
            </h4>
            <div className='footer-content space-y-2 text-sm text-gray-600 dark:text-gray-400'>
              <p>Osogbo, Nigeria</p>
              <Link
                href='mailto:codewithmercy@gmail.com'
                className='hover:text-primary transition-colors'
              >
                codewithmercy@gmail.com
              </Link>
            </div>
          </div>

          <div className='space-y-4'>
            <h4 className='footer-heading font-semibold dark:text-white'>
              Connect
            </h4>
            <div className='social-links flex flex-wrap gap-4 dark:text-white'>
              <Link
                href='https://github.com/mercyharbo'
                className='social-link hover:text-primary transition-colors p-2 rounded-full hover:bg-primary/10'
                target='_blank'
                rel='noopener noreferrer'
              >
                <BsGithub className='text-xl' />
              </Link>
              <Link
                href='https://twitter.com/codewithmercy'
                className='social-link hover:text-primary transition-colors p-2 rounded-full hover:bg-primary/10'
                target='_blank'
                rel='noopener noreferrer'
              >
                <BsTwitter className='text-xl' />
              </Link>
              <Link
                href='https://www.linkedin.com/in/codewithmercy'
                className='social-link hover:text-primary transition-colors p-2 rounded-full hover:bg-primary/10'
                target='_blank'
                rel='noopener noreferrer'
              >
                <BsLinkedin className='text-xl' />
              </Link>
              <Link
                href='https://www.instagram.com/codewithmercy/'
                className='social-link hover:text-primary transition-colors p-2 rounded-full hover:bg-primary/10'
                target='_blank'
                rel='noopener noreferrer'
              >
                <BsInstagram className='text-xl' />
              </Link>
            </div>
          </div>
        </div>

        <div className='copyright-section mt-12 pt-8 border-t border-gray-200 dark:border-gray-800'>
          <div className='flex flex-col md:flex-row justify-between items-center gap-4'>
            <p className='text-sm text-gray-600 dark:text-gray-400 text-center md:text-left'>
              © {new Date().getFullYear()} Code With Mercy. All rights reserved.
            </p>
            <p className='text-sm text-gray-600 dark:text-gray-400 text-center md:text-right'>
              Design inspiration from{' '}
              <span className='text-gradient'>Figma</span>, Developed by{' '}
              <Link
                href='https://twitter.com/codewithmercy'
                className='text-gradient hover:opacity-80 transition-opacity'
                target='_blank'
                rel='noopener noreferrer'
              >
                Code With Mercy
              </Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
