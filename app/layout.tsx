import './globals.css'
import { Inter } from 'next/font/google'
import Header from './components/Header'
import Footer from './components/Footer'
import DynamicBackground from './components/DynamicBackground'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Your Name - Personal Website',
  description: 'A showcase of my work, thoughts, and experiences',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning className={inter.className}>
        <DynamicBackground />
        <div className="relative min-h-screen">
          <Header />
          <main className="container mx-auto px-4 py-8">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}

