import Link from 'next/link';
import { getAllContent } from '@/lib/content';
import { ContentCategory, ContentType } from '@/types/system';

interface SubListViewProps {
  category: ContentCategory;
  sub: ContentType;
}

export default function SubListView({ category, sub }: SubListViewProps) {
  const items = getAllContent().filter(
    (item) => item.category === category && item.type === sub
  );

  return (
    <div className="animate-reveal">
      <header className="mb-8 md:mb-12 px-1">
        <div className="mb-2 flex items-center gap-2 font-mono text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-cyan-bright">
          <Link href={`/${category}`} className="transition-colors hover:text-cyan">
            {category}
          </Link>
          <span className="text-white/20">/</span>
          <span className="text-white/60">{sub}s</span>
        </div>
        <h1 className="text-3xl font-bold capitalize tracking-tighter text-white md:text-4xl">
          {sub}s
        </h1>
      </header>

      <div className="grid gap-2 md:gap-3">
        {items.length === 0 ? (
          <div className="rounded-xl border border-dashed border-white/10 p-12 text-center">
            <p className="font-mono text-sm italic uppercase tracking-widest text-slate opacity-40">
              System Status: Empty Directory
            </p>
          </div>
        ) : (
          items.map((item) => (
            <Link
              key={item.slug}
              href={`/item/${item.slug}`}
              className="group flex flex-col justify-between rounded-lg border border-white/5 bg-white/[0.01] p-4 md:p-5 transition-all hover:border-white/20 hover:bg-white/[0.03] md:flex-row md:items-center"
            >
              <div className="flex-grow pr-4">
                <h3 className="text-base md:text-lg font-medium text-white transition-colors group-hover:text-cyan leading-snug">
                  {item.title}
                </h3>
                <p className="mt-1 line-clamp-1 text-xs md:text-sm font-medium text-slate/60">
                  {item.summary}
                </p>
              </div>
              <span className="mt-3 font-mono text-[10px] md:text-[11px] uppercase italic text-white/40 md:mt-0 whitespace-nowrap">
                {item.date}
              </span>
            </Link>
          ))
        )}
      </div>
    </div>
  );
}