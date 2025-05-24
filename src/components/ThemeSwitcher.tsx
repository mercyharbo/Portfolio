'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { IoMoon, IoSunny } from 'react-icons/io5'

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <button className='w-9 h-9 rounded-full flex justify-center items-center hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300'>
        <IoSunny className='h-4 w-4 transition-all' />
      </button>
    )
  }

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className='w-9 h-9 rounded-full flex justify-center items-center hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300'
    >
      {theme === 'dark' ? (
        <IoSunny className='h-4 w-4 transition-all' />
      ) : (
        <IoMoon className='h-4 w-4 transition-all' />
      )}
    </button>
  )
}
