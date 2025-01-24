"use client"

import { useEffect, useState } from 'react'

interface Particle {
  top: string
  left: string
  duration: string
  opacity: number
}

export function HeroParticles() {
  const [particles, setParticles] = useState<Particle[]>([])

  useEffect(() => {
    const generateParticles = () => {
      const newParticles = Array.from({ length: 20 }, () => ({
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        duration: `${5 + Math.random() * 10}s`,
        opacity: 0.1 + Math.random() * 0.3
      }))
      setParticles(newParticles)
    }

    generateParticles()
  }, [])

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle, index) => (
        <div
          key={index}
          className="absolute w-1 h-1 bg-[hsl(var(--primary))] rounded-full"
          style={{
            top: particle.top,
            left: particle.left,
            animation: `float ${particle.duration} linear infinite`,
            opacity: particle.opacity
          }}
        />
      ))}
    </div>
  )
} 