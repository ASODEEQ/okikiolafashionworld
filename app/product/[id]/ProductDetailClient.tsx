"use client";

import React from "react";

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
  similar: Product[]; // ✅ added
  user: any;
}

export default function ProductClientPage({ product, similar }: ProductClientPageProps) {
  return (
    <div className="p-6">
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <img src={product.image} alt={product.title} className="rounded-lg shadow-md" />
        </div>

        <div>
          <h1 className="text-2xl font-bold">{product.title}</h1>
          <p className="text-gray-700 my-3">{product.description}</p>
          <p className="text-pink-600 font-semibold text-xl">₦{product.price}</p>
          <p className="mt-2 text-sm text-gray-500">Size: {product.size}</p>
          <p className="mt-1 text-sm text-gray-500">Quantity left: {product.quantity}</p>
        </div>
      </div>

      <div className="mt-10">
        <h2 className="text-xl font-semibold mb-4">Similar Products</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {similar?.length ? (
            similar.map((item) => (
              <div key={item._id} className="border rounded-lg p-3 hover:shadow-md transition">
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
            <p className="text-gray-500">No similar products available</p>
          )}
        </div>
      </div>
    </div>
  );
}
