import type { Metadata } from "next";
import "./globals.css";
import { Outfit } from 'next/font/google'

const outfit = Outfit({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-outfit",
})

export const metadata: Metadata = {
  title: "TECHNOS",
  description: "Technos Landing Page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en"> 
      <body
        className={`${outfit.variable} ${outfit.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
