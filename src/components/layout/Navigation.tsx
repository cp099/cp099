"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NAV_ITEMS = [
  { name: 'Work', href: '/work' },
  { name: 'Journey', href: '/journey' },
  { name: 'Archive', href: '/archive' },
];

export default function Navigation() {
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-navy/80 backdrop-blur-md">
      <nav className="container mx-auto flex items-center justify-between px-4 md:px-6 py-3 md:py-4">
        <Link 
          href="/" 
          className="text-xs md:text-sm font-bold tracking-tighter text-white transition-colors hover:text-cyan"
        >
          Chirag P Patil<span className="text-cyan/50">.</span>
        </Link>

        <ul className="flex items-center gap-x-4 md:gap-x-8">
          {NAV_ITEMS.map((item) => {
            const isActive = pathname.startsWith(item.href);
            return (
              <li key={item.name}>
                <Link 
                  href={item.href} 
                  className={`group relative font-mono text-[9px] md:text-[11px] uppercase tracking-[0.15em] md:tracking-[0.2em] transition-all duration-300 ${
                    isActive ? 'text-cyan' : 'text-slate hover:text-white'
                  }`}
                >
                  {item.name}
                  <span className={`absolute -bottom-1 left-0 h-px bg-cyan transition-all duration-300 ${
                    isActive ? 'w-full opacity-100' : 'w-0 opacity-0 group-hover:w-full group-hover:opacity-100'
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