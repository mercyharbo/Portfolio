import { Poppins } from 'next/font/google'
import Image from 'next/image'

import About from '@/components/About'

const poppins = Poppins({ weight: '900', subsets: ['latin'] })

export default function Home() {
  return (
    <main className='flex flex-col gap-5 mx-auto xl:w-[90%] '>
      <div
        className='flex 3xl:py-[10rem] xl:flex-row xl:justify-center xl:items-center xl:gap-14 xl:px-0 md:flex-col md:justify-start md:items-start md:gap-10 md:px-10
        md:py-[5rem] sm:flex-col sm:justify-center sm:items-center sm:gap-10 sm:px-5 sm:pt-[5rem] '
      >
        <div className='flex flex-col justify-start items-start gap-5 3xl:w-[50%] 2xl:w-[50%] xl:w-[50%]  '>
          <span className='text-[#A7A7A7] text-lg '>Hi,</span>
          <h1
            className={`${poppins} 3xl:text-6xl 3xl:leading-[70px] 2xl:text-5xl 2xl:leading-[65px] 2xl:w-full xl:text-5xl md:text-5xl md:leading-[70px] md:w-[80%] 
            sm:w-full sm:text-4xl 
            sm:leading-[50px] font-bold `}
          >
            I am Damilare, a{' '}
            <span className='text-gradient '>Frontend Engineer</span> who write
            code that <span className='text-gradient'>solve problems</span>.
          </h1>
        </div>
        <div className='xl:w-[50%] md:w-full sm:w-full '>
          <Image
            src='/avatar.jpeg'
            alt='code with mercy'
            width={1000}
            height={1000}
            className='object-cover object-top  rounded-full mx-auto 3xl:w-[30rem] 3xl:h-[30rem] 2xl:w-[20rem] 2xl:h-[20rem] md:w-[20rem] md:h-[20rem] sm:w-[15rem] sm:h-[15rem] '
          />
        </div>
      </div>

      <About />
    </main>
  )
}
