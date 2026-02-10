import React from "react";
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export const HorizonHero = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/images/hero-coastline.jpg"
          alt="Cannes Coastline at Golden Hour"
          className="w-full h-full object-cover"
        />
        {/* Cinematic Scrim */}
        <div className="absolute inset-0 bg-gradient-to-t from-azure-950/80 via-azure-950/30 to-transparent" />
        <div className="absolute inset-0 bg-azure-950/20 backdrop-blur-[1px]" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4">
        <span className="animate-fade-in-up font-body text-champagne-300 uppercase tracking-[0.2em] text-sm md:text-base mb-6 font-medium">
          The Private Collection
        </span>
        
        <h1 className="animate-fade-in-up [animation-delay:200ms] font-display text-5xl md:text-7xl lg:text-8xl text-white font-medium tracking-tight mb-8 max-w-5xl mx-auto leading-[1.1]">
          Elegance at the Edge <br className="hidden md:block" /> of the World
        </h1>

        <div className="animate-fade-in-up [animation-delay:400ms] flex flex-col md:flex-row gap-6 mt-4">
          <Button 
            size="lg" 
            className="bg-champagne-500 hover:bg-champagne-400 text-azure-950 font-semibold rounded-none px-8 py-6 text-base tracking-wide min-w-[200px]"
          >
            Explore Villas
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="border-white/30 text-white hover:bg-white/10 hover:text-white hover:border-white rounded-none px-8 py-6 text-base tracking-wide min-w-[200px]"
          >
            Concierge Services
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce text-white/50">
        <ArrowDown className="w-6 h-6" />
      </div>
    </section>
  );
};

export default HorizonHero;
