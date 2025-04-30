'use client'

import { BsMoon, BsSun } from 'react-icons/bs'
import { useTheme } from './ThemeProvider'

export function ThemeSwitcher() {
  const { theme, toggleTheme } = useTheme()

  return (
    <button
      onClick={toggleTheme}
      className='p-2 rounded-full hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800 transition-colors'
      aria-label='Toggle theme'
    >
      {theme === 'light' ? (
        <BsMoon className='w-5 h-5' />
      ) : (
        <BsSun className='w-5 h-5' />
      )}
    </button>
  )
}
