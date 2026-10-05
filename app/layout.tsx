import type { Metadata } from "next"
import { Nunito } from "next/font/google"
import "./globals.css"

const nunito = Nunito({
  variable: "--font-family",
  subsets: ["latin", "cyrillic"],
})

export const metadata: Metadata = {
  title: "HMTigo",
  description: "Платформа для підготовки до НМТ",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="uk"
      className={`${nunito.variable}`}
    >
      <body>{children}</body>
    </html>
  )
}
