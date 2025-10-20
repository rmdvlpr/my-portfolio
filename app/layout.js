import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import {
  Poppins,
  Syne,
  Oranienbaum,
  Instrument_Serif,
  GFS_Didot,
  Bodoni_Moda,
  Montserrat,
} from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import LenisProvider from "./components/LenisProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400"],
});
const oranienbaum = Oranienbaum({
  variable: "--font-oranienbaum",
  subsets: ["latin"],
  weight: ["400"],
});
const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: ["400"],
});
const bodoniModa = Bodoni_Moda({
  variable: "--font-bodoni-moda",
  subsets: ["latin"],
  weight: ["400"],
});

const gfsDidot = GFS_Didot({
  variable: "--font-gfs-didot",
  subsets: ["greek"],
  weight: ["400"],
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

export const metadata = {
  title: "Ram Paredes",
  description: "Your website description",
  icons: {
    icon: "/mountain-svg.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${montserrat.variable} ${geistMono.variable} ${poppins.variable} ${syne.variable} ${oranienbaum.variable} ${instrumentSerif.variable} ${bodoniModa.variable} ${gfsDidot.variable} antialiased scroll-smooth`}
        antialiased="true"
        scroll-smooth="true"
      >
        <LenisProvider>{children}</LenisProvider>
        <Analytics />
      </body>
    </html>
  );
}
