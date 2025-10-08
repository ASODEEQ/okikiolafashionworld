"use server"
import ProductModel from "../app/models/Product";
import dbConnect from "./dbconnect";
import { revalidatePath } from "next/cache";
import { UpdateProduct } from "@/types";

// to be used on the client
export const updateClientProduct = async (product: UpdateProduct) => {
	// should be inside login action
	// const token = "mtoken";
	// const cookieStore = await cookies()
	// cookieStore.set("token", token);

	try {
		await dbConnect()
		await ProductModel.findByIdAndUpdate(product.id, {
			title: product.title,
			description: product.description,
			price: product.price,
			category: product.category,
			image: product.image,
			size: product.size,
		})

		revalidatePath("/my-products")
		revalidatePath(`/my-products/${product.id}`)
		return {
			success: true
		};
	} catch (error) {
		console.log(error)
		return {
			success: false
		};
	}
}

// lib/product-actions.ts



export async function deleteProduct(productId: string) {
  try {
    await dbConnect()
    await ProductModel.findByIdAndDelete(productId)
    return { success: true }
  } catch (error) {
    console.error(error)
    return { success: false, error: "Failed to delete product" }
  }
}



export const getProduct = async ({ id }: { id: string }) => {
	await dbConnect()
	// const product = await ProductModel.findById(id)
	const product = await ProductModel.findById(id).lean()

	return product;
	// return JSON.parse(JSON.stringify(product));
	// return {
	// 	price: product?.price,
	// 	description: product?.description,
	// 	title: product?.title,
	// }
}