import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import { ThemeProvider } from '@/components/ThemeContext'
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
  description:
    'Frontend Developer with 4+ years of expertise in React.js, Next.js, and TypeScript. Building beautiful, responsive, and accessible web applications.',
  keywords: [
    'Frontend Developer',
    'React.js Developer',
    'Next.js Expert',
    'TypeScript Developer',
    'UI/UX Development',
    'Web Development',
    'JavaScript',
    'GSAP Animation',
    'Tailwind CSS',
    'Portfolio',
    'Mercy',
    'Code With Mercy',
  ],
  authors: [{ name: 'Damilare', url: 'https://github.com/mercyharbo' }],
  creator: 'Mercy',
  publisher: 'Code With Mercy',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'Code With Mercy | Creative Frontend Developer',
    description:
      'Frontend Developer specializing in building responsive and accessible web applications with modern technologies like React.js, Next.js, and TypeScript.',
    url: 'https://codewithmercy.netlify.app/', // Replace with your actual domain
    siteName: 'Code With Mercy Portfolio',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/avatar1.JPEG',
        width: 1200,
        height: 630,
        alt: 'Mercy - Frontend Developer',
        type: 'image/jpeg',
      },
      {
        url: '/avatar2.JPEG',
        width: 1200,
        height: 630,
        alt: 'Mercy - Creative Developer Profile',
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Code With Mercy | Creative Frontend Developer',
    description:
      'Frontend Developer crafting beautiful web experiences with React.js, Next.js, and TypeScript. Check out my portfolio!',
    creator: '@codewithmercy',
    images: ['/avatar1.JPEG'],
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
    nocache: true,
  },
  category: 'technology',
  classification: 'Portfolio',
  referrer: 'origin-when-cross-origin',
  metadataBase: new URL('https://codewithmercy.netlify.app/'), // Replace with your actual domain
  alternates: {
    canonical: '/',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en' className={`scroll-smooth`} suppressHydrationWarning>
      <body className={`${inter.className}`}>
        <ThemeProvider>
          <Navbar />
          <main className='pt-[8rem] min-h-screen'>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
