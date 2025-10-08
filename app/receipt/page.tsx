"use client";
import { useEffect } from "react";
import { generateReceipt } from "@/lib/receipt";

export default function ReceiptPage() {
  useEffect(() => {
    const lastOrder = localStorage.getItem("lastOrder");
    if (!lastOrder) return;
    const order = JSON.parse(lastOrder);

    const createPdf = async () => {
      try {
        const pdfBytes = await generateReceipt(order);

        // ✅ Ensure standard ArrayBuffer
        const byteArray =
          pdfBytes instanceof Uint8Array ? pdfBytes : new Uint8Array(pdfBytes as ArrayBuffer);
        const normalArray = new Uint8Array(byteArray.length);
        normalArray.set(byteArray);

        // ✅ Create Blob safely
        const blob = new Blob([normalArray], { type: "application/pdf" });

        // ✅ Open PDF in new tab
        const url = URL.createObjectURL(blob);
        window.open(url, "_blank");
      } catch (err) {
        console.error("Error creating PDF:", err);
      }
    };

    createPdf();
  }, []);

  return (
    <div className="flex flex-col justify-center items-center h-screen text-center">
      <h1 className="text-2xl font-bold text-pink-600">
        Thank you for shopping with OKW 💖
      </h1>
      <p className="text-gray-600 mt-3">
        Your receipt is being generated — it will open in a new tab.
      </p>
    </div>
  );
}
