"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!email || !password) {
      setErrorMessage("Email and Password are required.");
      return;
    }

    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password, rememberMe }),
      });

      if (res.ok) {
        router.push("/home");
      } else {
        setErrorMessage("Invalid email or password.");
      }
    } catch (error) {
      setErrorMessage("An error occurred. Please try again.");
      console.error(error);
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center p-6">
      <div className="bg-white p-8 rounded-xl shadow-2xl w-full max-w-md">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Welcome Back</h2>

        {errorMessage && <p className="text-red-500 text-center mb-4">{errorMessage}</p>}

        <form onSubmit={submitHandler} className="space-y-4">
          <div>
            <label className="block text-gray-700">Email Address</label>
            <input
              type="email"
              placeholder="Enter Email"
              className="w-full px-4 py-3 rounded-lg border focus:border-blue-500 focus:outline-none"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              placeholder="Enter Password"
              className="w-full px-4 py-3 rounded-lg border focus:border-blue-500 focus:outline-none"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="flex items-center justify-between">
            <label className="flex items-center text-gray-700">
              <input
                type="checkbox"
                className="mr-2"
                checked={rememberMe}
                onChange={() => setRememberMe(!rememberMe)}
              />
              Remember Me
            </label>
            <Link href="/" className="text-blue-500 text-sm hover:underline">
              Forgot Password?
            </Link>
          </div>

          {/* Fixed the button wrapping issue */}
          <Link href="/tasks">
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-lg px-4 py-3 transition duration-300"
          >
            Log In
          </button>
          </Link>
        </form>

        <div className="mt-6 text-center text-gray-500">OR</div>

        <div className="mt-4 flex flex-col gap-3">
          <button className="w-full flex items-center justify-center bg-gray-100 border py-2 rounded-lg hover:shadow-md transition duration-300">
            <img src="/google-icon.svg" alt="Google" className="w-5 h-5 mr-2" /> Login with Google
          </button>
          <button className="w-full flex items-center justify-center bg-gray-100 border py-2 rounded-lg hover:shadow-md transition duration-300">
            <img src="/github-icon.svg" alt="GitHub" className="w-5 h-5 mr-2" /> Login with GitHub
          </button>
        </div>

        <p className="text-center text-gray-700 mt-4">
          Don't have an account?{" "}
          <Link href="/signup" className="text-blue-500 hover:underline">
            Sign Up
          </Link>
        </p>
      </div>
    </section>
  );
}
