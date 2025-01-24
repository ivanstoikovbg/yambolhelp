"use client"

import { Moon, Sparkles } from "lucide-react"
import { motion } from "framer-motion"

export function ThemeToggle() {
  return (
    <div className="flex items-center gap-3">
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative"
      >
        <motion.div
          animate={{
            scale: [1, 1.05, 1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute -inset-1 bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--secondary))] rounded-lg blur-sm"
        />
        
        <div className="relative flex items-center gap-2 px-3 py-1.5 bg-[hsl(var(--background))] border border-[hsl(var(--border))] rounded-lg">
          <motion.div
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <Sparkles className="w-4 h-4 text-[hsl(var(--primary))]" />
          </motion.div>
          
          <div className="flex items-center gap-1">
            <span className="text-sm font-medium text-[hsl(var(--muted-foreground))]">
              Скоро:
            </span>
            <span className="text-sm font-semibold text-[hsl(var(--foreground))]">
              светла тема
            </span>
          </div>
        </div>
      </motion.div>

      <motion.button
        whileTap={{ scale: 0.95 }}
        className="p-2 rounded-lg bg-[hsl(var(--background))] border border-[hsl(var(--border))] cursor-not-allowed opacity-50"
        disabled
      >
        <Moon className="w-5 h-5" />
      </motion.button>
    </div>
  )
} 