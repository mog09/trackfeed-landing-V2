import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'TrackFeed — Australian Racing Intelligence',
  description: 'Real-time winner alerts for Australian thoroughbred racing professionals.',
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
