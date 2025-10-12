"use server";

import dbConnect from "@/lib/dbconnect";
import ProductModel from "@/app/models/Product";

interface CartItem {
  _id: string;
  quantity: number;
}

export async function checkout(cartItems: CartItem[]) {
  await dbConnect();

  for (const item of cartItems) {
    const product = await ProductModel.findById(item._id);
    if (!product) continue;

    // Reduce stock quantity
    const newQuantity = (product.quantity ?? 0) - item.quantity;

    if (newQuantity <= 0) {
      product.quantity = 0;
      product.status = "inactive"; // deactivate if out of stock
    } else {
      product.quantity = newQuantity;
    }

    await product.save();
  }

  return { success: true, message: "Checkout completed successfully" };
}
