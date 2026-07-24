import type { Metadata } from "next";
import { Oswald, Jost } from "next/font/google";
import "./globals.css";

const oswald = Oswald({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const jost = Jost({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Rovana | The Luxury Travel Experts",
  description:
    "Tailor-made luxury trips and award winning service. Rovana designs fully personalised itineraries across 100 destinations.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const videosBase = `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/videos`;

  return (
    <html lang="en" className={`${oswald.variable} ${jost.variable} h-full antialiased`}>
      <head>
        <link rel="preload" as="video" type="video/mp4" href={`${videosBase}/kaaba-desktop.mp4`} media="(min-width: 768px)" />
        <link rel="preload" as="video" type="video/mp4" href={`${videosBase}/kaaba-mobile.mp4`} media="(max-width: 767px)" />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
