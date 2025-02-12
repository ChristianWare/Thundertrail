import type { Metadata } from "next";
import {
  Inter_Tight,
  Barlow_Condensed,
  Barlow_Semi_Condensed,
} from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/Nav/Nav";
import Footer from "@/components/Footer/Footer";

const interTight = Inter_Tight({
  variable: "--interTight",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const barlowCondensed = Barlow_Condensed({
  variable: "--barlowCondensed",
  subsets: ["latin"],
  weight: ["100", "700", "800"],
});

const barlowSemiCondensed = Barlow_Semi_Condensed({
  variable: "--barlowSemiCondensed",
  subsets: ["latin"],
  weight: ["700"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={`${interTight.variable} ${barlowCondensed.variable} ${barlowSemiCondensed.variable}`}
      >
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
