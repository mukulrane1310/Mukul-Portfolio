import { Menu, Terminal, X } from 'lucide-react'
import { useState } from 'react'

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Resume', href: '#resume' },
  { label: 'Projects', href: '#projects' },
  { label: 'Journey', href: '#journey' },
  { label: 'Contact', href: '#contact' },
]

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed left-0 top-0 z-50 w-full px-4 pt-4">
      <nav className="mx-auto max-w-6xl rounded-2xl border border-[#D96846]/15 bg-[#0B0F1A]/75 px-4 py-3 shadow-[0_0_30px_rgba(217,104,70,0.05)] backdrop-blur-xl">
        <div className="flex items-center justify-between">
          <a href="#home" className="group flex items-center gap-2">
            <span className="relative flex h-9 w-9 items-center justify-center rounded-lg border border-[#D96846]/30 bg-[#D96846]/5 text-sm font-bold text-[#D96846] transition-all duration-300 group-hover:border-[#D96846] group-hover:shadow-[0_0_18px_rgba(217,104,70,0.3)]">
              M
            </span>

            <span className="hidden text-sm font-semibold tracking-wide sm:block">
              MUKUL<span className="text-[#D96846]">.</span>R
            </span>
          </a>

          <div className="hidden items-center gap-1 md:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="group relative rounded-lg px-3 py-2 text-xs font-medium tracking-wide text-[#E6EAF2]/55 transition-colors duration-300 hover:text-[#D96846]"
              >
                {item.label}

                <span className="absolute bottom-1 left-1/2 h-px w-0 -translate-x-1/2 bg-[#D96846] shadow-[0_0_8px_#D96846] transition-all duration-300 group-hover:w-1/2" />
              </a>
            ))}
          </div>

          <button
            className="hidden items-center gap-2 rounded-lg border border-[#00E5FF]/20 bg-[#00E5FF]/5 px-3 py-2 text-xs text-[#E6EAF2]/70 transition-all duration-300 hover:border-[#00E5FF]/60 hover:text-[#00E5FF] hover:shadow-[0_0_15px_rgba(0,229,255,0.15)] md:flex"
            aria-label="Open command palette"
          >
            <Terminal size={15} />
            <span>CTRL K</span>
          </button>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="rounded-lg border border-white/10 p-2 text-[#E6EAF2]/70 transition-colors hover:border-[#D96846]/50 hover:text-[#D96846] md:hidden"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {isOpen && (
          <div className="mt-3 border-t border-[#D96846]/10 pt-4 md:hidden">
            <div className="flex flex-col gap-1">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="rounded-lg px-3 py-3 text-sm text-[#E6EAF2]/70 transition-colors hover:bg-[#D96846]/5 hover:text-[#D96846]"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}

export default Navbar