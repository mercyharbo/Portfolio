import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'

import { ThemeProvider } from './theme-context'
import { ThemeSwitcher } from '@/components/ThemeSwitcher'

import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'

import './globals.css'

const poppins = Poppins({ weight: '400', subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Afolabi Ridwan Damilare | Frontend Developer | React & JavaScript',
  description:
    'Afolabi Ridwan Damilare is a skilled Frontend Developer specializing in React and Redux. Explore my portfolio to see my projects, skills, and experience in building dynamic and responsive web applications.',
  keywords:
    'Afolabi Ridwan Damilare, Frontend Developer, React Developer, Redux Specialist, Web Developer, JavaScript, HTML, CSS, Portfolio, Hire Developer, Nigeria',
  robots: 'index, follow',
  viewport: 'width=device-width, initial-scale=1.0',
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
