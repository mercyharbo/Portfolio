import Footer from '@/components/Footer'
import Header from '@/components/Header'
import type { Metadata } from 'next'
import type React from 'react'
import './globals.css'

export const viewport: Record<string, string | number | boolean> = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
}

export const metadata: Metadata = {
  title: 'Afolabi Ridwan Damilare | Frontend Engineer',
  description:
    'Frontend Engineer with 4+ years of experience architecting fast, scalable, and highly functional web applications using Next.js and TypeScript. I turn complex problems into digital products that drive real business results.',
  keywords: [
    'Frontend Developer',
    'React.js Developer',
    'Next.js Expert',
    'TypeScript Developer',
    'Software Engineer',
    'Web Architecture',
    'UI/UX Integration',
    'GSAP Animation',
    'Tailwind CSS',
    'Afolabi Ridwan Damilare',
    'Code With Mercy',
    'Frontend Portfolio',
    'Web Performance Optimization',
    'E-commerce Development',
    'SaaS Development',
  ],
  authors: [
    { name: 'Afolabi Ridwan Damilare', url: 'https://github.com/mercyharbo' },
  ],
  creator: 'codewithmercy',
  publisher: 'Code With Mercy',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'Afolabi Ridwan Damilare | Frontend Engineer',
    description:
      'I build fast, scalable web apps that drive real business results. Explore my portfolio to see high-performance frontend architecture in action.',
    url: 'https://codewithmercy.vercel.app/',
    siteName: 'Afolabi Ridwan Damilare | Portfolio',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://codewithmercy.vercel.app/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Code With Mercy - Frontend Engineer Portfolio',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Afolabi Ridwan Damilare | Frontend Engineer',
    description:
      'I build fast, scalable web apps that drive real business results. Explore my portfolio to see high-performance frontend architecture in action.',
    creator: '@codewithmercy',
    images: ['https://codewithmercy.vercel.app/og-image.png'],
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
  metadataBase: new URL('https://codewithmercy.vercel.app/'),
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
    <html lang='en' className='scroll-smooth'>
      <script
        async
        defer
        src='https://gettinlytics.vercel.app/api/tracker/97fefa4e-9b4e-4c87-838c-e8d2155c56a7'
      ></script>
      <body className='relative space-y-5'>
        <Header />
        <main className='pt-10 lg:pt-10 min-h-screen'>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
