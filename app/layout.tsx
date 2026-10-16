import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'منصة طلاب جامعة برج العرب التكنولوجية',
  description: 'منصة تعليمية مستقلة لخدمة طلاب جامعة برج العرب التكنولوجية',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ar" dir="rtl">
      <body>{children}</body>
    </html>
  )
}
