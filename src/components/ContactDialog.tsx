'use client'

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { useForm } from 'react-hook-form'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { Label } from './ui/label'
import { Textarea } from './ui/textarea'
import { cn } from '@/lib/utils'
import { useState } from 'react'

export function ContactDialog({ 
  triggerText = "Let's work together",
  className
}: { 
  triggerText?: string,
  className?: string
}) {
  const [open, setOpen] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  })

  const onSubmit = async (data: any) => {
    setIsSubmitting(true)
    setStatus('idle')

    try {
      const response = await fetch('/api/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      if (response.ok) {
        setStatus('success')
        reset()
        setTimeout(() => {
          setOpen(false)
          setTimeout(() => setStatus('idle'), 500) // Reset status after dialog close animation
        }, 2000)
      } else {
        setStatus('error')
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      setStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className={cn(
          'inline-flex items-center bg-white text-black hover:bg-white/90 justify-center px-10 h-12 rounded-full w-full sm:w-auto',
          className
        )}>
          {triggerText}
        </Button>
      </DialogTrigger>
      <DialogContent className=' sm:max-w-2xl'>
        <DialogHeader>
          <DialogTitle className=''>Send a message</DialogTitle>
          <DialogDescription className='text-gray-300'>
            Have a project in mind? Fill out the form below and I&apos;ll get
            back to you shortly.
          </DialogDescription>
        </DialogHeader>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className='flex flex-col gap-4 py-4'
        >
          <div className='flex flex-col gap-2'>
            <Label htmlFor='name' className='text-sm font-medium text-gray-300'>
              Name
            </Label>
            <Input
              id='name'
              {...register('name', { required: true })}
              placeholder='Your name'
              className='h-11'
            />
          </div>
          <div className='flex flex-col gap-2'>
            <Label
              htmlFor='email'
              className='text-sm font-medium text-gray-300'
            >
              Email
            </Label>
            <Input
              id='email'
              type='email'
              {...register('email', { required: true })}
              placeholder='you@example.com'
              className='h-11'
            />
          </div>
          <div className='flex flex-col gap-2'>
            <Label
              htmlFor='message'
              className='text-sm font-medium text-gray-300'
            >
              Message
            </Label>
            <Textarea
              id='message'
              {...register('message', { required: true })}
              placeholder='Tell me about your project...'
              rows={4}
              className='p-3 resize-none'
            />
          </div>
          <Button type='submit' className='w-full h-11' disabled={isSubmitting}>
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </Button>
          {status === 'success' && (
            <p className='text-sm text-green-500 text-center font-medium animate-in fade-in slide-in-from-top-1'>
              Message sent successfully! I&apos;ll get back to you soon.
            </p>
          )}
          {status === 'error' && (
            <p className='text-sm text-red-500 text-center font-medium animate-in fade-in slide-in-from-top-1'>
              Something went wrong. Please try again or email me directly.
            </p>
          )}
        </form>
      </DialogContent>
    </Dialog>
  )
}
