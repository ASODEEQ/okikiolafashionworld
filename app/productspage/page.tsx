import dbConnect from "@/lib/dbconnect";
import ProductModel from "@/app/models/Product";
import ProductGrid from "./productgrid";

export default async function ProductPage() {
  await dbConnect();

  // ✅ Only fetch active products, so deleted/inactive ones don’t show
  const products = await ProductModel.find({ status: "active" }).lean();

  // ✅ Optional: fallback in case there’s no status field yet
  const validProducts = products.length ? products : await ProductModel.find().lean();

  return (
    <>
      {/* <h1 className="text-3xl font-bold text-center mt-6">Products Page</h1> */}
      <ProductGrid products={JSON.parse(JSON.stringify(validProducts))} />
    </>
  );
}
