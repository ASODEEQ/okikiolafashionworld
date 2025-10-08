import { cookies } from "next/headers";
import dbConnect from "./dbconnect";
import UserModel from "@/app/models/User";
import { jwtVerify } from "jose";

export async function getCurrentUser() {
  try {
    const token = (await cookies()).get("token")?.value; // ✅ match the name used in signin
    if (!token) return null;

    const secret = new TextEncoder().encode(process.env.JWT_SECRET!);
    const { payload } = await jwtVerify(token, secret);

    await dbConnect();
    const user = await UserModel.findById(payload.id).lean();
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
    console.error("❌ getCurrentUser error:", err);
    return null;
  }
}
