import type { Metadata } from "next";
import { Syne, DM_Sans } from "next/font/google";
import "./globals.css";
import Cursor from "@/components/layout/Cursor";
import Navbar from "@/components/layout/Navbar";

const syne = Syne({
  subsets: ["latin"],
  weight: ["700", "800"],
  variable: "--font-syne",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-dm-sans",
});

export const metadata: Metadata = {
  title: "Zedinc | Creative Brand Studio",
  description: "Branding, Design, and Digital experiences for the next generation of brands.",
  icons: {
    icon: "/favicon.ico", // Ensure this exists or placeholder
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${syne.variable} ${dmSans.variable} selection:bg-white selection:text-black`}>
      <body className="bg-black text-white antialiased overflow-x-hidden">
        <div className="noise-overlay" />
        <Cursor />
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
