import { Inter } from 'next/font/google'
import './globals.css'
import ClientLayout from '@/components/ClientLayout'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#f0f7fe] text-[#1b2c50]`}>
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  )
}