import ProjectDetail from '@/components/project-detail'
import { openRoleStory } from '@/data/project-stories'
import { workProjects } from '@/lib/projects'
import { absoluteUrl, createMetadata, siteConfig } from '@/lib/seo'

const project = workProjects.find(item => item.slug === 'openrolehq')!

export const metadata = createMetadata({
  title: 'OpenRoleHQ — Candidate platform frontend',
  description: 'Frontend engineering for OpenRoleHQ by Afolabi Ridwan Damilare: candidate onboarding, profiles, AI writing tools, application dashboards, billing, and browser-extension connection.',
  path: '/work/openrolehq',
  image: project.cover.src,
  imageAlt: project.cover.alt,
})

export default function OpenRoleProjectPage() {
  const schema = {
    '@context': 'https://schema.org', '@type': 'CreativeWork',
    name: project.title, description: project.description,
    url: absoluteUrl('/work/openrolehq'), image: absoluteUrl(project.cover.src),
    contributor: { '@type': 'Person', name: siteConfig.author.name, url: siteConfig.url },
    about: project.categories,
  }
  return (
    <>
      <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <ProjectDetail project={project} story={openRoleStory} />
    </>
  )
}
