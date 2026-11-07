import ProjectDetail from '@/components/project-detail'
import { swiftLinkStory } from '@/data/project-stories'
import { workProjects } from '@/lib/projects'
import { absoluteUrl, createMetadata, siteConfig } from '@/lib/seo'

const project = workProjects.find(item => item.slug === 'swiftlink')!

export const metadata = createMetadata({
  title: 'SwiftLink — Self-initiated fintech product',
  description: 'Explore SwiftLink, a self-initiated full-stack fintech product by Afolabi Ridwan Damilare, covering bill payments, wallet funding, provider reconciliation, customer support, and admin operations.',
  path: '/work/swiftlink',
  image: project.cover.src,
  imageAlt: project.cover.alt,
})

export default function SwiftLinkProjectPage() {
  const schema = {
    '@context': 'https://schema.org', '@type': 'CreativeWork',
    name: project.title, description: project.description,
    url: absoluteUrl('/work/swiftlink'), image: absoluteUrl(project.cover.src),
    creator: { '@type': 'Person', name: siteConfig.author.name, url: siteConfig.url },
    about: project.categories,
  }
  return <><script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} /><ProjectDetail project={project} story={swiftLinkStory} /></>
}
