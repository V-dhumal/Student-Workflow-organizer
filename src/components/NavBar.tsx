"use client";

import React, { useState } from 'react';
import Link from "next/link";
import { useRouter } from "next/navigation";
import HomeIcon from '@mui/icons-material/Home';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import TaskIcon from '@mui/icons-material/Assignment';


const NavBar = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const submitHandler = async (e) => {
    e.preventDefault();
    if (!email || !password) return console.log("Missing required data");

    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password, rememberMe }),
      });
      
      if (res.ok) {
        router.push("/home"); // Redirect to home page on success
      } else {
        console.log("Login failed");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
        <nav className="fixed top-0 z-50 w-full bg-gray-900 border-b border-gray-700 text-white">
            <div className="px-3 py-3 lg:px-5 lg:pl-3">
                <div className="flex items-center justify-between">
                    <div className="flex items-center justify-start">
                        <Link href="/home" className="flex ml-2 md:mr-24">
                            <img src="/logo.jpg" className="h-8 mr-3 rounded-sm" alt="workflow Logo" />
                            <span className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap">WorkFlow Organizer</span>
                        </Link>
                    </div>
                    <div className="flex items-center space-x-4">
                        <Link href="/login" className="px-4 py-2 text-sm font-medium bg-blue-500 rounded-md hover:bg-blue-600">Login</Link>
                        <Link href="/signup" className="px-4 py-2 text-sm font-medium bg-green-500 rounded-md hover:bg-green-600">Sign Up</Link>
                    </div>
                </div>
            </div>
        </nav>

        <aside id="logo-sidebar" className="fixed top-0 left-0 z-40 w-64 h-screen pt-20 bg-gray-800 border-r border-gray-700 text-white" aria-label="Sidebar">
            <div className="h-full px-3 pb-4 overflow-y-auto">
                <ul className="space-y-2 font-medium">
                    <li>
                        <Link href="/home" className="flex items-center p-2 hover:bg-gray-700 rounded-lg">
                            <HomeIcon className="w-5 h-5" />
                            <span className="ml-3">Dashboard</span>
                        </Link>
                    </li>
                    <li>
                        <Link href="/calendar" className="flex items-center p-2 hover:bg-gray-700 rounded-lg">
                            <CalendarMonthIcon className="w-5 h-5" />
                            <span className="ml-3">Calendar</span>
                        </Link>
                    </li>
                    <li>
                        <Link href="/tasks" className="flex items-center p-2 hover:bg-gray-700 rounded-lg">
                            <TaskIcon className="w-5 h-5" />
                            <span className="ml-3">Create Task</span>
                        </Link>
                    </li>
                    <li>
                        <Link href="./tasks/AddEvent" className="flex items-center p-2 hover:bg-gray-700 rounded-lg">
                            <TaskIcon className="w-5 h-5" />
                            <span className="ml-3">Digital Events</span>
                        </Link>
                    </li>
                </ul>
            </div>
        </aside>

        <div className="p-4 sm:ml-64 mt-16">
            <section className="bg-gradient-to-r from-purple-500 to-blue-500 text-white text-center p-10 rounded-lg shadow-md">
                <h1 className="text-4xl font-bold">Organize Your Student Life Effortlessly</h1>
                <p className="mt-3 text-lg">Manage tasks, deadlines, and collaboration all in one place.</p>
                <Link href="/tasks">
                    <button className="mt-5 bg-white text-blue-500 px-6 py-3 rounded-full font-semibold shadow-lg hover:bg-gray-100">
                        Get Started
                    </button>
                </Link>
            </section>
        </div>
    </>
  );
};

export default NavBar;
