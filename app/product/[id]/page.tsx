import dbConnect from "@/lib/dbconnect";
import ProductModel from "@/app/models/Product";
import { notFound } from "next/navigation";
import { getCurrentUser } from "@/lib/auth";
import ProductDetailClient from "./ProductDetailClient";

export default async function ProductDetailPage({
  params,
}: {
  params: { id: string };
}) {
  await dbConnect();
  const product = await ProductModel.findById(params.id).lean();

  if (!product) notFound();

  const safeProduct = {
    ...product,
    _id: product._id.toString(),
  };

  const user = await getCurrentUser();

  return (
    <ProductDetailClient product={safeProduct} user={user} />
  );
}
