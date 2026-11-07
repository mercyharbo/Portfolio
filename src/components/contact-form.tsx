'use client'

import { useId, useRef, useState } from 'react'
import { useForm } from 'react-hook-form'
import { ArrowUpRight, Check, LoaderCircle } from 'lucide-react'
import { sendContactMessage, type ContactMessage } from '@/lib/contact-request'

export default function ContactForm({ dark = false }: { dark?: boolean }) {
  const id = useId()
  const pending = useRef(false)
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')
  const { register, handleSubmit, reset, formState: { errors } } = useForm<ContactMessage>({
    defaultValues: { name: '', email: '', message: '', website_hp: '' },
  })
  const fieldClass = `w-full rounded-none border bg-transparent px-4 py-3 text-base outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600 disabled:opacity-60 ${dark ? 'border-white/25 text-white placeholder:text-gray-400' : 'border-gray-300 text-black placeholder:text-gray-500'}`
  const errorClass = `text-sm ${dark ? 'text-red-300' : 'text-red-700'}`

  const onSubmit = async (data: ContactMessage) => {
    if (pending.current) return
    pending.current = true
    setStatus('sending')
    setErrorMessage('')
    try {
      const result = await sendContactMessage(data)
      if (result.ok) {
        reset()
        setStatus('success')
      } else {
        setErrorMessage(result.message)
        setStatus('error')
      }
    } finally {
      pending.current = false
    }
  }

  return (
    <form noValidate onSubmit={event => {
      event.preventDefault()
      if (!pending.current) void handleSubmit(onSubmit)(event)
    }} aria-busy={status === 'sending'} className='flex flex-col gap-6'>
      <div hidden aria-hidden='true'>
        <label htmlFor={`${id}-website`}>Leave this field empty</label>
        <input id={`${id}-website`} tabIndex={-1} autoComplete='off' {...register('website_hp')} />
      </div>
      <fieldset disabled={status === 'sending'} className='flex min-w-0 flex-col gap-6'>
        <legend className='sr-only'>Your enquiry</legend>
        <div className='grid gap-6 sm:grid-cols-2'>
          <div className='flex flex-col gap-2'>
            <label htmlFor={`${id}-name`} className='text-sm font-medium'>Name (required)</label>
            <input id={`${id}-name`} autoComplete='name' placeholder='Your name' required aria-invalid={!!errors.name} aria-describedby={errors.name ? `${id}-name-error` : undefined} className={fieldClass} {...register('name', { validate: value => !!value.trim() || 'Please enter your name.' })} />
            {errors.name ? <p id={`${id}-name-error`} className={errorClass}>{errors.name.message}</p> : null}
          </div>
          <div className='flex flex-col gap-2'>
            <label htmlFor={`${id}-email`} className='text-sm font-medium'>Email (required)</label>
            <input id={`${id}-email`} type='email' autoComplete='email' placeholder='you@example.com' required aria-invalid={!!errors.email} aria-describedby={errors.email ? `${id}-email-error` : undefined} className={fieldClass} {...register('email', { validate: value => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim()) || 'Please enter a valid email address.' })} />
            {errors.email ? <p id={`${id}-email-error`} className={errorClass}>{errors.email.message}</p> : null}
          </div>
        </div>
        <div className='flex flex-col gap-2'>
          <label htmlFor={`${id}-message`} className='text-sm font-medium'>Message (required)</label>
          <textarea id={`${id}-message`} rows={6} placeholder='What are you building, improving, or hiring for?' required aria-invalid={!!errors.message} aria-describedby={errors.message ? `${id}-message-error` : undefined} className={`${fieldClass} min-h-40 resize-y`} {...register('message', { validate: value => !!value.trim() || 'Please tell me a little about your enquiry.' })} />
          {errors.message ? <p id={`${id}-message-error`} className={errorClass}>{errors.message.message}</p> : null}
        </div>
        <button type='submit' className='flex min-h-14 w-full items-center justify-between gap-8 bg-red-600 px-6 text-sm font-medium text-white hover:bg-red-700 disabled:cursor-wait disabled:opacity-70'>
          {status === 'sending' ? 'Sending your message…' : status === 'error' ? 'Try sending again' : 'Send message'}
          {status === 'sending' ? <LoaderCircle aria-hidden='true' className='size-5 animate-spin motion-reduce:animate-none' /> : <ArrowUpRight aria-hidden='true' className='size-5' />}
        </button>
      </fieldset>
      <div aria-live='polite' aria-atomic='true'>
        {status === 'sending' ? <p className='text-sm'>Sending your message. Please wait.</p> : null}
        {status === 'success' ? <div role='status' className={`flex items-start gap-3 border p-4 ${dark ? 'border-white/25' : 'border-gray-300'}`}><Check aria-hidden='true' className='size-5 shrink-0' /><p className='text-sm leading-relaxed'>Message sent. Thank you for reaching out — I’ll get back to you by email.</p></div> : null}
      </div>
      {status === 'error' ? <div role='alert' className={`flex flex-col gap-2 border p-4 text-sm leading-relaxed ${dark ? 'border-red-400 text-red-300' : 'border-red-600 text-red-700'}`}><p>{errorMessage}</p><p>Your message is still here. Try again, or <a className='underline underline-offset-4' href='mailto:damilare791@gmail.com'>email me directly</a>.</p></div> : null}
    </form>
  )
}
