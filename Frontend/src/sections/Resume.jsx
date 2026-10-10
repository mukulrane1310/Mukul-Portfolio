import { ArrowDownToLine, ExternalLink, FileText } from 'lucide-react'

function Resume() {
  return (
    <section id="resume" className="relative overflow-hidden px-6 py-28">
      <div className="mx-auto max-w-5xl">
        <div className="mb-12">
          <p className="mb-3 text-xs font-semibold tracking-[0.35em] text-[#00E5FF]">
            SYSTEM / RESUME
          </p>

          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Get to know my
            <span className="text-[#00E5FF]"> work.</span>
          </h2>
        </div>

        <div className="group relative overflow-hidden rounded-2xl border border-[#00E5FF]/20 bg-[#0D1320] shadow-[0_0_40px_rgba(0,229,255,0.04)]">
          <div className="absolute inset-0 opacity-20">
            <div
              className="h-full w-full"
              style={{
                backgroundImage:
                  'linear-gradient(rgba(0,229,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(0,229,255,0.06) 1px, transparent 1px)',
                backgroundSize: '28px 28px',
              }}
            />
          </div>

          <div className="relative border-b border-white/10 px-6 py-4">
            <div className="flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-green-400/70" />

              <span className="ml-3 font-mono text-[10px] tracking-widest text-white/25">
                resume.exe
              </span>
            </div>
          </div>

          <div className="relative p-7 sm:p-10">
            <div className="font-mono text-sm leading-7">
              <p className="text-[#00E5FF]/60">
                who am I
              </p>

              <p className="mt-2 text-xl font-bold text-white sm:text-2xl">
                Mukul Rane
              </p>

              <p className="text-[#E6EAF2]/45">
                Full Stack Developer • AI / GenAI Developer
              </p>

              <div className="my-7 h-px bg-white/10" />

              <p className="text-[#00E5FF]/60">
              </p>

              <p className="mt-3 max-w-2xl leading-7 text-[#E6EAF2]/50">
                Computer Engineering graduate focused on building modern
                full-stack applications and AI-powered products with
                practical, scalable and user-centric solutions.
              </p>

              <div className="mt-7 grid gap-4 sm:grid-cols-3">
                <div className="rounded-lg border border-white/10 bg-white/2 p-4">
                  <p className="text-[10px] tracking-widest text-white/25">
                    FOCUS
                  </p>
                  <p className="mt-2 text-sm text-[#E6EAF2]/70">
                    Full Stack
                  </p>
                </div>

                <div className="rounded-lg border border-white/10 bg-white/2 p-4">
                  <p className="text-[10px] tracking-widest text-white/25">
                    SPECIALIZATION
                  </p>
                  <p className="mt-2 text-sm text-[#E6EAF2]/70">
                    AI / GenAI
                  </p>
                </div>

                <div className="rounded-lg border border-white/10 bg-white/2 p-4">
                  <p className="text-[10px] tracking-widest text-white/25">
                    STATUS
                  </p>
                  <p className="mt-2 flex items-center gap-2 text-sm text-[#00E5FF]">
                    <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#00E5FF]" />
                    OPEN TO ENTRY-LEVEL OPPORTUNITIES
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-[#00E5FF]/50 bg-[#00E5FF]/10 px-5 py-3 text-sm font-semibold text-[#00E5FF] transition-all duration-300 hover:border-[#00E5FF] hover:bg-[#00E5FF]/15 hover:shadow-[0_0_20px_rgba(0,229,255,0.15)]"
              >
                <FileText size={17} />
                VIEW RESUME
                <ExternalLink size={14} />
              </a>

              <a
                href="/resume.pdf"
                download
                className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/2 px-5 py-3 text-sm font-semibold text-[#E6EAF2]/65 transition-all duration-300 hover:border-white/25 hover:text-white"
              >
                <ArrowDownToLine size={17} />
                DOWNLOAD PDF
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Resume