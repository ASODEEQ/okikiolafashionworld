import React from "react";
import dbConnect from "../../lib/dbconnect";
import ProductModel from "../models/Product";

const Page = async () => {
  await dbConnect();
  const products = await ProductModel.find({});
  console.log(products);

  //     const productFormat:{
  //         id: number,
  //         title: string,
  //         description: string,
  //         price: number,
  //     }[] = await products.json()
  // console.log(productFormat);

  return (
    <div>
      {products.map((product) => (
        <div key={product._id as string}>
          <h1>{product.title}</h1>
          <p>{product.description}</p>
          <code>{product.price}</code>
        </div>
      ))}
    </div>
  );
};

export default Page;
