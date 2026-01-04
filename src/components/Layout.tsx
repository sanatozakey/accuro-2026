import React from 'react'
import { Navbar } from './Navbar'
import { Footer } from './Footer'
import { PageTransition } from './PageTransition'

interface LayoutProps {
  children: React.ReactNode
  showSplash?: boolean
}

export function Layout({ children, showSplash = false }: LayoutProps) {
  return (
    <div className="flex flex-col min-h-screen">
      {!showSplash && <Navbar />}
      <main className="flex-grow">
        <PageTransition>{children}</PageTransition>
      </main>
      {!showSplash && <Footer />}
    </div>
  )
}
