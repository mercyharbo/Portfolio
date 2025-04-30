import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import { ThemeProvider } from '@/components/ThemeProvider'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'Mercy | Frontend Developer',
  description: 'Frontend Developer with expertise in React.js and Next.js',
  keywords: [
    'Frontend Developer',
    'React.js',
    'Next.js',
    'Web Development',
    'JavaScript',
    'TypeScript',
    'UI/UX',
  ],
  authors: [{ name: 'Mercy' }],
  openGraph: {
    title: 'Mercy | Frontend Developer',
    description: 'Frontend Developer with expertise in React.js and Next.js',
    type: 'website',
    locale: 'en_US',
    siteName: 'Mercy Portfolio',
    images: [
      {
        url: '/avatar1.JPEG',
        width: 1200,
        height: 630,
        alt: 'Mercy - Frontend Developer',
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang='en'
      className={`${inter.variable} dark`}
      suppressHydrationWarning
    >
      <body className={`${inter.className} bg-white dark:bg-gray-900`}>
        <ThemeProvider>
          <Navbar />
          <main className='pt-[8rem] min-h-screen'>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
