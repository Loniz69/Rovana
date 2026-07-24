"use client";

import { useEffect, useState } from "react";
import { Menu, Phone, Search } from "lucide-react";
import { NAV_LINKS } from "@/data/homepage";
import { Button } from "@/components/Button";
import { ComingSoonLink } from "@/components/ComingSoonLink";

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-colors duration-300 ${
        scrolled ? "bg-black" : "bg-gradient-to-b from-black/60 to-transparent"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-[1600px] items-center justify-between px-6">
        <a href="#" className="font-heading text-xl leading-none font-semibold tracking-wider text-white uppercase">
          Rovana
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          <Search className="size-4 text-white" />
          {NAV_LINKS.map((link) => (
            <ComingSoonLink
              key={link.label}
              href={link.href}
              className="text-[15px] tracking-wide text-white uppercase hover:opacity-70"
            >
              {link.label}
            </ComingSoonLink>
          ))}
        </nav>

        <div className="flex items-center gap-6">
          <a
            href="tel:+442079460958"
            className="hidden items-center gap-2 text-sm text-white lg:flex"
          >
            <Phone className="size-4" />
            +44 20 7946 0958
          </a>
          <Button variant="pink" href="#" comingSoon className="px-6 py-2.5 text-xs">
            Enquire Now
          </Button>
          <Menu className="size-6 cursor-pointer text-white" />
        </div>
      </div>
    </header>
  );
}
