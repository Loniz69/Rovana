import { Button } from "@/components/Button";
import { assetPath } from "@/lib/asset-path";

export function GuideSection() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto grid max-w-[1600px] items-center gap-12 px-6 lg:grid-cols-2">
        <div>
          <p className="mb-2 text-sm font-medium tracking-wide text-pink uppercase">
            Our Guide To Luxury Travel
          </p>
          <h2 className="font-heading mb-6 text-3xl uppercase">The Luxury Travel Experts</h2>
          <div className="space-y-4 text-foreground">
            <p>We create bespoke luxury holidays for people who want more than just beautiful places.</p>
            <p>
              For some, luxury is hiking in peaceful solitude through a remote corner of the Namib Desert,
              where silence is the experience. For others, it&apos;s the freedom of sailing the
              Mediterranean aboard a private yacht, moving between hidden coves at your own pace. It might
              mean gathering the family in a secluded villa in the Tuscan hills, or beginning married life
              on an exclusive safari honeymoon in the Serengeti.
            </p>
            <p>
              Every journey we create is shaped around you. Our luxury travel advisors design tailor-made
              holidays with care, insight and emotional intelligence – bringing together exceptional
              places, seamless planning and human expertise to create experiences that feel effortless and
              meaningful. This is luxury travel with intention. Thoughtfully planned. Impeccably delivered.
              And designed to stay with you long after you return.
            </p>
          </div>
          <Button variant="solid" href="#" comingSoon className="mt-8 border-black">
            Continue Reading
          </Button>
        </div>

        <div className="relative aspect-4/5 w-full overflow-hidden">
          <img
            src={assetPath("/images/family-hiking-colorado.jpg")}
            alt="Family hiking in Colorado"
            className="size-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
