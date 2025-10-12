"use server"
// import jwt from "jsonwebtoken"
import UserModel from "../app/models/User";
import dbConnect from "./dbconnect";
import bcrypt from "bcryptjs";
import { cookies } from "next/headers";
import nodemailer from "nodemailer";

import { jwtVerify, SignJWT } from "jose";

const encodedSecret = new TextEncoder().encode(process.env.JWT_SECRET!)
// ✅ Nodemailer transporter setup
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

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

	// ✅ Send welcome email (non-blocking)
  try {
    await transporter.sendMail({
      from: `"OkikiolaFashionWorld" <${process.env.SMTP_USER}>`,
      to: user.email,
      subject: "Welcome to OkikiolaFashionWorld!",
      html: `
        <h2>Hello ${user.firstName},</h2>
        <p>Your account has been successfully created!</p>
        <p><a href="${process.env.NEXT_PUBLIC_BASE_URL}/login" style="color:#e11d48;">Click here to login</a></p>
        <p>Thank you for joining us!</p>
      `,
    });
  } catch(emailError) {
    console.error("Email sending failed:", emailError);
  }

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

export const loginAction = async ({ email, password }: {  email: string, password: string}) => {
	try {
		await dbConnect()
		const user = await UserModel.findOne({email});
		if (!user) {
			return {
				success: false,
				message: "User not found"
			}
		}

		const hashedPassword = user.password;
		const validPassword = bcrypt.compare(password, hashedPassword);

		if (!validPassword) {
			return {
				success: false,
				message: "Invalid Details"
			}
		}

		// const token = jwt.sign({ id: String(user._id) }, process.env.JWT_SECRET!, { expiresIn: '2h' });

		const token = await new SignJWT({ id: String(user._id) })
			.setProtectedHeader({ alg: 'HS256' })
			.setExpirationTime("2h").setIssuedAt().sign(encodedSecret);

		const cookieStore = await cookies();

		cookieStore.set("token", token, {
			secure: process.env.NODE_ENV === "production"
		});

		 const plainUser = user.toObject()

		  // ✅ Send login notification email
    try {
      await transporter.sendMail({
        from: `"OkikiolaFashionWorld" <${process.env.SMTP_USER}>`,
        to: user.email,
        subject: "New Login Alert",
        html: `
          <h3>Hello ${user.firstName},</h3>
          <p>You just logged in to your Okikiola Fashion World account.</p>
          <p>If this wasn't you, please secure your account immediately.</p>
          <p><a href="${process.env.NEXT_PUBLIC_BASE_URL}/login" style="color:#e11d48;">Click here to login again</a></p>
        `,
      });
    } catch (emailError) {
      console.error("Login email sending failed:", emailError);
    }

		return {
			success: true,
			 isAdmin: user.isAdmin,  // ✅ return isAdmin flag
      		accountNumber: plainUser.accountNumber,
      		accountBalance: plainUser.accountBalance

		}
	} catch (error) {
		console.log(error);
		return {
			success: false
		}
	}
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
	await dbConnect()
	const user = await UserModel.findById(id).lean();

	return user;
}