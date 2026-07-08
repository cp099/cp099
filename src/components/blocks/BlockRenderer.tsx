import { Block } from '@/types/system';
import { 
  CodeComponent, 
  DataComponent, 
  Heading, 
  Highlight, 
  ImageComponent, 
  List, 
  Paragraph 
} from './BlockComponents';

interface BlockRendererProps {
  blocks: Block[];
}

export default function BlockRenderer({ blocks }: BlockRendererProps) {
  const firstImageIndex = blocks.findIndex(b => b.type === 'image');

  return (
    <div className="max-w-5xl">
      {blocks.map((block, index) => {
        switch (block.type) {
          case 'heading':
            return <Heading key={index} block={block} />;
          case 'paragraph':
            return <Paragraph key={index} block={block} />;
          case 'highlight':
            return <Highlight key={index} block={block} />;
          case 'list':
            return <List key={index} block={block} />;
          case 'image':
            return <ImageComponent key={index} block={block} priority={index === firstImageIndex} />;
          case 'code':
            return <CodeComponent key={index} block={block} />;
          case 'data':
            return <DataComponent key={index} block={block} />;
          default:
            return null;
        }
      })}
    </div>
  );
}