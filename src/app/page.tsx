import { getCards, getPlaylists } from "@/api/notion";
import { Player } from "@/components/Player";
import Script from "next/script";

export default async function Home() {
  const [cards, playlists] = await Promise.all([getCards(), getPlaylists()]);

  return (
    <main className="overflow-hidden">
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-X8LW8FSVPY"
        strategy="afterInteractive"
      ></Script>
      <Script strategy="afterInteractive">
        {`  window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-X8LW8FSVPY');`}
      </Script>
      <Player cards={cards} playlists={playlists} />
    </main>
  );
}
