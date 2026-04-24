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

export function ContactDialog() {
  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  })

  const onSubmit = (data: any) => {
    console.log('Form submitted:', data)
    // Add submission logic here
    reset()
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className='inline-flex items-center justify-center px-10 h-12 rounded-full'>
          Let&apos;s work together
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
          <Button type='submit' className='w-full h-12'>
            Send Message
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  )
}
