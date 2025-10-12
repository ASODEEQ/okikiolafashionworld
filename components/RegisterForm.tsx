"use client";
import { registerUser } from "@/lib/user-action";
import { useRouter } from "next/navigation";
import { ChangeEvent, FormEvent, useState } from "react";

const RegisterForm = () => {
  const router = useRouter();
  const [userForm, setUserForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    password: "",
  });

  const registerUserHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const updateP = await registerUser(userForm);
    if (updateP.success) {
      router.push("/login");
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
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-white via-pink-50 to-purple-50 p-4">
      <form
        onSubmit={registerUserHandler}
        className="w-full max-w-md bg-white shadow-xl rounded-2xl p-8"
      >
        {/* Branding */}
        <h1 className="text-3xl font-bold text-center text-pink-700 tracking-wide">
          OkikiolaFashionWorld
        </h1>
        <p className="text-sm text-black text-center mt-1">
          Create your account to explore latest trends
        </p>

        {/* Form Fields */}
        <div className="flex flex-col mt-8 gap-5">
          <div className="flex flex-col">
            <label className="text-black text-sm mb-1">First Name</label>
            <input
              value={userForm.firstName}
              onChange={handleInputChange}
              name="firstName"
              required
              type="text"
              className="rounded-lg border border-gray-300 outline-none px-4 text-sm h-12 focus:ring-2 focus:ring-pink-500 transition"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-black text-sm mb-1">Last Name</label>
            <input
              value={userForm.lastName}
              onChange={handleInputChange}
              name="lastName"
              required
              type="text"
              className="rounded-lg border border-gray-300 outline-none px-4 text-sm h-12 focus:ring-2 focus:ring-pink-500 transition"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-black text-sm mb-1">Email Address</label>
            <input
              value={userForm.email}
              onChange={handleInputChange}
              name="email"
              required
              type="email"
              className="rounded-lg border border-gray-300 outline-none px-4 text-sm h-12 focus:ring-2 focus:ring-pink-500 transition"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-black text-sm mb-1">Phone Number</label>
            <input
              value={userForm.phoneNumber}
              onChange={handleInputChange}
              name="phoneNumber"
              type="text"
              className="rounded-lg border border-gray-300 outline-none px-4 text-sm h-12 focus:ring-2 focus:ring-pink-500 transition"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-black text-sm mb-1">Password</label>
            <input
              value={userForm.password}
              onChange={handleInputChange}
              type="password"
              name="password"
              className="rounded-lg border border-gray-300 outline-none px-4 text-sm h-12 focus:ring-2 focus:ring-pink-500 transition"
            />
          </div>

          <button className="h-12 rounded-lg bg-pink-600 hover:bg-pink-700 font-semibold text-white tracking-wide transition">
            Register
          </button>
        </div>

        {/* Login Redirect */}
        <p className="text-center text-sm text-black mt-6">
          Already have an account?{" "}
          <a
            href="/login"
            className="text-pink-600 font-medium hover:underline"
          >
            Login
          </a>
        </p>
      </form>
    </div>
  );
};

export default RegisterForm;
