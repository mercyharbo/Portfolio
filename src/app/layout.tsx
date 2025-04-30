import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import { ThemeProvider } from '@/components/ThemeProvider'
import { ThemeSwitcher } from '@/components/ThemeSwitcher'
import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-playfair',
  preload: true,
})

export const metadata: Metadata = {
  title: 'Mercy | Frontend Developer',
  description: 'Frontend Developer with expertise in React.js and Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang='en'
      className={`${inter.variable} ${playfair.variable}`}
      suppressHydrationWarning
    >
      <body className={inter.className}>
        <ThemeProvider>
          <ThemeSwitcher />
          <Navbar />
          <main className='pt-20 min-h-screen'>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
