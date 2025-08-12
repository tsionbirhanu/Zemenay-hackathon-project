"use client"

export function NetworkVisualization() {
  return (
    <div className="absolute top-0 right-0 w-[300px] h-[625px] pointer-events-none">
      <img src="/globe1.svg" alt="Globe" className="w-full h-full object-contain opacity-90 mix-blend-screen" />
    </div>
  )
}
