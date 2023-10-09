import { Poppins } from 'next/font/google'
import Image from 'next/image'

import { DiSass } from 'react-icons/di'
import {
  SiBootstrap,
  SiCss3,
  SiHtml5,
  SiJavascript,
  SiNextdotjs,
  SiReact,
  SiRedux,
  SiTailwindcss,
} from 'react-icons/si'
import { BsGit } from 'react-icons/bs'

import About from '@/components/About'
import Project from '@/components/Project'
import Blog from '@/components/Blog'
import ContactForm from '@/components/ContactForm'
import Link from 'next/link'
import { AiOutlineDownload } from 'react-icons/ai'

const poppins = Poppins({ weight: '900', subsets: ['latin'] })

const TechStacks = [
  { id: 1, name: 'HTML5', icon: <SiHtml5 /> },
  { id: 2, name: 'CSS3', icon: <SiCss3 /> },
  { id: 3, name: 'JavaScript', icon: <SiJavascript /> },
  { id: 4, name: 'React JS', icon: <SiReact /> },
  { id: 5, name: 'Next JS', icon: <SiNextdotjs /> },
  { id: 6, name: 'BootStrap', icon: <SiBootstrap /> },
  { id: 7, name: 'Tailwind CSS', icon: <SiTailwindcss /> },
  { id: 8, name: 'Git & GitHub', icon: <BsGit /> },
  { id: 9, name: 'Redux toolkit', icon: <SiRedux /> },
  { id: 11, name: 'Sass', icon: <DiSass /> },
]

export default function Home() {
  return (
    <main className='flex flex-col gap-5 mx-auto xl:w-[90%] '>
      <div
        className='flex 3xl:py-[10rem] xl:flex-row xl:justify-center xl:items-center xl:gap-14 xl:px-0 md:flex-col md:justify-start md:items-start md:gap-10 md:px-10
        md:py-[5rem] sm:flex-col sm:justify-center sm:items-center sm:gap-10 sm:px-5 sm:pt-[5rem] '
      >
        <div className='flex flex-col justify-start items-start gap-5 3xl:w-[50%] 2xl:w-[50%] xl:w-[50%]  '>
          <span className='text-lg '>Hi,</span>
          <h1
            className={`${poppins} 3xl:text-6xl 3xl:leading-[70px] 2xl:text-5xl 2xl:leading-[65px] 2xl:w-full xl:text-5xl md:text-5xl md:leading-[70px] md:w-[80%] 
            sm:w-full sm:text-3xl 
            sm:leading-[50px] font-bold `}
          >
            I am Damilare, a{' '}
            <span className='text-gradient '>Frontend Engineer</span> who write
            code that <span className='text-gradient'>solve problems</span>.
          </h1>
          <p className=''>
            I am a seasoned front-end developer with a rich background in
            crafting and nurturing web applications. My journey is marked by
            mastery of an array of cutting-edge technologies, including{' '}
            <strong>
              React, JavaScript, BootStrap, SASS, TypeScript, VS Code, Git &
              GitHub, Tailwind, Next.js, CSS, HTML, and Redux Toolkit.
            </strong>{' '}
            My skills are not just a reflection of my experience; they are a
            testament to my unwavering commitment to staying at the forefront of
            web development.
          </p>
          <Link
            href='/AFOLABI RIDWAN DAMILARE.pdf'
            download='/AFOLABI RIDWAN DAMILARE.pdf'
            className='bg-black text-white dark:bg-white dark:text-black hover:bg-[#E70FAA] py-3 px-5 rounded-lg flex justify-center items-center gap-2 '
          >
            {' '}
            Download Resume <AiOutlineDownload />
          </Link>
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

      <div className='flex flex-col justify-start items-start 3xl:py-[2rem] 2xl:py-[5rem] xl:gap-10 xl:px-0 md:px-10 md:gap-10 md:py-[5rem] sm:py-[4rem] sm:gap-10 sm:px-5'>
        <div className='flex flex-col justify-center items-center gap-5 w-full'>
          <h1 className='text-gradient xl:text-5xl md:text-4xl sm:text-3xl capitalize'>
            my tech stack
          </h1>
          <p className=''>Below are my tech stacks and tools I use often</p>
        </div>
        <div className='w-full flex justify-center items-center flex-wrap gap-10 '>
          {TechStacks.map((stack) => {
            return (
              <div
                key={stack.id}
                className='flex flex-col justify-center items-center text-center xl:gap-4 md:gap-5 md:w-[10rem] sm:w-[5rem] sm:gap-5'
              >
                <span className='3xl:text-5xl 2xl:text-4xl xl:text-4xl md:text-4xl sm:text-4xl '>
                  {stack.icon}
                </span>
                <p className=' '>{stack.name}</p>
              </div>
            )
          })}
        </div>
      </div>

      <Project />

      <div className='flex flex-col justify-center items-center gap-10 w-full 3xl:py-[5rem] xl:py-[5rem] xl:px-0 md:py-[4rem] md:px-10 sm:px-5 sm:py-[3rem] '>
        <div className='flex flex-col gap-5'>
          <h1 className='text-gradient xl:text-5xl md:text-4xl sm:text-3xl capitalize text-center'>
            Blog
          </h1>
          <p className=''>
            I&apos;m actively working on improving my writing and blogging
            skills to share my journey. I aim to create content that can benefit
            newcomers and anyone seeking guidance, similar to the valuable
            resources I stumbled upon during my early days as a self-taught
            developer. Back then, I faced challenges due to limited physical
            resources and a lack of a strong tech community in my region.
          </p>
          <p className=' '>
            This section highlights some of my blog posts on Hashnode. While
            they may not be flawless, I&apos;m dedicated to continuous
            improvement and plan to produce more content, just like many other
            tech enthusiasts out there.
          </p>
        </div>

        <Blog />
        <ContactForm />
      </div>
    </main>
  )
}
