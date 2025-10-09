"use client";
import { useCart } from "@/context/cartcontext";
import Link from "next/link";
import { useState } from "react";
import { ShoppingCart } from "lucide-react";

interface Product {
  _id: string;
  title: string;
  description: string;
  price: number;
  category: string;
  image: string;
  size: string;
  quantity: number;
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
    <div className="p-6">
      {/* Top bar */}
      <div className="flex justify-between items-center mb-6">
        <div className="flex gap-3">
          <input
            type="text"
            placeholder="Search products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border p-2 rounded"
          />
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="border p-2 rounded"
          >
            <option value="">All Categories</option>
            <option value="men">Men</option>
            <option value="women">Women</option>
            <option value="kids">Kids</option>
          </select>
          <select
            value={size}
            onChange={(e) => setSize(e.target.value)}
            className="border p-2 rounded"
          >
            <option value="">All Sizes</option>
            <option value="S">S</option>
            <option value="M">M</option>
            <option value="L">L</option>
          </select>
        </div>

        <Link href="/checkout" className="relative">
          <ShoppingCart size={28} />
          {cart.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-pink-600 text-white text-xs rounded-full px-2">
              {cart.length}
            </span>
          )}
        </Link>
      </div>

      {/* Product grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filtered.map((product) => (
          <div
            key={product._id}
            className="bg-white shadow rounded-lg overflow-hidden"
          >
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-lg font-semibold">{product.title}</h2>
              <p className="text-sm text-gray-600">{product.description}</p>
              <p className="text-pink-600 font-bold mt-2">
                ₦{product.price.toLocaleString()}
              </p>
              <p className="text-sm text-gray-500 mb-3">Size: {product.size}</p>

              <div className="flex gap-2">
                <button
                  onClick={() => addToCart(product)}
                  className="bg-pink-500 hover:bg-pink-600 text-white px-3 py-1 rounded"
                >
                  Add to Cart
                </button>
                <Link
                  href="/checkout"
                  className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded"
                >
                  Buy Now
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
