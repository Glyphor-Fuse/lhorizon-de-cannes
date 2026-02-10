import { useState } from 'react';
import { Compass, Anchor, Utensils, TreePine, MapPin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type Category = "dining" | "yachting" | "seclusion";

interface Location {
  id: number;
  x: number; // percentage
  y: number; // percentage
  category: Category;
  name: string;
  desc: string;
}

const LOCATIONS: Location[] = [
  { id: 1, x: 20, y: 30, category: "dining", name: "La Palme d'Or", desc: "2-Michelin star excellence." },
  { id: 2, x: 45, y: 25, category: "dining", name: "Le Baoli", desc: "Asian fusion & nightlife." },
  { id: 3, x: 70, y: 40, category: "dining", name: "Tetou", desc: "Legendary bouillabaisse." },
  { id: 4, x: 15, y: 60, category: "yachting", name: "Port Pierre Canto", desc: "Private superyacht berthing." },
  { id: 5, x: 35, y: 80, category: "yachting", name: "Îles de Lérins", desc: "Crystal clear anchorages." },
  { id: 6, x: 80, y: 70, category: "yachting", name: "Cap d'Antibes", desc: "Scenic coastal sailing." },
  { id: 7, x: 10, y: 15, category: "seclusion", name: "Villa Romaine", desc: "Hidden hilltop sanctuary." },
  { id: 8, x: 60, y: 10, category: "seclusion", name: "Esterel Massif", desc: "Red rock hiking trails." },
  { id: 9, x: 90, y: 50, category: "seclusion", name: "Plage de la Garoupe", desc: "Private cove access." },
];

export const ConciergeCompass = () => {
  const [activeCategory, setActiveCategory] = useState<Category>("dining");

  return (
    <section className="relative py-24 bg-azure-950 text-white overflow-hidden">
      {/* Abstract Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-white/20 rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-white/10 rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] border border-white/5 rounded-full" />
      </div>

      <div className="container relative z-10 mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Controls Panel */}
          <div className="lg:col-span-4 space-y-8 animate-fade-in-up">
            <div>
              <div className="flex items-center gap-3 text-champagne-400 mb-4">
                <Compass className="w-6 h-6" />
                <span className="uppercase tracking-widest text-sm font-semibold">Concierge Compass</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-display font-medium leading-tight mb-6">
                Curate Your <span className="italic text-champagne-300">Riviera</span>
              </h2>
              <p className="text-white/70 font-body text-lg leading-relaxed">
                Our concierge team has mapped the essential experiences of Cannes. 
                Toggle the compass to reveal your perfect itinerary.
              </p>
            </div>

            <div className="flex flex-col gap-3">
              {[
                { id: "dining", label: "Michelin Dining", icon: Utensils },
                { id: "yachting", label: "Yachting & Ports", icon: Anchor },
                { id: "seclusion", label: "Private Seclusion", icon: TreePine },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveCategory(item.id as Category)}
                  className={cn(
                    "group flex items-center justify-between p-4 rounded-sm border transition-all duration-300",
                    activeCategory === item.id
                      ? "bg-white/10 border-champagne-500/50 text-white"
                      : "bg-transparent border-white/10 text-white/50 hover:border-white/30"
                  )}
                >
                  <div className="flex items-center gap-4">
                    <item.icon className={cn("w-5 h-5", activeCategory === item.id ? "text-champagne-400" : "text-white/40")} />
                    <span className="font-medium tracking-wide">{item.label}</span>
                  </div>
                  <ArrowRight className={cn("w-4 h-4 transition-transform", activeCategory === item.id ? "translate-x-0 opacity-100" : "-translate-x-2 opacity-0")} />
                </button>
              ))}
            </div>
          </div>

          {/* Map Interface */}
          <div className="lg:col-span-8 relative h-[600px] bg-azure-900/50 rounded-lg border border-white/10 overflow-hidden shadow-2xl backdrop-blur-sm animate-fade-in">
            {/* Map Image Base */}
            <img 
              src="/images/map-bg.png" 
              alt="Stylized Map of Cannes" 
              className="absolute inset-0 w-full h-full object-cover opacity-30 mix-blend-overlay grayscale"
            />
            
            {/* Grid Overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px]" />

            {/* Pins */}
            {LOCATIONS.map((loc) => {
              const isActive = loc.category === activeCategory;
              return (
                <div
                  key={loc.id}
                  className="absolute transform -translate-x-1/2 -translate-y-1/2 transition-all duration-500"
                  style={{ 
                    left: `${loc.x}%`, 
                    top: `${loc.y}%`,
                    opacity: isActive ? 1 : 0.2,
                    scale: isActive ? 1 : 0.8,
                    zIndex: isActive ? 20 : 10
                  }}
                >
                  <div className="relative group cursor-pointer">
                    {/* Pulsing Ring */}
                    {isActive && (
                      <div className="absolute -inset-4 bg-champagne-500/20 rounded-full animate-ping" />
                    )}
                    
                    {/* Pin Head */}
                    <div className={cn(
                      "relative z-10 w-8 h-8 rounded-full flex items-center justify-center border transition-colors",
                      isActive 
                        ? "bg-azure-950 border-champagne-400 text-champagne-400 shadow-[0_0_15px_rgba(235,200,100,0.3)]" 
                        : "bg-azure-950/80 border-white/20 text-white/20"
                    )}>
                      <MapPin className="w-4 h-4" />
                    </div>

                    {/* Tooltip */}
                    <div className={cn(
                      "absolute bottom-full left-1/2 -translate-x-1/2 mb-3 w-48 p-3 bg-white text-azure-950 text-center rounded-sm shadow-xl transition-all duration-300 pointer-events-none",
                      isActive ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
                    )}>
                      <div className="font-display font-bold text-sm mb-1">{loc.name}</div>
                      <div className="text-xs text-azure-950/70 font-body leading-snug">{loc.desc}</div>
                      {/* Triangle */}
                      <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[6px] border-t-white" />
                    </div>
                  </div>
                </div>
              );
            })}

            {/* Legend/Key */}
            <div className="absolute bottom-6 left-6 flex flex-col gap-2 bg-azure-950/90 p-4 rounded border border-white/10 backdrop-blur-md">
              <span className="text-xs text-white/50 uppercase tracking-wider mb-1">Status</span>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-champagne-400 animate-pulse" />
                <span className="text-xs font-medium text-white">Live Availability</span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default ConciergeCompass;
