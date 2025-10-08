import { Schema, model, models, Document, Model, Types } from "mongoose";

interface IProduct extends Document {
	title: string,
	description: string,
	price: number,
	category: string,
	image: string,
    size: string,
	user: Types.ObjectId

	
}

const ProductSchema = new Schema<IProduct>({
	title: {
		type: String,
		required: true
	},
	description: {
		type: String,
	},
	price: {
		type: Number,
		required: true
	},
	category:{
		type: String,
		required: true
	},
	image: {
		type: String,
		required: true
	},
    size: {
        type: String,
        required: true
    },
	user: {
		type: Schema.Types.ObjectId,
		// required: true,
		ref: "User"
	}
})

const ProductModel: Model<IProduct> = models.Product || model<IProduct>("Product", ProductSchema);

export default ProductModel