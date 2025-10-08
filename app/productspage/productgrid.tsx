"use client";
import { logout } from "@/lib/user-action";
import Link from "next/link";
import { useState } from "react";

interface Product {
  _id: string;
  title: string;
  description: string;
  price: number;
  category: string;
  image: string;
  size: string;
}

export default function ProductGrid({ products }: { products: Product[] }) {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [size, setSize] = useState("");

  const filteredProducts = products.filter((product) => {
    return (
      (search === "" ||
        product.title.toLowerCase().includes(search.toLowerCase())) &&
      (category === "" || product.category === category) &&
      (size === "" || product.size === size)
    );
  });

  return (
    <div className="p-6">
      {/* Filters */}
      <div className="flex gap-4 mb-6">
        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)} // ✅ now reading
          className="border p-2 rounded"
        />
                <Link href={"/login"}>logout</Link>
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)} // ✅ now reading
          className="border p-2 rounded"
        >
          <option value="">All Categories</option>
          <option value="men">Men</option>
          <option value="women">Women</option>
          <option value="kids">Kids</option>
        </select>

        <select
          value={size}
          onChange={(e) => setSize(e.target.value)} // ✅ now reading
          className="border p-2 rounded"
        >
          <option value="">All Sizes</option>
          <option value="S">S</option>
          <option value="M">M</option>
          <option value="L">L</option>
        </select>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredProducts.map((product) => (
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
              <p className="text-sm text-gray-500">Size: {product.size}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
