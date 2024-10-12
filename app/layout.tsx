import type { Metadata } from 'next'
import './globals.css'
import { Noto_Sans_KR } from 'next/font/google'

export const metadata: Metadata = {
  title: '메모핑, 간단한 메모',
  description: '메모를 쉽고 간편하게 할 수 있는 메모핑',
}

const sans = Noto_Sans_KR({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${sans.className} w-screen h-screen`}>{children}</body>
    </html>
  )
}
