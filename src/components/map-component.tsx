"use client"

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import * as L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import { Building2, Wallet, Landmark, Bus, MapPin } from 'lucide-react'
import type { Site } from './municipal-sites'
import dynamic from 'next/dynamic'

const categoryConfig = {
  'Администрация': {
    color: '#0ea5e9',
    Icon: Building2
  },
  'Финанси': {
    color: '#22c55e',
    Icon: Wallet
  },
  'Култура': {
    color: '#f97316',
    Icon: Landmark
  },
  'Транспорт': {
    color: '#8b5cf6',
    Icon: Bus
  }
} as const

const MAPBOX_STYLE = 'mapbox/dark-v11'
const MAPBOX_TOKEN = process.env.NEXT_PUBLIC_MAPBOX_TOKEN

const mapSizes = {
  sm: 'h-[400px]',    
  md: 'h-[550px]',  
  lg: 'h-[650px]',    
  xl: 'h-[750px]',    
  '2xl': 'h-[800px]'   
}

const createMarkerIcon = (category: string) => {
  const config = categoryConfig[category as keyof typeof categoryConfig] || {
    color: '#6b7280',
    Icon: MapPin
  }
  
  const { color } = config
  
  const div = document.createElement('div')
  div.className = 'custom-marker-container'
  
  const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg')
  svg.setAttribute('width', '40')
  svg.setAttribute('height', '40')
  svg.setAttribute('viewBox', '0 0 40 40')
  svg.setAttribute('fill', 'none')
  
  const circle1 = document.createElementNS('http://www.w3.org/2000/svg', 'circle')
  circle1.setAttribute('cx', '20')
  circle1.setAttribute('cy', '20')
  circle1.setAttribute('r', '18')
  circle1.setAttribute('fill', color)
  circle1.setAttribute('fill-opacity', '0.2')
  
  const circle2 = document.createElementNS('http://www.w3.org/2000/svg', 'circle')
  circle2.setAttribute('cx', '20')
  circle2.setAttribute('cy', '20')
  circle2.setAttribute('r', '12')
  circle2.setAttribute('fill', color)
  
  svg.appendChild(circle1)
  svg.appendChild(circle2)
  div.appendChild(svg)
  
  return div
}

const getCustomIcon = (category: string) => {
  return new L.DivIcon({
    className: 'custom-marker-container',
    html: createMarkerIcon(category),
    iconSize: new L.Point(40, 40),
    iconAnchor: new L.Point(20, 40),
    popupAnchor: new L.Point(0, -40)
  })
}

const MapComponent = ({ sites }: { sites: Site[] }) => {
  return (
    <div className="relative w-full bg-[hsl(var(--background))] z-0">
      <div className={`
        w-full 
        rounded-lg md:rounded-xl lg:rounded-2xl 
        overflow-hidden 
        border border-white/10
        ${mapSizes.sm}
        md:${mapSizes.md}
        lg:${mapSizes.lg}
        xl:${mapSizes.xl}
        2xl:${mapSizes['2xl']}
        relative
        z-10
      `}>
        <MapContainer
          center={[42.4837, 26.5012]}
          zoom={14}
          className="h-full w-full"
          zoomControl={true}
          scrollWheelZoom={true}
          doubleClickZoom={true}
          dragging={true}
          attributionControl={true}
        >
          <TileLayer
            attribution='© <a href="https://www.mapbox.com/about/maps/">Mapbox</a>'
            url={`https://api.mapbox.com/styles/v1/${MAPBOX_STYLE}/tiles/{z}/{x}/{y}?access_token=${MAPBOX_TOKEN}`}
            tileSize={512}
            zoomOffset={-1}
            maxZoom={18}
          />
          {sites.map((site) => {
            const color = categoryConfig[site.category as keyof typeof categoryConfig]?.color || '#6b7280'
            const Icon = categoryConfig[site.category as keyof typeof categoryConfig]?.Icon || MapPin
            
            return site.location && (
              <Marker
                key={site.url}
                position={[site.location.lat, site.location.lng]}
                icon={getCustomIcon(site.category)}
                title={site.title}
              >
                <Popup className="dark-theme-popup">
                  <div className="relative p-2.5 sm:p-4 bg-[hsl(var(--background))] text-[hsl(var(--foreground))] rounded-lg border border-[hsl(var(--border))] shadow-lg overflow-hidden max-w-[calc(100vw-2rem)] sm:max-w-none">
                    <div 
                      className="absolute inset-0 opacity-[0.03] sm:opacity-5"
                      style={{
                        backgroundImage: `radial-gradient(circle at 50% 0%, ${color}, transparent 70%)`
                      }}
                    />
                    <div className="relative mb-2.5 sm:mb-3">
                      <div className="flex items-start gap-2.5 sm:gap-3">
                        <div 
                          className="p-2 sm:p-2.5 rounded-lg shrink-0"
                          style={{
                            background: `linear-gradient(135deg, ${color}20, transparent)`,
                            border: `1px solid ${color}30`
                          }}
                        >
                          <Icon color={color} size={14} className="sm:w-[18px] sm:h-[18px]" />
                        </div>
                        <div className="flex-1 min-w-0 pt-0.5">
                          <h3 className="text-[13px] sm:text-base font-medium leading-tight mb-1.5 truncate pr-7 sm:pr-8">
                            {site.title}
                          </h3>
                          <div className="flex flex-wrap gap-1.5 sm:gap-2">
                            <div 
                              className="inline-flex items-center gap-1.5 px-1.5 sm:px-2 py-0.5 rounded-full text-[10px] sm:text-xs font-medium"
                              style={{
                                backgroundColor: `${color}15`,
                                color: color
                              }}
                            >
                              <span className="w-1 h-1 rounded-full" style={{ backgroundColor: color }} />
                              <span className="truncate max-w-[100px] sm:max-w-[140px]">{site.category}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <p className="relative text-[11px] sm:text-sm text-[hsl(var(--muted-foreground))] mb-2.5 sm:mb-3 leading-relaxed line-clamp-3 sm:line-clamp-none">
                      {site.description}
                    </p>
                    <a
                      href={site.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative group flex items-center justify-between w-full px-2.5 sm:px-3 py-2 sm:py-2.5 rounded-md transition-all duration-300"
                      style={{
                        backgroundColor: `${color}10`,
                        border: `1px solid ${color}30`,
                        color: color
                      }}
                    >
                      <span className="font-medium text-xs sm:text-sm">Към сайта</span>
                      <svg 
                        className="w-3 h-3 sm:w-3.5 sm:h-3.5 transform transition-transform duration-300 group-hover:translate-x-1" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="2"
                      >
                        <path d="M5 12h14" />
                        <path d="M12 5l7 7-7 7" />
                      </svg>
                    </a>
                  </div>
                </Popup>
              </Marker>
            )
          })}
        </MapContainer>
      </div>
    </div>
  )
}

export default dynamic(() => Promise.resolve(MapComponent), {
  ssr: false
}) 