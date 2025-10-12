import { NextResponse } from "next/server";
import dbConnect from "@/lib/dbconnect";
import ProductModel from "@/app/models/Product";

export async function POST(req: Request) {
  try {
    await dbConnect();

    const { cart } = await req.json();

    if (!Array.isArray(cart) || cart.length === 0) {
      return NextResponse.json({ success: false, message: "Cart is empty" }, { status: 400 });
    }

    for (const item of cart) {
      const product = await ProductModel.findById(item._id);
      if (!product) continue;

      // Calculate new quantity
      const newQuantity = (product.quantity ?? 0) - item.quantity;

      if (newQuantity <= 0) {
        product.quantity = 0;
        product.status = "inactive"; // mark sold-out item as inactive
      } else {
        product.quantity = newQuantity;
      }

      await product.save();
    }

    return NextResponse.json({
      success: true,
      message: "Checkout processed, inventory updated",
    });
  } catch (error) {
    console.error("Checkout error:", error);
    return NextResponse.json(
      { success: false, message: "Error processing checkout" },
      { status: 500 }
    );
  }
}
