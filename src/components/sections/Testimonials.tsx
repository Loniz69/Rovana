"use client";

import { useState } from "react";
import { TESTIMONIALS } from "@/data/homepage";

const PAGE_SIZE = 4;
const PAGES = Math.ceil(TESTIMONIALS.length / PAGE_SIZE);

export function Testimonials() {
  const [page, setPage] = useState(0);
  const visible = TESTIMONIALS.slice(page * PAGE_SIZE, page * PAGE_SIZE + 3);

  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-10 md:grid-cols-3">
          {visible.map((t) => (
            <div key={t.author} className="text-center">
              <span className="text-3xl text-muted-foreground">&ldquo;</span>
              <p className="mt-2 text-sm font-medium tracking-wide uppercase">{t.quote}</p>
              <p className="mt-4 font-heading text-sm text-pink italic">
                {t.author}, {t.location}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10 flex justify-center gap-2">
          {Array.from({ length: PAGES }).map((_, i) => (
            <button
              key={i}
              aria-label={`Testimonials page ${i + 1}`}
              onClick={() => setPage(i)}
              className={`size-2 rounded-full ${i === page ? "bg-black" : "bg-border"}`}
            />
          ))}
        </div>

        <div className="mt-8 flex items-center justify-center gap-3">
          <span className="text-sm font-semibold text-yellow-500">★★★★★</span>
          <span className="text-sm text-muted-foreground">Trustpilot</span>
        </div>
      </div>
    </section>
  );
}
