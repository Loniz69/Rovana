"use client";

import { useState } from "react";
import { AWARD_CALLOUTS, PRESS_QUOTES } from "@/data/homepage";

export function PressStrip() {
  const [page, setPage] = useState(0);
  const quote = PRESS_QUOTES[page % PRESS_QUOTES.length];

  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-5xl px-6 text-center">
        <p className="font-heading text-xl leading-snug tracking-wide uppercase">&ldquo;{quote.quote}&rdquo;</p>

        <div className="mt-6 flex justify-center gap-2">
          {PRESS_QUOTES.map((_, i) => (
            <button
              key={i}
              aria-label={`Press quote ${i + 1}`}
              onClick={() => setPage(i)}
              className={`size-2 rounded-full ${i === page ? "bg-black" : "bg-border"}`}
            />
          ))}
        </div>

        <div className="mt-14 grid gap-8 border-t border-border pt-10 md:grid-cols-3">
          {AWARD_CALLOUTS.map((award) => (
            <p key={award.text} className="text-sm tracking-wide text-muted-foreground uppercase">
              {award.text}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
