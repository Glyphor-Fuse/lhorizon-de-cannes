import React from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Users } from 'lucide-react';

interface Villa {
  id: number;
  name: string;
  image: string;
  price: string;
  guests: number;
  beds: number;
  featured?: boolean;
}

const VILLAS: Villa[] = [
  {
    id: 1,
    name: "Villa Solstice",
    image: "/images/villa-1.jpg",
    price: "from €4,500/night",
    guests: 12,
    beds: 6,
    featured: true,
  },
  {
    id: 2,
    name: "Maison d'Azur",
    image: "/images/villa-2.jpg",
    price: "from €2,800/night",
    guests: 8,
    beds: 4,
  },
  {
    id: 3,
    name: "The Glass House",
    image: "/images/villa-3.jpg",
    price: "from €3,200/night",
    guests: 10,
    beds: 5,
  },
  {
    id: 4,
    name: "Château Perche",
    image: "/images/villa-4.jpg",
    price: "from €6,000/night",
    guests: 16,
    beds: 8,
    featured: true,
  },
];

export const VillaCollection = () => {
  return (
    <section className="py-24 bg-seasalt-50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div className="max-w-2xl">
            <h2 className="text-azure-950 font-display text-4xl md:text-5xl mb-6">The Collection</h2>
            <p className="text-azure-950/70 font-body text-lg leading-relaxed">
              Hand-picked estates offering the pinnacle of privacy and Mediterranean luxury.
              Each property is a masterclass in architectural harmony.
            </p>
          </div>
          <button className="hidden md:block text-azure-950 border-b border-azure-950/20 pb-1 hover:border-azure-950 transition-colors uppercase tracking-widest text-sm font-semibold mt-6 md:mt-0">
            View All Estates
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {VILLAS.map((villa, idx) => (
            <Card 
              key={villa.id} 
              className={`group border-none shadow-none bg-transparent ${villa.featured ? 'lg:col-span-2' : 'lg:col-span-1'}`}
            >
              <CardContent className="p-0 relative overflow-hidden aspect-[4/3] md:aspect-auto h-[400px] lg:h-[500px]">
                <img
                  src={villa.image}
                  alt={villa.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                <div className="absolute top-6 right-6">
                  <Badge variant="secondary" className="bg-white/90 text-azure-950 hover:bg-white rounded-none px-3 py-1 uppercase tracking-wider text-xs font-semibold backdrop-blur-md border-none">
                    {villa.featured ? 'Signature Estate' : 'Villa'}
                  </Badge>
                </div>
              </CardContent>
              <CardFooter className="flex flex-col items-start pt-6 px-0">
                <div className="flex w-full justify-between items-start mb-2">
                  <h3 className="text-2xl font-display text-azure-950 group-hover:text-azure-800 transition-colors">
                    {villa.name}
                  </h3>
                  <span className="text-champagne-600 font-body font-medium">{villa.price}</span>
                </div>
                <div className="flex gap-6 text-azure-950/50 text-sm">
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4" />
                    <span>{villa.guests} Guests</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Star className="w-4 h-4" />
                    <span>{villa.beds} Bedrooms</span>
                  </div>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="md:hidden mt-8 text-center">
          <button className="text-azure-950 border-b border-azure-950/20 pb-1 uppercase tracking-widest text-sm font-semibold">
            View All Estates
          </button>
        </div>
      </div>
    </section>
  );
};

export default VillaCollection;
