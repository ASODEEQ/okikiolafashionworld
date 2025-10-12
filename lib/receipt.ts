import { PDFDocument, rgb, StandardFonts, degrees } from "pdf-lib";

/* eslint-disable @typescript-eslint/no-explicit-any */
export async function generateReceipt(order: any) {
  const pdfDoc = await PDFDocument.create();
  const page = pdfDoc.addPage([600, 900]); // tall page
  const {  height } = page.getSize();

  const fontBold = await pdfDoc.embedFont(StandardFonts.HelveticaBold);
  const fontNormal = await pdfDoc.embedFont(StandardFonts.Helvetica);

  // --- Top Logo ---
  page.drawText("OKW", {
    x: 260,
    y: height - 60,
    size: 28,
    color: rgb(0.9, 0.1, 0.5),
    font: fontBold,
  });

  // --- Brand watermark lightly ---
  page.drawText("Okiki FashionWorld", {
    x: 50,
    y: height / 2,
    size: 60,
    font: fontBold,
    color: rgb(0.9, 0.1, 0.5),
    rotate: degrees(45), // ✅ correct rotation
    opacity: 0.05,       // light watermark
  });

  // --- Order Info ---
  page.drawText(`Order ID: ${order.orderId}`, {
    x: 50,
    y: height - 110,
    size: 12,
    font: fontNormal,
  });

  page.drawText(`Total Items: ${order.cart.length}`, {
    x: 50,
    y: height - 130,
    size: 12,
    font: fontNormal,
  });

  let y = height - 160;

  // --- Table header ---
  page.drawText("Item", { x: 100, y, size: 12, font: fontBold });
  page.drawText("Qty", { x: 400, y, size: 12, font: fontBold });
  page.drawText("Price", { x: 450, y, size: 12, font: fontBold });
  page.drawText("Subtotal", { x: 520, y, size: 12, font: fontBold });
  y -= 20;

  // --- Cart Items ---
  for (const item of order.cart) {
    // Draw image if available
    if (item.image) {
      try {
        const imgBytes = await fetch(item.image).then(res => res.arrayBuffer());
        const img = await pdfDoc.embedJpg(imgBytes); // or embedPng
        page.drawImage(img, {
          x: 50,
          y: y - 20,
          width: 40,
          height: 40,
        });
      } catch (err) {
        console.log("Failed to load image:", err);
      }
    }

    // Item Title
    page.drawText(item.title, {
      x: 100,
      y,
      size: 11,
      font: fontNormal,
    });

    // Quantity
    page.drawText(`${item.quantity}`, {
      x: 400,
      y,
      size: 11,
      font: fontNormal,
    });

    // Unit Price
    page.drawText(`NGN ${item.price.toLocaleString()}`, {
      x: 450,
      y,
      size: 11,
      font: fontNormal,
    });

    // Subtotal
    page.drawText(
      `# ${(item.price * item.quantity).toLocaleString()}`,
      {
        x: 520,
        y,
        size: 11,
        font: fontNormal,
      }
    );

    y -= 50; // space for next item
  }

  // --- Total ---
  page.drawText(`TOTAL: # ${order.total.toLocaleString()}`, {
    x: 50,
    y: y - 20,
    size: 16,
    font: fontBold,
    color: rgb(0.9, 0.1, 0.5),
  });

  const pdfBytes = await pdfDoc.save();
  return pdfBytes;
}
