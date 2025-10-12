import Link from "next/link";
import { ShoppingCart, User } from "lucide-react";
import { Facebook, Instagram } from "lucide-react";

export default function AddressPage() {
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
      <main className="pt-28 px-6 max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-pink-600 mb-6 text-center">Our Store Locations</h1>
        <p className="text-lg text-black mb-10 text-center">
          Visit any of our stores around the world. We’re closer than you think!
        </p>

        <div className="grid md:grid-cols-3 gap-8 text-left">
          <div className="bg-pink-50 p-6 rounded-2xl shadow-md">
            <h2 className="text-xl font-semibold text-pink-600 mb-3">Nigeria 🇳🇬</h2>
            <p>Main Store: No 50, Akintunde House, Odi Olowo, Osogbo, Osun State</p>
            <p>Branch Store: No. 12, Oketunji Street, Alekuwodo, Osogbo</p>
          </div>

          <div className="bg-pink-50 p-6 rounded-2xl shadow-md">
            <h2 className="text-xl font-semibold text-pink-600 mb-3">China 🇨🇳</h2>
            <p>No 257, Ton Building, Guangzhou, Guangdong Province</p>
          </div>

          <div className="bg-pink-50 p-6 rounded-2xl shadow-md">
            <h2 className="text-xl font-semibold text-pink-600 mb-3">Poland 🇵🇱</h2>
            <p>Kings Street by West Bakery, Warsaw, Poland</p>
          </div>
        </div>

        <div className="mt-16 text-black">
          <h2 className="text-2xl font-semibold text-pink-600 mb-3">Contact Our Teams</h2>
          <p>📞 ASM Information Technology: +2347063364290 / 08072272271</p>
          <p>📞 Okikiola: +2348130571515</p>
          <p>📧 adebayonafisat77@gmail.com</p>
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
