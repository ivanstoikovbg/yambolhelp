import { MunicipalSites } from "@/components/municipal-sites"
import { ThemeToggle } from "@/components/theme-toggle"
//import { School } from "lucide-react"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/hero-section"
//import { SearchSection } from "@/components/search-section"
import { ScrollToTop } from "@/components/scroll-to-top"
//import { ChatAssistant } from "@/components/chat-assistant/chat-assistant"

function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-[hsl(var(--border))] bg-[hsl(var(--card))] backdrop-blur-sm">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <h1 className="text-2xl font-bold text-[hsl(var(--foreground))]">
          Yambol Help
        </h1>
        <ThemeToggle />
      </div>
    </nav>
  )
}

function ServicesSection() {
  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-4">
        <MunicipalSites />
      </div>
    </section>
  )
}

export default function Home() {
  return (
    <div className="min-h-screen bg-[hsl(var(--background))]">
      <Navbar />
      <main>
        <HeroSection />
        <ServicesSection />
      </main>
      <Footer />
      <ScrollToTop />
      {/* <ChatAssistant /> */}
    </div>
  )
}
