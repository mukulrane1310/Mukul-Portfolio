import { useState } from 'react'
import {
  ArrowUpRight,
  Sparkles,
  TriangleAlert,
} from 'lucide-react'
import projects from '../data/projects'

function Projects() {
  const [showProcess, setShowProcess] = useState(false)

  return (
    <section
      id="projects"
      className="relative overflow-hidden px-6 py-28"
    >
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/4 top-20 h-64 w-64 rounded-full bg-[#00E5FF]/5 blur-3xl" />
        <div className="absolute bottom-10 right-1/4 h-64 w-64 rounded-full bg-[#7C5CFF]/5 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl">
        <div className="mb-16 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="mb-3 text-xs font-semibold tracking-[0.35em] text-[#00E5FF]">
              PROJECT_ARCHIVE / 04
            </p>

            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Selected
              <span className="text-[#00E5FF]"> builds.</span>
            </h2>
          </div>

          <div className="max-w-sm border-l border-[#00E5FF]/20 pl-4 text-sm leading-6 text-[#E6EAF2]/45">
            Real products, experiments and systems built around
            full-stack engineering and intelligent technology.
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {projects.map((project, index) => {
            const isTruthLens = project.title === 'TruthLens'
            const isOnboardGit = project.title === 'OnboardGit'

            return (
              <article
                key={project.title}
                className="group relative min-h-90 overflow-hidden rounded-2xl border border-white/10 bg-[#0F1524] transition-all duration-500 hover:-translate-y-2 hover:border-[#00E5FF]/40 hover:shadow-[0_0_40px_rgba(0,229,255,0.08)]"
              >
                <div className="absolute inset-0 opacity-20">
                  <div
                    className="h-full w-full"
                    style={{
                      backgroundImage:
                        'linear-gradient(rgba(0,229,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(0,229,255,0.08) 1px, transparent 1px)',
                      backgroundSize: '32px 32px',
                    }}
                  />
                </div>

                <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-[#00E5FF]/5 blur-3xl transition-all duration-700 group-hover:bg-[#00E5FF]/10" />

                <div className="absolute left-0 top-0 h-px w-0 bg-[#00E5FF] shadow-[0_0_12px_#00E5FF] transition-all duration-500 group-hover:w-full" />

                <div className="relative flex h-full flex-col p-7">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <span className="font-mono text-5xl font-bold text-white/10">
                        0{index + 1}
                      </span>

                      <p className="mt-1 text-[10px] font-semibold tracking-[0.25em] text-[#00E5FF]/70">
                        {project.category}
                      </p>
                    </div>

                    <div className="flex flex-wrap items-center justify-end gap-2">
                      {project.featured && (
                        <span className="flex items-center gap-1 rounded-full border border-[#7C5CFF]/30 bg-[#7C5CFF]/10 px-3 py-1 text-[9px] font-semibold tracking-wider text-[#B9A9FF]">
                          <Sparkles size={11} />
                          FEATURED
                        </span>
                      )}

                      {project.status && (
                        <span className="rounded-full border border-[#00E5FF]/30 bg-[#00E5FF]/5 px-3 py-1 text-[9px] font-semibold tracking-wider text-[#00E5FF]">
                          {project.status.toUpperCase()}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="mt-4">
                    <h3 className="text-3xl font-bold tracking-tight transition-colors duration-300 group-hover:text-[#00E5FF]">
                      {project.title}
                    </h3>

                    <p className="mt-4 max-w-xl leading-7 text-[#E6EAF2]/50">
                      {project.description}
                    </p>
                  </div>

                  <div className="mt-auto pt-8">
                    <div className="mb-6 flex flex-wrap gap-2">
                      {project.stack.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-md border border-white/10 bg-white/5 px-3 py-1.5 font-mono text-[10px] text-[#E6EAF2]/55 transition-colors group-hover:border-[#00E5FF]/20 group-hover:text-[#E6EAF2]/75"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {!isOnboardGit && (
                      <div className="mb-4 rounded-lg border border-red-500/20 bg-red-500/5 px-3 py-2.5 opacity-100 transition-all duration-300 sm:opacity-0 sm:group-hover:opacity-100">
                        <div className="flex items-start gap-2">
                          <TriangleAlert
                            size={14}
                            className="mt-0.5 shrink-0 text-red-400"
                          />

                          <p className="text-[10px] leading-4 text-red-400/80">
                            LIVE DEMO MAY OCCASIONALLY BE UNAVAILABLE DUE
                            TO FREE-TIER HOSTING / DATABASE INACTIVITY.
                            IF THE LIVE DEMO IS UNAVAILABLE, PLEASE
                            CONTACT ME VIA EMAIL FOR A WALKTHROUGH.
                          </p>
                        </div>
                      </div>
                    )}

                    <div className="flex flex-wrap items-center gap-3 border-t border-white/10 pt-5">
                      {!isOnboardGit && (
                        isTruthLens ? (
                          <button
                            onClick={() => setShowProcess(true)}
                            className="inline-flex items-center gap-2 rounded-lg border border-[#00E5FF]/30 bg-[#00E5FF]/5 px-4 py-2.5 text-xs font-semibold text-[#00E5FF] transition-all hover:border-[#00E5FF] hover:bg-[#00E5FF]/10"
                          >
                            VIEW LIVE
                            <ArrowUpRight size={15} />
                          </button>
                        ) : (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 rounded-lg border border-[#00E5FF]/30 bg-[#00E5FF]/5 px-4 py-2.5 text-xs font-semibold text-[#00E5FF] transition-all hover:border-[#00E5FF] hover:bg-[#00E5FF]/10"
                          >
                            VIEW LIVE
                            <ArrowUpRight size={15} />
                          </a>
                        )
                      )}

                      {isTruthLens ? (
                        <button
                          onClick={() => setShowProcess(true)}
                          className="rounded-lg border border-white/10 px-4 py-2.5 text-xs font-semibold text-[#E6EAF2]/55 transition-all hover:border-white/25 hover:text-white"
                        >
                          <span className="mr-2 text-[#00E5FF]">GH</span>
                          SOURCE
                        </button>
                      ) : (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="rounded-lg border border-white/10 px-4 py-2.5 text-xs font-semibold text-[#E6EAF2]/55 transition-all hover:border-white/25 hover:text-white"
                        >
                          <span className="mr-2 text-[#00E5FF]">GH</span>
                          SOURCE
                        </a>
                      )}

                      <span className="ml-auto hidden font-mono text-[9px] tracking-widest text-white/20 sm:block">
                        BUILD_{String(index + 1).padStart(2, '0')}
                      </span>
                    </div>
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </div>

      {showProcess && (
        <div
          className="fixed inset-0 z-100 flex items-center justify-center bg-[#0B0F1A]/80 px-6 backdrop-blur-sm"
          onClick={() => setShowProcess(false)}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="process-title"
            className="w-full max-w-md rounded-2xl border border-[#D96846]/30 bg-[#141A2B] p-7 text-center shadow-[0_0_40px_rgba(217,104,70,0.15)]"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl border border-[#D96846]/30 bg-[#D96846]/10 text-[#D96846]">
              <TriangleAlert size={22} />
            </div>

            <h3
              id="process-title"
              className="mt-5 text-2xl font-bold text-[#D96846]"
            >
              Under Process
            </h3>

            <p className="mt-3 text-sm leading-6 text-[#E6EAF2]/55">
              This project link is currently being prepared.
              Please check back soon.
            </p>

            <button
              onClick={() => setShowProcess(false)}
              className="mt-6 rounded-lg border border-[#D96846]/30 px-5 py-2.5 text-xs font-semibold text-[#D96846] transition-all hover:border-[#D96846] hover:bg-[#D96846]/10"
            >
              CLOSE
            </button>
          </div>
        </div>
      )}
    </section>
  )
}

export default Projects