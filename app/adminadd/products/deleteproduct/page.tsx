// app/products/page.tsx
import ProductModel from "@/app/models/Product"
import ProductList from "@/components/ProductList"
import dbConnect from "@/lib/dbconnect"


export default async function Page() {
  await dbConnect()
  const products = await ProductModel.find().lean()

  return <ProductList products={products} />
}
