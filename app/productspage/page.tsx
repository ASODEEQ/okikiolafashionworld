// app/products/page.tsx
import dbConnect from "@/lib/dbconnect";
import ProductModel from "@/app/models/Product";
import ProductGrid from "./productgrid";
// import ProductGrid from "./ProductGrid";
// import ProductGrid from "..productspage/ProductGrid";

// import ProductGrid from "./ProductGrid";
// import ProductGrid from "./ProductGrid"; // client component

export default async function Page() {
  await dbConnect();

  const products = await ProductModel.find({}).lean();

  const safeProducts = (products || []).map((p: any) => ({
    ...p,
    _id: p._id.toString(),
  }));

  return <ProductGrid products={safeProducts} />;
}
