import Footer from '@/components/Footer'
import Header from '@/components/Header'
import {
  createMetadata,
  createProfilePageJsonLd,
  createWebsiteJsonLd,
} from '@/lib/seo'
import type { Metadata } from 'next'
import type React from 'react'
import './globals.css'

export const viewport: Record<string, string | number | boolean> = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
}

export const metadata: Metadata = createMetadata()

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const jsonLd = [createProfilePageJsonLd(), createWebsiteJsonLd()]

  return (
    <html lang='en' className='scroll-smooth'>
      <script
        async
        defer
        src='https://gettinlytics.vercel.app/api/tracker/97fefa4e-9b4e-4c87-838c-e8d2155c56a7'
      ></script>
      <body className='relative space-y-5'>
        {jsonLd.map((schema) => (
          <script
            key={schema['@type']}
            type='application/ld+json'
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          />
        ))}
        <Header />
        <main className='pt-10 lg:pt-10 min-h-screen'>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
