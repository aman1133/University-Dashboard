"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import axios from "axios";
import toast from "react-hot-toast";
import { EyeIcon, EyeSlashIcon, UserIcon } from "@heroicons/react/24/solid";

const SignUp: React.FC = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [buttonDisabled, setButtonDisabled] = useState(true);

  const [user, setUser] = useState({
    email: "",
    password: "",
    username: "",
    role: "student", // Default role
  });

  useEffect(() => {
    setButtonDisabled(
      !(user.email && user.password && user.username && user.role)
    );
  }, [user]);

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const onSignup = async () => {
    try {
      setLoading(true);
      const response = await axios.post("/api/users/signup", user);
      console.log("Signup success", response.data);
      router.push("/login");
    } catch (error: any) {
      console.log("Signup failed", error.message);
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="flex flex-col w-full max-w-md shadow-lg rounded-lg overflow-hidden bg-white p-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
          {loading ? "Processing..." : "Sign Up"}
        </h2>

        <form className="space-y-6">
          {/* Username Input */}
          <div className="relative">
            <label
              htmlFor="username"
              className="block text-sm font-medium text-gray-700"
            >
              Username
            </label>
            <div className="flex items-center border rounded-lg mt-1 px-3 py-2">
              <input
                type="text"
                id="username"
                className="w-full focus:outline-none text-gray-800"
                placeholder="Enter your username"
                value={user.username}
                onChange={(e) => setUser({ ...user, username: e.target.value })}
              />
              <UserIcon className="w-5 h-5 text-gray-400 mr-2" />
            </div>
          </div>

          {/* Email Input */}
          <div className="relative">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <div className="flex items-center border rounded-lg mt-1 px-3 py-2">
              <input
                type="text"
                id="email"
                className="w-full focus:outline-none text-gray-800"
                placeholder="Enter your email"
                value={user.email}
                onChange={(e) => setUser({ ...user, email: e.target.value })}
              />
              <UserIcon className="w-5 h-5 text-gray-400 mr-2" />
            </div>
          </div>

          {/* Password Input */}
          <div className="relative">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <div className="flex items-center border rounded-lg mt-1 px-3 py-2">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                className="w-full focus:outline-none text-gray-800"
                placeholder="Enter your password"
                value={user.password}
                onChange={(e) => setUser({ ...user, password: e.target.value })}
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="focus:outline-none"
              >
                {showPassword ? (
                  <EyeSlashIcon className="w-5 h-5 text-gray-400 ml-2" />
                ) : (
                  <EyeIcon className="w-5 h-5 text-gray-400 ml-2" />
                )}
              </button>
            </div>
          </div>

          {/* Role Selector */}
          <div className="relative">
            <label
              htmlFor="role"
              className="block text-sm font-medium text-gray-700"
            >
              Role
            </label>
            <select
              id="role"
              className="w-full border rounded-lg mt-1 px-3 py-2 focus:outline-none text-gray-800"
              value={user.role}
              onChange={(e) => setUser({ ...user, role: e.target.value })}
            >
              <option value="student">Student</option>
              <option value="admin">Admin</option>
            </select>
          </div>

          {/* Sign Up Button */}
          <button
            type="button"
            onClick={onSignup}
            className="w-full bg-black text-white font-semibold py-2 rounded-lg hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black disabled:bg-gray-700"
            disabled={buttonDisabled || loading}
          >
            {loading ? "Processing..." : "Sign Up"}
          </button>

          <p className="text-sm text-gray-600 text-center mt-4">
            Already have an account?{" "}
            <Link href="/login" className="text-indigo-500 hover:underline">
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
