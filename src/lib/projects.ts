import projectData from '@/data/projects.json'

export interface ProjectMedia {
  src: string
  original: string
  width: number
  height: number
  alt: string
  caption: string
}

export interface Project {
  id: number
  slug: string
  name: string
  title: string
  description: string
  notes: string
  location: string
  categories: string[]
  tech_stack: string[]
  website?: string
  detailPath: string
  role?: string
  cover: ProjectMedia
  gallery?: ProjectMedia[]
  galleryNote?: string
}

// Shared by the homepage, collection, navigation, and project pages.
// Media and live destinations have one source of truth in projects.json.
const displayOrder = ['leban-street', 'pawen', 'swiftlink', 'openrolehq', 'hris']

export const workProjects: Project[] = displayOrder.map(slug => {
  const project = projectData.find(item => item.slug === slug)
  if (!project) throw new Error(`Missing portfolio project: ${slug}`)
  return project
})

export const featuredProjects = ['leban-street', 'pawen', 'swiftlink'].map(slug => {
  const project = workProjects.find(item => item.slug === slug)
  if (!project) throw new Error(`Missing featured project: ${slug}`)
  return project
})

export const unavailableLinkLabel = 'Public link unavailable'

export function getProjectDetailHref(project: Project): string {
  return project.detailPath
}
