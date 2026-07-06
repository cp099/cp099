import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getAllContent, getContentBySlug } from '@/lib/content';
import BlockRenderer from '@/components/blocks/BlockRenderer';
import CitationAction from '@/components/ui/CitationAction'; // Imported the new button

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
      canonical: `https://cp099.github.io/item/${slug}`,
    },
    openGraph: {
      title: item.title,
      description: item.summary,
      url: `https://cp099.github.io/item/${slug}`,
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

  // Pre-generate the academic citation string
  const year = new Date(item.date).getFullYear();
  const uid = item.uid || `ARCHIVE-${item.slug.toUpperCase()}`;
  const citationString = `Patil, C. P. (${year}). ${item.title}. CHIRAG.OS. Ref: ${uid}. https://cp099.github.io/item/${item.slug}`;

  return (
    <article className="pb-20 animate-reveal">
      <header className="mb-8 border-b border-white/5 pb-8">
        <div className="flex items-center gap-2 text-cyan-bright font-mono text-[9px] mb-3 uppercase tracking-[0.4em] font-bold">
          <span className="text-white/70">{item.category}</span>
          <span className="text-white/10">/</span>
          <span className="text-cyan/85 underline underline-offset-2 decoration-cyan/20">
            {item.type}
          </span>
          <span className="text-white/10">/</span>
          <span className="text-white/75">{item.date}</span>
        </div>
        
        <h1 className="text-2xl md:text-3xl font-bold text-white tracking-tighter mb-3">
          {item.title}
        </h1>
        
        <p className="text-base text-slate max-w-2xl leading-relaxed font-normal border-l border-white/5 pl-4 py-1 italic">
          {item.summary}
        </p>
      </header>
      
      <BlockRenderer blocks={item.blocks} />

      {/* --- DEPENDENCIES BLOCK --- */}
      {item.dependencies && item.dependencies.length > 0 && (
        <div className="mt-16 pt-8 border-t border-white/5">
          <h2 className="text-[10px] font-mono uppercase tracking-[0.3em] text-white/70 mb-4 flex items-center gap-3">
            System Dependencies <span className="h-px bg-white/10 flex-grow" />
          </h2>
          <div className="flex flex-wrap gap-3">
            {item.dependencies.map((dep) => (
              <span key={dep} className="px-3 py-1.5 bg-white/[0.02] border border-white/10 rounded-md text-[10px] font-mono text-cyan/80 uppercase tracking-widest shadow-sm">
                {dep}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* --- CITATION FOOTER --- */}
      <footer className="mt-16 pt-8 border-t border-white/5">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-[9px] font-mono uppercase tracking-[0.2em] text-white/60">
          <div>
            <p className="mb-2 text-white/75">Reference UID</p>
            <p className="text-white/80 font-bold">{uid}</p>
          </div>
          <div>
            <p className="mb-2 text-white/75">Data Integrity</p>
            <p className="text-white/80">Verified Stable / {item.date}</p>
          </div>
          <div className="md:text-right">
            <p className="mb-2 text-white/75">Citation Protocol</p>
            <p className="truncate overflow-hidden mb-2 text-white/75">
              Harvard / APA / System
            </p>
            {/* The interactive Copy Button */}
            <CitationAction citationText={citationString} />
          </div>
        </div>
      </footer>
    </article>
  );
}