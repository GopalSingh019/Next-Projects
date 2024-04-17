
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Gopal's Portfolio",
  description: "I am a fullstack developer with 3 years of experince",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`{inter.className}  bg-gray-50 dark:bg-slate-90 relative dark:text-gray-50 dark:text-opacity-90`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
            <div className="bg-blue-600 h-[20rem] absolute top-[-6rem] -z-10 w-[20rem] rounded-full  blur-[10rem] right-[11rem] dark:bg-[#946263]">
            </div>
            <div className="bg-red-400 h-[20rem] absolute top-[-6rem] -z-10 w-[20rem] rounded-full  blur-[10rem] left-[8rem] dark:bg-[#676394]">

            
          </div>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
