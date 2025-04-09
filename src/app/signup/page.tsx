/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import Link from "next/link";
import React, { useState } from "react";

export default function page() {
  const DATA_SOURCE_URL: string = process.env.DATA_SOURCE_URL as string;
  const API_KEY: string = process.env.DATA_API_KEY as string;

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');

  const submitHandler = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || !email || !password || !passwordConfirm) {
      console.log("Missing required data");
      return;
    }

    try {
      const res = await fetch(DATA_SOURCE_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'API-Key': API_KEY,
        },
        body: JSON.stringify({
          name,
          email,
          password,
          passwordConfirm,
        }),
      });

      const data = await res.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="bg-gray-200 min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="bg-gray-100 flex flex-col md:flex-row rounded-2xl shadow-lg max-w-4xl w-full overflow-hidden">
        
        {/* Form Section */}
        <div className="w-full md:w-1/2 p-6 sm:p-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#002D74]">Sign Up</h2>
          <p className="text-sm mt-2 text-[#002D74]">Welcome to our platform</p>

          <form className="mt-6 space-y-4" onSubmit={submitHandler}>
            <div>
              <label className="block text-gray-700">Username</label>
              <input
                type="text"
                placeholder="Enter Username"
                className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-1 border focus:border-blue-500 focus:bg-white focus:outline-none text-black"
                value={name}
                onChange={(e) => setName(e.target.value)}
                autoFocus
                required
              />
            </div>

            <div>
              <label className="block text-gray-700">Email Address</label>
              <input
                type="email"
                placeholder="Enter Email Address"
                className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-1 border focus:border-blue-500 focus:bg-white focus:outline-none text-black"
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
                className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-1 border focus:border-blue-500 focus:bg-white focus:outline-none text-black"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <div>
              <label className="block text-gray-700">Confirm Your Password</label>
              <input
                type="password"
                placeholder="Confirm Password"
                className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-1 border focus:border-blue-500 focus:bg-white focus:outline-none text-black"
                value={passwordConfirm}
                onChange={(e) => setPasswordConfirm(e.target.value)}
                required
              />
            </div>

            <Link href="/tasks">
              <button
                type="submit"
                className="w-full bg-blue-500 hover:bg-blue-400 text-white font-semibold rounded-lg px-4 py-3 mt-4 transition duration-300"
              >
                Sign Up
              </button>
            </Link>
          </form>

          <div className="mt-6 text-sm text-center text-black">
            <p>If you already have an account</p>
            <Link
              href="/login"
              className="inline-block mt-2 px-6 py-2 bg-white border border-blue-400 rounded-xl hover:scale-105 transition duration-300"
            >
              Login
            </Link>
          </div>
        </div>

        {/* Image Section */}
        <div className="hidden md:block md:w-1/2">
          <img
            src="/logo.jpg"
            alt="Sign Up Visual"
            className="h-full w-full object-cover rounded-r-2xl"
          />
        </div>
      </div>
    </section>
  );
}
