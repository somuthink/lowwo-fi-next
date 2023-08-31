import './globals.css'
import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'

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
      <body className={`${montserrat.variable}`}>{children}</body>
    </html>
  )
}
