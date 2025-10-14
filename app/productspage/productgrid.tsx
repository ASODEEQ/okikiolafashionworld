import { useState } from "react";
import Link from "next/link";
import { ShoppingCart, User, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "@/context/cartcontext";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { cart } = useCart();

  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-lg bg-white/30 border-b border-white/20 shadow-sm">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Brand */}
        <Link href="/" className="text-2xl font-bold text-pink-600">
          OKW
        </Link>

        {/* Desktop Nav */}
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

        {/* Icons */}
        <div className="flex items-center gap-5">
          <Link
            href="/profile"
            className="hidden md:flex items-center gap-1 hover:text-pink-600 transition"
          >
            <User size={20} /> Profile
          </Link>

          <Link href="/checkout" className="relative hover:text-pink-600 transition">
            <ShoppingCart size={26} />
            {cart.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-pink-600 text-white text-xs rounded-full px-2">
                {cart.length}
              </span>
            )}
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-pink-600 focus:outline-none"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white/95 backdrop-blur-lg border-t border-gray-200 shadow-lg"
          >
            <div className="flex flex-col items-center gap-6 py-6 text-lg font-medium text-black">
              <Link href="/" onClick={() => setIsOpen(false)} className="hover:text-pink-600">
                Home
              </Link>
              <Link href="/about" onClick={() => setIsOpen(false)} className="hover:text-pink-600">
                About
              </Link>
              <Link href="/contact" onClick={() => setIsOpen(false)} className="hover:text-pink-600">
                Contact
              </Link>
              <Link href="/address" onClick={() => setIsOpen(false)} className="hover:text-pink-600">
                Address
              </Link>
              <Link
                href="/profile"
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-1 hover:text-pink-600"
              >
                <User size={20} /> Profile
              </Link>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
