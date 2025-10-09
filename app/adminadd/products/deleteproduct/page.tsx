// app/products/page.tsx
import ProductModel from "@/app/models/Product";
import ProductList from "@/components/ProductList";
import { getCurrentUser } from "@/lib/auth";
import dbConnect from "@/lib/dbconnect";
import { redirect } from "next/navigation";

export const dynamic = "force-dynamic";

export default async function Page() {
  await dbConnect();
  const user = await getCurrentUser();
  if (!user || !user.isAdmin) {
    console.log("no user found");
    redirect("/login");
  }
  const products = await ProductModel.find().lean();
  // const plainuser = products.toObject()

  return <ProductList products={JSON.parse(JSON.stringify(products))} />;
}
