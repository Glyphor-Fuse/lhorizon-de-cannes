import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { format } from "date-fns";
import { Star } from 'lucide-react';
import { cn } from "@/lib/utils";

export const BookingReserve = () => {
  const [date, setDate] = React.useState<Date>();

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="bg-seasalt-50 border border-azure-900/10 p-8 md:p-12 rounded-sm shadow-sm">
          <div className="text-center mb-10">
            <h2 className="font-display text-4xl text-azure-950 mb-4">Secure Your Sanctuary</h2>
            <p className="text-azure-950/60">
              Begin your journey. Our team will review your request and confirm availability within 24 hours.
            </p>
          </div>

          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-wider font-semibold text-azure-950/80">Check-in Date</label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant={"outline"}
                      className={cn(
                        "w-full justify-start text-left font-normal border-azure-900/10 h-12 bg-white",
                        !date && "text-muted-foreground"
                      )}
                    >
                      <Star className="mr-2 h-4 w-4" />
                      {date ? format(date, "PPP") : <span>Select date</span>}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
              </div>

              <div className="space-y-2">
                <label className="text-xs uppercase tracking-wider font-semibold text-azure-950/80">Check-out Date</label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant={"outline"}
                      className={cn(
                        "w-full justify-start text-left font-normal border-azure-900/10 h-12 bg-white",
                        !date && "text-muted-foreground"
                      )}
                    >
                      <Star className="mr-2 h-4 w-4" />
                      <span>Select date</span>
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar mode="single" initialFocus />
                  </PopoverContent>
                </Popover>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-wider font-semibold text-azure-950/80">Guests</label>
                <Input type="number" placeholder="2 Adults" className="h-12 border-azure-900/10 bg-white" />
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-wider font-semibold text-azure-950/80">Preferred Villa</label>
                <Input type="text" placeholder="Villa Solstice" className="h-12 border-azure-900/10 bg-white" />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs uppercase tracking-wider font-semibold text-azure-950/80">Contact Email</label>
              <Input type="email" placeholder="client@example.com" className="h-12 border-azure-900/10 bg-white" />
            </div>

            <Button className="w-full h-14 bg-azure-950 hover:bg-azure-900 text-white text-lg font-display uppercase tracking-widest mt-4">
              Request Reservation
            </Button>
            
            <p className="text-center text-xs text-azure-950/40 mt-4">
              *No payment is required at this stage. You will receive a personalized proposal.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default BookingReserve;
