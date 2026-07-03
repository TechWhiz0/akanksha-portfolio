import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { SITE, IMAGES } from "@/lib/constants";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: SITE.title,
  description: SITE.tagline,
  icons: { icon: IMAGES.favicon },
  openGraph: {
    title: SITE.title,
    description: SITE.tagline,
    images: [IMAGES.og],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
