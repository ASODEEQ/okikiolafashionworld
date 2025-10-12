// app/(user)/layout.tsx
"use client";

import Link from "next/link";
import { ShoppingCart, User, LayoutDashboard } from "lucide-react";
import { useCart } from "@/context/cartcontext";

export default function UserLayout({ children }: { children: React.ReactNode }) {
  const { cart } = useCart();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
          {/* Left side */}
          <div className="flex items-center gap-4">
            <Link
              href="/userdashboard"
              className="flex items-center gap-1 text-pink-600 hover:text-pink-700 font-semibold"
            >
              <LayoutDashboard size={20} />
              Dashboard
            </Link>

            <Link
              href="/profile"
              className="flex items-center gap-1 text-gray-800 hover:text-pink-600"
            >
              <User size={20} /> Profile
            </Link>

            <Link
              href="/productspage"
              className="flex items-center gap-1 text-gray-800 hover:text-pink-600"
            >
              Products
            </Link>
          </div>

          {/* Right side */}
          <Link href="/checkout" className="relative text-gray-800 hover:text-pink-600">
            <ShoppingCart size={26} />
            {cart.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-pink-600 text-white text-xs rounded-full px-2">
                {cart.length}
              </span>
            )}
          </Link>
        </div>
      </header>

      {/* Page Content */}
      <main className="max-w-6xl mx-auto px-6 py-6">{children}</main>
    </div>
  );
}
