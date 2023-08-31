import './globals.css'
import type { Metadata } from 'next'
import Head from 'next/head';
import { Montserrat } from 'next/font/google'
import Script from "next/script";

const montserrat = Montserrat({ 
  subsets: ['latin'],
  variable: '--font-montserrat'
})

export const metadata: Metadata = {
  title: 'Lowwo-Fi',
  description: 'Craft Your Unique Ambience: Explore Lofi Playlists and a Variety of Customizable Sounds 🎶🍄',
  
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Head>
        <meta name="yandex-verification" content="321d444d40c45309" />
        <meta name="google-site-verification" content="cCUEuFtwrLIcYWMjmrJOY1vK3nMYoNTj-_glScMreeQ" />
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-X8LW8FSVPY" strategy="afterInteractive"></Script>
        <Script strategy="afterInteractive">
          {`  window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-X8LW8FSVPY');`}
        </Script>
      </Head>
      <body className={`${montserrat.variable}`}>{children}</body>
    </html>
  )
}
