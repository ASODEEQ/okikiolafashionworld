// app/admin/products/[id]/edit/page.tsx
import dbConnect from "@/lib/dbconnect";
import ProductModel from "@/app/models/Product";
import { redirect } from "next/navigation";
// import EditProductForm from "./EditProductForm";
import { getServerSession } from "next-auth"; // if you're using next-auth
// import { authOptions } from "@/lib/auth"; // your next-auth config
import EditProductForm from "@/components/editform";

export default async function EditProductPage({
  params,
}: {
  params: { id: string };
}) {
  await dbConnect();

  // ✅ Check user session
//   const session = await getServerSession(authOptions);
//   if (!session || !session.user?.isAdmin) {
//     redirect("/productspage"); // not admin -> go home
//   }

  // ✅ Fetch the product
  const product = await ProductModel.findById(params.id).lean();
  if (!product) {
    redirect("/adminadd/products"); // product not found
  }

  // Convert _id
  const safeProduct = {
    ...product,
    _id: product._id.toString(),
  };

  return <EditProductForm product={safeProduct} />;
}


