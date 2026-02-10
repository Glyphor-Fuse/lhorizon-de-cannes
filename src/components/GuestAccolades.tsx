import React from "react";
import { Star } from "lucide-react";

const REVIEWS = [
  {
    text: "L'Horizon de Cannes redefined our expectations of privacy. The villa was immaculate, but the concierge team's ability to secure a last-minute table at Mirazur was the true magic.",
    author: "Elena & Marc",
    location: "Zurich, Switzerland"
  },
  {
    text: "An architectural marvel. Waking up to the view of the Esterel mountains from the infinity pool is a memory I will cherish forever. Seamless service from start to finish.",
    author: "James Thornton",
    location: "London, UK"
  },
  {
    text: "We have stayed in 5-star hotels across the Riviera, but none compare to the personalized sanctuary provided here. It felt like our own home, but better.",
    author: "The Weber Family",
    location: "New York, USA"
  }
];

export const GuestAccolades = () => {
  return (
    <section className="py-24 bg-azure-950 text-white">
      <div className="container mx-auto px-6">
        <h2 className="text-center font-display text-3xl md:text-4xl mb-16 opacity-90">Guest Journals</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 divide-y md:divide-y-0 md:divide-x divide-white/10">
          {REVIEWS.map((review, idx) => (
            <div key={idx} className="pt-12 md:pt-0 md:px-8 text-center flex flex-col items-center">
              <div className="flex gap-1 mb-6 text-champagne-400">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
              </div>
              <p className="font-display text-xl leading-relaxed italic opacity-80 mb-8">
                "{review.text}"
              </p>
              <div className="mt-auto">
                <div className="font-medium tracking-wide uppercase text-sm">{review.author}</div>
                <div className="text-xs text-white/50 mt-1">{review.location}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GuestAccolades;
