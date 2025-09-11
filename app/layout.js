"use client";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Poppins, Syne } from "next/font/google";
import { useLenis } from "./hooks/useLenis";
import { Analytics } from "@vercel/analytics/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"], // pick weights you need
  variable: "--font-poppins",
  display: "swap",
});

const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-syne",
  display: "swap",
});

export default function RootLayout({ children }) {
  useLenis();
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable} ${syne.variable} antialiased`}
        antialiased="true"
        scroll-smooth="true"
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
