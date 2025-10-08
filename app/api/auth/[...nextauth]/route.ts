// import NextAuth from "next-auth";
// import CredentialsProvider from "next-auth/providers/credentials";
// import dbConnect from "@/lib/dbconnect";
// import UserModel from "@/app/models/User";
// import bcrypt from "bcryptjs";

// export const authOptions = {
//   providers: [
//     CredentialsProvider({
//       name: "Credentials",
//       credentials: {
//         email: { label: "Email", type: "email" },
//         password: { label: "Password", type: "password" },
//       },
//       async authorize(credentials) {
//         await dbConnect();

//         const user = await UserModel.findOne({ email: credentials?.email });
//         if (!user) throw new Error("No user found");

//         const isValid = await bcrypt.compare(
//           credentials!.password,
//           user.password
//         );
//         if (!isValid) throw new Error("Invalid password");

//         return {
//           id: user._id.toString(),
//           email: user.email,
//           isAdmin: user.isAdmin, // ✅ make sure you included isAdmin in User schema
//         };
//       },
//     }),
//   ],
//   callbacks: {
//     async jwt({ token, user }) {
//       if (user) {
//         token.isAdmin = user.isAdmin;
//       }
//       return token;
//     },
//     async session({ session, token }) {
//       if (token) {
//         session.user.isAdmin = token.isAdmin;
//       }
//       return session;
//     },
//   },
//   pages: {
//     signIn: "/login", // optional custom login page
//   },
//   session: {
//     strategy: "jwt",
//   },
// };

// const handler = NextAuth(authOptions);

// export { handler as GET, handler as POST };
