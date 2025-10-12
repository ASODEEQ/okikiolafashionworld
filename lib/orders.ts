import dbConnect from "@/lib/dbconnect";
import Order from "@/app/models/order";

export async function getUserOrders(userId: string) {
  try {
    await dbConnect(); // ✅ connects to MongoDB using your existing dbconnect.ts

    const orders = await Order.find({ userId })
      .sort({ createdAt: -1 })
      .lean();

    return JSON.parse(JSON.stringify(orders)); // ensures serializable data for Next.js
  } catch (error) {
    console.error("❌ Error fetching user orders:", error);
    return [];
  }
}
