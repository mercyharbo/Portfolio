'use client'

import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'

import { useForm, ValidationError } from '@formspree/react'

import { RiMailSendFill } from 'react-icons/ri'

gsap.registerPlugin(ScrollTrigger)

export default function ContactForm() {
  const [state, handleSubmit] = useForm('mgebqlnb')

  const revealRefs = useRef<Array<HTMLElement>>([])

  useEffect(() => {
    revealRefs.current.forEach((el, index) => [
      gsap.fromTo(
        el,
        { y: -100, autoAlpha: 0 },
        {
          y: 0,
          duration: 1,
          ease: 'power2.out',
          autoAlpha: 1,
          stagger: 0.5,
          delay: 0.5,
          scrollTrigger: {
            id: `section-${index + 1}`,
            trigger: el,
            start: 'top center+=20',
            end: 'bottom center',
            toggleActions: 'play none none reverse',
          },
        }
      ),
    ])
  }, [revealRefs])

  const addToRefs = (el: HTMLElement | null) => {
    if (el && !revealRefs.current.includes(el)) {
      revealRefs.current.push(el)
    }
  }

  if (state.succeeded) {
    return (
      <div className='flex flex-col justify-center items-center gap-5 text-center mx-auto '>
        <RiMailSendFill size={60} color='#6245d7' />
        <h1 className='lg:text-5xl md:text-4xl sm:text-3xl '>Message sent!</h1>
        <p>Thanks for contacting me, I will get in touch with you shortly.</p>
      </div>
    )
  }

  return (
    <main
      ref={addToRefs}
      id='contact'
      className='3xl:my-[5rem] xl:px-0 md:px-10 md:my-[3rem] sm:px-5 sm:my-[2rem] flex flex-col justify-start items-start gap-10 mx-auto w-full '
    >
      <h1 className='text-gradient text-center mx-auto xl:text-5xl md:text-4xl sm:text-3xl capitalize'>
        Contact
      </h1>
      <form
        onSubmit={handleSubmit}
        className='py-5 xl:w-[50%] md:w-full sm:w-full '
      >
        <div className='flex flex-col justify-start items-start gap-2'>
          <label htmlFor='name' className='font-medium'>
            Name
          </label>
          <input
            type='text'
            id='name'
            name='name'
            placeholder='Enter your name'
            required
            className='w-full indent-2 outline-none border-b-[1px] bg-transparent py-2 '
          />
          <ValidationError
            prefix='Name'
            field='name'
            errors={state.errors}
            className='text-[#E70FAA] py-1'
          />
        </div>
        <div className='flex flex-col justify-start items-start gap-2 py-5'>
          <label htmlFor='email'>Email</label>
          <input
            type='email'
            id='email'
            name='email'
            placeholder='Enter your email'
            required
            className='w-full indent-2 outline-none border-b-[1px] bg-transparent py-2 '
          />
          <ValidationError
            prefix='Email'
            field='email'
            errors={state.errors}
            className='text-[#E70FAA]'
          />
        </div>

        <div className='flex flex-col justify-start items-start gap-2 py-5'>
          <label htmlFor='message'>Message</label>
          <textarea
            id='message'
            name='message'
            placeholder='Enter your message'
            required
            className='w-full indent-2 outline-none border-b-[1px] bg-transparent h-[8rem] '
          ></textarea>
          <ValidationError
            prefix='Message'
            field='message'
            errors={state.errors}
            className='text-[#E70FAA]'
          />
        </div>
        <button
          type='submit'
          disabled={state.submitting}
          className='bg-black dark:bg-white dark:text-black hover:bg-[#E70FAA] text-white rounded-lg w-full lg:h-[50px] md:h-[60px] sm:h-[50px]'
        >
          Send
        </button>
      </form>
    </main>
  )
}
