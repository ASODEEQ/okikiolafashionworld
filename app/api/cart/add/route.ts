import Order from "@/app/models/order";
import dbConnect from "@/lib/dbconnect";

interface OrderItem {
  productId: string;
  quantity: number;
  price: number;
}

export async function POST(req: Request) {
  await dbConnect();
  const { userId, productId, quantity, price } = await req.json();

  let order = await Order.findOne({ userId, status: "pending" });

  if (!order) {
    order = new Order({
      userId,
      items: [{ productId, quantity, price }],
      totalAmount: quantity * price,
      status: "pending",
    });
  } else {
    // ✅ Explicitly type the element here
    const existingItem = order.items.find(
      (i: OrderItem) => i.productId === productId
    );

    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      order.items.push({ productId, quantity, price });
    }

    order.totalAmount += quantity * price;
  }

  await order.save();

  return Response.json({ success: true, order });
}
