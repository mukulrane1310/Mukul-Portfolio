import { useEffect, useState } from 'react'

function ScrollProgress() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const updateProgress = () => {
      const scrollTop = window.scrollY
      const scrollableHeight =
        document.documentElement.scrollHeight - window.innerHeight

      const percentage =
        scrollableHeight > 0
          ? (scrollTop / scrollableHeight) * 100
          : 0

      setProgress(percentage)
    }

    window.addEventListener('scroll', updateProgress)

    return () => {
      window.removeEventListener('scroll', updateProgress)
    }
  }, [])

  return (
    <div className="pointer-events-none fixed left-0 top-0 z-60 h-px w-full bg-white/3">
      <div
        className="h-full bg-[#00E5FF] shadow-[0_0_10px_#00E5FF]"
        style={{ width: `${progress}%` }}
      />
    </div>
  )
}

export default ScrollProgress