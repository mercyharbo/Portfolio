'use client'

import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { BsMoon, BsSun } from 'react-icons/bs'

export const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <button
      className={`w-fit absolute xl:right-5 xl:top-5 md:right-[40px] md:top-[5rem] sm:top-[5rem] sm:right-[1rem] p-2 rounded-md hover:scale-110 active:scale-100 duration-200 bg-slate-200 dark:bg-[#212933]`}
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
    >
      {theme === 'light' ? <BsMoon /> : <BsSun />}
    </button>
  )
}
