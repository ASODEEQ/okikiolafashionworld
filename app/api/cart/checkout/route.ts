import Order from "@/app/models/order";
import dbConnect from "@/lib/dbconnect";
// import Order from "@/models/Order";

export async function POST(req: Request) {
  await dbConnect();
  const { userId } = await req.json();

  const order = await Order.findOne({ userId, status: "pending" });
  if (!order) {
    return Response.json({ success: false, message: "No pending order found" });
  }

  order.status = "paid";
  await order.save();

  return Response.json({ success: true, order });
}
