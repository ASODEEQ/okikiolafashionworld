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
    <div className="grid grid-cols-1 md:grid-cols-2 h-screen">
      {/* Left Side: Fashion Banner */}
      <div className="hidden md:flex items-center justify-center bg-gradient-to-br from-pink-100 to-purple-200">
        {/* <img
          src="https://images.unsplash.com/photo-1520975922071-ae6f9e6ef6f0?auto=format&fit=crop&w=600&q=80"
          alt="Fashion Banner"
          className="w-full h-full object-cover"
        /> */}
      </div>

      {/* Right Side: Register Form */}
      <div className="flex items-center justify-center p-6 bg-gradient-to-br from-white via-pink-50 to-purple-50">
        <form
          onSubmit={registerUserHandler}
          className="w-full max-w-md bg-white shadow-xl rounded-2xl p-8"
        >
          {/* Branding */}
          <h1 className="text-3xl font-bold text-center text-pink-700 tracking-wide">
            OkikiolaFashionWorld
          </h1>
          <p className="text-sm text-gray-500 text-center mt-1">
            Create your account to explore latest trends
          </p>

          {/* Form Fields */}
          <div className="flex flex-col mt-8 gap-5">
            <input
              value={userForm.firstName}
              onChange={handleInputChange}
              name="firstName"
              required
              type="text"
              placeholder="First Name"
              className="rounded-lg border border-gray-300 outline-none px-4 text-sm h-12 focus:ring-2 focus:ring-pink-500 transition"
            />

            <input
              value={userForm.lastName}
              onChange={handleInputChange}
              name="lastName"
              required
              type="text"
              placeholder="Last Name"
              className="rounded-lg border border-gray-300 outline-none px-4 text-sm h-12 focus:ring-2 focus:ring-pink-500 transition"
            />

            <input
              value={userForm.email}
              onChange={handleInputChange}
              name="email"
              required
              type="email"
              placeholder="Email Address"
              className="rounded-lg border border-gray-300 outline-none px-4 text-sm h-12 focus:ring-2 focus:ring-pink-500 transition"
            />

            <input
              value={userForm.phoneNumber}
              onChange={handleInputChange}
              name="phoneNumber"
              type="text"
              placeholder="Phone Number"
              className="rounded-lg border border-gray-300 outline-none px-4 text-sm h-12 focus:ring-2 focus:ring-pink-500 transition"
            />

            <input
              value={userForm.password}
              onChange={handleInputChange}
              type="password"
              name="password"
              placeholder="Password"
              className="rounded-lg border border-gray-300 outline-none px-4 text-sm h-12 focus:ring-2 focus:ring-pink-500 transition"
            />

            <button className="h-12 rounded-lg bg-pink-600 hover:bg-pink-700 font-semibold text-white tracking-wide transition">
              Register
            </button>
          </div>

          {/* Login Redirect */}
          <p className="text-center text-sm text-gray-500 mt-6">
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
    </div>
  );
};

export default RegisterForm;
