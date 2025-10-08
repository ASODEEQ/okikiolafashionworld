"use server"

import ProductModel from "../app/models/Product";
import dbConnect from "./dbconnect";
import { redirect } from "next/navigation";



// to be used on the server
export const updateProduct = async (formData: FormData) => {
	const title = formData.get("title")
	const description = formData.get("description")
	const id = formData.get("id");
	const image = formData.get("image")
	const category = formData.get("category")
	const size = formData.get("size")
	const price = formData.get("price")

	try {
		await dbConnect()
		await ProductModel.findByIdAndUpdate(id, {
			title,
			description,
			id,
			image,
			category,
			size,
			price,
		})
	} catch (error) {
		console.log(error)
	}
	redirect("/productspage")
}


