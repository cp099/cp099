"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function HomePage() {
  const [humanMode, setHumanMode] = useState(false);
  const [uptime, setUptime] = useState("");

  // System Uptime Calculation (Accurate to Dec 19, 2007, 8:00 PM IST)
  useEffect(() => {
    const startDate = new Date("2007-12-19T20:01:00+05:30").getTime();
    
    const updateTimer = () => {
      const now = new Date().getTime();
      const diff = now - startDate;
      
      const years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));
      const days = Math.floor((diff % (1000 * 60 * 60 * 24 * 365.25)) / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const mins = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      
      setUptime(`${years}Y ${days}D ${hours}H ${mins}M`);
    };

    updateTimer();
    const interval = setInterval(updateTimer, 60000); // Update every minute
    return () => clearInterval(interval);
  },[]);

  return (
    <div className="max-w-6xl mx-auto animate-reveal pb-16 md:pb-24 px-1">
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-start mb-20 md:mb-32">
        
        {/* --- LEFT: PRESENCE & TRIGGER --- */}
        <div className="lg:col-span-5 lg:sticky lg:top-24">
          <div 
            onClick={() => setHumanMode(!humanMode)}
            className={`relative aspect-video lg:aspect-[3/4] w-full overflow-hidden rounded-xl md:rounded-2xl border transition-all duration-700 cursor-crosshair group ${
              humanMode ? 'border-blue-400/30 shadow-[0_0_30px_rgba(96,165,250,0.1)]' : 'border-white/10 bg-white/[0.02]'
            }`}
          >
            <Image 
              src="/assets/portrait.webp"
              alt="Chirag P Patil" 
              fill
              priority
              className={`object-cover transition-all duration-1000 group-hover:scale-105 ${
                humanMode ? 'contrast-100 saturate-100' : 'contrast-125 saturate-50'
              }`}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent pointer-events-none" />
            
            {/* UPDATED: Frosted Glass HUD Badge for readability */}
            <div className="absolute top-4 left-4 flex items-center gap-2 pointer-events-none bg-black/40 backdrop-blur-md px-2.5 py-1.5 rounded border border-white/10">
              <span className={`h-1.5 w-1.5 rounded-full animate-pulse ${humanMode ? 'bg-blue-400' : 'bg-cyan shadow-[0_0_5px_rgba(100,255,218,0.5)]'}`} />
              <span className="text-[9px] font-mono uppercase tracking-widest text-white/90">
                {humanMode ? 'SYS.MODE: HUMAN' : 'SYS.MODE: ARCHITECT'}
              </span>
            </div>
          </div>
          
          <div className="mt-6 md:mt-8 flex items-center gap-6 md:gap-8 px-2 md:px-0">
            <a href="https://github.com/cp099" target="_blank" rel="noopener noreferrer" className="text-[10px] font-mono uppercase tracking-[0.2em] text-light-slate hover:text-cyan transition-colors">GitHub</a>
            <a href="https://www.linkedin.com/in/chiragppatil/" target="_blank" rel="noopener noreferrer" className="text-[10px] font-mono uppercase tracking-[0.2em] text-light-slate hover:text-cyan transition-colors">LinkedIn</a>
            <div className="h-px bg-white/10 flex-grow" />
          </div>
        </div>

        {/* --- RIGHT: THE IDENTITY HUD --- */}
        <div className="lg:col-span-7">
          <header className="mb-10 md:mb-12">
            <h1 className="text-3xl md:text-5xl font-bold text-white tracking-tighter leading-[1.1] mb-3 transition-colors duration-500">
              {humanMode ? 'Curious Observer' : 'Systems Builder'} • <span className="text-white/70">Tech & Finance</span>
            </h1>
            
            <p className="text-[9px] md:text-[10px] font-mono uppercase tracking-[0.2em] md:tracking-[0.3em] text-white/80 mb-8 md:mb-10">
              Built in Bangalore. Shaped by systems, people, and curiosity.
            </p>

            <div className="space-y-4 max-w-2xl">
              <p className="text-lg md:text-xl text-cyan-bright font-medium tracking-tight leading-snug">
                I’m Chirag — exploring how systems work across technology and finance, and building things that make them clearer.
              </p>
            </div>
          </header>

          <div className="space-y-12">
            
            {/* Module 1: System Specs */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/10 border border-white/10 rounded-lg overflow-hidden">
              <div className="bg-navy p-4 flex flex-col gap-1 transition-all duration-500">
                <span className="text-[9px] font-mono uppercase tracking-[0.2em] text-white/70">Entity_ID</span>
                <span className="text-xs md:text-sm font-bold text-white tracking-tight">CHIRAG_P_PATIL</span>
              </div>
              <div className="bg-navy p-4 flex flex-col gap-1 transition-all duration-500">
                <span className="text-[9px] font-mono uppercase tracking-[0.2em] text-white/70">Class</span>
                <span className={`text-xs md:text-sm font-bold tracking-tight ${humanMode ? 'text-blue-400' : 'text-cyan-bright'}`}>
                  {humanMode ? 'STUDENT_VIBE' : 'SYS_ARCHITECT'}
                </span>
              </div>
              <div className="bg-navy p-4 flex flex-col gap-1 transition-all duration-500">
                <span className="text-[9px] font-mono uppercase tracking-[0.2em] text-white/70">Location</span>
                {/* UPDATED: Changed to standard Airport code BLR */}
                <span className="text-xs md:text-sm font-bold text-white tracking-tight">BLR_IN</span>
              </div>
              <div className="bg-navy p-4 flex flex-col gap-1 transition-all duration-500">
                <span className="text-[9px] font-mono uppercase tracking-[0.2em] text-white/70">
                  {humanMode ? 'Fav_Reset' : 'Uptime'}
                </span>
                <span className="text-xs md:text-sm font-bold text-white tracking-tight tabular-nums">
                  {humanMode ? 'CYCLING' : uptime || 'CALCULATING...'}
                </span>
              </div>
            </div>

            {/* Module 2: Memory Map (Unified Bar) */}
            <div>
              <h2 className="text-[10px] font-mono uppercase tracking-[0.3em] text-white/70 mb-4 flex items-center gap-4">
                Memory Allocation <span className="h-px bg-white/10 flex-grow" />
              </h2>
              
              <div className="w-full bg-white/5 h-2 md:h-2.5 rounded-full overflow-hidden flex border border-white/10 mb-4 shadow-inner">
                <div className="bg-cyan h-full transition-all duration-1000 relative group" style={{ width: '50%' }}>
                  <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="bg-white/40 h-full transition-all duration-1000 relative group" style={{ width: '30%' }}>
                  <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="bg-blue-500/60 h-full transition-all duration-1000 relative group" style={{ width: '20%' }}>
                  <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4 mt-2">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan shadow-[0_0_5px_rgba(100,255,218,0.5)]"></span>
                  <span className="text-[9px] font-mono text-white/70 tracking-widest uppercase">Sys_Arch <span className="text-white/70 ml-1.5">50%</span></span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-white/40"></span>
                  <span className="text-[9px] font-mono text-white/70 tracking-widest uppercase">Fin_Flows <span className="text-white/70 ml-1.5">30%</span></span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500/60"></span>
                  <span className="text-[9px] font-mono text-white/70 tracking-widest uppercase">Human_Gear <span className="text-white/70 ml-1.5">20%</span></span>
                </div>
              </div>
            </div>

            {/* Module 3: Active Processes Ticker */}
            <div className="p-5 border border-white/5 bg-white/[0.01] rounded-xl font-mono text-xs text-slate space-y-3 shadow-lg">
              <div className="flex items-start gap-3">
                <span className="text-cyan mt-0.5 animate-pulse">❯</span>
                <p><span className="text-white/70">SYS.LOG:</span> Integrating BreatheEasy ML predictions with live CPCB feeds.</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-cyan mt-0.5">❯</span>
                <p><span className="text-white/70">SYS.LOG:</span> Analyzing enterprise accounting workflows.</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-white/70 mt-0.5">❯</span>
                <p className="italic">{"\"Growth becomes clearer when it’s documented. This space reflects what I’m learning, building, and becoming.\""}</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* --- GATEWAY SECTION --- */}
      <section>
        <h2 className="text-[9px] font-mono uppercase tracking-[0.5em] text-white/70 mb-8 px-2 md:px-0 flex items-center gap-4">
          System Directory <span className="h-px bg-white/10 flex-grow" />
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          <Link href="/work" className="group p-6 md:p-8 border border-white/5 rounded-xl bg-white/[0.01] hover:bg-white/[0.03] hover:border-cyan/20 transition-all duration-300 shadow-lg hover:shadow-cyan/5">
            <h3 className="text-lg font-bold text-white group-hover:text-cyan transition-colors mb-2">Work</h3>
            <p className="text-xs md:text-sm text-slate/80 leading-relaxed">Projects and systems I’ve built across different domains.</p>
          </Link>
          <Link href="/journey" className="group p-6 md:p-8 border border-white/5 rounded-xl bg-white/[0.01] hover:bg-white/[0.03] hover:border-cyan/20 transition-all duration-300 shadow-lg hover:shadow-cyan/5">
            <h3 className="text-lg font-bold text-white group-hover:text-cyan transition-colors mb-2">Journey</h3>
            <p className="text-xs md:text-sm text-slate/80 leading-relaxed">Education, experiences, and the path that’s shaping how I think.</p>
          </Link>
          <Link href="/archive" className="group p-6 md:p-8 border border-white/5 rounded-xl bg-white/[0.01] hover:bg-white/[0.03] hover:border-cyan/20 transition-all duration-300 shadow-lg hover:shadow-cyan/5">
            <h3 className="text-lg font-bold text-white group-hover:text-cyan transition-colors mb-2">Archive</h3>
            <p className="text-xs md:text-sm text-slate/80 leading-relaxed">Ideas, experiments, and things still evolving.</p>
          </Link>
        </div>
      </section>
    </div>
  );
}