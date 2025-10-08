"use server"
// import jwt from "jsonwebtoken"
import UserModel from "../app/models/User";
import dbConnect from "./dbconnect";
import bcrypt from "bcryptjs";
import { cookies } from "next/headers";
import jwt from "jsonwebtoken"
import { jwtVerify, SignJWT } from "jose";

const encodedSecret = new TextEncoder().encode(process.env.JWT_SECRET!)

export const registerUser = async (user: { firstName: string, lastName:string, email: string, phoneNumber: string, password: string,  }) => {
	try {
		await dbConnect()
		const existingUser = await UserModel.findOne({email: user.email})
		if(existingUser){
			return{
				success: false,
				message: "user exists"
			}
		}
	const create =	await UserModel.create(user);
	console.log(create);

		return {
			success: true,
			message: "user registered successfully",
			user:{
        firstName: create.firstName,
        lastName: create.lastName,
        email: create.email,
        phoneNumber: create.phoneNumber,
        accountNumber: create.accountNumber,
        accountBalance: create.accountBalance,
        isAdmin: create.isAdmin,
			}
		}
	} catch (error) {
		console.log(error);
		return {
			success: false
		}
	}
}

// export const loginAction = async ({ email, password }: {  email: string, password: string, }) => {
// 	try {
// 		await dbConnect()

// 		const user = await UserModel.findOne({ email });
// 		if (!user) {
// 			return {
// 				success: false,
// 				message: "User not found"
// 			}
// 		}

// 		const hashedPassword = user.password;
// 		const validPassword = bcrypt.compare(password, hashedPassword);

// 		if (!validPassword) {
// 			return {
// 				success: false,
// 				message: "Invalid Details"
// 			}
// 		}

// 		// const token = jwt.sign({ id: String(user._id) }, process.env.JWT_SECRET!, { expiresIn: '2h' });

// 		const token = await new SignJWT({ id: String(user._id) })
// 			.setProtectedHeader({ alg: 'HS256' })
// 			.setExpirationTime("2h").setIssuedAt().sign(encodedSecret);

// 		const cookieStore = await cookies();

// 		cookieStore.set("token", token, {
// 			secure: process.env.NODE_ENV === "production"
// 		});

// 		 const plainUser = user.toObject()

// 		return {
// 			success: true,
// 			 isAdmin: user.isAdmin,  // ✅ return isAdmin flag
//       		accountNumber: plainUser.accountNumber,
//       		accountBalance: plainUser.accountBalance

// 		}
// 	} catch (error) {
// 		console.log(error);
// 		return {
// 			success: false
// 		}
// 	}
// }






export async function loginAction({ email, password }: { email: string; password: string }) {
  await dbConnect();

  const user = await UserModel.findOne({ email });
  if (!user) return { success: false, message: "User not found" };

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) return { success: false, message: "Invalid credentials" };

  // Create JWT payload
  const payload = {
    id: user._id,
    email: user.email,
    isAdmin: user.isAdmin,
  };

  // Sign JWT
  const token = jwt.sign(payload, process.env.JWT_SECRET!, { expiresIn: "7d" });

  // Store in HttpOnly cookie
  (await cookies()).set("auth_token", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    maxAge: 60 * 60 * 24 * 7, // 7 days
    path: "/",
  });

  return { success: true, isAdmin: user.isAdmin };
}


export const logout = async () => {
	const cookieStore = await cookies();
	cookieStore.delete("token");
}


export const verifyUser = async () => {
	const cookieStore = await cookies();
	const token = cookieStore.get("token")?.value;

	if (!token) {
		return { success: false }
	}

	// const payload = jwt.verify(token, process.env.JWT_SECRET!);
	const { payload } = await jwtVerify(token, encodedSecret, {
		algorithms: ['HS256']
	})

	return {
		id: payload.id,
		success: true
	}
}

export const getUserWithId = async (id: string) => {
	const user = await UserModel.findById(id).lean();

	return user;
}