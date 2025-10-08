"use client";
import { addProduct } from "@/lib/products-action";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState, FormEvent } from "react";

const AddProductForm = () => {
  const router = useRouter();
  const [form, setForm] = useState({
    title: "",
    description: "",
    price: "",
    category: "",
    image: "",
    size: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const res = await addProduct({
      ...form,
      price: Number(form.price),
    });
    if (res.success) {
      alert("✅ Product added!");
      setForm({
        title: "",
        description: "",
        price: "",
        category: "",
        image: "",
        size: "",
      }); // reset
    } else {
      alert("❌ Error adding product");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-pink-100 via-white to-pink-200">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-lg bg-white shadow-2xl rounded-2xl p-8 border border-pink-200"
      >
        {/* Branding */}
        <div className="text-center mb-6">
          <h1 className="text-2xl font-bold text-pink-600 tracking-wide">
            OkikiolaFashionWorld Admin
          </h1>
          <p className="text-sm text-gray-500">
            Add new products to your catalog
          </p>
        </div>
         {/* {form.image && (<div className="flex mt-3 w-60 justify-center"><img src={form.image} alt="imagepreview" onError={(e)=>((e.target as HTMLImageElement).style.display="none")} /></div>)} */}

        {/* Form Fields */}
        <div className="space-y-4">
          <input
            name="title"
            value={form.title}
            onChange={handleChange}
            placeholder="Product Title"
            className="w-full rounded-lg border border-gray-300 px-4 h-12 text-sm focus:ring-2 focus:ring-pink-500 outline-none"
          />
          <textarea
            name="description"
            value={form.description}
            onChange={handleChange}
            placeholder="Product Description"
            className="w-full rounded-lg border border-gray-300 px-4 py-2 text-sm focus:ring-2 focus:ring-pink-500 outline-none"
          />
          <input
            name="price"
            type="number"
            value={form.price}
            onChange={handleChange}
            placeholder="Price (₦)"
            className="w-full rounded-lg border border-gray-300 px-4 h-12 text-sm focus:ring-2 focus:ring-pink-500 outline-none"
          />
          <input
            name="category"
            value={form.category}
            onChange={handleChange}
            placeholder="Category"
            className="w-full rounded-lg border border-gray-300 px-4 h-12 text-sm focus:ring-2 focus:ring-pink-500 outline-none"
          />
          <div>
            <input
              name="image"
              value={form.image}
              onChange={handleChange}
              placeholder="Image URL"
              className="w-full rounded-lg border border-gray-300 px-4 h-12 text-sm focus:ring-2 focus:ring-pink-500 outline-none"
            />
         
            {form.image && (
              <div className="mt-3 flex justify-center">
                <img
                  src={form.image}
                  // width={400}
                  // height={400}
                  alt="Preview"
                  className="h-40 w-40 object-cover rounded-lg shadow-md border"
                  onError={(e) =>
                    ((e.target as HTMLImageElement).style.display = "none")
                  }
                />
              </div>
            )}
          </div>
          <input
            name="size"
            value={form.size}
            onChange={handleChange}
            placeholder="Size (e.g. S, M, L, XL)"
            className="w-full rounded-lg border border-gray-300 px-4 h-12 text-sm focus:ring-2 focus:ring-pink-500 outline-none"
          />
        </div>

        {/* Buttons */}
        <div className="flex gap-3 mt-6">
          <button
            type="submit"
            className="flex-1 h-12 rounded-lg bg-pink-600 hover:bg-pink-700 font-semibold text-white tracking-wide transition"
          >
            ➕ Add Product
          </button>
          <button
            type="button"
            onClick={() => router.push("/adminadd/products/deleteproduct")}
            className="flex-1 h-12 rounded-lg bg-gray-200 hover:bg-gray-300 font-semibold text-gray-700 tracking-wide transition"
          >
            📦 Go to Products
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddProductForm;
