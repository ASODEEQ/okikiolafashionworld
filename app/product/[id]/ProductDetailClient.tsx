"use client";
import { useCart } from "@/context/cartcontext";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ShoppingCart, ArrowLeft } from "lucide-react";

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

export default function ProductDetailClient({
  product,
  user,
}: {
  product: Product;
  user: any;
}) {
  const { addToCart } = useCart();
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-100">
      {/* Header */}
      <header className="backdrop-blur-md bg-white/30 border-b border-pink-200 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-4">
          <div className="flex items-center gap-4">
            <button
              onClick={() => router.back()}
              className="flex items-center gap-1 text-black hover:text-pink-600 transition"
            >
              <ArrowLeft size={20} /> Back
            </button>
          </div>
          <Link
            href="/checkout"
            className="relative text-black hover:text-pink-600 transition"
          >
            <ShoppingCart size={26} />
          </Link>
        </div>
      </header>

      {/* Product Section */}
      <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Image */}
        <div className="flex justify-center">
          <img
            src={product.image}
            alt={product.title}
            className="rounded-2xl shadow-lg w-full max-w-md h-auto object-cover"
          />
        </div>

        {/* Details */}
        <div className="flex flex-col justify-center space-y-4">
          <h1 className="text-3xl font-bold text-black">{product.title}</h1>
          <p className="text-lg text-gray-700">{product.description}</p>
          <div className="flex items-center gap-6 mt-4">
            <p className="text-pink-600 text-3xl font-semibold">
              ₦{product.price.toLocaleString()}
            </p>
            <p className="text-black text-md">Size: {product.size}</p>
          </div>

          <div className="flex gap-4 mt-6">
            <button
           onClick={() => addToCart({ ...product, quantity: product.quantity ?? 1 })}

              className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 rounded-lg shadow-md text-lg"
            >
              Add to Cart
            </button>
            <Link
              href="/checkout"
              className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg shadow-md text-lg"
            >
              Buy Now
            </Link>
          </div>

          <div className="mt-10 border-t border-pink-200 pt-4">
            <h3 className="text-lg font-semibold text-black">Category:</h3>
            <p className="text-gray-800 capitalize">{product.category}</p>
          </div>
        </div>
      </div>

      {/* Recommended Products Section */}
      <section className="bg-white/80 backdrop-blur-md py-10 mt-12">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl font-semibold text-black mb-6">
            You might also like
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden"
              >
                <img
                  src="https://via.placeholder.com/300"
                  alt="Recommended"
                  className="h-52 w-full object-cover"
                />
                <div className="p-4">
                  <p className="text-black font-medium">Sample Product {i}</p>
                  <p className="text-pink-600 font-bold mt-2">₦{(i * 15000).toLocaleString()}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

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
              <li><Link href="/" className="hover:underline">Home</Link></li>
              <li><Link href="/about" className="hover:underline">About Us</Link></li>
              <li><Link href="/contact" className="hover:underline">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
            <p className="text-sm">
              Email: support@okwfashionworld.com <br />
              Phone: +234 800 123 4567
            </p>
            <div className="flex space-x-4 mt-4">
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
