import { Product } from "./types"

export const getProducts: () => Promise<Product[]> = async () => {
	const productsResponse = await fetch("https://fakestoreapi.com/products")
	return productsResponse.json()
}