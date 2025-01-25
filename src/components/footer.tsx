"use client"

import { motion } from "framer-motion"
import { Mail } from "lucide-react"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="relative bg-[hsl(var(--background))] border-t border-[hsl(var(--border))]">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,hsl(var(--primary))/_5%,transparent_50%)]" />
        <div className="absolute inset-0 bg-grid-white/5 [mask-image:radial-gradient(ellipse_at_center,black_50%,transparent)]" />
      </div>
      <div className="relative container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <Link 
              href="/"
              className="inline-flex items-center gap-2 text-xl font-bold bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--secondary))] bg-clip-text text-transparent"
            >
              Yambol Help
            </Link>
            <p className="mt-4 text-sm text-[hsl(var(--muted-foreground))] leading-relaxed">
              Вашият дигитален портал към всички общински сайтове. 
              Предоставяме бърз и лесен достъп до всички общински сайтове.
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-6">
              <a
                href="mailto:ivanstoikov007@gmail.com"
                className="group flex items-center gap-2 text-sm text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--foreground))] transition-colors"
              >
                <Mail className="w-4 h-4 text-[hsl(var(--primary))]" />
                <span className="group-hover:underline">ivanstoikov007@gmail.com</span>
              </a>
              <a
                href="mailto:davalashev@gmail.com"
                className="group flex items-center gap-2 text-sm text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--foreground))] transition-colors"
              >
                <Mail className="w-4 h-4 text-[hsl(var(--primary))]" />
                <span className="group-hover:underline">davalashev@gmail.com</span>
              </a>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-8 pt-8 border-t border-[hsl(var(--border))]"
          >
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-[hsl(var(--muted-foreground))]">
              <p>© 2025 Yambol Help. Всички права запазени.</p>
              <div className="flex items-center gap-4">
                <Link href="/" className="hover:text-[hsl(var(--foreground))] transition-colors">
                  Поверителност
                </Link>
                <Link href="/" className="hover:text-[hsl(var(--foreground))] transition-colors">
                  Условия за ползване
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  )
} 