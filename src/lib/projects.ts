import projectData from '@/data/projects.json'

export type Project = (typeof projectData)[number]

// Shared by the homepage, collection, navigation, and project dialogs.
// Replace image/website values in projects.json when new assets are ready.
const displayOrder = ['openrolehq', 'hris', 'bukky-group', 'leban-street']

export const workProjects: Project[] = displayOrder.map(slug => {
  const project = projectData.find(item => item.slug === slug)
  if (!project) throw new Error(`Missing portfolio project: ${slug}`)
  return project
})

export const featuredProjects = workProjects.slice(0, 3)

export const unavailableLinkLabel = 'Public link unavailable'
