import ProjectDetail from '@/components/project-detail'
import { pawenStory } from '@/data/project-stories'
import { workProjects } from '@/lib/projects'
import { absoluteUrl, createMetadata, siteConfig } from '@/lib/seo'

const project = workProjects.find(item => item.slug === 'pawen')!

export const metadata = createMetadata({
  title: 'PAWEN — Event website and participation flows',
  description: 'Full frontend implementation for PAWEN by Afolabi Ridwan Damilare: connected event pages, Contentful content, nomination and registration forms, travel guidance, and helpdesk integration.',
  path: '/work/pawen',
  image: project.cover.src,
  imageAlt: project.cover.alt,
})

export default function PawenProjectPage() {
  const schema = {
    '@context': 'https://schema.org', '@type': 'CreativeWork',
    name: project.title, description: project.description,
    url: absoluteUrl('/work/pawen'), image: absoluteUrl(project.cover.src),
    contributor: { '@type': 'Person', name: siteConfig.author.name, url: siteConfig.url },
    about: project.categories,
  }
  return <><script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} /><ProjectDetail project={project} story={pawenStory} /></>
}
