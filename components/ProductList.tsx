// app/products/ProductList.tsx
"use client"

import { deleteProduct } from "@/lib/products-action"

import Link from "next/link"

export default function ProductList({ products }: { products: any[] }) {
  const handleDelete = async (id: string) => {
    const res = await deleteProduct(id)
    if (res.success) {
      alert("✅ Deleted")
      window.location.reload()
    }
  }

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-pink-600 mb-6 text-center">
        OkikiolaFashionWorld – Product Collection
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product._id}
            className="bg-white shadow-md rounded-2xl overflow-hidden border border-pink-100 hover:shadow-lg transition"
          >
            {/* Product Image */}
            {product.image && (
              <img
                src={product.image}
                alt={product.title}
                // width={400}
                // height={400}
                className="h-40 w-full object-cover"
              />
            )}

            <div className="p-4 flex flex-col gap-3">
              <h3 className="text-lg font-semibold text-gray-800">
                {product.title}
              </h3>
              <p className="text-sm text-gray-500 line-clamp-2">
                {product.description}
              </p>

              {/* Action Buttons */}
              <div className="flex justify-between items-center mt-3">
                <button
                  onClick={() => handleDelete(product._id)}
                  className="bg-red-500 hover:bg-red-600 text-white text-sm px-3 py-1.5 rounded-lg shadow transition"
                >
                  Delete
                </button>

                <Link
                  href={`/adminadd/products/${product._id}/edit`}
                  className="bg-pink-600 hover:bg-pink-700 text-white text-sm px-3 py-1.5 rounded-lg shadow transition"
                >
                  Edit
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
