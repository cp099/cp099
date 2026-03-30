// src/content/work/system-architecture.ts
import { ContentItem } from '@/types/system';

export const content: ContentItem = {
  slug: 'system-architecture',
  title: 'OS Architecture',
  date: '2025-01-24',
  category: 'work',
  type: 'project',
  uid: 'CPP-2025-001-ALPHA',
  summary: 'A deep dive into the modular block system driving this site.',
  blocks: [
    { 
      type: 'paragraph', 
      content: 'The core of this system is <strong>modularity</strong>. By treating content as data, we decouple the visual representation from the information itself. This allows for a truly scalable personal workspace.' 
    },
    
    // THE DATA BLOCK: Perfect for technical specs or quick facts
    { 
      type: 'data', 
      metrics: [
        { label: 'Latency', value: '14ms' },
        { label: 'System Type', value: 'Modular' },
        { label: 'Build Version', value: 'v1.0.Stable' },
        { label: 'Environment', value: 'Next.js 15' }
      ] 
    },

    { 
      type: 'highlight', 
      content: 'Information density is the key to an efficient personal operating system.' 
    },

    { 
      type: 'heading', 
      level: 2, 
      content: 'Technical Stack' 
    },

    { 
      type: 'list', 
      ordered: false, 
      items: [
        'Next.js 15 (App Router) for the core framework',
        'Tailwind CSS v4 for the design system',
        'TypeScript for strict data modeling',
        'Static Export for high-performance hosting'
      ] 
    },

    { 
      type: 'heading', 
      level: 2, 
      content: 'System Configuration' 
    },

    { 
      type: 'paragraph', 
      content: 'The entire system is governed by a strict TypeScript interface to ensure data integrity across all modules.' 
    },

    // THE CODE BLOCK: High-density technical documentation
    { 
      type: 'code', 
      language: 'typescript', 
      code: `interface PersonalOSConfig {
  density: 'high' | 'ultra';
  navigation: 'split-nav';
  hosting: 'static-export';
  theme: {
    primary: 'navy';
    accent: 'cyan';
  };
}` 
    },

    { 
      type: 'heading', 
      level: 2, 
      content: 'Visual Asset Integration' 
    },

    // THE IMAGE BLOCK: Clean, framed visual content
    { 
      type: 'image', 
      src: '/cp099/assets/portrait.jpg', 
      alt: 'System Asset Check', 
      caption: 'Visual asset integration check using the standard portrait asset.' 
    },

    { 
      type: 'paragraph', 
      content: 'This concludes the architectural overview of the system. Every block seen here is a reusable component designed for high-density information display.' 
    },
  ]
};