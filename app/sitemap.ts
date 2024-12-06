import { MetadataRoute } from 'next'

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://secureit-saudi.com'

const routes = {
  static: [
    '',
    '/contact',
    '/about',
  ],
  services: [
    '/services/it-security-audit',
    '/services/compliance-assessment',
    '/services/cyber-security',
    '/services/risk-management',
  ],
  frameworks: [
    '/frameworks/sama',
    '/frameworks/nca',
    '/frameworks/cma',
    '/frameworks/iso27001',
  ],
  resources: [
    '/resources',
    '/blog/sama-updates',
    '/blog/nca-guidelines',
    '/blog/saudi-compliance',
    '/case-studies',
  ],
}

export default function sitemap(): MetadataRoute.Sitemap {
  const currentDate = new Date()
  
  // Transform routes into sitemap format
  const transformRoute = (route: string, priority: number = 0.8) => ({
    url: `${baseUrl}${route}`,
    lastModified: currentDate,
    changeFrequency: 'weekly' as const,
    priority,
  })

  return [
    // Home page gets highest priority
    ...routes.static.map(route => 
      transformRoute(route, route === '' ? 1 : 0.9)
    ),
    // Service pages get high priority
    ...routes.services.map(route => 
      transformRoute(route, 0.8)
    ),
    // Framework pages also get high priority
    ...routes.frameworks.map(route => 
      transformRoute(route, 0.8)
    ),
    // Resource pages get slightly lower priority
    ...routes.resources.map(route => 
      transformRoute(route, 0.7)
    ),
  ]
} 