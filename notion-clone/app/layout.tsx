import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from "@/components/providers/theme-provider"
import { ConvexReactProvider } from '@/components/providers/convex-providers'
import { EdgeStoreProvider } from '@/edgeStore/edgestore'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Jotion',
  description: 'The connected worspace wher better, faster or happens.',
  icons: [{
    media: "(prefers-color-scheme: light)",
    url: "/logo.svg",
    href: "/logo.svg"
  },
  {
    media: "(prefers-color-scheme: dark)",
    url: "/logo-dark.svg",
    href: "/logo-dark.svg"
  }]
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ConvexReactProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <EdgeStoreProvider>{children}</EdgeStoreProvider>
          </ThemeProvider>
        </ConvexReactProvider>
      </body>
    </html>
  )
}
