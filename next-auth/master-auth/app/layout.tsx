"use client"
import { SessionProvider } from "next-auth/react"

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "Next Auth",
//   description: "A demo application to learn Next Auth",
// };

export default function RootLayout({
  session,
  children,
}: Readonly<{
  session:any,
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <SessionProvider session={session}>
      <body className={inter.className}>{children}</body>
      </SessionProvider>
    </html>
  );
}
