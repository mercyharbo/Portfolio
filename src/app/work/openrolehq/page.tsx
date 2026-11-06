import ProjectDetail from '@/components/project-detail'
import { openRoleStory } from '@/data/project-stories'
import { workProjects } from '@/lib/projects'
import { absoluteUrl, createMetadata, siteConfig } from '@/lib/seo'

const project = workProjects.find(item => item.slug === 'openrolehq')!

export const metadata = createMetadata({
  title: 'OpenRoleHQ — Frontend project',
  description: 'Frontend work on OpenRoleHQ: onboarding, résumé tooling, AI-assisted workflows, and dashboard interfaces by Afolabi Ridwan Damilare.',
  path: '/work/openrolehq',
})

export default function OpenRoleProjectPage() {
  const schema = {
    '@context': 'https://schema.org', '@type': 'CreativeWork',
    name: project.title, description: project.description,
    url: absoluteUrl('/work/openrolehq'), image: absoluteUrl(project.image),
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
