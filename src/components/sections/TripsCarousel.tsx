"use client";

import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { TRIP_CARDS } from "@/data/homepage";
import { Button } from "@/components/Button";
import { assetPath } from "@/lib/asset-path";

export function TripsCarousel() {
  const scrollerRef = useRef<HTMLDivElement>(null);

  const scrollBy = (dir: 1 | -1) => {
    scrollerRef.current?.scrollBy({ left: dir * 420, behavior: "smooth" });
  };

  return (
    <section id="trips" className="relative bg-[#1a1a1a] py-20 text-white">
      <div className="mx-auto max-w-[1600px] px-6">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-6">
          <div>
            <h2 className="font-heading text-3xl tracking-wide uppercase">Explore Our Trips</h2>
            <p className="mt-2 text-white/70 italic">Remarkable experiences to inspire the mind</p>
          </div>
          <div className="flex gap-2">
            <button
              aria-label="Scroll left"
              onClick={() => scrollBy(-1)}
              className="flex size-10 items-center justify-center rounded-full border border-white/40 hover:bg-white/10"
            >
              <ChevronLeft className="size-5" />
            </button>
            <button
              aria-label="Scroll right"
              onClick={() => scrollBy(1)}
              className="flex size-10 items-center justify-center rounded-full border border-white/40 hover:bg-white/10"
            >
              <ChevronRight className="size-5" />
            </button>
          </div>
        </div>

        <div ref={scrollerRef} className="flex gap-6 overflow-x-auto pb-4 [scrollbar-width:none]">
          {TRIP_CARDS.map((trip) => (
            <article key={trip.title} className="relative h-[400px] w-[300px] shrink-0 overflow-hidden">
              <img
                src={assetPath(trip.image)}
                alt={trip.title}
                className="absolute inset-0 size-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-black/40" />
              <span className="absolute top-4 right-4 text-xs font-medium tracking-wide text-white uppercase">
                {trip.nights}
              </span>
              <div className="absolute inset-x-0 bottom-0 p-5">
                <p className="text-xs font-medium tracking-wide text-white/80 uppercase">{trip.country}</p>
                <h3 className="font-heading mt-1 text-lg leading-tight text-white uppercase">{trip.title}</h3>
                <Button variant="outline" href="#" className="mt-4 px-4 py-2 text-xs">
                  Explore Trip
                </Button>
              </div>
            </article>
          ))}

          <article className="flex h-[400px] w-[300px] shrink-0 flex-col items-start justify-center bg-[#2a2a2a] p-8">
            <p className="text-xs tracking-wide text-white/60 uppercase">Custom Trips</p>
            <h3 className="font-heading mt-2 text-xl uppercase">Create Your Own Itinerary</h3>
            <p className="mt-3 text-sm text-white/70">
              Our Travel Experts will help you create a completely bespoke itinerary. Just tell us what you
              want. We&apos;ll make it happen.
            </p>
            <Button variant="outline" href="#" className="mt-6 px-4 py-2 text-xs">
              Create Trip
            </Button>
          </article>
        </div>

        <div className="mt-8 text-center">
          <a href="#" className="text-sm tracking-wide text-white uppercase underline underline-offset-4">
            View All
          </a>
        </div>
      </div>
    </section>
  );
}
