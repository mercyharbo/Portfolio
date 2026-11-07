'use client'

import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Button } from './ui/button'
import ContactForm from './contact-form'
import { cn } from '@/lib/utils'

export function ContactDialog({ triggerText = "Let's work together", className }: { triggerText?: string; className?: string }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className={cn('inline-flex h-12 w-full items-center justify-center rounded-none bg-red-600 px-6 text-white hover:bg-red-700 sm:w-auto', className)}>{triggerText}</Button>
      </DialogTrigger>
      <DialogContent className='max-h-[90svh] overflow-y-auto sm:max-w-2xl'>
        <DialogHeader>
          <DialogTitle>Send a message</DialogTitle>
          <DialogDescription className='text-gray-300'>Tell me about your project or the role you have in mind.</DialogDescription>
        </DialogHeader>
        <ContactForm dark />
      </DialogContent>
    </Dialog>
  )
}
