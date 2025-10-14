"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ShoppingCart,
  User,
  Facebook,
  Instagram,
  Menu,
  X,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function LandingPage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-black">
      {/* 🌸 Glass Header */}
      <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-lg bg-white/30 border-b border-white/20 shadow-sm">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-4 sm:px-6 py-3 sm:py-4">
          {/* Logo */}
          <h1 className="text-2xl sm:text-3xl font-bold text-pink-600">
            OKW
          </h1>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6 font-medium">
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

          {/* Right Icons (Desktop) */}
          <div className="hidden md:flex items-center gap-5">
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

          {/* Hamburger Icon (Mobile) */}
          <button
            className="md:hidden text-pink-600 focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* ✅ Animated Mobile Menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="md:hidden bg-white/95 backdrop-blur-lg border-t border-gray-200 shadow-lg"
            >
              <nav className="flex flex-col items-center gap-4 py-6 font-medium">
                <Link
                  href="/"
                  className="hover:text-pink-600 transition"
                  onClick={() => setMenuOpen(false)}
                >
                  Home
                </Link>
                <Link
                  href="/about"
                  className="hover:text-pink-600 transition"
                  onClick={() => setMenuOpen(false)}
                >
                  About
                </Link>
                <Link
                  href="/contact"
                  className="hover:text-pink-600 transition"
                  onClick={() => setMenuOpen(false)}
                >
                  Contact
                </Link>
                <Link
                  href="/address"
                  className="hover:text-pink-600 transition"
                  onClick={() => setMenuOpen(false)}
                >
                  Address
                </Link>

                <div className="flex items-center gap-5 mt-4">
                  <Link
                    href="/profile"
                    className="flex items-center gap-1 hover:text-pink-600 transition"
                    onClick={() => setMenuOpen(false)}
                  >
                    <User size={20} /> Profile
                  </Link>
                  <Link
                    href="/checkout"
                    className="relative hover:text-pink-600 transition"
                    onClick={() => setMenuOpen(false)}
                  >
                    <ShoppingCart size={26} />
                  </Link>
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* 🩷 Hero Section */}
      <section className="text-center py-32 md:py-40 mt-20 px-4">
        <div className="bg-white/75 py-10 px-4 sm:px-8 md:px-12 rounded-2xl inline-block max-w-2xl">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-pink-600 leading-tight">
            Elevate Your Style with OkikiolaFashionWorld
          </h2>
          <p className="mt-4 text-base sm:text-lg text-black">
            Explore the latest trends in fashion, from Nigeria 🇳🇬 to China 🇨🇳 and Poland 🇵🇱.
          </p>
          <Link
            href="/productspage"
            className="mt-6 inline-block bg-pink-600 text-white px-6 py-3 rounded-lg hover:bg-pink-700 transition text-sm sm:text-base"
          >
            Shop Now
          </Link>
        </div>
      </section>

      {/* 🏬 Address Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
        <h3 className="text-2xl sm:text-3xl font-semibold text-center mb-10">
          Our Stores
        </h3>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 text-black">
          <div className="bg-white shadow-lg rounded-2xl p-6">
            <h4 className="font-bold text-lg sm:text-xl mb-3">Nigeria 🇳🇬</h4>
            <p className="text-sm sm:text-base">
              Main Store: No 50, Akintunde House, Odi Olowo, Osogbo, Osun State
            </p>
            <p className="text-sm sm:text-base">
              Branch Store: No. 12, Oketunji Street, Alekuwodo, Osogbo
            </p>
          </div>

          <div className="bg-white shadow-lg rounded-2xl p-6">
            <h4 className="font-bold text-lg sm:text-xl mb-3">China 🇨🇳</h4>
            <p className="text-sm sm:text-base">
              No 257, Ton Building, Guangzhou, Guangdong Province
            </p>
          </div>

          <div className="bg-white shadow-lg rounded-2xl p-6">
            <h4 className="font-bold text-lg sm:text-xl mb-3">Poland 🇵🇱</h4>
            <p className="text-sm sm:text-base">
              Kings Street by West Bakery, Warsaw, Poland
            </p>
          </div>
        </div>
      </section>

      {/* 📞 Contact Section */}
      <section className="bg-pink-50 py-16 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h3 className="text-2xl sm:text-3xl font-semibold mb-6">Contact Us</h3>
          <p className="text-base sm:text-lg">
            Our Developer: ASM Information Technology
          </p>
          <p className="text-base sm:text-lg">📞 +2347063364290 / 08072272271</p>
          <p className="text-base sm:text-lg">Okikiola: +2348130571515</p>
          <p className="text-base sm:text-lg">📧 adebayonafisat77@gmail.com</p>
        </div>
      </section>

      {/* 🖤 Footer */}
      <footer className="bg-black text-white mt-16">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 py-10 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          <div>
            <h3 className="text-xl font-bold mb-4 text-pink-400">
              OkikiolaFashionWorld
            </h3>
            <p className="text-sm sm:text-base">
              Building style, confidence, and trust.
              <br />
              No 50, Akintunde House, Odi Olowo, Osogbo, Nigeria
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-pink-400">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm sm:text-base">
              <li>
                <Link href="/" className="hover:underline">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:underline">
                  About
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

          {/* ✅ Social Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-pink-400">
              Connect With Us
            </h3>
            <p className="text-sm sm:text-base">
              Follow our latest collections online:
            </p>
            <div className="flex justify-center md:justify-start space-x-6 mt-4">
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
        <div className="border-t border-gray-700 mt-8 pt-4 text-center text-xs sm:text-sm text-white">
          © {new Date().getFullYear()} OkikiolaFashionWorld. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
