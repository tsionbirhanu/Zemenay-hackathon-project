import type React from "react";
import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  preload: false, 
  variable: "--font-inter",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  preload: false, 
  variable: "--font-space-grotesk",
});

export const metadata: Metadata = {
  title: "Zemenay - Revolutionize Your Digital Experience",
  description:
    "At Zemenay, we build clean, scalable, and elegant digital experiences for forward-thinking businesses.",
  generator: "next js",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} antialiased`}
    >
      <body
        className={cn(
          "font-sans antialiased",
          inter.variable,
          spaceGrotesk.variable,
          "bg-[#E6F0F9] dark:bg-gradient-to-br dark:from-gray-900 dark:to-purple-950 min-h-screen"
        )}
      >
        {children}
      </body>
    </html>
  );
}
