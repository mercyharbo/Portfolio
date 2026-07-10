import type { Metadata } from 'next'

export const siteConfig = {
  name: 'CodeWithMercy',
  title: 'Afolabi Ridwan Damilare | Frontend Engineer',
  titleTemplate: '%s | CodeWithMercy',
  description:
    'Frontend Engineer with 4+ years of experience architecting fast, scalable, and highly functional web applications using Next.js and TypeScript. I turn complex problems into digital products that drive real business results.',
  shortDescription:
    'I build fast, scalable web apps that drive real business results. Explore my portfolio to see high-performance frontend architecture in action.',
  url: 'https://codewithmercy.codes',
  ogImage: '/og-image.png',
  ogImageAlt: 'Code With Mercy - Frontend Engineer Portfolio',
  locale: 'en_US',
  author: {
    name: 'Afolabi Ridwan Damilare',
    url: 'https://github.com/mercyharbo',
  },
  creator: 'codewithmercy',
  publisher: 'Code With Mercy',
  social: {
    github: 'https://github.com/mercyharbo',
    x: 'https://x.com/codewithmercy',
    linkedin: 'https://linkedin.com/in/codewithmercy1',
    instagram: 'https://instagram.com/codewithmercy',
    twitterHandle: '@codewithmercy',
  },
} as const

export const siteUrl = siteConfig.url

export const defaultKeywords = [
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
]

export const defaultRobots: Metadata['robots'] = {
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
}

type SeoOptions = {
  title?: string
  description?: string
  path?: string
  keywords?: string[]
  image?: string
  imageAlt?: string
  type?: 'website' | 'article'
}

export function absoluteUrl(path = '/') {
  if (path.startsWith('http')) {
    return path
  }

  return new URL(path, siteConfig.url).toString()
}

export function createMetadata({
  title,
  description = siteConfig.description,
  path = '/',
  keywords = defaultKeywords,
  image = siteConfig.ogImage,
  imageAlt = siteConfig.ogImageAlt,
  type = 'website',
}: SeoOptions = {}): Metadata {
  const resolvedTitle = title ?? siteConfig.title
  const resolvedImage = absoluteUrl(image)

  return {
    title: {
      default: resolvedTitle,
      template: siteConfig.titleTemplate,
    },
    description,
    keywords,
    authors: [siteConfig.author],
    creator: siteConfig.creator,
    publisher: siteConfig.publisher,
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    metadataBase: new URL(siteConfig.url),
    alternates: {
      canonical: path,
    },
    openGraph: {
      title: resolvedTitle,
      description:
        description === siteConfig.description
          ? siteConfig.shortDescription
          : description,
      url: absoluteUrl(path),
      siteName: 'Afolabi Ridwan Damilare | Portfolio',
      locale: siteConfig.locale,
      type,
      images: [
        {
          url: resolvedImage,
          width: 1200,
          height: 630,
          alt: imageAlt,
          type: 'image/png',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: resolvedTitle,
      description:
        description === siteConfig.description
          ? siteConfig.shortDescription
          : description,
      creator: siteConfig.social.twitterHandle,
      images: [resolvedImage],
    },
    verification: {
      google: 'Qu4_ZKMKHSIy8eSdyq5p6YDeAwUksSAnayzck2w2ZvA',
    },
    robots: defaultRobots,
    category: 'technology',
    classification: 'Portfolio',
    referrer: 'origin-when-cross-origin',
  }
}

export function createProfilePageJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfilePage',
    mainEntity: {
      '@type': 'Person',
      name: siteConfig.author.name,
      alternateName: siteConfig.creator,
      jobTitle: 'Frontend Engineer',
      url: siteConfig.url,
      image: absoluteUrl('/IMG-1.png'),
      sameAs: [
        siteConfig.social.github,
        siteConfig.social.x,
        siteConfig.social.linkedin,
        siteConfig.social.instagram,
      ],
      knowsAbout: [
        'Frontend Development',
        'React',
        'Next.js',
        'TypeScript',
        'JavaScript',
        'Web Development',
        'UI/UX Design',
        'Web Performance Optimization',
      ],
      description: siteConfig.description,
    },
  }
}

export function createWebsiteJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: siteConfig.name,
    url: siteConfig.url,
    publisher: {
      '@type': 'Person',
      name: siteConfig.author.name,
      alternateName: siteConfig.creator,
    },
  }
}

export type FaqItem = {
  question: string
  answer: string
}

export function createFaqPageJsonLd(items: FaqItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  }
}
