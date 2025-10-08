import dbConnect from "@/lib/dbconnect";
import ProductModel from "@/app/models/Product";
import { NextResponse } from "next/server";

export async function GET(req: Request, { params }: { params: { id: string } }) {
  await dbConnect();
  const product = await ProductModel.findById(params.id).lean();
  return NextResponse.json(product);
}
