import { NextResponse } from "next/server";
import crypto from "crypto";

export async function POST(request: Request) {
  try {
    const { folder } = await request.json();

    const timestamp = Math.round(new Date().getTime() / 1000);
    const cloudName = process.env.CLOUDINARY_CLOUD_NAME!;
    const apiKey = process.env.CLOUDINARY_API_KEY!;
    const apiSecret = process.env.CLOUDINARY_API_SECRET!;

    // Create signature string
    const signatureString = `folder=${folder}&timestamp=${timestamp}${apiSecret}`;
    const signature = crypto
      .createHash("sha1")
      .update(signatureString)
      .digest("hex");

    return NextResponse.json({
      timestamp,
      signature,
      apiKey,
      cloudName,
      folder,
    });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Signing failed" }, { status: 500 });
  }
}
