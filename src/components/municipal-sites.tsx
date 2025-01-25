"use client"

import { Building2, ExternalLink, Bus, Wind, Volleyball, Droplet, Map, Search } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import dynamic from 'next/dynamic'

const MapComponent = dynamic(() => import('./map-component'), { 
  ssr: false,
  loading: () => (
    <div className="h-[600px] w-full flex items-center justify-center bg-white/5 rounded-2xl">
      <div className="animate-pulse">Зареждане на картата...</div>
    </div>
  )
})

export interface Site {
  title: string
  url: string
  category: string
  description: string
  icon: React.ReactNode
  featured?: boolean
  location?: {
    lat: number
    lng: number
  }
}

const sites: Site[] = [
  {
    title: "Община Ямбол",
    description: "Официален уеб сайт на общината",
    icon: <Building2 className="w-6 h-6" />,
    url: "https://yambol.bg",
    category: "Администрация",
    featured: true,
    location: { lat: 42.4841759, lng: 26.5080739 }
  },
  {
    title: "ВиК",
    description: "Официален уеб сайт на „Водоснабдяване и канализация“ ЕООД (ВиК)",
    icon: <Droplet className="w-6 h-6" />,
    url: "https://vik-yambol.bg/",
    category: "Фирма за водоснабдяване",
    featured: true,
    location: { lat: 42.4809854, lng: 26.5027511 }
  },
  {
    title: "Мониторинг на въздуха и температурата",
    description: "Информация за чистотата на въздуха и температурата в града",
    icon: <Wind className="w-6 h-6" />,
    url: "https://air.yambol.bg/portal/home",
    category: "Платформа за наблюдение",
  },
  {
    title: "ФК Ямбол 1915",
    description: "Официален уеб сайт на ФК Ямбол 1915",
    icon: <Volleyball className="w-6 h-6" />,
    url: "https://fcyambol1915.com/",
    category: "Футбол",
    location: { lat: 42.4838093, lng: 26.4937666 }
  },
  {
    title: "Градски транспорт",
    description: "Маршрути и разписания",
    icon: <Bus className="w-6 h-6" />,
    url: "https://transport.yambol.bg/",
    category: "Транспорт",
    featured: true,
  }
]

const categories = ["Всички", ...Array.from(new Set(sites.map(site => site.category)))]

function SiteCard({ site, index }: { site: Site, index: number }) {
  return (
    <motion.a
      href={site.url}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative p-6 rounded-2xl backdrop-blur-sm bg-white/5 dark:bg-black/5 border border-white/10 dark:border-white/5 hover:border-[hsl(var(--primary))]/30 transition-all duration-500"
    >
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500">
        <div className="absolute inset-0 bg-gradient-to-b from-[hsl(var(--primary))]/10 via-transparent to-transparent" />
      </div>
      {site.featured && (
        <div className="absolute -top-3 -right-3 px-3 py-1 bg-[hsl(var(--primary))] rounded-full text-xs font-medium text-white shadow-lg">
          Популярно
        </div>
      )}
      <div className="relative flex items-start gap-4">
        <div className="relative p-3 rounded-xl bg-gradient-to-br from-[hsl(var(--primary))]/20 to-[hsl(var(--primary))]/5 group-hover:scale-110 transition-transform duration-500">
          <div className="text-[hsl(var(--primary))]">
            {site.icon}
          </div>
        </div>
        <div className="flex-1">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-lg font-semibold text-[hsl(var(--foreground))]">
              {site.title}
            </h3>
            <ExternalLink className="w-4 h-4 text-[hsl(var(--muted-foreground))] group-hover:text-[hsl(var(--primary))] transition-colors duration-300" />
          </div>
          <p className="text-sm text-[hsl(var(--muted-foreground))] group-hover:text-[hsl(var(--foreground))] transition-colors duration-300">
            {site.description}
          </p>
          <div className="mt-3">
            <span className="inline-block text-xs px-2 py-1 rounded-full bg-[hsl(var(--primary))]/10 text-[hsl(var(--primary))] font-medium">
              {site.category}
            </span>
          </div>
        </div>
      </div>
    </motion.a>
  )
}

export function MunicipalSites() {
  const [selectedCategory, setSelectedCategory] = useState("Всички")
  const [searchQuery, setSearchQuery] = useState("")
  const [view, setView] = useState<"grid" | "map">("grid")

  const filteredSites = sites.filter(site => {
    const matchesCategory = selectedCategory === "Всички" ? true : site.category === selectedCategory
    const matchesSearch = site.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         site.description.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsl(var(--primary))/_5%,transparent_50%)]" />
        <div className="absolute inset-0 bg-grid-white/5 [mask-image:radial-gradient(ellipse_at_center,black_70%,transparent)]" />
      </div>

      <div className="container mx-auto px-4 relative">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-[hsl(var(--foreground))] to-[hsl(var(--foreground))]/80 bg-clip-text text-transparent">
            Общински услуги и информация
          </h2>
          <div className="h-1 w-32 mx-auto bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--secondary))] rounded-full mb-6" />
          <p className="text-lg text-[hsl(var(--muted-foreground))]">
            Бърз достъп до всички общински сайтове и услуги на едно място
          </p>
        </motion.div>
        <div className="max-w-6xl mx-auto space-y-8">
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
            <div className="relative w-full sm:w-96">
              <input
                type="text"
                placeholder="Търсете услуги и информация..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-2 pl-10 rounded-xl bg-white/5 border border-white/10 focus:border-[hsl(var(--primary))]/30 outline-none transition-all duration-300"
              />
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[hsl(var(--muted-foreground))]" />
            </div>
            <button
              onClick={() => setView(view === "grid" ? "map" : "grid")}
              className={`px-4 py-2 rounded-xl transition-all duration-300 flex items-center gap-2 ${
                view === "map" 
                  ? "bg-[hsl(var(--primary))] text-white" 
                  : "bg-white/5 hover:bg-white/10"
              }`}
            >
              <Map className="w-4 h-4" />
              <span>{view === "grid" ? "Покажи карта" : "Покажи списък"}</span>
            </button>
          </div>
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-[hsl(var(--primary))] text-white"
                    : "bg-[hsl(var(--primary))]/10 text-[hsl(var(--primary))] hover:bg-[hsl(var(--primary))]/20"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
          <AnimatePresence mode="wait">
            {view === "grid" ? (
              <motion.div 
                layout
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {filteredSites.map((site, index) => (
                  <SiteCard key={site.url} site={site} index={index} />
                ))}
              </motion.div>
            ) : (
              <MapComponent sites={filteredSites} />
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
} 