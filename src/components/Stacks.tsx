import React from 'react'
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

type StackProps = {
  addToRefs: any
}

export default function Stacks({ addToRefs }: StackProps) {
  return (
    <div
      id='stack'
      className='flex flex-col justify-start items-start 3xl:py-[2rem] 2xl:py-[5rem] xl:gap-10 xl:px-0 md:px-10 md:gap-10 md:py-[5rem] sm:py-[4rem] sm:gap-10 sm:px-5'
    >
      <div className='flex flex-col justify-center items-center gap-5 w-full'>
        <h1
          ref={addToRefs}
          className='text-gradient xl:text-5xl md:text-4xl sm:text-3xl capitalize'
        >
          my tech stack
        </h1>
        <p ref={addToRefs}>Below are my tech stacks and tools I use often</p>
      </div>
      <div
        ref={addToRefs}
        className='w-full flex justify-center items-center flex-wrap gap-10 '
      >
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
  )
}
