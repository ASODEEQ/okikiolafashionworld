"use client";

import React from "react";
import { useRouter } from "next/navigation";

interface Product {
  _id: string;
  title: string;
  description: string;
  price: number;
  category: string;
  image: string;
  size: string;
  quantity: number;
  status: string;
}

interface ProductClientPageProps {
  product: Product;
  similar: Product[];
  user: any;
}

export default function ProductClientPage({ product, similar }: ProductClientPageProps) {
  const router = useRouter();

  return (
    <div className="p-6 max-w-5xl mx-auto">
      {/* 🔙 Back button */}
      <button
        onClick={() => router.push("/productspage")}
        className="mb-6 px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition"
      >
        ← Back to Products
      </button>

      {/* Product Details */}
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <img
            src={product.image}
            alt={product.title}
            className="rounded-lg shadow-md w-full h-96 object-cover"
          />
        </div>

        <div>
          <h1 className="text-2xl font-bold">{product.title}</h1>
          <p className="text-gray-700 my-3">{product.description}</p>
          <p className="text-pink-600 font-semibold text-xl">₦{product.price}</p>
          <p className="mt-2 text-sm text-gray-500">Size: {product.size}</p>
          <p className="mt-1 text-sm text-gray-500">Quantity left: {product.quantity}</p>
        </div>
      </div>

      {/* 🔁 Similar Products */}
      <div className="mt-10">
        <h2 className="text-xl font-semibold mb-4">Similar Products</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {similar?.length ? (
            similar.map((item) => (
              <div
                key={item._id}
                onClick={() => router.push(`/products/${item._id}`)}
                className="border rounded-lg p-3 hover:shadow-lg cursor-pointer transition"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-48 w-full object-cover rounded-md"
                />
                <h3 className="font-semibold mt-2">{item.title}</h3>
                <p className="text-sm text-gray-500">₦{item.price}</p>
              </div>
            ))
          ) : (
            <p className="text-gray-500">OKW</p>
          )}
        </div>
      </div>
    </div>
  );
}
