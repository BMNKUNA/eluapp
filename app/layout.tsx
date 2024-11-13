import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Eluthandweni Clinic',
  description: 'Quality Healthcare for All South Africans',
  // Adding favicon metadata
  icons: {
    icon: '/images/logo.jpg', // Path to your favicon
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Head>
        {/* Favicon for the website */}
        <link rel="icon" href="/images/logo.jpg" />
        <meta name="description" content="Quality Healthcare for All South Africans" />
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
