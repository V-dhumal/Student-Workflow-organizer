"use client";

import React, { useState } from "react";
import Link from "next/link";
import HomeIcon from "@mui/icons-material/Home";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import SchoolIcon from "@mui/icons-material/School";
import GroupIcon from "@mui/icons-material/Group";
import EventIcon from "@mui/icons-material/Event";
import OverviewIcon from "@mui/icons-material/Event";
import TaskIcon from "@mui/icons-material/Assignment";

const NavBar = () => {
  const [divHidden, setDivHidden] = useState(true);
  const [droplistMekhebi, setDroplistMekhebi] = useState(true);

  const changeCurrntAction = () => setDivHidden(!divHidden);
  const ShowDropList = () => setDroplistMekhebi(!droplistMekhebi);

  return (
    <>
      {/* Top Navbar */}
      <nav className="fixed top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
        <div className="flex items-center justify-between flex-wrap p-3 md:px-6">
          {/* Logo and Toggle */}
          <div className="flex items-center flex-shrink-0 text-white mr-6">
            <Link href="/home" className="flex items-center">
              <img src="/logo.jpg" className="h-8 w-8 rounded-sm mr-2" alt="logo" />
              <span className="text-lg md:text-xl font-semibold dark:text-white text-gray-800">WorkFlow Organizer</span>
            </Link>
          </div>

          {/* Action Buttons */}
          <div className="block md:hidden">
            <button
              onClick={changeCurrntAction}
              className="flex items-center px-3 py-2 border rounded text-gray-600 border-gray-400 hover:text-gray-800 hover:border-gray-600"
            >
              <svg className="fill-current h-4 w-4" viewBox="0 0 20 20">
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
              </svg>
            </button>
          </div>

          {/* Auth Buttons */}
          <div className="hidden md:flex space-x-4">
            <Link href="/login" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 text-sm">Login</Link>
            <Link href="/signup" className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 text-sm">Sign Up</Link>
          </div>

          {/* Profile Button */}
          <div className="hidden md:flex items-center ml-4">
            <button onClick={changeCurrntAction} className="rounded-full overflow-hidden w-8 h-8 focus:outline-none">
              <img src="/logo.jpg" alt="user" className="w-full h-full object-cover" />
            </button>
          </div>
        </div>
      </nav>

      {/* Dropdown Menu */}
      <div className={`${divHidden ? "hidden" : "block"} md:hidden absolute top-16 right-4 w-48 bg-white border rounded shadow-lg z-50`}>
        <ul>
          <li><Link href="/home" className="block px-4 py-2 hover:bg-gray-100">Dashboard</Link></li>
          <li><Link href="/events" className="block px-4 py-2 hover:bg-gray-100">Settings</Link></li>
          <li><Link href="/calendar" className="block px-4 py-2 hover:bg-gray-100">Calendar</Link></li>
          <li><Link href="#" className="block px-4 py-2 hover:bg-gray-100">Sign Out</Link></li>
        </ul>
      </div>

      {/* Sidebar */}
      <aside className="fixed top-16 left-0 z-40 w-64 h-full bg-white border-r shadow-md dark:bg-gray-800 transition-transform -translate-x-full sm:translate-x-0">
        <div className="px-4 py-6 space-y-2">
          <Link href="/home" className="flex items-center p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg">
            <HomeIcon className="text-gray-500 mr-3" />
            <span className="text-gray-800 dark:text-white">Dashboard</span>
          </Link>

          {/* Overview with dropdown */}
          <div>
            <button onClick={ShowDropList} className="w-full flex items-center p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
              <OverviewIcon className="text-gray-500 mr-3" />
              <span className="flex-1 text-left text-gray-800 dark:text-white">Overview</span>
              <svg className="w-3 h-3" fill="none" viewBox="0 0 10 6">
                <path stroke="currentColor" strokeWidth="2" d="M1 1l4 4 4-4" />
              </svg>
            </button>
            {!droplistMekhebi && (
              <div className="ml-8 mt-2 space-y-1">
                <Link href="/overview" className="flex items-center p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg">
                  <TaskIcon className="text-gray-500 mr-2" />
                  <span className="text-gray-800 dark:text-white">My Tasks</span>
                </Link>
                <Link href="/activity" className="flex items-center p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg">
                  <TaskIcon className="text-gray-500 mr-2" />
                  <span className="text-gray-800 dark:text-white">Activities</span>
                </Link>
              </div>
            )}
          </div>

          <Link href="/friend" className="flex items-center p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg">
            <GroupIcon className="text-gray-500 mr-3" />
            <span className="text-gray-800 dark:text-white">Friends</span>
          </Link>

          <Link href="/calendar" className="flex items-center p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg">
            <CalendarMonthIcon className="text-gray-500 mr-3" />
            <span className="text-gray-800 dark:text-white">Calendar</span>
          </Link>

          <Link href="/tasks" className="flex items-center p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg">
            <SchoolIcon className="text-gray-500 mr-3" />
            <span className="text-gray-800 dark:text-white">Create Task</span>
          </Link>

          <Link href="/digitalEvent" className="flex items-center p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg">
            <EventIcon className="text-gray-500 mr-3" />
            <span className="text-gray-800 dark:text-white">Digital Events</span>
          </Link>

          <Link href="/signup" className="flex items-center p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg">
            <EventIcon className="text-gray-500 mr-3" />
            <span className="text-gray-800 dark:text-white">Sign Up</span>
          </Link>
        </div>
      </aside>
    </>
  );
};

export default NavBar;
