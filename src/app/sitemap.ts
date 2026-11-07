import type { MetadataRoute } from 'next'
import { siteUrl } from '@/lib/seo'
import { getProjectDetailHref, workProjects } from '@/lib/projects'

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${siteUrl}/contact`,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1.0,
    },
    {
      url: `${siteUrl}/work`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${siteUrl}/about`,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ]
  const blogRoutes: MetadataRoute.Sitemap = []
  const projectRoutes: MetadataRoute.Sitemap = workProjects.flatMap(project => {
    const path = getProjectDetailHref(project)
    return path ? [{ url: `${siteUrl}${path}`, changeFrequency: 'monthly' as const, priority: 0.8 }] : []
  })

  return [...staticRoutes, ...blogRoutes, ...projectRoutes]
}
