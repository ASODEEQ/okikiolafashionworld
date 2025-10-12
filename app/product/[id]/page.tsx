
import ProductModel from "@/app/models/Product";
import ProductClientPage from "./ProductDetailClient";


export default async function ProductPage({ params }: { params: { id: string } }) {
  const product = await ProductModel.findById(params.id).lean();

  if (!product) {
    return <div className="text-center mt-20 text-lg">❌ Product not found</div>;
  }

  const similar = await ProductModel.find({
    category: product.category,
    _id: { $ne: product._id },
    status: "active",
  }).lean();

  return (
    <ProductClientPage
      product={JSON.parse(JSON.stringify(product))}
      similar={JSON.parse(JSON.stringify(similar))}
      user={null}
    />
  );
}
