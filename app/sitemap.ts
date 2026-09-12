import type { MetadataRoute } from 'next';
import { siteConfig } from '@/config/site';
import { projects } from '@/data/projects';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.siteUrl;

  const staticRoutes = [
    '',
    '/projects',
    '/kitchens',
    '/wardrobes',
    '/designers',
    '/about',
    '/contacts',
  ].map((route) => ({
    url: `${base}${route}`,
    lastModified: new Date(),
  }));

  const projectRoutes = projects.map((project) => ({
    url: `${base}/projects/${project.slug}`,
    lastModified: new Date(),
  }));

  return [...staticRoutes, ...projectRoutes];
}
