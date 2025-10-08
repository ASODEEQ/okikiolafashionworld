import ProductModel from "@/app/models/Product"
import dbConnect from "@/lib/dbconnect"
import { Metadata } from "next"

export const dynamic = "force-dynamic"

export const metadata: Metadata = {
  title: "OkikiolaFashionWorld - Products",
  description: "Discover trendy fashion items at OkikiolaFashionWorld",
}

const Page = async () => {
  await dbConnect()
  const products = await ProductModel.find().lean()

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-center mb-8 text-pink-600">
        OkikiolaFashionWorld Collections
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <div
            key={String(product._id)}
            className="bg-white shadow-lg rounded-2xl overflow-hidden hover:shadow-2xl transition"
          >
            {/* Product Image */}
            <div className="h-60 w-full overflow-hidden flex items-center justify-center bg-gray-100">
              {product.image ? (
                <img
                  src={product.image}
                  alt={product.title}
                  className="object-cover h-full w-full"
                />
              ) : (
                <span className="text-gray-400">No Image</span>
              )}
            </div>

            {/* Product Details */}
            <div className="p-4 space-y-2">
              <h3 className="text-lg font-semibold text-gray-800">
                {product.title}
              </h3>
              <p className="text-sm text-gray-500 line-clamp-2">
                {product.description}
              </p>
              <div className="flex items-center justify-between mt-3">
                <span className="text-pink-600 font-bold">
                  ₦{product.price}
                </span>
                <span className="text-xs bg-pink-100 text-pink-600 px-2 py-1 rounded">
                  {product.size}
                </span>
              </div>
            </div>

            {/* Brand CTA */}
            <div className="p-4 border-t flex justify-center">
              <button className="bg-pink-600 hover:bg-pink-700 text-white px-4 py-2 rounded-full text-sm font-medium transition">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Page
