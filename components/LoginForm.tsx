"use client";

import { useRouter } from "next/navigation";
import { ChangeEvent, FormEvent, useState } from "react";
import { loginAction } from "../lib/user-action";

const LoginForm = () => {
  const router = useRouter();
  const [userForm, setUserForm] = useState({
    email: "",
    password: "",
  });
  const registerUserHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const updateP = await loginAction(userForm);
    if (updateP.success) {
      if(updateP.isAdmin){
        router.push("/adminadd")
      }else{

        router.push("/userdashboard");
      }
    }
    else{
      alert(updateP.message || "❌ Login failed")
    }
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserForm((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-r from-pink-100 via-white to-pink-200">
      <form
        onSubmit={registerUserHandler}
        className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8 border border-pink-200"
      >
        {/* Brand Logo/Name */}
        <div className="text-center mb-6">
          <h1 className="text-2xl font-bold text-pink-600 tracking-wide">
            OkikiolaFashionWorld
          </h1>
          <p className="text-sm text-gray-500">
            Step into style – Sign in to your fashion hub
          </p>
        </div>

        {/* Input Fields */}
        <div className="flex flex-col gap-4">
          <input
            value={userForm.email}
            onChange={handleInputChange}
            name="email"
            required
            placeholder="Email"
            className="rounded-xl border border-gray-300 outline-none px-3 text-sm h-12 focus:border-pink-500 focus:ring-1 focus:ring-pink-400"
          />

          <input
            value={userForm.password}
            onChange={handleInputChange}
            type="password"
            name="password"
            placeholder="Password"
            required
            className="rounded-xl border border-gray-300 outline-none px-3 text-sm h-12 focus:border-pink-500 focus:ring-1 focus:ring-pink-400"
          />

          {/* Submit Button */}
          <button
            type="submit"
            className="h-12 rounded-xl bg-pink-600 hover:bg-pink-700 transition font-medium text-white shadow-md"
          >
            Sign In
          </button>
        </div>

        {/* Footer Links */}
        <div className="mt-6 text-center text-sm text-gray-500">
          <p>
            Don’t have an account?{" "}
            <a href="/register" className="text-pink-600 hover:underline">
              Register
            </a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
