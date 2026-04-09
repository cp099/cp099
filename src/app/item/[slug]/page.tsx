import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getAllContent, getContentBySlug } from '@/lib/content';
import BlockRenderer from '@/components/blocks/BlockRenderer';

export const dynamicParams = false;

export function generateStaticParams() {
  const allContent = getAllContent();
  return allContent.map((item) => ({
    slug: item.slug,
  }));
}

type Props = {
  params: Promise<{ slug: string }>;
};

/**
 * Dynamic SEO Metadata for Item Pages
 */
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const item = getContentBySlug(slug);

  if (!item) return { title: 'Not Found' };

  return {
    title: item.title,
    description: item.summary,
    alternates: {
      canonical: `https://cp099.github.io/cp099/item/${slug}`,
    },
    openGraph: {
      title: item.title,
      description: item.summary,
      url: `https://cp099.github.io/cp099/item/${slug}`,
      type: 'article',
    },
  };
}

export default async function ItemDetailPage({ params }: Props) {
  const { slug } = await params;
  const item = getContentBySlug(slug);

  if (!item) {
    notFound();
  }

  return (
    <article className="pb-20 animate-reveal">
      <header className="mb-8 border-b border-white/5 pb-8">
        <div className="flex items-center gap-2 text-cyan-bright font-mono text-[9px] mb-3 uppercase tracking-[0.4em] font-bold">
          <span className="text-white/30">{item.category}</span>
          <span className="text-white/10">/</span>
          <span className="text-cyan underline underline-offset-2 decoration-cyan/20">
            {item.type}
          </span>
          <span className="text-white/10">/</span>
          <span className="text-white/50">{item.date}</span>
        </div>
        
        <h1 className="text-2xl md:text-3xl font-bold text-white tracking-tighter mb-3">
          {item.title}
        </h1>
        
        <p className="text-base text-slate max-w-2xl leading-relaxed font-normal border-l border-white/5 pl-4 py-1 italic">
          {item.summary}
        </p>
      </header>
      
      <BlockRenderer blocks={item.blocks} />

      <footer className="mt-24 pt-8 border-t border-white/5">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-[9px] font-mono uppercase tracking-[0.2em] text-white/20">
          <div>
            <p className="mb-2 text-white/40">Reference UID</p>
            <p>{item.uid || `ARCHIVE-${item.slug.toUpperCase()}`}</p>
          </div>
          <div>
            <p className="mb-2 text-white/40">Data Integrity</p>
            <p>Verified Stable / {item.date}</p>
          </div>
          <div className="md:text-right">
            <p className="mb-2 text-white/40">Citation Permalink</p>
            <p className="truncate overflow-hidden">
              https://cp099.github.io/cp099/item/{item.slug}
            </p>
          </div>
        </div>
      </footer>
    </article>
  );
}