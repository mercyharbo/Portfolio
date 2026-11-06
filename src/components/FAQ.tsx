import { createFaqPageJsonLd, type FaqItem } from '@/lib/seo'
import AnimatedAccordion from './animated-accordion'
import { SectionHeading, SectionLabel } from './editorial'

const faqs: FaqItem[] = [
  { question: 'What kind of frontend projects do you work on?', answer: 'I build SaaS dashboards, e-commerce interfaces, marketing websites, and product workflows with React, Next.js, TypeScript, and Tailwind CSS.' },
  { question: 'Can you improve an existing React or Next.js app?', answer: 'Yes. I can review the current frontend, resolve UX issues, improve performance, and strengthen the architecture through focused updates.' },
  { question: 'Do you handle performance and technical SEO?', answer: 'Yes. My work includes Core Web Vitals, metadata, sitemaps, structured data, image loading, and crawlable page structure.' },
  { question: 'How do we start working together?', answer: 'Send me the goal, the current state of the project, and any timing or technical constraints. We can then agree on the scope and work in clear milestones.' },
  { question: 'Do you work with teams as well as founders?', answer: 'Yes. I work with founders, designers, and engineering teams, including freelance and contract engagements.' },
]

export default function FAQ() {
  return (
    <section id='faq' aria-labelledby='faq-heading' className='editorial-light border-t border-gray-200 bg-white text-black'>
      <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(createFaqPageJsonLd(faqs)) }} />
      <div className='editorial-container editorial-grid grid gap-12 py-20 md:grid-cols-4 md:gap-0 md:py-28'>
        <div className='flex flex-col gap-8 self-start md:sticky md:top-8 md:col-span-2 md:pr-16'><SectionLabel>Before we start</SectionLabel><SectionHeading id='faq-heading' text='A few useful answers.' /></div>
        <div className='md:col-span-2'><AnimatedAccordion defaultOpen={0} items={faqs.map(faq => ({ title: faq.question, content: <p className='max-w-lg text-sm leading-relaxed text-gray-600'>{faq.answer}</p> }))} /></div>
      </div>
    </section>
  )
}
