import { assetPath } from "@/lib/asset-path";

export function TrustBadges() {
  return (
    <section className="border-t border-white/10 bg-black py-8">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-12 px-6 opacity-70">
        <img src={assetPath("/images/badges/iata.svg")} alt="IATA" className="h-8" />
        <img src={assetPath("/images/badges/virtuoso.svg")} alt="Virtuoso Member" className="h-8" />
        <img src={assetPath("/images/badges/abta.svg")} alt="ABTA" className="h-10" />
      </div>
    </section>
  );
}
