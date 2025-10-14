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
  const [loading, setLoading] = useState(false);

  const registerUserHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const res = await registerUser(userForm);
    setLoading(false);

    if (res.success) {
      alert(`✅ Welcome ${userForm.firstName}! Check your email to login.`);
      router.push("/login");
    } else {
      alert(`❌ Registration failed || "Try again"}`);
    }
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserForm((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-white via-pink-50 to-purple-50 p-4">
      <form
        onSubmit={registerUserHandler}
        className="w-full max-w-md bg-white shadow-xl rounded-2xl p-8"
      >
        <h1 className="text-3xl font-bold text-center text-pink-700 tracking-wide">
          OkikiolaFashionWorld
        </h1>
        <p className="text-sm text-black text-center mt-1">
          Create your account to explore latest trends
        </p>

        <div className="flex flex-col mt-8 gap-5">
          {["firstName","lastName","email","phoneNumber","password"].map((field) => (
            <div key={field} className="flex flex-col">
              <label className="text-black text-sm mb-1">{field === "firstName" ? "First Name" : field === "lastName" ? "Last Name" : field === "phoneNumber" ? "Phone Number" : field === "email" ? "Email Address" : "Password"}</label>
              <input
                value={userForm[field as keyof typeof userForm]}
                onChange={handleInputChange}
                name={field}
                required={field !== "phoneNumber"}
                type={field === "password" ? "password" : "text"}
                className="bg-white text-black rounded-lg border border-gray-300 outline-none px-4 text-sm h-12 focus:ring-2 focus:ring-pink-500 transition"
              />
            </div>
          ))}

          <button
            disabled={loading}
            className="h-12 rounded-lg bg-pink-600 hover:bg-pink-700 font-semibold text-white tracking-wide transition"
          >
            {loading ? "Registering..." : "Register"}
          </button>
        </div>

        <p className="text-center text-sm text-black mt-6">
          Already have an account?{" "}
          <a href="/login" className="text-pink-600 font-medium hover:underline">
            Login
          </a>
        </p>
      </form>
    </div>
  );
};

export default RegisterForm;
