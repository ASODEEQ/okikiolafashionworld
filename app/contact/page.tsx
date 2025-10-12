import Link from "next/link";
import { ShoppingCart, User } from "lucide-react";
import { Facebook, Instagram } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white text-black">
      {/* Header */}
      <header className="backdrop-blur-md bg-white/30 sticky top-0 z-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-4">
          <nav className="flex items-center gap-6 font-medium">
            <Link href="/" className="hover:text-pink-600 transition text-pink-600">Home</Link>
            <Link href="/about" className="hover:text-pink-600 transition text-pink-600">About</Link>
            <Link href="/contact" className="hover:text-pink-600 transition text-pink-600">Contact</Link>
            <Link href="/address" className="hover:text-pink-600 transition text-pink-600">Address</Link>
          </nav>

          <div className="flex items-center gap-5">
            <Link href="/profile" className="flex items-center gap-1 hover:text-pink-600 transition text-pink-600">
              <User size={20} /> Profile
            </Link>
            <Link href="/checkout" className="relative hover:text-pink-600 transition">
              <ShoppingCart size={26} />
            </Link>
          </div>
        </div>
      </header>

      {/* Page Content */}
      <main className="pt-28 px-6 max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-pink-600 mb-6">Contact Us</h1>
        <p className="text-lg text-black mb-10">
          We would love to hear from you! Reach out with any questions, feedback, or inquiries about our products and services.
        </p>

        <div className="space-y-6 text-black text-left">
          <p>📞 ASM Information Technology: +2347063364290 / 08072272271</p>
          <p>📞 Okikiola: +2348130571515</p>
          <p>📧 Email: adebayonafisat77@gmail.com</p>
        </div>

        <div className="mt-16">
          <h3 className="text-xl font-semibold text-pink-600 mb-2">Follow Us</h3>
          <div className="flex justify-center gap-6">
            <a
              href="https://www.facebook.com/profile.php?id=100063646616466"
              target="_blank"
              className="text-pink-600 hover:text-pink-800 transition"
            >
              Facebook
            </a>
            <a
              href="https://www.instagram.com/okikiolafashionstore?igsh=MXZ0ZGlzeGUxcDBpZA=="
              target="_blank"
              className="text-pink-600 hover:text-pink-800 transition"
            >
              Instagram
            </a>
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
