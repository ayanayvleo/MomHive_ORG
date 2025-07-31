import { cn } from "@/lib/utils"
import { TooltipProvider } from "@/components/ui/tooltip"
import { Inter, Orbitron } from "next/font/google"
import type { ReactNode } from "react"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-orbitron",
})

export const metadata = {
  title: "MomHive - Neural Parenting Assistant",
  description:
    "Advanced AI-powered parenting assistant for the modern mother. Harness the power of artificial intelligence for expert guidance.",
  keywords: "AI parenting, neural assistant, futuristic mom help, advanced childcare, AI motherhood",
  authors: [{ name: "MomHive Neural Systems" }],
  manifest: "/manifest.json",
  icons: {
    icon: [{ url: "/favicon.ico" }, { url: "/images/momhive-logo.png", sizes: "32x32", type: "image/png" }],
    apple: [{ url: "/images/momhive-logo.png", sizes: "180x180", type: "image/png" }],
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "MomHive",
  },
  openGraph: {
    title: "MomHive - Neural Parenting Assistant",
    description: "Advanced AI assistant for futuristic parenting",
    type: "website",
    images: [
      {
        url: "/images/momhive-logo.png",
        width: 1200,
        height: 630,
        alt: "MomHive - Neural Parenting Assistant",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MomHive - Neural Parenting Assistant",
    description: "Advanced AI assistant for futuristic parenting",
    images: ["/images/momhive-logo.png"],
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
    viewportFit: "cover",
  },
    generator: 'v0.dev'
}

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${orbitron.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/images/momhive-logo.png" type="image/png" />
        <link rel="apple-touch-icon" href="/images/momhive-logo.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#8b5cf6" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="MomHive" />
         {/* Google tag (gtag.js) */}
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-K2LBRX5XFC"></script>
      <script dangerouslySetInnerHTML={{
        __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-K2LBRX5XFC');
        `
      }} />
      </head>
      <body
        className={cn("flex min-h-svh flex-col antialiased bg-gray-900 font-sans overflow-hidden", inter.className)}
      >
        <TooltipProvider delayDuration={0}>{children}</TooltipProvider>
      </body>
    </html>
  )
}


import './globals.css'
