import type { Metadata } from 'next'
import './globals.css'
import Footer from './components/Footer'
import DynamicBackground from './components/DynamicBackground'
import Header from './components/Header'

export const metadata: Metadata = {
  title: 'John Z. Karlovich',
  description: 'Personal website and portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-nord0 min-h-screen flex flex-col" suppressHydrationWarning>
        <DynamicBackground />
        <div className="flex flex-col min-h-screen relative z-10">
          <Header />
          <main className="flex-grow container mx-auto px-4 py-8 mt-16">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}

