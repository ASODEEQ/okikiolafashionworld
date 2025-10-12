import dbConnect from "@/lib/dbconnect";
import ProductModel from "@/app/models/Product";
import ProductClientPage from "./ProductDetailClient";

export default async function ProductPage({ params }: { params: { id: string } }) {
    await dbConnect();
    
    const {id} = await params;
  const product = await ProductModel.findById(id).lean();

  if (!product) {
    return <div className="text-center mt-20 text-lg">❌ Product not found</div>;
  }

  // ✅ Fetch similar products (same category, excluding current one)
  const similar = await ProductModel.find({
    category: product.category,
    _id: { $ne: product._id },
    status: "active",
  })
    .limit(4)
    .lean();

  return (
    <ProductClientPage
      product={JSON.parse(JSON.stringify(product))}
      similar={JSON.parse(JSON.stringify(similar))}
      user={null}
    />
  );
}
