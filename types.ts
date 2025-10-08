export type Product = {
	category: string
	price: number
	description: string
	image: string
	id: number
	size: number
	title: string
	rating: {
		count: number
		rate: number
	}
}
// export interface Product {
// 	category: string
// 	price: number
// 	description: string
// 	image: string
// 	id: number
// 	title: string
// 	rating: {
// 		count: number
// 		rate: number
// 	}
// }


type ProductV2 = Product & {
	discount: number,
	warranty: number
}
// interface ProductV2 extends Product {
// 	discount: number,
// 	warranty: number
// }

// type Status = "pending" | "failed" | "success";

// const currentStatus: Status = "success"


export interface UpdateProduct {
		id?: string,
		title?: string,
		description?: string,
		price?: number,
		category?: string,
		image?: string,
		size?: string,
}