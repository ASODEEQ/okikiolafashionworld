import { getCurrentUser } from "@/lib/auth";
import { redirect } from "next/navigation";

export const dynamic = "force-dynamic";

export default async function UserDashboard() {
  const user = await getCurrentUser();

  if (!user) {
    console.log("no user found");
    redirect("/login");
  }

  return (
    <div className="min-h-screen bg-gradient-to-r from-pink-50 via-white to-pink-100 p-8">
      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow p-6 space-y-6">
        {/* Profile Header */}
        <div className="flex items-center gap-4">
          {/* <div className="relative w-16 h-16">
            <img
              src={user?.profileImage || "/default-avatar.png"}
              alt="Profile"
              sizes="64px"
              className="rounded-full border border-pink-300 object-cover"
            />
          </div> */}
          <div>
            <h2 className="text-xl font-bold text-pink-700">
              <p className="text-sm text-black">
                Welcome, dear customer [{user.firstName} {user.lastName}]
              </p>
            </h2>
            <p className="text-black">{user.email}</p>
          </div>
        </div>

        {/* Account Info */}
        <div className="bg-pink-50 border border-pink-200 rounded-xl p-4">
          <p className="text-sm text-black">Member Number</p>
          <p className="text-lg font-semibold text-black">
            {user.accountNumber}
          </p>
          {/* <p className="text-sm text-black mt-2">Account Balance</p> */}
          <p className="text-lg font-bold text-pink-700">
            {/* ₦{user.accountBalance?.toLocaleString()} */}
          </p>
        </div>

        {/* Navigation */}
        <div className="flex flex-wrap gap-4">
          <a
            href="/productspage"
            className="px-4 py-2 bg-pink-600 text-white rounded-lg shadow hover:bg-pink-700"
          >
            Browse Products
          </a>
          <a
            href="/checkout"
            className="px-4 py-2 bg-black text-white rounded-lg shadow hover:bg-pink-700"
          >
            View Cart
          </a>
          <a
            href="/profile"
            className="px-4 py-2 bg-black text-white rounded-lg shadow hover:bg-pink-700"
          >
            My Profile
          </a>
        </div>
      </div>
    </div>
  );
}
