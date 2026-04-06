"use client";

import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function Footer() {
  const [time, setTime] = useState<string>("");

  useEffect(() => {
    const formatTime = () => {
      setTime(new Intl.DateTimeFormat('en-US', {
        timeZone: 'Asia/Kolkata',
        hour: 'numeric',
        minute: '2-digit',
        hour12: true,
      }).format(new Date()));
    };

    formatTime(); // Set time immediately
    const timer = setInterval(formatTime, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <footer className="mt-20 md:mt-32 border-t border-white/10 bg-navy/50 pb-8 md:pb-0">
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-10 mb-16 md:mb-20">
          <div className="max-w-md text-left">
            <h3 className="text-[10px] font-mono uppercase tracking-[0.3em] text-white/60 mb-4 font-bold">
              Contact
            </h3>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed mb-6 font-light">
              Always open for curious conversations or technical discussions.
            </p>
            <a 
              href="mailto:chiragpatil07@gmail.com" 
              className="text-cyan-bright hover:text-white transition-colors text-xl md:text-2xl font-medium tracking-tight underline underline-offset-8 decoration-white/10 hover:decoration-cyan/50 break-all"
            >
              chiragpatil07@gmail.com
            </a>
          </div>

          <div className="text-right hidden lg:block">
            <p className="text-[10px] font-mono uppercase tracking-[0.3em] text-white/20 mb-2">System Authority</p>
            <div className="text-4xl font-bold text-white/[0.03] select-none leading-none tracking-tighter">
              CHIRAG.OS
            </div>
          </div>
        </div>

        <div className="pt-6 border-t border-white/10 flex flex-col items-center gap-6 text-[10px] font-mono uppercase tracking-[0.2em] md:grid md:grid-cols-3">
          <div className="flex items-center gap-4 text-white/70 order-2 md:order-1 md:justify-start">
            <span className="font-bold whitespace-nowrap">© 2025 CHIRAG P PATIL</span>
          </div>

          <div className="flex justify-center order-1 md:order-2 w-full md:w-auto">
            <div className="flex items-center justify-around md:justify-center gap-4 px-4 md:px-5 py-2 rounded-md bg-white/[0.03] border border-white/5 w-full md:w-auto">
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-cyan shadow-[0_0_8px_rgba(100,255,218,0.5)]" />
                <span className="text-white/90 font-bold whitespace-nowrap text-[9px] md:text-[10px]">BANGALORE, IN</span>
              </div>
              <span className="text-white/10">|</span>
              <span className="text-white font-bold tabular-nums min-w-[70px] text-center" suppressHydrationWarning>
                {time || "LOADING..."}
              </span>
              <span className="text-white/10">|</span>
              <span className="text-cyan font-bold whitespace-nowrap">NOMINAL</span>
            </div>
          </div>

          <div className="flex items-center gap-6 text-white/50 order-3 md:order-3 md:justify-end">
            <Link href="/" className="hover:text-white transition-colors tracking-[0.2em]">ROOT</Link>
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="text-white/80 hover:text-cyan transition-all flex items-center gap-2 group tracking-[0.2em]"
            >
              TOP ↑
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}