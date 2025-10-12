"use client";
import Link from "next/link";
import { ShoppingCart, User, Facebook, Instagram } from "lucide-react";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white text-black">
      {/* 🌸 Glass Header */}
      <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-lg bg-white/30 border-b border-white/20 shadow-sm">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-4">
          <h1 className="text-2xl font-bold text-pink-600">
            OkikiolaFashionWorld
          </h1>
          <nav className="flex items-center gap-6 font-medium">
            <Link href="/" className="hover:text-pink-600 transition">
              Home
            </Link>
            <Link href="/about" className="hover:text-pink-600 transition">
              About
            </Link>
            <Link href="/contact" className="hover:text-pink-600 transition">
              Contact
            </Link>
            <Link href="/address" className="hover:text-pink-600 transition">
              Address
            </Link>
          </nav>
          <div className="flex items-center gap-5">
            <Link
              href="/profile"
              className="flex items-center gap-1 hover:text-pink-600 transition"
            >
              <User size={20} /> Profile
            </Link>
            <Link
              href="/checkout"
              className="relative hover:text-pink-600 transition"
            >
              <ShoppingCart size={26} />
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-pink-50 text-center py-32 md:py-40">
        <h2 className="text-4xl md:text-5xl font-bold text-pink-600">
          Elevate Your Style with OkikiolaFashionWorld
        </h2>
        <p className="mt-4 text-lg text-black">
          Explore the latest trends in fashion, from Nigeria 🇳🇬 to China 🇨🇳 and
          Poland 🇵🇱.
        </p>
        <Link
          href="/productspage"
          className="mt-6 inline-block bg-pink-600 text-white px-6 py-3 rounded-lg hover:bg-pink-700 transition"
        >
          Shop Now
        </Link>
      </section>

      {/* Address Section */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h3 className="text-3xl font-semibold text-center mb-10">Our Stores</h3>
        <div className="grid md:grid-cols-3 gap-8 text-black">
          <div className="bg-white shadow-lg rounded-2xl p-6">
            <h4 className="font-bold text-xl mb-3">Nigeria 🇳🇬</h4>
            <p>Main Store: No 50, Akintunde House, Odi Olowo, Osogbo, Osun State</p>
            <p>Branch Store: No. 12, Oketunji Street, Alekuwodo, Osogbo</p>
          </div>

          <div className="bg-white shadow-lg rounded-2xl p-6">
            <h4 className="font-bold text-xl mb-3">China 🇨🇳</h4>
            <p>No 257, Ton Building, Guangzhou, Guangdong Province</p>
          </div>

          <div className="bg-white shadow-lg rounded-2xl p-6">
            <h4 className="font-bold text-xl mb-3">Poland 🇵🇱</h4>
            <p>Kings Street by West Bakery, Warsaw, Poland</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-pink-50 py-16">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h3 className="text-3xl font-semibold mb-6">Contact Us</h3>
          <p className="text-lg">Our Developer: ASM Information Technology</p>
          <p className="text-lg">📞 +2347063364290 / 08072272271</p>
          <p className="text-lg">Okikiola: +2348130571515</p>
          <p className="text-lg">📧 adebayonafisat77@gmail.com</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white mt-16">
        <div className="max-w-7xl mx-auto px-8 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-pink-400">
              OkikiolaFashionWorld
            </h3>
            <p className="text-sm text-white">
              Building style, confidence, and trust.
              <br />
              No 50, Akintunde House, Odi Olowo, Osogbo, Nigeria
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-pink-400">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:underline">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:underline">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:underline">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/address" className="hover:underline">
                  Address
                </Link>
              </li>
            </ul>
          </div>

          {/* ✅ Social Icons */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-pink-400">
              Connect With Us
            </h3>
            <p className="text-sm">Follow our latest collections online:</p>
            <div className="flex space-x-6 mt-4">
              <Link
                href="https://www.facebook.com/profile.php?id=100063646616466"
                target="_blank"
                className="hover:text-pink-400"
              >
                <Facebook size={24} />
              </Link>
              <Link
                href="https://www.instagram.com/okikiolafashionstore?igsh=MXZ0ZGlzeGUxcDBpZA=="
                target="_blank"
                className="hover:text-pink-400"
              >
                <Instagram size={24} />
              </Link>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-4 text-center text-xs text-white">
          © {new Date().getFullYear()} OkikiolaFashionWorld. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
