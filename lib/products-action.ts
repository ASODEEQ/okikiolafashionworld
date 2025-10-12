"use server";
import ProductModel from "@/app/models/Product";
import dbConnect from "./dbconnect";

export const addProduct = async (productData: {
  title: string;
  description: string;
  price: number;
  category: string;
  image?: string;
  size?: string;
  quantity?: string;
  status?: string;
}) => {
  try {
    await dbConnect();

    const product = await ProductModel.create(productData);
    const plainProduct = JSON.parse(JSON.stringify(product));

    return { success: true, product: plainProduct };
  } catch (error: any) {
    console.error("❌ Add Product Error:", error);
    // Convert to plain object
    return {
      success: false,
      error: error.message || "An unknown error occurred while adding the product.",
    };
  }
};

export const updateProduct = async (id: string, data: any) => {
  try {
    await dbConnect();
    await ProductModel.findByIdAndUpdate(id, data, { new: true });
    return { success: true };
  } catch (err: any) {
    console.error("❌ Update Product Error:", err);
    return { success: false, error: err.message || "Failed to update product." };
  }
};

export async function deleteProduct(productId: string) {
  try {
    await dbConnect();
    await ProductModel.findByIdAndDelete(productId);
    return { success: true };
  } catch (err: any) {
    console.error("❌ Delete Product Error:", err);
    return { success: false, error: err.message || "Failed to delete product." };
  }
}
