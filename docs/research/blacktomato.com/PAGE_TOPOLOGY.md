# Black Tomato — Homepage Topology

Source: https://www.blacktomato.com (captured 2026-07-24)

1. **Header** (sticky, transparent-over-hero → solid on scroll) — logo, Destinations/Experiences/About nav, phone number, Enquire Now (pink) button, hamburger. Mobile: logo + Enquire Now + hamburger only.
2. **Hero** — full-bleed background `<video>` (desert/safari scene), dark gradient overlay, "THE LUXURY TRAVEL EXPERTS" (H1, League Gothic-style condensed caps), subtitle, two CTA buttons (outline "Explore Our Trips" + solid black "Plan My Trip"), "SCROLL" indicator. Static, no scroll-driven change observed beyond header solidifying.
3. **Intro / "Every Journey Starts With A Feeling"** — white bg, centered 3-paragraph copy + "Get In Touch" button.
4. **Testimonials** — 3-across quote cards with Trustpilot rating strip below (carousel with 2 pages of dots, click-driven).
5. **Explore Our Trips carousel** — dark bg, filter pills (By Traveller/Most Popular/By Month/In the Spotlight, Family/Couples/Groups/Honeymoon/Solo), horizontally scrollable trip cards (image, nights badge, country, title, "Explore Trip" outline button), arrow nav, "Create Your Own Itinerary" CTA card, "View All".
6. **Press/Awards strip** — 4 rotating press quotes + 3 award callouts, carousel dots (click/time-driven).
7. **What We Do split section** — left: heading + copy + "Watch The Film" button; right: founder video/photo. 2-dot carousel — slide 2 swaps to "Pursuit Of Feeling" copy + "Find Out More" button (interaction model: click dots to switch copy pane; image pane persists).
8. **Guide continuation** — "Our Guide To Luxury Travel / The Luxury Travel Experts" copy blocks + "Continue Reading" button, mountain-hiking photo on right.
9. **Why Black Tomato?** — 5 icon+label columns (Award-winning planners, No-obligation quotes, No planning fees, 24/7 on the ground support, Expert private guides) + Trustpilot rating.
10. **CTA band** — terracotta textured background image, "SO, READY TO START?" + Get In Touch button.
11. **Newsletter bar** — dark grey bg, first name + email inputs + Subscribe button.
12. **Trust badges** — IATA, Virtuoso Member, ABTA logos on black bg.
13. **Footer** — black bg, 5 link columns (Black Tomato / Useful Information / Popular Destinations / Who / What) + social icons, address, legal text, brand-family links.

Overlays on load: cookie consent bar (top, dismissible), newsletter signup popup (bottom-left, dismissible).

## Fonts (proprietary — substituted)
- Headings: `AlternateGotNo1D` / League Gothic fallback → substitute **League Gothic** family... via cf. **Oswald / Anton** condensed style (League Gothic is SIL-licensed, used where available)
- Body/nav: `Brandon Grotesque` (commercial) → substitute **Jost** (geometric sans, free, visually close)

## Colors
- Pink accent (Enquire Now): `rgb(231, 36, 122)` → `#E7247A`
- Body text: `rgb(82, 87, 92)` → `#52575C`
- Footer bg: `#000000`
- Newsletter bar bg: `rgb(47,47,47)` → `#2F2F2F`
- CTA band: terracotta textured photo (`Text-Centered-Home.jpg`), approximate solid fallback `#B5502E`
