import { useEffect, useState } from 'react'

function CursorGlow() {
  const [position, setPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (event) => {
      setPosition({
        x: event.clientX,
        y: event.clientY,
      })
    }

    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return (
    <div
      className="pointer-events-none fixed z-50 hidden h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#00E5FF]/8 blur-3xl md:block"
      style={{
        left: position.x,
        top: position.y,
      }}
    />
  )
}

export default CursorGlow