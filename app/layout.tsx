import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Halloween Fit Check 🎃',
  description: 'Spooky Halloween outfit reveal',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
