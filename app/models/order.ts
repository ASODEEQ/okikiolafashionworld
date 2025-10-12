import mongoose, { Schema, Document, models } from "mongoose";

export interface OrderItem {
  productId: string;
  quantity: number;
  price: number;
}

export interface IOrder extends Document {
  userId: string;
  items: OrderItem[];
  totalAmount: number;
  status: "pending" | "paid" | "delivered";
  createdAt: Date;
  updatedAt: Date;
}

const OrderItemSchema = new Schema<OrderItem>(
  {
    productId: { type: String, required: true },
    quantity: { type: Number, required: true },
    price: { type: Number, required: true },
  },
  { _id: false } // no separate _id for subdocuments
);

const OrderSchema = new Schema<IOrder>(
  {
    userId: { type: String, required: true },
    items: { type: [OrderItemSchema], required: true },
    totalAmount: { type: Number, required: true },
    status: {
      type: String,
      enum: ["pending", "paid", "delivered"],
      default: "pending",
    },
  },
  { timestamps: true }
);

const Order = models.Order || mongoose.model<IOrder>("Order", OrderSchema);

export default Order;
