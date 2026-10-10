const skillGroups = [
  {
    title: 'Frontend',
    skills: ['React.js', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS'],
  },
  {
    title: 'Backend',
    skills: ['Python', 'FastAPI', 'REST APIs', 'Node.js'],
  },
  {
    title: 'Database',
    skills: ['PostgreSQL', 'MongoDB', 'Supabase'],
  },
  {
    title: 'AI / GenAI',
    skills: ['Generative AI', 'RAG', 'LLM APIs', 'Vector Search'],
  },
  {
    title: 'Tools & DevOps',
    skills: ['Git', 'GitHub', 'Docker', 'Netlify', 'Render'],
  },
  {
    title: 'Architecture',
    skills: ['JWT Auth', 'API Design', 'MVC', 'Clean Architecture'],
  },
]

function Skills() {
  return (
    <section id="skills" className="px-6 py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14">
          <p className="mb-3 text-sm font-medium tracking-[0.3em] text-[#00E5FF]">
            TECH STACK
          </p>

          <h2 className="futuristic-text text-4xl font-bold tracking-tight sm:text-5xl">
            Tools I use to
            <span className="text-[#00E5FF]"> build.</span>
          </h2>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group) => (
            <div
              key={group.title}
              className="group futuristic-hover rounded-2xl border border-white/10 bg-[#141A2B]/50 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#00E5FF]/40"
            >
              <h3 className="text-xl font-semibold">
                {group.title}
              </h3>

              <div className="mt-5 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-lg border border-white/10 bg-white/3 px-3 py-2 text-sm text-[#E6EAF2]/65 transition-colors group-hover:border-white/15 group-hover:text-[#E6EAF2]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills