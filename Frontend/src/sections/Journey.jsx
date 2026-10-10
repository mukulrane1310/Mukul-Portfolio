import {
  BrainCircuit,
  Code2,
  Database,
  Sparkles,
} from 'lucide-react'

const journey = [
  {
    icon: Code2,
    phase: '01',
    title: 'Programming Foundation',
    type: 'FOUNDATION',
    description:
      'Built a strong foundation in programming, problem solving, data structures and software development concepts.',
    stack: 'Programming • DSA • Git',
  },
  {
    icon: Code2,
    phase: '02',
    title: 'Full Stack Development',
    type: 'BUILD',
    description:
      'Moved into building complete applications across modern frontend, backend APIs, authentication and databases.',
    stack: 'React • FastAPI • REST APIs',
  },
  {
    icon: Database,
    phase: '03',
    title: 'Backend & Systems',
    type: 'ENGINEER',
    description:
      'Focused on database design, API architecture, authentication, cloud services and scalable application structure.',
    stack: 'PostgreSQL • MongoDB • JWT',
  },
  {
    icon: BrainCircuit,
    phase: '04',
    title: 'AI / Generative AI',
    type: 'EXPLORE',
    description:
      'Started building intelligent applications using LLMs, RAG, vector search and AI-powered workflows.',
    stack: 'RAG • LLM APIs • GenAI',
  },
  {
    icon: Sparkles,
    phase: '05',
    title: 'Building & Growing',
    type: 'CURRENT',
    description:
      'Currently focused on building practical projects, improving engineering skills and preparing for professional opportunities.',
    stack: 'Full Stack • AI • Continuous Learning',
  },
]

function Journey() {
  return (
    <section id="journey" className="relative overflow-hidden px-6 py-28">
      <div className="pointer-events-none absolute left-1/2 top-1/3 -z-10 h-96 w-96 -translate-x-1/2 rounded-full bg-[#00E5FF]/5 blur-3xl" />

      <div className="mx-auto max-w-5xl">
        <div className="mb-16">
          <p className="mb-3 text-xs font-semibold tracking-[0.35em] text-[#00E5FF]">
            DEVELOPER_LOG / EVOLUTION
          </p>

          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
            How I
            <span className="text-[#00E5FF]"> evolved.</span>
          </h2>

          <p className="mt-5 max-w-2xl text-lg leading-8 text-[#E6EAF2]/50">
            A technical journey shaped by continuous learning, building
            and exploring new technologies.
          </p>
        </div>

        <div className="relative">
          <div className="absolute bottom-5 left-4.75 top-5 w-px bg-linear-to-b from-[#00E5FF] via-[#00E5FF]/25 to-transparent" />

          <div className="space-y-8">
            {journey.map((item) => {
              const Icon = item.icon

              return (
                <div
                  key={item.phase}
                  className="group relative pl-14"
                >
                  <div className="absolute left-0 top-6 flex h-10 w-10 items-center justify-center rounded-xl border border-[#00E5FF]/25 bg-[#0B0F1A] transition-all duration-300 group-hover:border-[#00E5FF] group-hover:shadow-[0_0_20px_rgba(0,229,255,0.25)]">
                    <Icon
                      size={17}
                      className="text-[#00E5FF]"
                    />
                  </div>

                  <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#141A2B]/40 p-6 transition-all duration-500 group-hover:-translate-y-1 group-hover:border-[#00E5FF]/30 group-hover:bg-[#141A2B]/60">
                    <div className="absolute right-0 top-0 h-24 w-24 rounded-full bg-[#00E5FF]/5 blur-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                    <div className="relative">
                      <div className="flex flex-wrap items-center justify-between gap-3">
                        <div className="flex items-center gap-3">
                          <span className="font-mono text-xs font-bold text-[#00E5FF]">
                            PHASE_{item.phase}
                          </span>

                          <span className="h-1 w-1 rounded-full bg-white/20" />

                          <span className="text-[9px] font-semibold tracking-[0.2em] text-[#E6EAF2]/35">
                            {item.type}
                          </span>
                        </div>

                        <span className="rounded-full border border-white/10 px-3 py-1 text-[9px] tracking-widest text-[#E6EAF2]/35">
                          EVOLUTION
                        </span>
                      </div>

                      <h3 className="mt-4 text-2xl font-bold transition-colors duration-300 group-hover:text-[#00E5FF]">
                        {item.title}
                      </h3>

                      <p className="mt-3 max-w-2xl leading-7 text-[#E6EAF2]/50">
                        {item.description}
                      </p>

                      <div className="mt-5 border-t border-white/10 pt-4">
                        <span className="font-mono text-[10px] tracking-wide text-[#E6EAF2]/30">
                          {item.stack}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Journey