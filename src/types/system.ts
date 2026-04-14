export type ContentCategory = 'work' | 'journey' | 'archive';

export type ContentType = 
  | 'project' 
  | 'role' 
  | 'research' 
  | 'major build' 
  | 'learning' 
  | 'school' 
  | 'growth' 
  | 'experience' 
  | 'experiment' 
  | 'note' 
  | 'snippet';

export const CATEGORY_MAP: Record<ContentCategory, ContentType[]> = {
  work: ['project', 'role', 'research', 'major build'],
  journey: ['learning', 'school', 'growth', 'experience'],
  archive: ['experiment', 'note', 'snippet']
};

interface BaseBlock {
  type: string;
}

export interface ParagraphBlock extends BaseBlock {
  type: 'paragraph';
  content: string;
}

export interface HeadingBlock extends BaseBlock {
  type: 'heading';
  level: 1 | 2 | 3;
  content: string;
}

export interface ImageBlock extends BaseBlock {
  type: 'image';
  src: string;
  alt: string;
  caption?: string;
  layout?: 'portrait' | 'landscape';
}

export interface HighlightBlock extends BaseBlock {
  type: 'highlight';
  content: string;
}

export interface ListBlock extends BaseBlock {
  type: 'list';
  ordered: boolean;
  items: string[];
}

export interface CodeBlock extends BaseBlock {
  type: 'code';
  language: string;
  code: string;
}

export interface DataBlock extends BaseBlock {
  type: 'data';
  metrics: {
    label: string;
    value: string;
  }[];
}

export type Block =
  | ParagraphBlock
  | HeadingBlock
  | ImageBlock
  | HighlightBlock
  | ListBlock
  | CodeBlock
  | DataBlock;

export interface ContentItem {
  slug: string;
  title: string;
  date: string;
  category: ContentCategory;
  type: ContentType; 
  summary: string;
  blocks: Block[];
  uid?: string;
  version?: string; 
}