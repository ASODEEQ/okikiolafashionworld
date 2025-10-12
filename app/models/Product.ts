import { Schema, model, models, Document, Model, Types } from "mongoose";

export interface IProduct extends Document {
  title: string;
  description: string;
  price: number;
  category: string;
  image: string;
  size: string;
  user: Types.ObjectId;
  quantity: number; // 🆕 added
  status: "active" | "inactive"; // 🆕 added
}

const ProductSchema = new Schema<IProduct>(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    price: {
      type: Number,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    size: {
      type: String,
      required: true,
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    quantity: {
      type: Number,
      required: true,
      default: 0,
      min: [0, "Quantity cannot be negative"],
    },
    status: {
      type: String,
      enum: ["active", "inactive"],
      default: "active",
    },
  },
  { timestamps: true }
);

const ProductModel: Model<IProduct> =
  models.Product || model<IProduct>("Product", ProductSchema);

export default ProductModel;
