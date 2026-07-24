import { WHY_ITEMS } from "@/data/homepage";
import { assetPath } from "@/lib/asset-path";

export function WhyRovana() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-6xl px-6 text-center">
        <h2 className="font-heading text-3xl tracking-wide uppercase">Why Rovana?</h2>
        <div className="mx-auto mt-4 h-px w-24 bg-border" />

        <div className="mt-12 grid grid-cols-2 gap-10 md:grid-cols-5">
          {WHY_ITEMS.map((item) => (
            <div key={item.label} className="flex flex-col items-center gap-4">
              <img src={assetPath(item.icon)} alt="" className="size-14" />
              <p className="text-sm text-foreground">{item.label}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 flex items-center justify-center gap-3 border-t border-border pt-8">
          <span className="text-sm font-semibold text-yellow-500">★★★★★</span>
          <span className="text-sm font-medium">Excellent</span>
          <span className="text-sm text-muted-foreground">Trustpilot</span>
        </div>
      </div>
    </section>
  );
}
