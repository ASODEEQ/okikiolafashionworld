// app/admin/products/[id]/edit/page.tsx
import dbConnect from "@/lib/dbconnect";
import ProductModel from "@/app/models/Product";
import { redirect } from "next/navigation";
// import EditProductForm from "./EditProductForm";
// import { getServerSession } from "next-auth"; // if you're using next-auth
// import { authOptions } from "@/lib/auth"; // your next-auth config
import EditProductForm from "@/components/editform";
// import { verifyUser } from "@/lib/user-action";

export default async function EditProductPage({
  params,
}: {
  params: { id: string };
}) {
  await dbConnect();
  const product = await ProductModel.findById(params.id).lean();
  if (!product) {
    redirect("/adminadd/products"); 
  }

 
  const safeProduct = {
    ...product,
    _id: product._id.toString(),
  };

  return <EditProductForm product={safeProduct} />;
}


