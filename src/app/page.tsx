import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { Intro } from "@/components/sections/Intro";
import { Testimonials } from "@/components/sections/Testimonials";
import { TripsCarousel } from "@/components/sections/TripsCarousel";
import { PressStrip } from "@/components/sections/PressStrip";
import { WhatWeDo } from "@/components/sections/WhatWeDo";
import { GuideSection } from "@/components/sections/GuideSection";
import { WhyRovana } from "@/components/sections/WhyRovana";
import { CtaBand } from "@/components/sections/CtaBand";
import { NewsletterBar } from "@/components/sections/NewsletterBar";
import { TrustBadges } from "@/components/sections/TrustBadges";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Intro />
        <TripsCarousel />
        <Testimonials />
        <PressStrip />
        <WhatWeDo />
        <GuideSection />
        <WhyRovana />
        <CtaBand />
      </main>
      <NewsletterBar />
      <TrustBadges />
      <Footer />
    </>
  );
}
