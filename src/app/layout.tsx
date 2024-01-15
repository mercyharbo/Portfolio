import './globals.css'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'

import { ThemeProvider } from './theme-context'
import { ThemeSwitcher } from '@/components/ThemeSwitcher'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'

const poppins = Poppins({ weight: '400', subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Code With Mercy | Portfolio ',
  description: 'I am a seasoned front-end developer with a rich background in crafting and nurturing web applications. My journey is marked by mastery of an array of cutting-edge technologies, including React, JavaScript, BootStrap, SASS, TypeScript, VS Code, Git & GitHub, Tailwind, Next.js, CSS, HTML, and Redux Toolkit.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body className={poppins.className}>
        <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
          <ThemeSwitcher />
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
