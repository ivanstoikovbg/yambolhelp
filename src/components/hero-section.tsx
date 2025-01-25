"use client"

import { ArrowRight, Building2, Sparkles, Bus, Landmark } from "lucide-react"
import { useEffect, useState } from "react"
import { useInView } from "react-intersection-observer"
import { motion, AnimatePresence } from "framer-motion"
import { HeroParticles } from './hero-particles'

interface StatCardProps {
  icon: React.ReactNode
  label: string
  value: number
  suffix?: string
  duration?: number
  tooltip?: string
}

const initialStats = [
  {
    icon: <Building2 className="w-7 h-7 text-[hsl(var(--primary))]" />,
    label: "Общински услуги",
    value: 150,
    suffix: "+",
    duration: 1000,
    tooltip: "Достъпни административни и електронни услуги"
  },
  {
    icon: <Bus className="w-7 h-7 text-[hsl(var(--primary))]" />,
    label: "Автобусни линии",
    value: 18,
    suffix: "",
    duration: 1500,
    tooltip: "Активни автобусни линии в градския транспорт"
  },
  {
    icon: <Landmark className="w-7 h-7 text-[hsl(var(--primary))]" />,
    label: "Забележителности",
    value: 25,
    suffix: "+",
    duration: 2000,
    tooltip: "Културни и исторически забележителности в града"
  },
]

function StatCard({ icon, label, value, suffix = "", duration = 2000, tooltip }: StatCardProps) {
  const [count, setCount] = useState(0)
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  })

  useEffect(() => {
    if (inView) {
      let start = 0
      const increment = Math.ceil(value / (duration / 16))
      
      const counter = setInterval(() => {
        start = Math.min(start + increment, value)
        setCount(start)
        
        if (start >= value) {
          clearInterval(counter)
        }
      }, 16)

      return () => clearInterval(counter)
    }
  }, [inView, value, duration])

  return (
    <motion.div 
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
      className="relative group p-8 rounded-2xl backdrop-blur-sm bg-white/5 dark:bg-black/5 border border-white/10 dark:border-white/5 hover:border-[hsl(var(--primary))]/30 transition-all duration-500"
    >
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500">
        <div className="absolute inset-0 bg-gradient-to-b from-[hsl(var(--primary))]/10 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[conic-gradient(from_0deg,transparent,hsl(var(--primary))/_0.1,transparent_360deg)] animate-spin-slow" />
      </div>
      
      <div className="relative flex flex-col items-center">
        <div className="relative p-4 rounded-2xl bg-gradient-to-br from-[hsl(var(--primary))]/20 to-[hsl(var(--primary))]/5 group-hover:scale-110 transition-transform duration-500">
          {icon}
          <div className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-[hsl(var(--primary))] opacity-0 group-hover:opacity-70 transition-all duration-500 animate-ping" />
        </div>
        <div className="text-center mt-6">
          <div className="relative text-4xl font-bold bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--secondary))] bg-clip-text text-transparent">
            {count}{suffix}
          </div>
          <div className="mt-2 text-base text-[hsl(var(--muted-foreground))]">{label}</div>
        </div>
      </div>
      {tooltip && (
        <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 w-max opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 pointer-events-none">
          <div className="relative">
            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--secondary))] opacity-10 blur-lg" />
            <div className="relative px-4 py-2 rounded-xl bg-[hsl(var(--card))]/80 backdrop-blur-md border border-[hsl(var(--primary))]/20">
              <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 rotate-45 bg-[hsl(var(--card))]/80 backdrop-blur-md border-l border-t border-[hsl(var(--primary))]/20" />
              <p className="text-sm text-[hsl(var(--foreground))] whitespace-nowrap">
                {tooltip}
              </p>
              <div className="absolute bottom-0 left-4 right-4 h-px bg-gradient-to-r from-transparent via-[hsl(var(--primary))]/20 to-transparent" />
            </div>
          </div>
        </div>
      )}
    </motion.div>
  )
}

export function HeroSection() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <section className="relative min-h-screen flex items-center justify-center">
      <HeroParticles />
      <div className="relative z-10">
        <div className="absolute inset-0 bg-[hsl(var(--background))]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,hsl(var(--primary))/_10%,transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,hsl(var(--secondary))/_5%,transparent_30%)]" />
          <div className="absolute inset-0 bg-grid-white/5 [mask-image:radial-gradient(ellipse_at_center,black_70%,transparent)]" />
        </div>

        <div className="container mx-auto px-4 relative pt-20 pb-32">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-4xl mx-auto text-center mb-24"
          >
            <div className="relative inline-block">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 tracking-tight"
              >
                <span className="text-[hsl(var(--foreground))]">
                  Yambol
                </span>
                <span 
                  className="relative inline-block ml-2 bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--secondary))] bg-clip-text text-transparent"
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                >
                  Help
                  <AnimatePresence>
                    {isHovered && (
                      <>
                        <motion.div
                          initial={{ opacity: 0, scale: 0.95 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.95 }}
                          transition={{ duration: 0.2 }}
                          className="absolute -inset-x-2 -inset-y-1 bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--secondary))] opacity-10 blur-lg -z-10"
                        />
                        <motion.div
                          initial={{ width: "0%" }}
                          animate={{ width: "100%" }}
                          exit={{ width: "0%" }}
                          transition={{ duration: 0.3 }}
                          className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--secondary))] opacity-70"
                        />
                      </>
                    )}
                  </AnimatePresence>
                </span>
              </motion.h1>
            </div>
            <p className="text-xl text-[hsl(var(--muted-foreground))] mb-6 leading-relaxed max-w-3xl mx-auto">
              Вашият единен портал към всички общински сайтове. 
              <span className="block mt-2 text-[hsl(var(--foreground))] font-medium">
                Бърз и лесен достъп до всички общински сайтове.
              </span>
            </p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mb-12"
            >
              <div className="relative inline-block">
                <div className="absolute inset-0 bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--secondary))] blur-xl opacity-20" />
                <div className="relative flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-md border border-white/10">
                  <Sparkles className="w-4 h-4 text-[hsl(var(--primary))]" />
                  <span className="text-sm font-medium text-[hsl(var(--foreground))]">
                    Вашият дигитален помощник
                  </span>
                </div>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <a 
                href="#services" 
                className="group relative px-8 py-4 bg-[hsl(var(--primary))] hover:bg-[hsl(var(--primary))]/90 text-white rounded-xl transition-all duration-300 inline-flex items-center gap-2 shadow-lg shadow-[hsl(var(--primary))]/20 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700" />
                <span className="relative">Разгледайте услугите</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform relative" />
              </a>
              <a 
                href="#contact" 
                className="group px-8 py-4 bg-white/5 dark:bg-white/10 backdrop-blur-sm border border-white/10 text-[hsl(var(--foreground))] rounded-xl hover:bg-white/10 dark:hover:bg-white/20 transition-all duration-300 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[hsl(var(--primary))]/0 via-[hsl(var(--primary))]/5 to-[hsl(var(--primary))]/0 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700" />
                <span className="relative">Свържете се с нас</span>
              </a>
            </motion.div>
          </motion.div>
          <div className="relative grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[hsl(var(--primary))]/5 to-transparent blur-3xl -z-10" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,hsl(var(--primary))/_5%,transparent_70%)]" />
            {initialStats.map((stat, index) => (
              <StatCard 
                key={index}
                icon={stat.icon}
                label={stat.label}
                value={stat.value}
                suffix={stat.suffix}
                duration={stat.duration}
                tooltip={stat.tooltip}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
} 