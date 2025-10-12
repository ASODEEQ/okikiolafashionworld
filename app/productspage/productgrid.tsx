"use client";
import { useCart } from "@/context/cartcontext";
import Link from "next/link";
import { useState } from "react";
import { ShoppingCart, User, LayoutDashboard } from "lucide-react";

interface Product {
  _id: string;
  title: string;
  description: string;
  price: number;
  category: string;
  image: string;
  size: string;
  quantity?: number;
}

export default function ProductGrid({ products }: { products: Product[] }) {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [size, setSize] = useState("");
  const { cart, addToCart } = useCart();

  const filtered = products.filter((product) => {
    return (
      (search === "" ||
        product.title.toLowerCase().includes(search.toLowerCase())) &&
      (category === "" || product.category === category) &&
      (size === "" || product.size === size)
    );
  });

  return (
    <div className="min-h-screen bg-gray-100"> {/* changed background color */}
      {/* Transparent / frosted header */}
      <header className="backdrop-blur-md bg-white/30 sticky top-0 z-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-4">
          <nav className="flex items-center gap-6 text-black font-medium">
            <Link href="/" className="hover:text-pink-600 transition">
              Home
            </Link>
            <Link href="/about" className="hover:text-pink-600 transition">
              About Us
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
              href="/userdashboard"
              className="flex items-center gap-1 text-black hover:text-pink-600 transition"
            >
              <LayoutDashboard size={20} /> Dashboard
            </Link>
            <Link
              href="/profile"
              className="flex items-center gap-1 text-black hover:text-pink-600 transition"
            >
              <User size={20} /> Profile
            </Link>
            <Link
              href="/checkout"
              className="relative text-black hover:text-pink-600 transition"
            >
              <ShoppingCart size={26} />
              {cart.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-pink-600 text-white text-xs rounded-full px-2">
                  {cart.length}
                </span>
              )}
            </Link>
          </div>
        </div>
      </header>

      {/* Search & Filters */}
      <div className="max-w-7xl mx-auto px-8 mt-8 flex flex-wrap justify-between items-center gap-4">
        <div className="flex flex-wrap gap-3">
          <input
            type="text"
            placeholder="Search products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border border-gray-300 p-2 rounded-lg w-56 focus:outline-none focus:ring-2 focus:ring-pink-400 bg-white"
          />
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="border border-gray-300 p-2 rounded-lg bg-white"
          >
            <option value="">All Categories</option>
            <option value="clothes">Clothes</option>
            <option value="bags">Bags</option>
            <option value="shoes">Shoes</option>
            <option value="gadgets">Gadgets</option>
          </select>
          <select
            value={size}
            onChange={(e) => setSize(e.target.value)}
            className="border border-gray-300 p-2 rounded-lg bg-white"
          >
            <option value="">All Sizes</option>
            <option value="S">S</option>
            <option value="M">M</option>
            <option value="L">L</option>
          </select>
        </div>
      </div>

   {/* Products Grid */}
<div className="max-w-7xl mx-auto p-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
  {filtered.map((product) => (
    <div
      key={product._id}
      className="bg-white shadow-lg rounded-2xl overflow-hidden transform transition-all hover:-translate-y-2 hover:shadow-2xl"
    >
      {/* Product Image + Title link */}
      <Link href={`/product/${product._id}`} className="block group">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-72 object-cover"
        />
        <div className="p-6">
          <h2 className="text-2xl font-semibold text-black group-hover:text-pink-600 transition">
            {product.title}
          </h2>
          <p className="text-sm text-black mt-2 line-clamp-2">
            {product.description}
          </p>
          <div className="mt-4 flex justify-between items-center">
            <p className="text-pink-600 font-bold text-lg">
              ₦{product.price.toLocaleString()}
            </p>
            <p className="text-sm text-black">Size: {product.size}</p>
          </div>
        </div>
      </Link>

      {/* Action Buttons outside the main Link */}
      <div className="flex gap-3 px-6 pb-6">
        <button
          onClick={(e) => {
            e.preventDefault();
            addToCart({ ...product, quantity: product.quantity ?? 1 });
          }}
          className="bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded-lg transition w-1/2"
        >
          Add to Cart
        </button>
        <Link
          href="/checkout"
          className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg transition w-1/2 text-center"
        >
          Buy Now
        </Link>
      </div>
    </div>
  ))}
</div>


      {/* Footer */}
      <footer className="mt-16 bg-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-8 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">OkikiolaFashionWorld</h3>
            <p className="text-sm">
              Building style, confidence, and trust.  
              <br />
              123 Fashion Street, Ibadan, Nigeria
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
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
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
            <p className="text-sm">
              Email: support@okwfashionworld.com  
              <br />
              Phone: +234 800 123 4567
            </p>
            <div className="flex space-x-4 mt-4">
              {/* You can add social icons here */}
              <Link href="https://facebook.com" className="hover:text-pink-400">FB</Link>
              <Link href="https://instagram.com" className="hover:text-pink-400">IG</Link>
              <Link href="https://twitter.com" className="hover:text-pink-400">TW</Link>
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
