import "./globals.css";
import type { Metadata } from "next";

import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "Lowwo-Fi",
  description:
    "Craft Your Unique Ambience: Explore Lofi Playlists and a Variety of Customizable Sounds 🎶🍄",
  keywords: ['lowwo-fi','lowwo', 'ambience', 'lo-fi', 'lofi'],
  verification: {
    google: 'cCUEuFtwrLIcYWMjmrJOY1vK3nMYoNTj-_glScMreeQ',
    yandex: '812d9f170aeedccf',
    other: {
      "msvalidate.01" : "4ADA484050BEBD3C5D0B1A03C6048010"
    }

  }
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable}`}>{children}</body>
    </html>
  );
}
