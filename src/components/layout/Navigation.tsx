"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NAV_ITEMS = [
  { name: 'About', href: '/about' },
  { name: 'Work', href: '/work' },
  { name: 'Journey', href: '/journey' },
  { name: 'Archive', href: '/archive' },
];

export default function Navigation() {
  const pathname = usePathname();

  // OS Pathing Logic: Translates browser URL into System Path
  const getPathDisplay = () => {
    // Remove the GitHub Pages basePath for clean logic
    const cleanPath = pathname;
    
    if (cleanPath === '' || cleanPath === '/') return 'ROOT';

    const segments = cleanPath.split('/').filter(Boolean);
    
    // If we are looking at an item, make it look like a system file
    if (segments[0] === 'item' && segments[1]) {
      return `READ // ${segments[1].toUpperCase()}.sys`;
    }
    
    // Otherwise, just show the directory path
    return segments.join(' / ').toUpperCase();
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-navy/90 backdrop-blur-md shadow-sm shadow-black/20">
      <nav className="container mx-auto flex items-center justify-between px-4 md:px-6 py-3 md:py-4">
        
        {/* LEFT: Dynamic Terminal Pathing */}
        <Link 
          href="/" 
          className="group flex items-center gap-2 font-mono text-[9px] md:text-[11px] tracking-widest transition-colors w-2/3 md:w-auto overflow-hidden"
        >
          <span className="font-bold text-cyan group-hover:text-cyan-bright whitespace-nowrap">CHIRAG.OS</span>
          <span className="text-white/20 select-none" aria-hidden="true">/</span>
          <span className="text-white/80 truncate">{getPathDisplay()}</span>
          <span className="text-cyan animate-pulse">_</span>
        </Link>

        {/* RIGHT: Module Tabs */}
        <ul className="flex items-center gap-x-4 md:gap-x-8">
          {NAV_ITEMS.map((item) => {
            const isActive = pathname.startsWith(item.href);
            return (
              <li key={item.name}>
                <Link 
                  href={item.href} 
                  className={`group relative font-mono text-[9px] md:text-[11px] uppercase tracking-[0.15em] md:tracking-[0.2em] transition-all duration-300 ${
                    isActive ? 'text-cyan-bright font-bold' : 'text-slate hover:text-white'
                  }`}
                >
                  {item.name}
                  {/* Subtle active indicator dot instead of full underline for a cleaner "Tab" look */}
                  <span className={`absolute -bottom-3 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-cyan transition-all duration-300 ${
                    isActive ? 'opacity-100 scale-100' : 'opacity-0 scale-0 group-hover:opacity-50 group-hover:scale-100'
                  }`} />
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}