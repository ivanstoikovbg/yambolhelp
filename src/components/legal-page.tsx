"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ChevronLeft, ScrollText, Shield, FileCheck } from "lucide-react"

interface LegalPageProps {
  title: string
  icon?: "privacy" | "terms"
  children: React.ReactNode
}

const icons = {
  privacy: Shield,
  terms: FileCheck
}

export function LegalPage({ title, icon, children }: LegalPageProps) {
  const Icon = icon ? icons[icon] : ScrollText

  return (
    <div className="min-h-screen bg-[hsl(var(--background))]">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,hsl(var(--primary))/_5%,transparent_50%)]" />
        <div className="absolute inset-0 bg-grid-white/5 [mask-image:radial-gradient(ellipse_at_center,black_50%,transparent)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,hsl(var(--secondary))/_5%,transparent_30%)]" />
      </div>
      <div className="relative container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12"
          >
            <Link
              href="/"
              className="group inline-flex items-center gap-2 text-sm text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--foreground))] transition-colors"
            >
              <ChevronLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
              <span>Начало</span>
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-16 text-center"
          >
            <div className="inline-flex flex-col items-center">
              <div className="relative mb-6">
                <div className="absolute inset-0 bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--secondary))] blur-xl opacity-20" />
                <div className="relative p-4 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
                  <Icon className="w-8 h-8 text-[hsl(var(--primary))]" />
                </div>
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--secondary))] blur-xl opacity-20" />
                <h1 className="relative text-4xl sm:text-5xl font-bold bg-gradient-to-r from-[hsl(var(--foreground))] to-[hsl(var(--muted-foreground))] bg-clip-text text-transparent">
                  {title}
                </h1>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-white/5 backdrop-blur-sm rounded-2xl -z-10" />
            <div className="relative p-8 space-y-8">
              {children}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
} 