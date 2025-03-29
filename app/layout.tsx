import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "EventHive",
  description: "find all the events",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* <RetroGrid /> */}
      <body className={`dark ${geistSans.variable} ${geistMono.variable} antialiased `}>
        <div className="px-3 md:px-40">
          <Navbar />
          {children}
        </div>
      </body>

    </html>
  );
}
