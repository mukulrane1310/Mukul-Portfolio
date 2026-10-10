function Footer() {
  return (
    <footer className="border-t border-white/10 px-6 py-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 text-sm sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-semibold tracking-wide">
            MUKUL<span className="text-[#00E5FF]">.</span>R
          </p>

          <p className="mt-1 text-xs text-[#E6EAF2]/35">
            Building intelligent digital experiences.
          </p>
        </div>

        <div className="flex items-center gap-5 text-xs text-[#E6EAF2]/40">
          <a
            href="#home"
            className="transition-colors hover:text-[#00E5FF]"
          >
            Back to top
          </a>

          <span className="h-1 w-1 rounded-full bg-[#00E5FF]/50" />

          <span>
            © {new Date().getFullYear()} Mukul Rane
          </span>
        </div>
      </div>
    </footer>
  )
}

export default Footer