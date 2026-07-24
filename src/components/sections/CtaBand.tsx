import { Button } from "@/components/Button";
import { assetPath } from "@/lib/asset-path";

export function CtaBand() {
  return (
    <section
      className="bg-terracotta bg-cover bg-center py-24 text-center"
      style={{ backgroundImage: `url(${assetPath("/images/cta-texture.jpg")})` }}
    >
      <h2 className="font-heading text-4xl tracking-wide text-white uppercase">So, Ready To Start?</h2>
      <div className="mt-8">
        <Button variant="solid" href="#" comingSoon className="border-black">
          Get In Touch
        </Button>
      </div>
    </section>
  );
}
