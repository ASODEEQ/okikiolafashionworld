"use client"

import { getProduct, updateClientProduct } from "@/lib/client-actions"
import { UpdateProduct } from "@/types"
import { useParams, useRouter } from "next/navigation"
import { ChangeEvent, FormEvent, useEffect, useState } from "react"

const ProductForm = () => {
  // const [state, action, pending] = useActionState(updateClientProduct, {
  //   success: false,
  // })

  const router = useRouter()
  const { id } = useParams()
  const [productForm, setProductForm] = useState<UpdateProduct>({

    price: 0,
    description: "",
    title: "",
    id: "",
    category: "",
    image : "",
    size : "",

  })

  useEffect(() => {
    const fetchProduct = async () => {
      const product = await getProduct({ id: String(id) })
      setProductForm({
        price: product?.price,
        description: product?.description,
        title: product?.title,
        id: String(product?._id),
        category: product?.category,
        image: product?.image,
        size: product?.size,
      })
    }

    if (id) fetchProduct()
  }, [id])

  const handleProductUpdate = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const updateP = await updateClientProduct(productForm)
    if (updateP.success) {
      router.push("/productspage")
    }
  }

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setProductForm((previous) => ({
      ...previous,
      [name]: value,
    }))
  }

  return (
    <div className="flex items-center justify-between h-screen p-5 md:p-10">
      <form
        onSubmit={handleProductUpdate}
        className="max-w-xl w-full m-auto shadow rounded p-4"
      >
        <h3 className="font-semibold">Update Product</h3>
        <p className="text-sm">Enter new product details</p>

        <div className="flex flex-col mt-6 gap-4">
          <div className="flex gap-4 items-center">
            <input
              value={productForm.title}
              onChange={handleInputChange}
              name="title"
              required
              type="text"
              placeholder="Product Title"
              className="rounded border border-gray-300 outline-none px-2 text-sm h-10 focus:border-blue-800 flex-2"
            />
            <input
              value={productForm.price}
              onChange={handleInputChange}
              name="price"
              type="number"
              required
              placeholder="Product Price"
              className="rounded border border-gray-300 outline-none px-2 text-sm h-10 focus:border-blue-800 flex-1"
            />
          </div>

          <input
            value={productForm.description}
            onChange={handleInputChange}
            type="text"
            name="description"
            placeholder="Product Description"
            className="rounded border border-gray-300 outline-none px-2 text-sm h-10 focus:border-blue-800"
          />
          <input
            value={productForm.category}
            onChange={handleInputChange}
            type="text"
            name="category"
            placeholder="Product Category"
            className="rounded border border-gray-300 outline-none px-2 text-sm h-10 focus:border-blue-800"
          />

          <input
            value={productForm.size}
            onChange={handleInputChange}
            type="text"
            name="size"
            placeholder="Product Size"
            className="rounded border border-gray-300 outline-none px-2 text-sm h-10 focus:border-blue-800"
          />
          <input
            value={productForm.image}
            onChange={handleInputChange}
            type="text"
            name="image"
            placeholder="Product Image"
            className="rounded border border-gray-300 outline-none px-2 text-sm h-10 focus:border-blue-800"
          />

          <button className="h-12 rounded bg-blue-800 font-medium text-white">
            Save
          </button>
        </div>
      </form>
    </div>
  )
}

export default ProductForm
