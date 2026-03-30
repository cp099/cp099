import { ContentItem } from '@/types/system';
import { content as systemArchitecture } from '@/content/work/system-architecture';
import { content as learningNextjs } from '@/content/journey/learning-nextjs';

const ALL_CONTENT: ContentItem[] = [
  systemArchitecture,
  learningNextjs,
];


export function getAllContent(): ContentItem[] {
  return [...ALL_CONTENT].sort((a, b) => 
    new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export function getContentByCategory(category: string): ContentItem[] {
  return getAllContent().filter((item) => item.category === category);
}

export function getContentBySlug(slug: string): ContentItem | undefined {
  return ALL_CONTENT.find((item) => item.slug === slug);
}