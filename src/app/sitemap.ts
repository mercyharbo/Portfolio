import type { MetadataRoute } from 'next'
import { siteUrl } from '@/lib/seo'

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1.0,
    },
  ]
  const blogRoutes: MetadataRoute.Sitemap = []
  const projectRoutes: MetadataRoute.Sitemap = []

  return [...staticRoutes, ...blogRoutes, ...projectRoutes]
}
