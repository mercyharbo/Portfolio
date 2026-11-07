import ProjectDetail from '@/components/project-detail'
import { hrisStory } from '@/data/project-stories'
import { workProjects } from '@/lib/projects'
import { absoluteUrl, createMetadata, siteConfig } from '@/lib/seo'

const project = workProjects.find(item => item.slug === 'hris')!

export const metadata = createMetadata({
  title: 'HRIS — Employee and HR operations frontend',
  description: 'HRIS frontend development by Afolabi Ridwan Damilare: employee onboarding, staff records, document review, leave approvals, offboarding, and workforce analytics.',
  path: '/work/hris',
  image: project.cover.src,
  imageAlt: project.cover.alt,
})

export default function HrisProjectPage() {
  const schema = {
    '@context': 'https://schema.org', '@type': 'CreativeWork',
    name: project.title, description: project.description,
    url: absoluteUrl('/work/hris'), image: absoluteUrl(project.cover.src),
    contributor: { '@type': 'Person', name: siteConfig.author.name, url: siteConfig.url },
    about: project.categories,
  }
  return <><script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} /><ProjectDetail project={project} story={hrisStory} /></>
}
