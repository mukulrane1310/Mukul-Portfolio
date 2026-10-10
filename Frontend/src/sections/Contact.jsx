import { Mail, MapPin, ArrowUpRight } from 'lucide-react'

function Contact() {
  const links = [
    {
      label: 'EMAIL ME',
      href: 'https://mail.google.com/mail/?view=cm&fs=1&to=mukulrane1392@gmail.com',
      icon: Mail,
    },
    {
      label: 'GITHUB',
      href: 'https://github.com/mukulrane1310',
      icon: null,
    },
    {
      label: 'LINKEDIN',
      href: 'https://www.linkedin.com/in/mukul-rane-916ba53a5',
      icon: null,
    },
  ]

  const roles = [
    'Full Stack Developer',
    'AI / GenAI Developer',
    'Python Developer',
    'Software Developer',
  ]

  return (
    <section
      id="contact"
      className="relative scroll-mt-24 overflow-hidden px-6 py-20 sm:py-28"
    >
      <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#00E5FF]/5 blur-3xl" />

      <div className="mx-auto max-w-5xl">
        {/* Section Heading */}
        <div className="mb-10">
          <p className="mb-3 text-xs font-semibold tracking-[0.35em] text-[#00E5FF]">
            CONTACT / CONNECTION
          </p>

          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Let's build something
            <span className="text-[#00E5FF]"> meaningful.</span>
          </h2>

          <p className="mt-5 max-w-2xl text-lg leading-8 text-[#E6EAF2]/60">
            I'm open to opportunities where I can contribute, learn and
            build useful products with great teams.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid gap-6 md:grid-cols-[1.4fr_1fr]">
          {/* Main Contact Box */}
          <div className="rounded-2xl border border-[#00E5FF]/25 bg-[#141A2B]/60 p-6 transition-all duration-300 hover:border-[#00E5FF]/50 sm:p-8">
            {/* Let's Connect First */}
            <p className="mb-4 text-xs font-semibold tracking-[0.25em] text-[#E6EAF2]/50">
              LET'S CONNECT
            </p>

            <div className="flex flex-wrap gap-3">
              {links.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-[#00E5FF]/25 bg-[#00E5FF]/5 px-4 py-3 text-sm font-semibold text-[#E6EAF2] transition-all duration-300 hover:border-[#00E5FF]/70 hover:bg-[#00E5FF]/10 hover:text-[#00E5FF]"
                >
                  {Icon && <Icon size={17} />}
                  {label}
                  <ArrowUpRight size={14} />
                </a>
              ))}
            </div>

            {/* Divider */}
            <div className="my-8 border-t border-white/10" />

            {/* Opportunity Status Below Links */}
            <div className="flex items-center justify-between gap-3">
              <span className="font-mono text-[10px] tracking-[0.2em] text-[#E6EAF2]/45">
                OPPORTUNITY_STATUS
              </span>

              <span className="flex items-center gap-2 text-[10px] font-semibold tracking-wider text-[#00E5FF]">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#00E5FF] shadow-[0_0_8px_#00E5FF]" />
                AVAILABLE
              </span>
            </div>

            <h3 className="mt-6 text-xl font-bold sm:text-2xl">
              OPEN TO ENTRY-LEVEL OPPORTUNITIES
            </h3>

            {/* Role Badges */}
            <div className="mt-5 flex flex-wrap gap-2">
              {roles.map((role) => (
                <span
                  key={role}
                  className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-xs text-[#E6EAF2]/70"
                >
                  {role}
                </span>
              ))}
            </div>
          </div>

          {/* Connection Information */}
          <div className="rounded-2xl border border-white/10 bg-[#141A2B]/40 p-6 sm:p-8">
            <p className="font-mono text-[10px] tracking-[0.25em] text-[#E6EAF2]/40">
              CONNECTION_INFO
            </p>

            <div className="mt-7 space-y-6">
              <div>
                <p className="text-[10px] tracking-widest text-white/40">
                  LOCATION
                </p>

                <p className="mt-2 flex items-center gap-2 text-sm text-[#E6EAF2]/75">
                  <MapPin size={15} className="text-[#00E5FF]" />
                  India
                </p>
              </div>

              <div>
                <p className="text-[10px] tracking-widest text-white/40">
                  RESPONSE
                </p>

                <p className="mt-2 text-sm leading-6 text-[#E6EAF2]/75">
                  Open to professional opportunities and collaborations.
                </p>
              </div>

              <div className="border-t border-white/10 pt-5">
                <p className="text-xs leading-6 text-[#E6EAF2]/50">
                  Have a project, opportunity or idea? Feel free to reach out
                  through any of the links.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Message */}
        <p className="mt-8 text-center text-xs text-[#E6EAF2]/35">
          Thanks for visiting my portfolio.
        </p>
      </div>
    </section>
  )
}

export default Contact