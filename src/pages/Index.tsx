import React from "react";
import { HorizonHero } from "@/components/HorizonHero";
import { VillaCollection } from "@/components/VillaCollection";
import { RivieraLifestyle } from "@/components/RivieraLifestyle";
import { ConciergeCompass } from "@/components/ConciergeCompass";
import { SeasonOffers } from "@/components/SeasonOffers";
import { GuestAccolades } from "@/components/GuestAccolades";
import { BookingReserve } from "@/components/BookingReserve";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen bg-seasalt-50">
      
      {/* Navigation - Embedded directly for simplicity as per requirement */}
      <nav className="fixed top-0 w-full z-50 flex justify-between items-center px-6 py-6 transition-all duration-300 bg-gradient-to-b from-azure-950/80 to-transparent hover:bg-azure-950/90 hover:backdrop-blur-md">
        <div className="font-display text-2xl text-white font-semibold tracking-tight">
          L'Horizon <span className="text-champagne-400 font-light">&</span> Cannes
        </div>
        <div className="hidden md:flex gap-8 text-white text-sm uppercase tracking-widest font-medium">
          <a href="#" className="hover:text-champagne-300 transition-colors">Villas</a>
          <a href="#" className="hover:text-champagne-300 transition-colors">Experiences</a>
          <a href="#" className="hover:text-champagne-300 transition-colors">Concierge</a>
        </div>
        <button className="bg-white text-azure-950 px-6 py-2 text-xs font-bold uppercase tracking-widest hover:bg-champagne-100 transition-colors">
          Book
        </button>
      </nav>

      <main>
        <HorizonHero />
        <VillaCollection />
        <RivieraLifestyle />
        <ConciergeCompass />
        <SeasonOffers />
        <GuestAccolades />
        <BookingReserve />
      </main>

      {/* Footer */}
      <footer className="bg-azure-950 text-white py-16 border-t border-white/10">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="font-display text-2xl font-semibold tracking-tight">
             L'Horizon <span className="text-champagne-400 font-light">&</span> Cannes
          </div>
          <div className="text-white/50 text-sm">
            © 2024 L'Horizon de Cannes Collection. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
