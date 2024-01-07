import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'To Do List',
  description: 'A place where you store your to do',
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
