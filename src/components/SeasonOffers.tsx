import React from "react";
import { Button } from "@/components/ui/button";

interface Offer {
  title: string;
  desc: string;
  image: string;
  tag: string;
}

const OFFERS: Offer[] = [
  {
    title: "The Film Festival Edit",
    desc: "Exclusive access packages during the Cannes Film Festival, including red carpet chauffeur service.",
    image: "/images/offer-festival.jpg",
    tag: "May 2024",
  },
  {
    title: "Late Summer Solstice",
    desc: "Enjoy the warmest waters of the year with our complimentary private yacht day trip for bookings in September.",
    image: "/images/offer-summer.jpg",
    tag: "September Exclusive",
  },
  {
    title: "Grand Prix Weekend",
    desc: "Helicopter transfers to Monaco and premium villa hosting for the ultimate race weekend.",
    image: "/images/offer-monaco.jpg",
    tag: "Limited Availability",
  },
];

export const SeasonOffers = () => {
  return (
    <section className="py-24 bg-seasalt-50">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-champagne-500 uppercase tracking-widest text-sm font-semibold mb-3 block">Exclusive Opportunities</span>
          <h2 className="text-4xl md:text-5xl font-display text-azure-950 mb-6">Seasonal Privileges</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {OFFERS.map((offer, idx) => (
            <div key={idx} className="group relative h-[500px] overflow-hidden cursor-pointer">
              <img 
                src={offer.image} 
                alt={offer.title} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-azure-950/90 via-azure-950/40 to-transparent" />
              
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <span className="inline-block px-3 py-1 border border-white/30 text-white text-xs uppercase tracking-widest mb-4 backdrop-blur-md">
                    {offer.tag}
                  </span>
                  <h3 className="text-2xl font-display text-white mb-3">{offer.title}</h3>
                  <p className="text-white/70 font-body text-sm leading-relaxed mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                    {offer.desc}
                  </p>
                  <div className="flex items-center text-champagne-400 text-sm font-semibold tracking-wide uppercase group-hover:text-white transition-colors">
                    Inquire Now <span className="ml-2">→</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SeasonOffers;
