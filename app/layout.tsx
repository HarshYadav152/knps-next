import type { Metadata } from "next";
import {Roboto } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: "KNPS",
  description: "KN Public School",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${roboto.className} bg-slate-50 text-slate-900 antialiased selection:bg-gold-500 selection:text-white`}
      >
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
