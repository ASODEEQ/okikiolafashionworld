// app/admin/products/[id]/edit/EditProductForm.tsx
"use client";

import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";
import { updateProduct } from "@/lib/products-action";

interface IProduct {
  _id: string;
  title: string;
  description: string;
  price: number;
  category: string;
  image: string;
  size: string;
}

const EditProductForm = ({ product }: { product: IProduct }) => {
  const router = useRouter();
  const [form, setForm] = useState<IProduct>(product);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const res = await updateProduct(form._id, form);
    if (res.success) {
      alert("✅ Product updated!");
      router.push("/productspage");
    } else {
      alert("❌ Error updating product");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="p-6 max-w-lg mx-auto space-y-4 bg-white shadow-lg rounded-lg"
    >
      <h1 className="text-xl font-bold text-pink-600">
        Edit Product – OkikiolaFashionWorld
      </h1>

      <input
        name="title"
        value={form.title}
        onChange={handleChange}
        placeholder="Product Title"
        className="w-full border p-2 rounded"
      />
      <textarea
        name="description"
        value={form.description}
        onChange={handleChange}
        placeholder="Product Description"
        className="w-full border p-2 rounded"
      />
      <input
        type="number"
        name="price"
        value={form.price}
        onChange={handleChange}
        placeholder="Price (₦)"
        className="w-full border p-2 rounded"
      />
      <input
        name="category"
        value={form.category}
        onChange={handleChange}
        placeholder="Category"
        className="w-full border p-2 rounded"
      />
      <input
        name="image"
        value={form.image}
        onChange={handleChange}
        placeholder="Image URL"
        className="w-full border p-2 rounded"
      />
      {form.image && (
        <img
          src={form.image}
          alt="Preview"
          className="h-40 w-40 object-cover rounded-lg shadow"
        />
      )}
      <input
        name="size"
        value={form.size}
        onChange={handleChange}
        placeholder="Size(s)"
        className="w-full border p-2 rounded"
      />

      <button
        type="submit"
        className="bg-pink-600 text-white px-4 py-2 rounded w-full"
      >
        Save Changes
      </button>
    </form>
  );
};

export default EditProductForm;
