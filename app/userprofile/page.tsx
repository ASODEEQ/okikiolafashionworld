"use client";


import { IUser } from "@/types";
import { useEffect, useState } from "react";

// interface UserData {
//   name: string;
//   email: string;
//   phoneNumber?: string;
//   image?: string | null;
//   accountNumber: string;
//   accountBalance: number;
// }

export default function ProfilePage() {
  const [user, setUser] = useState<IUser | null>(null);
 
  useEffect(() => {
    async function fetchUser() {
      const res = await fetch("/profile");
      if (res.ok) {
        const data = await res.json();
        setUser(data);
      }
    }
    fetchUser();
  }, []);

  if (!user) return <p className="text-center text-gray-600"> no user</p>;

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-pink-100 p-8">
      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-xl p-8">
        <h1 className="text-3xl font-bold text-pink-600 mb-6">My Profile</h1>

        <div className="flex items-center space-x-6 mb-8">
          {/* <img
            src={user.image || "/default-avatar.png"}
            alt={user.name}
            className="w-24 h-24 rounded-full border-4 border-pink-300 object-cover"
          /> */}
          <div>
            <h2 className="text-2xl font-bold text-gray-800">{user.firstName} {user.lastName}</h2>
            <p className="text-gray-500">{user.email}</p>
            {user.phoneNumber && <p className="text-gray-500">{user.phoneNumber}</p>}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-pink-50 border border-pink-200 rounded-xl p-6">
            <p className="text-gray-500 text-sm">Member Number</p>
            <p className="text-xl font-semibold text-gray-800 mt-1">
              {user.accountNumber}
            </p>
          </div>
          <div className="bg-green-50 border border-green-200 rounded-xl p-6">
            {/* <p className="text-gray-500 text-sm">Account Balance</p> */}
            <p className="text-xl font-semibold text-gray-800 mt-1">
              {/* ₦{user.accountBalance.toLocaleString()} */}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
