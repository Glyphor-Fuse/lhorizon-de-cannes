import React from "react";
import { Check } from "lucide-react";

export const RivieraLifestyle = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div className="relative order-2 lg:order-1">
            <div className="aspect-[3/4] overflow-hidden rounded-sm relative">
              <img 
                src="/images/concierge-service.jpg" 
                alt="Private Chef Service" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-azure-950/10" />
            </div>
            {/* Floating Card */}
            <div className="absolute -bottom-10 -right-10 bg-seasalt-50 p-8 max-w-xs shadow-xl hidden md:block">
              <p className="font-display text-xl text-azure-950 italic">
                "The only thing better than the view was the impeccable service."
              </p>
              <p className="text-sm text-champagne-600 mt-4 uppercase tracking-widest font-semibold">— Vogue Travel</p>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <span className="text-champagne-500 font-body uppercase tracking-[0.2em] text-sm font-semibold mb-4 block">
              Beyond Accommodation
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display text-azure-950 mb-8 leading-tight">
              Curated Cannes <br />
              <span className="italic text-azure-900/60">Experiences</span>
            </h2>
            <p className="text-azure-950/70 text-lg leading-relaxed mb-10">
              Our dedicated local concierge ensures your stay extends beyond the villa walls. 
              From securing reservations at La Palme d'Or to arranging private yacht charters 
              to the Îles de Lérins, we handle the details of your Riviera lifestyle.
            </p>

            <ul className="space-y-6">
              {[
                "Private Chef & Sommelier Services",
                "Chauffeur & Luxury Car Rentals",
                "Superyacht Charters & Berthing",
                "VIP Access to Festivals & Events"
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-4 group">
                  <div className="w-8 h-8 rounded-full bg-seasalt-100 flex items-center justify-center group-hover:bg-champagne-100 transition-colors">
                    <Check className="w-4 h-4 text-champagne-600" />
                  </div>
                  <span className="text-azure-950 font-medium text-lg">{item}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
};

export default RivieraLifestyle;
