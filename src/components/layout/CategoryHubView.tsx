import Link from 'next/link';
import { getContentByCategory } from '@/lib/content';
import { CATEGORY_MAP, ContentCategory } from '@/types/system';

interface CategoryHubViewProps {
  category: ContentCategory;
}

export default function CategoryHubView({ category }: CategoryHubViewProps) {
  const subCategories = CATEGORY_MAP[category];
  const allItems = getContentByCategory(category);

  return (
    <div className="animate-reveal">
      <header className="mb-8 md:mb-12 px-1">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-2 capitalize tracking-tighter">
          {category}
        </h1>
        <p className="text-slate italic text-xs md:text-sm font-medium">
          Select a sub-category to browse directory items.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
        {subCategories.map((sub) => {
          const count = allItems.filter((item) => item.type === sub).length;

          return (
            <Link 
              key={sub} 
              href={`/${category}/${sub}`} 
              className="group p-5 md:p-8 border border-white/10 rounded-xl bg-white/[0.02] hover:bg-white/[0.05] hover:border-cyan/50 hover:-translate-y-1 transition-all flex flex-col justify-between h-32 md:h-48 shadow-lg"
            >
              <div>
                <h2 className="text-xl md:text-2xl font-bold text-white group-hover:text-cyan transition-colors capitalize">
                  {sub}s
                </h2>
                <p className="text-[11px] md:text-sm text-slate/60 mt-1 font-medium">
                  {count === 0 ? "No entries found." : `Exploring ${count} entries.`}
                </p>
              </div>
              <div className="text-[9px] md:text-[10px] font-mono uppercase tracking-[0.2em] text-white/30 group-hover:text-cyan/60 transition-colors">
                Directory / {sub}
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}