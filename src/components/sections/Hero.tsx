import { Button } from "@/components/Button";
import { assetPath, videoUrl } from "@/lib/asset-path";

export function Hero() {
  return (
    <section className="relative flex h-screen min-h-[700px] items-center overflow-hidden">
      <video
        className="absolute inset-0 size-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        poster={assetPath("/images/trips/lost-generation.jpg")}
      >
        <source src={videoUrl("hero-desktop.mp4")} type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/10 to-black/40" />

      <div className="relative z-10 mx-auto w-full max-w-[1600px] px-6 text-center">
        <h1 className="font-heading text-5xl leading-none tracking-[3px] text-white uppercase md:text-6xl">
          The Luxury Travel Experts
        </h1>
        <p className="mt-6 text-base tracking-wide text-white/90 uppercase">
          Tailor-made trips, award winning service. Est. 2005.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Button variant="outline" href="#trips">
            Explore Our Trips
          </Button>
          <Button variant="solid" href="#">
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
