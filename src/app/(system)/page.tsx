import Image from 'next/image';
import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="max-w-6xl mx-auto animate-reveal pb-16 md:pb-24 px-1">
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-start mb-20 md:mb-32">
        
        <div className="lg:col-span-5 lg:sticky lg:top-24">
          <div className="relative aspect-video lg:aspect-[3/4] w-full overflow-hidden rounded-xl md:rounded-2xl border border-white/10 bg-white/[0.02]">
            <Image 
              src="/assets/portrait.jpg" 
              alt="Chirag P Patil" 
              fill
              priority
              className="object-cover transition-transform duration-1000 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy/40 via-transparent to-transparent" />
          </div>
          
          <div className="mt-6 md:mt-8 flex items-center gap-6 md:gap-8 px-2 md:px-0">
            <a 
              href="https://github.com/cp099" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[10px] font-mono uppercase tracking-[0.2em] text-light-slate hover:text-cyan transition-colors"
            >
              GitHub
            </a>
            <a 
              href="https://www.linkedin.com/in/chiragppatil/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[10px] font-mono uppercase tracking-[0.2em] text-light-slate hover:text-cyan transition-colors"
            >
              LinkedIn
            </a>
            <div className="h-px bg-white/10 flex-grow" />
          </div>
        </div>

        <div className="lg:col-span-7">
          <header className="mb-10 md:mb-12">
            <h1 className="text-3xl md:text-6xl font-bold text-white tracking-tighter leading-[1.1] mb-3">
              Student • Systems Builder • <span className="text-white/30">Exploring Tech & Finance</span>
            </h1>
            
            <p className="text-[9px] md:text-[10px] font-mono uppercase tracking-[0.2em] md:tracking-[0.3em] text-white/60 mb-8 md:mb-12">
              Built in Bangalore. Shaped by systems, people, and curiosity.
            </p>

            <div className="space-y-4 md:space-y-6 max-w-2xl">
              <p className="text-lg md:text-2xl text-cyan-bright font-medium tracking-tight leading-snug md:leading-tight">
                I’m Chirag — a student building and exploring systems across technology and finance.
              </p>
              <p className="text-base md:text-xl text-white/80 font-light leading-relaxed">
                I explore how systems work—across technology, finance, and real-world experiences—and build things that make them clearer and more usable.
              </p>
            </div>
          </header>

          <div className="space-y-6 md:space-y-8 text-slate leading-7 md:leading-8 text-sm md:text-[15px] max-w-xl">
            <p>
              I’ve always been drawn to understanding how things work—not just in theory, but in practice. That curiosity has taken me through building projects, working with teams, and being part of experiences where structure, people, and execution all come together.
            </p>
            <p>
              Over time, this has grown into working across both technology and commerce. I build projects like <span className="text-white font-medium">BreatheEasy</span> and explore system design, while also spending time understanding how financial systems operate and are structured. It’s less about choosing one path and more about understanding how these worlds connect.
            </p>
            <p>
              A big part of my journey has also been through school—taking up roles where I’ve had to lead, organise, and work closely with people. Whether it’s mentoring, managing events, or coordinating teams, those experiences have shaped how I think and work just as much as any technical project.
            </p>
            <p>
              Outside of all this, I value time away from structured work. Cycling, long walks, conversations, and just observing things quietly play a big role in how I reset and think better.
            </p>
            <p className="italic text-light-slate/90 pt-6 border-t border-white/10 text-xs md:text-sm">
              "This system exists because I believe growth becomes clearer when it’s documented. It’s not just a showcase—it’s a space that reflects what I’m learning, building, and becoming."
            </p>
          </div>

          <div className="mt-12 md:mt-16 grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-12 py-8 md:py-10 border-y border-white/10">
            <div>
              <h3 className="text-[9px] font-mono uppercase tracking-[0.4em] text-white/50 mb-2">Based in</h3>
              <p className="text-sm text-white/80 tracking-tight font-medium">Bangalore, Karnataka, India</p>
            </div>
            <div>
              <h3 className="text-[9px] font-mono uppercase tracking-[0.4em] text-white/50 mb-2">Focus</h3>
              <p className="text-sm text-white/80 tracking-tight leading-relaxed font-medium">Accounting systems, Financial workflows, System Design</p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-[9px] font-mono uppercase tracking-[0.5em] text-white/40 mb-8 px-2 md:px-0">System Directory</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          <Link 
            href="/work" 
            className="group p-6 md:p-8 border border-white/5 rounded-xl bg-white/[0.01] hover:bg-white/[0.03] hover:border-cyan/20 transition-all duration-300 shadow-lg hover:shadow-cyan/5"
          >
            <h3 className="text-lg font-bold text-white group-hover:text-cyan transition-colors mb-2">Work</h3>
            <p className="text-xs md:text-sm text-slate/80 leading-relaxed">Projects and systems I’ve built across different domains.</p>
          </Link>
          
          <Link 
            href="/journey" 
            className="group p-6 md:p-8 border border-white/5 rounded-xl bg-white/[0.01] hover:bg-white/[0.03] hover:border-cyan/20 transition-all duration-300 shadow-lg hover:shadow-cyan/5"
          >
            <h3 className="text-lg font-bold text-white group-hover:text-cyan transition-colors mb-2">Journey</h3>
            <p className="text-xs md:text-sm text-slate/80 leading-relaxed">School, experiences, and the path that’s shaping how I think.</p>
          </Link>

          <Link 
            href="/archive" 
            className="group p-6 md:p-8 border border-white/5 rounded-xl bg-white/[0.01] hover:bg-white/[0.03] hover:border-cyan/20 transition-all duration-300 shadow-lg hover:shadow-cyan/5"
          >
            <h3 className="text-lg font-bold text-white group-hover:text-cyan transition-colors mb-2">Archive</h3>
            <p className="text-xs md:text-sm text-slate/80 leading-relaxed">Ideas, experiments, and things still evolving.</p>
          </Link>
        </div>
      </section>
    </div>
  );
}