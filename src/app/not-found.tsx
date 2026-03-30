"use client";

import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col justify-center animate-reveal max-w-2xl px-1">
      <header className="mb-8 md:mb-10">
        <div className="flex items-center gap-3 text-cyan-bright font-mono text-[9px] md:text-[10px] mb-4 uppercase tracking-[0.3em] font-bold">
          <span className="text-white/40">System</span>
          <span className="text-white/10">/</span>
          <span className="text-cyan underline underline-offset-4 decoration-cyan/30">Error</span>
          <span className="text-white/10">/</span>
          <span className="text-white/60">404</span>
        </div>
        
        <h1 className="text-3xl md:text-5xl font-bold text-white tracking-tighter mb-4 leading-none">
          Path Not Resolved<span className="text-cyan animate-pulse">_</span>
        </h1>
        
        <p className="text-sm md:text-base text-slate leading-relaxed font-medium max-w-lg">
          The requested directory or item does not exist within the current system parameters. 
        </p>
      </header>

      <div className="mb-10 border border-white/10 rounded-lg bg-white/[0.02] overflow-hidden shadow-2xl">
        <div className="px-4 py-2 border-b border-white/10 bg-white/[0.03] text-[9px] font-mono text-white/40 uppercase tracking-widest font-bold">
          Diagnostic Report
        </div>
        <div className="p-5 grid grid-cols-2 gap-y-4 md:gap-y-6 gap-x-8 font-mono text-[9px] md:text-[10px]">
          <div>
            <p className="text-white/20 mb-0.5 uppercase tracking-tighter">Error Type</p>
            <p className="text-white/80">NOT_INITIALIZED</p>
          </div>
          <div>
            <p className="text-white/20 mb-0.5 uppercase tracking-tighter">Protocol</p>
            <p className="text-white/80">HTTP/STATIC</p>
          </div>
          <div>
            <p className="text-white/20 mb-0.5 uppercase tracking-tighter">Status</p>
            <p className="text-cyan font-bold">RECOVERY_REQUIRED</p>
          </div>
          <div>
            <p className="text-white/20 mb-0.5 uppercase tracking-tighter">Authority</p>
            <p className="text-white/80 italic">CHIRAG.OS</p>
          </div>
        </div>
      </div>

      <div className="space-y-4 md:space-y-6">
        <p className="text-[9px] font-mono uppercase tracking-[0.4em] text-white/40 font-bold px-1">System Recovery:</p>
        <div className="flex flex-wrap gap-3">
          <Link href="/" className="px-5 md:px-8 py-2.5 md:py-3 bg-white/[0.05] border border-white/10 rounded-md text-[10px] font-mono uppercase tracking-widest text-cyan-bright hover:bg-cyan hover:text-navy transition-all font-bold shadow-lg">
            Root Directory
          </Link>
          <Link href="/work" className="px-5 md:px-8 py-2.5 md:py-3 bg-white/[0.01] border border-white/5 rounded-md text-[10px] font-mono uppercase tracking-widest text-white/60 hover:text-white transition-all">
            Work
          </Link>
          <Link href="/journey" className="px-5 md:px-8 py-2.5 md:py-3 bg-white/[0.01] border border-white/5 rounded-md text-[10px] font-mono uppercase tracking-widest text-white/60 hover:text-white transition-all">
            Journey
          </Link>
        </div>
      </div>
    </div>
  );
}