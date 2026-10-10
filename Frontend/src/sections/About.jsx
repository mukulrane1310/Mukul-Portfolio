function About() {
  const stats = [
    { value: '4+', label: 'Projects Built' },
    { value: 'Full Stack', label: 'Development' },
    { value: 'AI + GenAI', label: 'Current Focus' },
  ]

  return (
    <section id="about" className="px-6 py-28">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-16 md:grid-cols-[1fr_1.5fr]">
          <div>
            <p className="mb-3 text-sm font-medium tracking-[0.3em] text-[#00E5FF]">
              ABOUT ME
            </p>

            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Engineering with
              <span className="text-[#00E5FF]"> purpose.</span>
            </h2>
          </div>

          <div>
            <p className="text-lg leading-8 text-[#E6EAF2]/65">
              I'm a Computer Engineering graduate focused on building
              practical, scalable and user-centric digital products.
              I enjoy working across frontend, backend and AI-powered
              systems to turn ideas into working applications.
            </p>

            <p className="mt-6 text-lg leading-8 text-[#E6EAF2]/65">
              My current focus is full-stack development, Generative AI
              and intelligent applications that solve real-world problems.
              I care about clean architecture, useful interfaces and
              understanding why a technology is the right choice.
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-xl border border-white/10 bg-[#141A2B]/60 p-5"
                >
                  <p className="text-2xl font-bold text-[#00E5FF]">
                    {stat.value}
                  </p>

                  <p className="mt-2 text-sm text-[#E6EAF2]/50">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About