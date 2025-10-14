import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/context/cartcontext";
import Header from "@/components/Header"; // ✅ Import the Header

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "OkikiolaFashionWorld",
  description: "Elevate your style with OkikiolaFashionWorld",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <CartProvider>
          {/* ✅ Global Header visible on all pages */}
          <Header />

          {/* ✅ Page content */}
          <main className="pt-20">{children}</main>

          {/* You can later add <Footer /> here */}
        </CartProvider>
      </body>
    </html>
  );
}
