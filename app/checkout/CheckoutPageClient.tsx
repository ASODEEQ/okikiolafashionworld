"use client";
import { useCart } from "@/context/cartcontext";
import Link from "next/link";
import { generateReceipt } from "@/lib/receipt";

export default function CheckoutPage() {
  const { cart, removeFromCart, clearCart } = useCart();
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleConfirmPurchase = async () => {
    if (cart.length === 0) return;

    const order = {
      orderId: `OKW-${Date.now()}`,
      cart,
      total,
    };

    // Save order for receipt page
    localStorage.setItem("lastOrder", JSON.stringify(order));

    try {
      // 1️⃣ Update DB inventory
      await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ cart }),
      });

      // 2️⃣ Generate receipt
      const pdfBytes = await generateReceipt(order);
    //   const blob = new Blob([pdfBytes], { type: "application/pdf" });
    const blob = new Blob([new Uint8Array(pdfBytes)], { type: "application/pdf" });

      const url = URL.createObjectURL(blob);
      window.open(url, "_blank");
    } catch (err) {
      console.error("Error generating PDF:", err);
    }

    clearCart();
  };

  if (cart.length === 0)
    return (
      <div className="p-6 text-center">
        <p>Your cart is empty.</p>
        <Link href="/productspage" className="text-pink-600 underline">
          Go shopping
        </Link>
      </div>
    );

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Checkout</h1>
      <div className="space-y-4">
        {cart.map((item) => (
          <div
            key={item._id}
            className="flex justify-between items-center border-b pb-2"
          >
            <div className="flex items-center gap-3">
              <img src={item.image} alt={item.title} className="w-16 h-16 object-cover" />
              <div>
                <h2 className="font-semibold">{item.title}</h2>
                <p className="text-sm text-gray-500">
                  ₦{item.price.toLocaleString()} × {item.quantity}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-gray-700 font-medium">
                ₦{(item.price * item.quantity).toLocaleString()}
              </span>
              <button
                onClick={() => removeFromCart(item._id)}
                className="text-red-500 text-sm"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 text-right">
        <p className="text-lg font-bold">Total: ₦{total.toLocaleString()}</p>
        <button
          onClick={handleConfirmPurchase}
          className="mt-4 bg-pink-600 hover:bg-pink-700 text-white px-4 py-2 rounded"
        >
          Confirm Purchase
        </button>
        <Link href="/productspage" className="ml-3 text-pink-600 underline">
          Continue shopping
        </Link>
      </div>
    </div>
  );
}
