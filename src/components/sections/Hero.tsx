"use client";

import { useRef, useState, useEffect } from "react";
import { Button } from "@/components/Button";
import { assetPath, videoUrl } from "@/lib/asset-path";

type Phase = "poster" | "kaaba" | "hero";

export function Hero() {
  const kaabaRef = useRef<HTMLVideoElement>(null);
  const heroRef = useRef<HTMLVideoElement>(null);
  const [phase, setPhase] = useState<Phase>("poster");
  const heroReady = useRef(false);

  useEffect(() => {
    const kaaba = kaabaRef.current;
    const hero = heroRef.current;
    if (!kaaba || !hero) return;

    // Pick the right kaaba clip for the viewport then start it immediately
    kaaba.src =
      window.innerWidth <= 767
        ? videoUrl("kaaba-mobile.mp4")
        : videoUrl("kaaba-desktop.mp4");
    kaaba.load();
    kaaba.play().catch(() => {});

    // Background-fetch the hero video — don't play yet
    hero.src = videoUrl("hero-desktop.mp4");
    hero.load();
    const markReady = () => {
      heroReady.current = true;
    };
    hero.addEventListener("canplaythrough", markReady);
    return () => hero.removeEventListener("canplaythrough", markReady);
  }, []);

  // Poster → kaaba crossfade when kaaba first starts playing
  const handleKaabaPlay = () => setPhase("kaaba");

  // When kaaba ends: go to hero if ready, otherwise loop kaaba
  const handleKaabaEnded = () => {
    if (heroReady.current) {
      setPhase("hero");
      heroRef.current?.play().catch(() => {});
    } else {
      const v = kaabaRef.current;
      if (!v) return;
      v.currentTime = 0;
      v.play().catch(() => {});
    }
  };

  // When hero ends: loop back to kaaba
  const handleHeroEnded = () => {
    const v = kaabaRef.current;
    if (!v) return;
    v.currentTime = 0;
    v.play().catch(() => {});
    setPhase("kaaba");
  };

  return (
    <section className="relative flex h-screen min-h-[700px] items-center overflow-hidden">
      {/* Poster — instant on load, fades out when kaaba starts */}
      <img
        src={assetPath("/images/family-hiking-colorado.jpg")}
        alt=""
        aria-hidden="true"
        className={`absolute inset-0 size-full object-cover transition-opacity duration-500 ${phase === "poster" ? "opacity-100" : "opacity-0"}`}
      />

      {/* Kaaba video — src set in useEffect to avoid eager browser fetch */}
      <video
        ref={kaabaRef}
        className={`absolute inset-0 size-full object-cover transition-opacity duration-500 ${phase === "kaaba" ? "opacity-100" : "opacity-0"}`}
        muted
        playsInline
        onPlay={handleKaabaPlay}
        onEnded={handleKaabaEnded}
      />

      {/* Main hero video — background-fetched, plays after kaaba */}
      <video
        ref={heroRef}
        className={`absolute inset-0 size-full object-cover transition-opacity duration-500 ${phase === "hero" ? "opacity-100" : "opacity-0"}`}
        muted
        playsInline
        onEnded={handleHeroEnded}
      />

      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/10 to-black/40" />

      <div className="relative z-10 mx-auto w-full max-w-[1600px] px-6 text-center">
        <h1 className="font-heading text-5xl leading-none tracking-[3px] text-white uppercase md:text-6xl">
          The Luxury Travel Experts
        </h1>
        <p className="mt-6 text-base tracking-wide text-white/90 uppercase">
          Tailor-made trips for every budget
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Button variant="outline" href="#trips">
            Explore Our Trips
          </Button>
          <Button variant="solid" href="#" comingSoon>
            Plan My Trip
          </Button>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-xs tracking-[0.2em] text-white uppercase">
        Scroll
      </div>
    </section>
  );
}
