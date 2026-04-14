import React from 'react';
import Image from 'next/image';
import { 
  ParagraphBlock, 
  HeadingBlock, 
  HighlightBlock, 
  ListBlock,
  ImageBlock,
  CodeBlock,
  DataBlock 
} from '@/types/system';

export const Heading = ({ block }: { block: HeadingBlock }) => {
  const { level, content } = block;
  if (level === 1) return <h1 className="text-xl md:text-2xl font-bold text-white mb-4 tracking-tight">{content}</h1>;
  if (level === 2) return <h2 className="text-sm font-bold text-white mt-8 mb-2 border-l border-cyan/50 pl-2 uppercase tracking-wider">{content}</h2>;
  return <h3 className="text-xs font-bold text-cyan mt-6 mb-1 uppercase tracking-widest">{content}</h3>;
};

export const Paragraph = ({ block }: { block: ParagraphBlock }) => (
  <p 
    className="text-sm leading-relaxed text-slate/90 mb-3 last:mb-0 transition-colors duration-500 hover:text-white" 
    dangerouslySetInnerHTML={{ __html: block.content }} 
  />
);

export const Highlight = ({ block }: { block: HighlightBlock }) => (
  <div className="my-6 p-4 border-l border-cyan/40 bg-white/[0.01] rounded-r transition-all duration-300 hover:bg-white/[0.03]">
    <p className="text-base italic text-light-slate leading-normal">
      "{block.content}"
    </p>
  </div>
);

export const List = ({ block }: { block: ListBlock }) => {
  const Tag = block.ordered ? 'ol' : 'ul';
  return (
    <Tag className="mb-4 ml-1 space-y-1">
      {block.items.map((item, i) => (
        <li key={i} className="flex items-start text-slate text-sm group">
          <span className="text-cyan/40 mr-2 select-none font-mono text-[10px] mt-0.5">
            {block.ordered ? `${i + 1}.` : '—'}
          </span>
          <span className="group-hover:text-white transition-colors">{item}</span>
        </li>
      ))}
    </Tag>
  );
};

export const ImageComponent = ({ block }: { block: ImageBlock }) => {
  const isLogo = block.src.includes('logo');
  const layout = block.layout || 'portrait'; 

  return (
    <figure className="my-8 group">
      
      {isLogo ? (
        <div className="flex justify-center">
          <Image
            src={block.src}
            alt={block.alt}
            width={220}
            height={220}
            className="opacity-90 object-contain"
          />
        </div>
      ) : (
        <div className="relative w-full overflow-hidden rounded-lg border border-white/10 bg-white/[0.02]">
          <Image 
            src={block.src}
            alt={block.alt}
            width={1200}
            height={800}
            className={
              layout === 'landscape'
                ? 'w-full aspect-video object-cover transition-transform duration-700 group-hover:scale-105'
                : 'w-full max-w-2xl mx-auto h-auto object-contain transition-transform duration-700 group-hover:scale-105'
            }
          />
        </div>
      )}

      {block.caption && (
        <figcaption className="mt-3 text-[10px] font-mono uppercase tracking-widest text-white/30 px-2 text-center">
          {block.caption}
        </figcaption>
      )}
    </figure>
  );
};

export const CodeComponent = ({ block }: { block: CodeBlock }) => (
  <div className="my-6 rounded-lg border border-white/10 bg-black/40 overflow-hidden">
    <div className="flex items-center justify-between px-4 py-2 border-b border-white/5 bg-white/[0.02]">
      <span className="text-[10px] font-mono text-cyan/60 uppercase tracking-widest">{block.language}</span>
      <div className="flex gap-1.5">
        <div className="w-2 h-2 rounded-full bg-white/5" />
        <div className="w-2 h-2 rounded-full bg-white/5" />
      </div>
    </div>
    <pre className="p-4 overflow-x-auto text-xs md:text-sm font-mono leading-relaxed text-blue-100/80">
      <code>{block.code}</code>
    </pre>
  </div>
);

export const DataComponent = ({ block }: { block: DataBlock }) => (
  <div className="my-8 grid grid-cols-2 md:grid-cols-4 gap-px bg-white/10 border border-white/10 rounded-lg overflow-hidden">
    {block.metrics.map((metric, i) => (
      <div key={i} className="bg-navy p-4 flex flex-col gap-1">
        <span className="text-[9px] font-mono uppercase tracking-[0.2em] text-white/30">{metric.label}</span>
        <span className="text-base font-bold text-cyan-bright tracking-tight">{metric.value}</span>
      </div>
    ))}
  </div>
);