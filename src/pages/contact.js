import Link from 'next/link'
import React from 'react'
import { motion } from 'framer-motion'
import { useForm, ValidationError } from '@formspree/react'

import {
  RxGithubLogo,
  RxInstagramLogo,
  RxLinkedinLogo,
  RxTwitterLogo,
} from 'react-icons/rx'
import { RiMailSendFill } from 'react-icons/ri'
import { MdPhonelinkRing } from 'react-icons/md'
import Head from 'next/head'

const ContactForm = () => {
  const [state, handleSubmit] = useForm('mgebqlnb')

  if (state.succeeded) {
    return (
      <div className='flex flex-col justify-center items-center gap-5 text-center lg:mt-[10rem] md:mt-[15rem] sm:mt-[8rem] '>
        <RiMailSendFill size={60} color='#6245d7' />
        <h1 className='lg:text-5xl md:text-4xl sm:text-3xl '>Message sent!</h1>
        <p>Thanks for contacting me, I will get in touch with you shortly.</p>
        <Link
          href='/about'
          className='h-[40px] rounded-lg bg-[#6245d7] w-[200px] px-3 text-white flex justify-center items-center font-semibold md:h-[60px] sm:h-[60px] '
        >
          {' '}
          Go home{' '}
        </Link>
      </div>
    )
  }

  return (
    <>
      <Head>
        <title>Code With Mercy - Frontend Developer | Contact </title>
        <meta
          name='description'
          content='Welcome to my portfolio website, where you can see some of the websites I have created for various clients and purposes. 
          I&#8217;m a frontend developer and WordPress expert based in New York. I love creating beautiful and functional websites that meet the 
          needs and expectations of my clients.'
        />
      </Head>
      <main
        className='grid lg:mt-14 lg:grid-cols-2 place-items-start lg:gap-8 lg:px-10 lg:w-[80%] md:w-full md:grid-cols-1 md:px-10 md:gap-8 md:mt-[5rem] sm:w-full 
    sm:px-5 sm:grid-cols-1 sm:gap-10 sm:py-10 '
      >
        <motion.section
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 2, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.3 }}
          className='flex flex-col justify-start items-start gap-8'
        >
          <h1 className='lg:text-6xl md:text-5xl sm:text-3xl '>
            Ridwan Damilare
          </h1>
          <p className='lg:text-xl md:text-lg sm:text-base'>
            If you&#8217;re interested in working with me or want to know more
            about me, feel free to contact me anytime. I&#8217;d love to hear
            from you. You can reach me by email at email or mobile number. You
            can also follow me on my social media account . Thank you for
            visiting my portfolio website.
          </p>
          <div className='flex justify-start items-center gap-4'>
            <Link href='https://twitter.com/codewithmercy' target='_blank'>
              <RxTwitterLogo size={30} color='#6245d7' />{' '}
            </Link>

            <Link
              href='https://www.linkedin.com/in/codewithmercy/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3B%2BW2Ka1%2FAT1Wc2x69pVlNOg%3D%3D'
              target='_blank'
            >
              <RxLinkedinLogo size={30} color='#6245d7' />{' '}
            </Link>

            <Link href='https://www.instagram.com/mercyharbo/' target='_blank'>
              <RxInstagramLogo size={30} color='#6245d7' />{' '}
            </Link>

            <Link href='https://github.com/mercyharbo' target='_blank'>
              <RxGithubLogo size={30} color='#6245d7' />{' '}
            </Link>
            <Link href='tel:+2349078472701'>
              <MdPhonelinkRing size={30} color='#6245d7' />{' '}
            </Link>
          </div>
        </motion.section>
        <motion.section
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 2, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className='w-full'
        >
          <form onSubmit={handleSubmit} className='py-5 '>
            <div className='flex flex-col justify-start items-start gap-2'>
              <label htmlFor='name' className='font-semibold'>
                Name
              </label>
              <input
                type='text'
                id='name'
                name='name'
                placeholder='Enter your name'
                required
                className='border-[1px] w-full rounded-lg indent-2 outline-none lg:h-[40px] md:h-[60px] sm:h-[50px] '
              />
              <ValidationError
                prefix='Name'
                field='name'
                errors={state.errors}
                className='text-red-500 py-1'
              />
            </div>
            <div className='flex flex-col justify-start items-start gap-2 py-5'>
              <label htmlFor='email' className='font-semibold'>
                Email
              </label>
              <input
                type='email'
                id='email'
                name='email'
                placeholder='Enter your email'
                required
                className='border-[1px] w-full rounded-lg indent-2 outline-none lg:h-[40px] md:h-[60px] sm:h-[50px] '
              />
              <ValidationError
                prefix='Email'
                field='email'
                errors={state.errors}
              />
            </div>

            <div className='flex flex-col justify-start items-start gap-2 py-5'>
              <label htmlFor='message' className='font-semibold'>
                Message
              </label>
              <textarea
                id='message'
                name='message'
                placeholder='Enter your message'
                required
                className='border-[1px] w-full rounded-lg outline-none p-2 lg:h-[150px] md:h-[150px] sm:h-[120px] '
              ></textarea>
              <ValidationError
                prefix='Message'
                field='message'
                errors={state.errors}
              />
            </div>
            <button
              type='submit'
              disabled={state.submitting}
              className='bg-[#6245d7] text-white w-full lg:h-[40px] md:h-[60px] sm:h-[50px] rounded-lg font-semibold  '
            >
              Send
            </button>
          </form>
        </motion.section>
      </main>
    </>
  )
}

export default ContactForm
