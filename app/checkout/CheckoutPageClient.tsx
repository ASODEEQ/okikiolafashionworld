"use client";
import { useCart } from "@/context/cartcontext";
import Link from "next/link";
import { generateReceipt } from "@/lib/receipt";

export default function CheckoutPage() {
  const { cart, removeFromCart, clearCart, updateQuantity } = useCart();
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleIncrease = (id: string, availableQty: number, currentQty: number) => {
    if (currentQty < availableQty) {
      updateQuantity(id, currentQty + 1);
    }
  };

  const handleDecrease = (id: string, currentQty: number) => {
    if (currentQty > 1) {
      updateQuantity(id, currentQty - 1);
    }
  };

  const handleConfirmPurchase = async () => {
    if (cart.length === 0) return;

    const order = {
      orderId: `OKW-${Date.now()}`,
      cart,
      total,
    };

    localStorage.setItem("lastOrder", JSON.stringify(order));

    try {
      await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ cart }),
      });

      const pdfBytes = await generateReceipt(order);
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
            className="flex justify-between items-center border-b pb-3"
          >
            <div className="flex items-center gap-3">
              <img
                src={item.image}
                alt={item.title}
                className="w-16 h-16 object-cover rounded-md"
              />
              <div>
                <h2 className="font-semibold">{item.title}</h2>
                <p className="text-sm text-gray-600">
                  ₦{item.price.toLocaleString()}
                </p>
                <p className="text-xs text-gray-500">
                  Available: {item.quantity}
                </p>
              </div>
            </div>

            <div className="flex flex-col items-end gap-1">
              <div className="flex items-center border rounded-lg bg-white">
                <button
                  onClick={() => handleDecrease(item._id, item.quantity)}
                  disabled={item.quantity <= 1}
                  className="px-3 py-1 disabled:opacity-50"
                >
                  –
                </button>
                <span className="px-4 font-semibold">{item.quantity}</span>
                <button
                  onClick={() => handleIncrease(item._id, item.quantity, item.quantity)}
                  className="px-3 py-1 disabled:opacity-50"
                >
                  +
                </button>
              </div>

              <span className="text-gray-700 font-medium">
                ₦{(item.price * item.quantity).toLocaleString()}
              </span>

              <button
                onClick={() => removeFromCart(item._id)}
                className="text-red-500 text-xs mt-1"
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
