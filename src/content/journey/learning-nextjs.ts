// src/content/journey/learning-nextjs.ts
import { ContentItem } from '@/types/system';

export const content: ContentItem = {
  slug: 'learning-nextjs',
  title: 'The Next.js Evolution',
  date: 'December 2024',
  category: 'journey',
  type: 'learning',
  summary: 'Reflecting on the transition from traditional web apps to the App Router.',
  blocks: [
    { type: 'paragraph', content: 'The shift to Server Components has redefined how I think about frontend architecture.' },
    { type: 'heading', level: 2, content: 'Key Takeaways' },
    { type: 'list', ordered: true, items: ['Data fetching is simplified', 'Layouts are first-class citizens', 'Bundle sizes are significantly smaller'] }
  ]
};