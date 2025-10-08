import { Product } from "@/types"
import Image from "next/image"
import Link from "next/link"
import React from "react"

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <Link
      href={`products/${product.id}`}
      className="shadow flex flex-col gap-2 rounded p-3 min-w-80 flex-1 group overflow-hidden"
    >
      <img
        // height={400}
        // width={400}
        className="h-40 object-contain group-hover:scale-110 transition"
        src={product.image}
        alt={product.title}
      />
      <h3 className="font-medium text-lg truncate group-hover:text-blue-800">
        {product.title}
      </h3>
      <p className="font-semibold">${product.price}</p>
        <p className="font-semibold">${product.size}</p>
      <p className="line-clamp-2">{product.description}</p>
    </Link>
  )
}

export default ProductCard
