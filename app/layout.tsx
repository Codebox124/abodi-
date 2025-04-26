import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { SearchContextProvider } from './context/search'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Abordi',
  description: 'Abordi is your all-in-one AI command center curated by profession, powered by intelligence, and built to simplify your workflow',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <SearchContextProvider>
       <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>

    </SearchContextProvider>
   
  )
}
