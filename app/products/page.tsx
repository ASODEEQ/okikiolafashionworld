import dbConnect from "@/lib/dbconnect";
import ProductModel from "@/app/models/Product";

export const dynamic = "force-static";
export const GET = async () => {
  await dbConnect();
  const products = await ProductModel.find().lean();

  return Response.json({ products });
};

export const POST = async (request: Request, response: Response) => {
  try {
    await dbConnect();
    const body = await request.json();
    const { title, description, price, size, user } = body;
    const Products = await ProductModel.create({
      title,
      description,
      price,
      size,
      user,
    });
    return Response.json({ success: true, Products });
  } catch (error) {
    console.log(error);
    return Response.json({
      success: false,
      error: "failed to create product",
    });
  }
};

export const DELETE = async ({ id }: { id: string }) => {
  try {
    await dbConnect();
    await ProductModel.findByIdAndDelete(id);
  } catch (error) {}
};
