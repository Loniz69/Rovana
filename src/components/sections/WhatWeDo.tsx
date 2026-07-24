"use client";

import { useState } from "react";
import { Button } from "@/components/Button";
import { assetPath } from "@/lib/asset-path";

const SLIDES = [
  {
    eyebrow: null,
    title: "What We Do\nAnd Why We Do It",
    body: "Since our founding in 2005, Rovana has always been about crafting remarkable, tailor made trips for families, couples and private groups around the world. Tom and James – our co-founders – know this better than anyone. You can meet them in our new video.",
    cta: "Watch The Film",
  },
  {
    eyebrow: "Pursuit Of Feeling",
    title: "",
    body: "Travel has always been about more than just going 'somewhere else'. For us, travel – breathless and beautiful – is about feeling somewhere else; a kind of emotional high that stays with you for the rest of your life.\n\nThe Pursuit of Feeling – our collection of trips, features, and luxury travel experiences – bottles this soulful, sensual desire, taking us back to one of our founding philosophies:\n\nIt's not where you want to go; it's how you want to feel.",
    cta: "Find Out More",
  },
];

export function WhatWeDo() {
  const [active, setActive] = useState(0);
  const slide = SLIDES[active];

  return (
    <section className="bg-white py-20">
      <div className="mx-auto grid max-w-[1600px] items-center gap-12 px-6 lg:grid-cols-2">
        <div>
          <div className="mb-6 flex gap-2">
            {SLIDES.map((_, i) => (
              <button
                key={i}
                aria-label={`Slide ${i + 1}`}
                onClick={() => setActive(i)}
                className={`size-2 rounded-full ${i === active ? "bg-black" : "bg-border"}`}
              />
            ))}
          </div>
          {slide.eyebrow && (
            <p className="mb-2 text-sm font-medium tracking-wide text-pink uppercase">{slide.eyebrow}</p>
          )}
          {slide.title && (
            <h2 className="font-heading mb-6 text-3xl leading-tight whitespace-pre-line uppercase">
              {slide.title}
            </h2>
          )}
          <div className="space-y-4 whitespace-pre-line text-foreground">{slide.body}</div>
          <Button variant="solid" href="#" className="mt-8 border-black">
            {slide.cta}
          </Button>
        </div>

        <div className="relative aspect-4/5 w-full overflow-hidden">
          <img
            src={assetPath("/images/founders.jpg")}
            alt="Rovana founders"
            className="size-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
