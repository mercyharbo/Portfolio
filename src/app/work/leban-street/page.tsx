import ProjectDetail from '@/components/project-detail'
import { lebanStreetStory } from '@/data/project-stories'
import { workProjects } from '@/lib/projects'
import { absoluteUrl, createMetadata, siteConfig } from '@/lib/seo'

const project = workProjects.find(item => item.slug === 'leban-street')!

export const metadata = createMetadata({
  title: 'Leban Street — Restaurant ordering and operations',
  description: 'Frontend engineering for Leban Street by Afolabi Ridwan Damilare: customer ordering plus kitchen, sales, inventory, and super admin dashboards for orders, revenue, and restaurant operations.',
  path: '/work/leban-street',
  image: project.cover.src,
  imageAlt: project.cover.alt,
})

export default function LebanStreetProjectPage() {
  const schema = {
    '@context': 'https://schema.org', '@type': 'CreativeWork',
    name: project.title, description: project.description,
    url: absoluteUrl('/work/leban-street'), image: absoluteUrl(project.cover.src),
    contributor: { '@type': 'Person', name: siteConfig.author.name, url: siteConfig.url },
    about: project.categories,
  }
  return <><script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} /><ProjectDetail project={project} story={lebanStreetStory} /></>
}
