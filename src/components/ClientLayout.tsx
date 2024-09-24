'use client'

import { usePathname } from 'next/navigation'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const isLandingPage = pathname === '/'

  return (
    <>
      {!isLandingPage && <Navigation />}
      {children}
      {!isLandingPage && <Footer />}
    </>
  )
}