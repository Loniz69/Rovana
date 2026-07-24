import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";

const OUT = path.join(process.cwd(), "public");

const assets = [
  ["images/trips/lost-generation.jpg", "https://media.blacktomato.com/2026/04/Lost-Generation-header-mob.jpg"],
  ["images/trips/rhythm-of-water.jpg", "https://media.blacktomato.com/2026/02/Lady-in-Forest-1-1.jpg"],
  ["images/trips/highlights-of-italy.jpg", "https://media.blacktomato.com/2022/09/Highlights-of-Italy-scaled.jpg"],
  ["images/trips/greece-family.jpg", "https://media.blacktomato.com/2023/01/Family-island-hopping-scaled.jpg"],
  ["images/trips/iceland.jpg", "https://media.blacktomato.com/2022/09/Northern-Lights-Iceland-scaled.jpg"],
  ["images/trips/japan.jpg", "https://media.blacktomato.com/2019/09/Ninja-martial-arts-in-Tokyo.jpg"],
  ["images/trips/ecuador-galapagos.jpg", "https://media.blacktomato.com/2025/12/Sally-Lightfoot-crabs_-Ecuador.jpg"],
  ["images/trips/morocco.jpg", "https://media.blacktomato.com/2024/02/Atlas-mountains-morocco-landscape.jpg"],
  ["images/trips/kenya.jpg", "https://media.blacktomato.com/2023/02/Borana-Lodge-Location-Setting-Pride-Rock.jpg"],
  ["images/founders.jpg", "https://media.blacktomato.com/2024/05/Tom-Marchant-Values-Film-scaled-1.jpg"],
  ["images/family-hiking-colorado.jpg", "https://media.blacktomato.com/2025/03/Family-hiking-in-Colorado.jpg"],
  ["images/cta-texture.jpg", "https://media.blacktomato.com/2022/08/Text-Centered-Home.jpg"],
  ["images/icons/award.svg", "https://media.blacktomato.com/2025/06/UHVNpPRV-award-icon.svg"],
  ["images/icons/quote.svg", "https://media.blacktomato.com/2025/10/Icons-1.svg"],
  ["images/icons/guides.svg", "https://media.blacktomato.com/2025/06/0aIFRleC-guides.svg"],
  ["images/icons/support.svg", "https://media.blacktomato.com/2025/06/MSa4gZI8-support.svg"],
  ["images/icons/map.svg", "https://media.blacktomato.com/2025/10/Icons.svg"],
  ["images/badges/iata.svg", "https://www.blacktomato.com/wp-content/uploads/2023/12/veWhg0JB-iata.svg"],
  ["images/badges/virtuoso.svg", "https://www.blacktomato.com/wp-content/uploads/2023/12/vsDPx9UG-virtuoso-member.svg"],
  ["images/badges/abta.svg", "https://media.blacktomato.com/2024/10/abta-logo.svg"],
  ["images/logo.svg", "https://www.blacktomato.com/wp-content/themes/blacktomato/img/black-tomato.svg"],
  ["images/logo-black.svg", "https://www.blacktomato.com/wp-content/themes/blacktomato/img/black-tomato-black.svg"],
  ["videos/hero-desktop.mp4", "https://media.blacktomato.com/2025/02/black-tomato-homepage.mp4"],
  ["videos/hero-mobile.mp4", "https://media.blacktomato.com/2025/02/black-tomato-mob-home.mp4"],
];

async function downloadOne([rel, url]) {
  const dest = path.join(OUT, rel);
  await mkdir(path.dirname(dest), { recursive: true });
  try {
    const res = await fetch(url, { headers: { "User-Agent": "Mozilla/5.0" } });
    if (!res.ok) throw new Error(`${res.status} ${res.statusText}`);
    const buf = Buffer.from(await res.arrayBuffer());
    await writeFile(dest, buf);
    console.log(`OK   ${rel} (${buf.length} bytes)`);
  } catch (err) {
    console.error(`FAIL ${rel}: ${err.message}`);
  }
}

async function run() {
  const batchSize = 4;
  for (let i = 0; i < assets.length; i += batchSize) {
    await Promise.all(assets.slice(i, i + batchSize).map(downloadOne));
  }
}

run();
