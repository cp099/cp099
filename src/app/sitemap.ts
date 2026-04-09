import { MetadataRoute } from 'next';
import { getAllContent } from '@/lib/content';
import { CATEGORY_MAP, ContentCategory } from '@/types/system';

// This line is mandatory for 'output: export' in Next.js 15+
export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://cp099.github.io/cp099';
  const allContent = getAllContent();

  // We use a fixed date for the static export to avoid hydration/build mismatches
  const buildDate = new Date();

  // 1. Core Static Pages
  const staticPages = ['', '/work', '/journey', '/archive'].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: buildDate,
    changeFrequency: 'daily' as const,
    priority: route === '' ? 1.0 : 0.8,
  }));

  // 2. Directory Hub Pages
  const directoryPages: MetadataRoute.Sitemap = [];
  (Object.keys(CATEGORY_MAP) as ContentCategory[]).forEach((category) => {
    CATEGORY_MAP[category].forEach((sub) => {
      directoryPages.push({
        url: `${baseUrl}/${category}/${sub}`,
        lastModified: buildDate,
        changeFrequency: 'weekly' as const,
        priority: 0.7,
      });
    });
  });

  // 3. Individual Item Pages
  const itemPages = allContent.map((item) => ({
    url: `${baseUrl}/item/${item.slug}`,
    lastModified: new Date(item.date),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  return [...staticPages, ...directoryPages, ...itemPages];
}