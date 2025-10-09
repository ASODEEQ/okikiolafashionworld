import { jwtVerify } from "jose";
import { MiddlewareConfig, NextRequest } from "next/server";
import { NextResponse } from "next/server";

export async function middleware (request: NextRequest) {
	const token = request.cookies.get('token')?.value;

	if (!token) {
		return NextResponse.redirect(new URL('/login', request.url))
	}

	// const payload = jwt.verify(token, process.env.JWT_SECRET!);

	const encodedSecret = new TextEncoder().encode(process.env.JWT_SECRET!)
	try {
		const { payload } = await jwtVerify(token, encodedSecret, {
			algorithms: ["HS256"]
		})


		if (!payload) {
			return NextResponse.redirect(new URL('/productspage', request.url))
		} else {
			return NextResponse.next();
		}
	} catch (error) {
		console.log(error);
		return NextResponse.redirect(new URL('/login', request.url))
	}

}


export const config: MiddlewareConfig = {
	matcher: ["/products/:path*", "/profile"]
}