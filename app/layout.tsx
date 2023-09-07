import { TailwindIndicator } from '@/components/tailwind-indicator'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Programming memes tweets',
  description: 'Memes from twitters using apify.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
      <TailwindIndicator />
    </html>
  )
}
