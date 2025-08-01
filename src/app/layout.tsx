import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import { ThemeProvider } from '@/components/ThemeContext'
import type { Metadata } from 'next'
import type React from 'react'
import './globals.css'

export const viewport: Record<string, string | number | boolean> = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  viewportFit: 'cover',
}

export const metadata: Metadata = {
  title: 'Afolabi Ridwan D | Frontend Engineer',
  description:
    'Frontend Engineer with 4+ years of expertise in React.js, Next.js, and TypeScript. Building beautiful, responsive, and accessible web applications.',
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
    'Creative Developer',
    'Web Applications',
    'Responsive Design',
    'Accessible Web Design',
    'Frontend Engineer',
    'Web Performance',
    'Web Accessibility',
    'Frontend Technologies',
    'Web Design',
    'Frontend Portfolio',
  ],
  authors: [{ name: 'Afolabi Ridwan D', url: 'https://github.com/mercyharbo' }],
  creator: 'codewithmercy',
  publisher: 'Code With Mercy',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'Afolabi Ridwan D | Frontend Engineer',
    description:
      'Frontend Engineer specializing in building responsive and accessible web applications with modern technologies like React.js, Next.js, and TypeScript.',
    url: 'https://codewithmercy.netlify.app/',
    siteName: 'Afolabi Ridwan D | Portfolio',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Afolabi Ridwan D - Frontend Engineer',
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Afolabi Ridwan D | Frontend Engineer ',
    description:
      'Frontend Engineer crafting beautiful web experiences with React.js, Next.js, and TypeScript. Check out my portfolio!',
    creator: '@codewithmercy',
    images: ['/og-image.png'],
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
  metadataBase: new URL('https://codewithmercy.netlify.app/'),
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
    <html lang='en' className='scroll-smooth' suppressHydrationWarning>
      <body className='relative'>
        <ThemeProvider>
          <Navbar />
          <main className='pt-20 lg:pt-24 min-h-screen'>{children}</main>
          <Footer />

          {/* Chatbot widget
          <ChatbotWidget /> */}
        </ThemeProvider>
      </body>
    </html>
  )
}
