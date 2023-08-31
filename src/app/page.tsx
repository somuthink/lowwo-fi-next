import { getCards, getPlaylists } from "@/api/notion";
import { Player } from "@/components/Player";
import Script from "next/script";
import Head from 'next/head';

export default async function Home() {
  const [cards, playlists] = await Promise.all([getCards(), getPlaylists()]);

  return (
    <main className="overflow-hidden">
      <Head>
        <meta name="yandex-verification" content="321d444d40c45309" />
        <meta name="google-site-verification" content="cCUEuFtwrLIcYWMjmrJOY1vK3nMYoNTj-_glScMreeQ" />
      </Head>
      <Script async src="https://www.googletagmanager.com/gtag/js?id=G-X8LW8FSVPY" strategy="afterInteractive"></Script>
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
