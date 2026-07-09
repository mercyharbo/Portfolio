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
    url: 'https://codewithmercy.codes/',
    siteName: 'Afolabi Ridwan Damilare | Portfolio',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://codewithmercy.codes/og-image.png',
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
    images: ['https://codewithmercy.codes/og-image.png'],
  },
  verification: {
    google: 'Qu4_ZKMKHSIy8eSdyq5p6YDeAwUksSAnayzck2w2ZvA',
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
  metadataBase: new URL('https://codewithmercy.codes/'),
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfilePage",
            "mainEntity": {
              "@type": "Person",
              "name": "Afolabi Ridwan Damilare",
              "alternateName": "codewithmercy",
              "jobTitle": "Frontend Engineer",
              "url": "https://codewithmercy.codes",
              "image": "https://codewithmercy.codes/img2.JPEG",
              "sameAs": [
                "https://github.com/mercyharbo",
                "https://x.com/codewithmercy",
                "https://linkedin.com/in/codewithmercy1",
                "https://instagram.com/codewithmercy"
              ],
              "knowsAbout": [
                "Frontend Development",
                "React",
                "Next.js",
                "TypeScript",
                "JavaScript",
                "Web Development",
                "UI/UX Design",
                "Web Performance Optimization"
              ],
              "description": "Frontend Engineer with 4+ years of experience architecting fast, scalable, and highly functional web applications using Next.js and TypeScript."
            }
          })
        }}
      />
      <body className='relative space-y-5'>
        <Header />
        <main className='pt-10 lg:pt-10 min-h-screen'>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
