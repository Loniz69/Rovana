import { Button } from "@/components/Button";

export function Intro() {
  return (
    <section className="bg-white py-20 text-center">
      <div className="mx-auto max-w-3xl px-6">
        <h2 className="font-heading mb-8 text-3xl tracking-wide">Every Journey Starts With A Feeling</h2>
        <div className="space-y-6 text-lg leading-relaxed text-foreground">
          <p>
            The world is vast, full of wonders. But information engulfs us. See this, do that, don&apos;t
            miss this. It seems the more choice there is, the more overwhelmed we feel. What&apos;s more,
            you&apos;re never asked <em>how you want to feel</em>.
          </p>
          <p>
            That&apos;s not us. Rovana is a tailor-made luxury travel company that designs fully
            personalised itineraries – not templates, not off-the-shelf tours. Whether you&apos;re a couple
            seeking adventure, a multi-generational family exploring together, or a solo traveller chasing
            something extraordinary, we craft every detail around you.
          </p>
          <p>
            For over 20 years, we&apos;ve been recognised as one of the world&apos;s leading luxury travel
            planners – featured in Modern Luxury&apos;s &lsquo;Best of Luxury Travel&rsquo; Awards – and
            trusted to deliver tailor-made journeys across 100 destinations.
          </p>
          <p>So let&apos;s begin. Let&apos;s do something remarkable.</p>
        </div>
        <Button variant="solid" href="#" className="mt-8 border-black">
          Get In Touch
        </Button>
      </div>
    </section>
  );
}
