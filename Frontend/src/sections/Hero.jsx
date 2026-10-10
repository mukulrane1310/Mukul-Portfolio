import { ArrowDown, FileText } from 'lucide-react'
import { motion } from 'framer-motion'
import NeuralNetwork from '../components/NeuralNetwork'

function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden px-6 pt-32"
    >
      <NeuralNetwork />
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/4 top-1/4 h-72 w-72 rounded-full bg-[#00E5FF]/10 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 h-72 w-72 rounded-full bg-[#7C5CFF]/10 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl"
        >
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#00E5FF]/20 bg-[#00E5FF]/5 px-3 py-1.5 text-xs font-medium tracking-wide text-[#E6EAF2]/70">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#00E5FF] shadow-[0_0_8px_#00E5FF]" />
            OPEN TO ENTRY-LEVEL OPPORTUNITIES
          </p>

          <p className="mb-5 text-sm font-medium tracking-[0.3em] text-[#00E5FF]">
            FULL STACK DEVELOPER • AI / GENAI / PYTHON DEVELOPER
          </p>

          <h1 className="text-5xl font-bold leading-tight tracking-tight sm:text-6xl md:text-7xl">
            Building
            <span className="text-[#00E5FF]"> intelligent </span>
            digital experiences.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-[#E6EAF2]/60">
            I build modern web applications and AI-powered products that
            solve real-world problems through thoughtful engineering.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-lg border border-[#00E5FF]/60 bg-[#00E5FF]/10 px-6 py-3 font-semibold text-[#E6EAF2] shadow-[0_0_18px_rgba(0,229,255,0.08)] transition-all duration-300 hover:border-[#00E5FF] hover:bg-[#00E5FF]/15 hover:text-white hover:shadow-[0_0_25px_rgba(0,229,255,0.25)]"
            >
              Explore My Work
              <ArrowDown
                size={18}
                className="transition-transform duration-300 group-hover:translate-y-1"
              />
            </a>

            <a
              href="#resume"
              className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/3 px-6 py-3 font-semibold text-[#E6EAF2]/80 transition-all duration-300 hover:border-[#00E5FF]/40 hover:bg-[#00E5FF]/5 hover:text-[#00E5FF]"
            >
              <FileText size={17} />
              View Resume
            </a>

            <a
              href="#contact"
              className="rounded-lg border border-white/15 bg-white/3 px-6 py-3 font-semibold text-[#E6EAF2]/80 transition-all duration-300 hover:border-white/30 hover:bg-white/6 hover:text-white"
            >
              Contact Me
            </a>
          </div>

          <div className="mt-10 flex gap-6">
            <a
  href="https://github.com/mukulrpractice"
  target="_blank"
  rel="noreferrer"
  aria-label="GitHub"
  className="text-sm font-semibold text-[#E6EAF2]/60 transition-colors hover:text-[#00E5FF]"
>
  GitHub
</a>

<a
  href="https://www.linkedin.com/in/mukul-rane-916ba53a5"
  target="_blank"
  rel="noreferrer"
  aria-label="LinkedIn"
  className="text-sm font-semibold text-[#E6EAF2]/60 transition-colors hover:text-[#00E5FF]"
>
  LinkedIn
</a>
          </div>
        </motion.div>
      </div>
    </section>
    
  )
}

export default Hero