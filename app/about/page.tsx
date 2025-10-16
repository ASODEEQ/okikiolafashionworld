"use client";
import Link from "next/link";
import { Menu, ShoppingCart, User, X } from "lucide-react";
import { Facebook, Instagram } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function AboutPage() {

  
    const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="min-h-screen bg-white text-black">
      {/* Header */}
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

      {/* Main Content */}
      <main className="pt-28 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-pink-600 mb-6">About</h1>
          <p className="text-lg leading-relaxed text-black mb-6">
            <strong>Okikiola Fashion World (OKW)</strong> is a global fashion brand
            that connects cultures through elegant designs and high-quality fashion
            products. With roots in Nigeria 🇳🇬, a strong sourcing base in China 🇨🇳,
            and a growing presence in Poland 🇵🇱, we specialize in stylish clothing,
            accessories, and lifestyle essentials that inspire confidence and beauty.
          </p>

          <p className="text-lg leading-relaxed text-black mb-12">
            We believe fashion should be both timeless and expressive. That’s why our
            collections blend traditional craftsmanship with modern creativity. From
            everyday wear to premium looks, we make sure you feel unique and confident
            in every outfit.
          </p>

          <div className="mb-12 text-left">
            <h2 className="text-2xl font-semibold text-pink-600 mb-3">Our Vision</h2>
            <p className="text-black">
              To become Africa’s most trusted global fashion brand, delivering beauty,
              quality, and culture across continents.
            </p>

            <h2 className="text-2xl font-semibold text-pink-600 mt-10 mb-3">Our Mission</h2>
            <p className="text-black">
              To empower people through fashion, by providing high-quality, affordable,
              and trend-forward clothing sourced ethically from around the world.
            </p>
          </div>

          <div className="mb-16">
            <h3 className="text-xl font-semibold text-pink-600 mb-2">Follow Our Journey</h3>
            <p className="text-black mb-4">
              Stay connected for our latest drops and global updates.
            </p>
            <div className="flex justify-center gap-6">
              <a
                href="https://www.facebook.com/profile.php?id=100063646616466"
                target="_blank"
                className="text-pink-600 hover:text-pink-800 transition"
              >
                <Facebook size={22} />
              </a>
              <a
                href="https://www.instagram.com/okikiolafashionstore?igsh=MXZ0ZGlzeGUxcDBpZA=="
                target="_blank"
                className="text-pink-600 hover:text-pink-800 transition"
              >
                <Instagram size={22} />
              </a>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-16 bg-black text-white">
        <div className="max-w-7xl mx-auto px-8 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">OkikiolaFashionWorld</h3>
            <p className="text-sm">
              Building style, confidence, and trust.
              <br />
              No:50 , akintunde house, odi-olowo osogbo
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="hover:underline">Home</Link></li>
              <li><Link href="/about" className="hover:underline">About</Link></li>
              <li><Link href="/contact" className="hover:underline">Contact</Link></li>
              <li><Link href="/address" className="hover:underline">Address</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
            <p className="text-sm mb-4">
              Email: support@okwfashionworld.com
              <br />
              Phone: +2348130571515
            </p>
            <div className="flex space-x-6">
              <Link
                href="https://www.facebook.com/profile.php?id=100063646616466"
                target="_blank"
                className="text-pink-500 hover:text-pink-700"
              >
                <Facebook size={22} />
              </Link>
              <Link
                href="https://www.instagram.com/okikiolafashionstore?igsh=MXZ0ZGlzeGUxcDBpZA=="
                target="_blank"
                className="text-pink-500 hover:text-pink-700"
              >
                <Instagram size={22} />
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-4 text-center text-xs">
          © {new Date().getFullYear()} OkikiolaFashionWorld. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
