"use client";

import { useRef, useState, useEffect } from "react";
import { Button } from "@/components/Button";
import { assetPath, videoUrl } from "@/lib/asset-path";

export function Hero() {
  const kaabaRef = useRef<HTMLVideoElement>(null);
  const heroRef = useRef<HTMLVideoElement>(null);
  const [showKaaba, setShowKaaba] = useState(true);
  const heroReady = useRef(false);

  useEffect(() => {
    const v = heroRef.current;
    if (!v) return;
    v.src = videoUrl("hero-desktop.mp4");
    v.load();
    const mark = () => {
      heroReady.current = true;
    };
    v.addEventListener("canplaythrough", mark);
    return () => v.removeEventListener("canplaythrough", mark);
  }, []);

  const transition = () => {
    setShowKaaba(false);
    heroRef.current?.play();
  };

  const handleKaabaEnded = () => {
    if (heroReady.current) {
      transition();
    } else {
      const v = kaabaRef.current;
      if (!v) return;
      v.currentTime = 0;
      v.play();
    }
  };

  return (
    <section className="relative flex h-screen min-h-[700px] items-center overflow-hidden">
      {/* Main hero — hidden until kaaba finishes; src set in useEffect for background fetch */}
      <video
        ref={heroRef}
        className={`absolute inset-0 size-full object-cover transition-opacity duration-500 ${showKaaba ? "opacity-0" : "opacity-100"}`}
        muted
        loop
        playsInline
        poster={assetPath("/images/trips/lost-generation.jpg")}
      />

      {/* Kaaba video — plays first, crossfades out when hero is ready */}
      <video
        ref={kaabaRef}
        className={`absolute inset-0 size-full object-cover transition-opacity duration-500 ${showKaaba ? "opacity-100" : "opacity-0"}`}
        autoPlay
        muted
        playsInline
        onEnded={handleKaabaEnded}
      >
        <source media="(max-width: 767px)" src={videoUrl("kaaba-mobile.mp4")} type="video/mp4" />
        <source src={videoUrl("kaaba-desktop.mp4")} type="video/mp4" />
      </video>

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
