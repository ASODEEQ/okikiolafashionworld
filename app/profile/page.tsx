import Image from "next/image";
import Link from "next/link"; 
import { getUserWithId, logout, verifyUser } from "@/lib/user-action";
import { redirect } from "next/navigation";

const Page = async () => {
  const auth = await verifyUser();
  if (!auth.success) redirect("/login");

  const user = await getUserWithId(auth.id as string);
  if (!user) redirect("/login");

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-50 via-white to-purple-100">
      <div className="bg-white shadow-2xl rounded-3xl p-8 w-full max-w-md text-center border border-pink-100">
        {/* Profile Image */}
        <div className="flex flex-col items-center mb-6">
          <h2 className="text-2xl font-bold text-pink-700 mt-4">
            {user.firstName} {user.lastName}
          </h2>
          <p className="text-gray-500 text-sm">Okikiola Fashion World Member</p>
        </div>

        {/* User Info */}
        <div className="space-y-4 text-left px-4">
          <div className="flex justify-between border-b pb-2">
            <span className="text-gray-600 font-medium">Email:</span>
            <span className="text-gray-800">{user.email}</span>
          </div>

          <div className="flex justify-between border-b pb-2">
            <span className="text-gray-600 font-medium">Phone:</span>
            <span className="text-gray-800">{user.phoneNumber || "N/A"}</span>
          </div>

          <div className="flex justify-between border-b pb-2">
            <span className="text-gray-600 font-medium">Member No:</span>
            <span className="text-gray-800">{user.accountNumber}</span>
          </div>
        </div>

        {/* Conditional Button */}
        <Link
          href={user.isAdmin ? "/adminadd" : "/productspage"}
          className="block w-full mt-6 bg-pink-500 hover:bg-pink-600 text-white font-semibold py-3 rounded-xl transition-transform duration-200 hover:scale-105 shadow-md"
        >
          {user.isAdmin ? "➕ Go to Add Product" : "🛍️ Go to Products"}
        </Link>

        {/* Logout Button */}
        <form action={logout} className="mt-4">
          <button
            type="submit"
            className="w-full bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-3 rounded-xl transition-transform duration-200 hover:scale-105 shadow-md"
          >
            Logout
          </button>
        </form>

        {/* Footer */}
        <p className="text-xs text-gray-400 mt-6">
          © {new Date().getFullYear()} OkikiolaFashionWorld
        </p>
      </div>
    </div>
  );
};

export default Page;
