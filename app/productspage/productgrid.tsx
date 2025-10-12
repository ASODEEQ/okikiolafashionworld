"use client";
import { useCart } from "@/context/cartcontext";
import Link from "next/link";
import { useState } from "react";
import { ShoppingCart, User } from "lucide-react";
import { Facebook, Instagram } from "lucide-react";

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

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 6;
  const indexOfLast = currentPage * productsPerPage;
  const indexOfFirst = indexOfLast - productsPerPage;

  const filtered = products.filter((product) => {
    return (
      (search === "" ||
        product.title.toLowerCase().includes(search.toLowerCase())) &&
      (category === "" || product.category === category) &&
      (size === "" || product.size === size)
    );
  });

  const currentProducts = filtered.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(filtered.length / productsPerPage);

  return (
    <div className="min-h-screen bg-white text-black">
      {/* Glass Header */}
      <header className="backdrop-blur-md bg-white/30 sticky top-0 z-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-4">
          <nav className="flex items-center gap-6 font-medium">
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
      <div className="max-w-7xl mx-auto p-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
        {currentProducts.map((product) => (
          <div
            key={product._id}
            className="bg-white shadow-lg rounded-2xl overflow-hidden transform transition-all hover:-translate-y-2 hover:shadow-2xl w-full"
          >
            <Link href={`/product/${product._id}`} className="block group">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-80 object-cover"
              />
              <div className="p-6">
                <h2 className="text-2xl font-semibold group-hover:text-pink-600 transition">
                  {product.title}
                </h2>
                <p className="text-sm mt-2 line-clamp-2">{product.description}</p>
                <div className="mt-4 flex justify-between items-center">
                  <p className="text-pink-600 font-bold text-lg">
                    ₦{product.price.toLocaleString()}
                  </p>
                  <p className="text-sm">Size: {product.size}</p>
                </div>
              </div>
            </Link>

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

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center mt-10 gap-3">
          <button
            disabled={currentPage === 1}
            onClick={() => setCurrentPage(currentPage - 1)}
            className={`px-4 py-2 rounded-lg ${
              currentPage === 1
                ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                : "bg-pink-600 text-white hover:bg-pink-700"
            }`}
          >
            Prev
          </button>

          <span className="text-lg font-semibold">
            Page {currentPage} of {totalPages}
          </span>

          <button
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage(currentPage + 1)}
            className={`px-4 py-2 rounded-lg ${
              currentPage === totalPages
                ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                : "bg-pink-600 text-white hover:bg-pink-700"
            }`}
          >
            Next
          </button>
        </div>
      )}

      {/* Footer */}
      <footer className="mt-16 bg-black text-white">
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
              <li><Link href="/" className="hover:underline">Home</Link></li>
              <li><Link href="/about" className="hover:underline">About Us</Link></li>
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
