"use client"

import { motion } from "framer-motion"
import { Building2, Bus, Wind, Volleyball, Droplet } from "lucide-react"

const categories = [
  { id: "all", label: "Всички", icon: null },
  { id: "administration", label: "Администрация", icon: Building2 },
  { id: "finance", label: "Фирма за водоснабдяване", icon: Droplet },
  { id: "culture", label: "Платформа за наблюдение", icon: Wind },
  { id: "transport", label: "Футбол", icon: Volleyball },
  { id: "transport", label: "Транспорт", icon: Bus }
]

interface CategoryFilterProps {
  activeCategory: string
  onCategoryChange: (category: string) => void
}

export function CategoryFilter({ activeCategory, onCategoryChange }: CategoryFilterProps) {
  return (
    <div className="flex flex-wrap gap-2 justify-center">
      {categories.map((category) => (
        <motion.button
          key={category.id}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => onCategoryChange(category.id)}
          className={`
            flex items-center gap-2 px-4 py-2 rounded-full
            transition-colors duration-200
            ${activeCategory === category.id 
              ? 'bg-[hsl(var(--primary))] text-white' 
              : 'bg-white/5 hover:bg-white/10'
            }
          `}
        >
          {category.icon && <category.icon className="w-4 h-4" />}
          <span>{category.label}</span>
        </motion.button>
      ))}
    </div>
  )
} 