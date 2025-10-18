import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "BUCK3TS Mobile Detailing | Premium Auto Detailing in Des Moines",
  description:
    "Professional mobile auto detailing services in Des Moines Metro. Interior, exterior, ceramic coating, and paint correction delivered to your doorstep.",
  openGraph: {
    title: "BUCK3TS Mobile Detailing",
    description: "Premium mobile auto detailing services in Des Moines Metro",
    type: "website",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`font-sans antialiased bg-background text-foreground`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
