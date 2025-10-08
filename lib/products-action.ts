"use server"
import ProductModel from "@/app/models/Product"
import dbConnect from "./dbconnect"
// import ProductModel from "../models/Product"

export const addProduct = async (productData: {
  title: string
  description: string
  price: number
  category: string
  image?: string
  size?: string
}) => {
  try {
    await dbConnect()
    const product = await ProductModel.create(productData)
       const plainProduct = JSON.parse(JSON.stringify(product))

    return { success: true, product: plainProduct }
  } catch (error) {
    console.error(error)
    return { success: false, error }
  }
}

export const updateProduct = async(id: string, data: any)=>{
  try {
    await dbConnect();
    await ProductModel.findByIdAndUpdate(id, data, { new: true });
    return { success: true };
  } catch (err) {
    console.error(err);
    return { success: false };
  }
}

export async function deleteProduct(productId: string) {
  await dbConnect()
  await ProductModel.findByIdAndDelete(productId)
  return { success: true }
}

