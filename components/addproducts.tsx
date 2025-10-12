

"use client";
import { addProduct } from "@/lib/products-action";
import { useRouter } from "next/navigation";
import { useState, FormEvent, ChangeEvent } from "react";

const AddProductForm = () => {
  const router = useRouter();
  const [form, setForm] = useState({
    title: "",
    description: "",
    price: "",
    category: "",
    image: "",
    size: "",
    quantity: "",
    status: "active", 
  });

  const [preview, setPreview] = useState<string | null>(null);
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  // 📸 handle image file selection
  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
      setPreview(URL.createObjectURL(selectedFile));
    }
  };

  // ☁️ Upload to Cloudinary (signed)
  const uploadImage = async () => {
    if (!file) return "";
    setLoading(true);

    const signRes = await fetch("/api/cloudinary/sign", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ folder: "okikiolafashionworld" }),
    });

    const { signature, timestamp, apiKey, cloudName, folder } =
      await signRes.json();

    const formData = new FormData();
    formData.append("file", file);
    formData.append("api_key", apiKey);
    formData.append("timestamp", timestamp);
    formData.append("signature", signature);
    formData.append("folder", folder);

    const uploadRes = await fetch(
      `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
      { method: "POST", body: formData }
    );
    const data = await uploadRes.json();

    setLoading(false);
    return data.secure_url;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    let imageUrl = form.image;
    if (file) imageUrl = await uploadImage();

    const res = await addProduct({
      ...form,
      image: imageUrl,
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
        quantity: "",
        status: "active",
      });
      setPreview(null);
      setFile(null);
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
        <div className="text-center mb-6">
          <h1 className="text-2xl font-bold text-pink-600 tracking-wide">
            OkikiolaFashionWorld Admin
          </h1>
          <p className="text-sm text-black-500">
            Add new products to your catalog
          </p>
        </div>

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
            name="quantity"
            type="number"
            value={form.quantity}
            onChange={handleChange}
            placeholder="Quantity in stock"
            className="w-full rounded-lg border border-gray-300 px-4 h-12 text-sm focus:ring-2 focus:ring-pink-500 outline-none"
          />

          <input
            name="category"
            value={form.category}
            onChange={handleChange}
            placeholder="Category"
            className="w-full rounded-lg border border-gray-300 px-4 h-12 text-sm focus:ring-2 focus:ring-pink-500 outline-none"
          />

          {/* 🖼 Image File Upload */}
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="w-full border border-gray-300 rounded-lg p-2 text-sm focus:ring-2 focus:ring-pink-500 outline-none"
          />

          {preview && (
            <div className="mt-3 flex justify-center">
              <img
                src={preview}
                alt="Preview"
                className="h-40 w-40 object-cover rounded-lg shadow-md border"
              />
            </div>
          )}

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
            disabled={loading}
            className="flex-1 h-12 rounded-lg bg-pink-600 hover:bg-pink-700 font-semibold text-white tracking-wide transition"
          >
            {loading ? "Uploading..." : "➕ Add Product"}
          </button>
          <button
            type="button"
            onClick={() => router.push("/adminadd/products/deleteproduct")}
            className="flex-1 h-12 rounded-lg bg-gray-200 hover:bg-gray-300 font-semibold text-black-700 tracking-wide transition"
          >
            📦 Go to Products
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddProductForm;
