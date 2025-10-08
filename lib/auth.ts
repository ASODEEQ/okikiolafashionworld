import { cookies } from "next/headers";
// import jwt from "jsonwebtoken";
import dbConnect from "./dbconnect";
import UserModel from "@/app/models/User";
import jwt from "jsonwebtoken"

export async function getCurrentUser() {
  const token = (await cookies()).get("auth_token")?.value;
  if (!token) return null;

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET!) as { id: string };
    await dbConnect();
    const user = await UserModel.findById(decoded.id).lean();
    if (!user) return null;

    return {
      id: user._id.toString(),
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      profileImage: user.profileImage || null,
      accountNumber: user.accountNumber,
      accountBalance: user.accountBalance,
      isAdmin: user.isAdmin,
    };
  } catch (err) {
    return null;
  }
}
