/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import Link from "next/link";
import React, { useState } from "react";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import { cn } from "@/lib/utils";
import { generateDate, months } from "@/components/ui/calendar";
import dayjs from "dayjs";
import AddTaskIcon from '@mui/icons-material/AddTask';

export default function Page() {
  const days = ["S", "M", "T", "W", "T", "F", "S"];
  const currentDate = dayjs();
  const [today, setToday] = useState(currentDate);
  const [selectDate, setSelectDate] = useState(currentDate);

  return (
    <section className="p-4 sm:ml-64 min-h-screen bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
      {/* Header */}
      <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-4 p-4 text-gray-900 rounded-lg dark:text-white bg-gray-100 dark:bg-gray-700">
        <div className="text-lg font-medium">Organize Your Life</div>
        <Link href="/events">
          <button className="w-full sm:w-40 flex items-center justify-center gap-2 p-2 rounded-lg text-white bg-green-500 hover:bg-green-600 transition-all">
            <AddTaskIcon />
            Add Event
          </button>
        </Link>
      </div>

      <br />

      {/* Calendar + Schedule */}
      <div className="w-full flex flex-col lg:flex-row items-center lg:items-start justify-evenly gap-6 p-4 text-gray-900 rounded-lg dark:text-white bg-gray-100 dark:bg-gray-700">
        {/* Calendar Section */}
        <div className="w-full max-w-md">
          <div className="flex justify-between items-center mb-4">
            <h1 className="select-none font-semibold text-lg">
              {months[today.month()]}, {today.year()}
            </h1>
            <div className="flex gap-4 items-center">
              <GrFormPrevious
                className="w-5 h-5 cursor-pointer hover:scale-105 transition-all"
                onClick={() => setToday(today.month(today.month() - 1))}
              />
              <h1
                className="cursor-pointer text-sm hover:scale-105 transition-all"
                onClick={() => setToday(currentDate)}
              >
                Today
              </h1>
              <GrFormNext
                className="w-5 h-5 cursor-pointer hover:scale-105 transition-all"
                onClick={() => setToday(today.month(today.month() + 1))}
              />
            </div>
          </div>

          {/* Days Header */}
          <div className="grid grid-cols-7 text-sm text-center mb-2">
            {days.map((day, index) => (
              <div key={index} className="h-10 grid place-content-center text-gray-500 select-none">
                {day}
              </div>
            ))}
          </div>

          {/* Calendar Dates */}
          <div className="grid grid-cols-7 gap-1">
            {generateDate(today.month(), today.year()).map(({ date, currentMonth, today }, index) => (
              <div
                key={index}
                className="p-1 text-center h-12 grid place-content-center text-sm border-t"
              >
                <h1
                  className={cn(
                    currentMonth ? "" : "text-gray-400",
                    today ? "bg-red-600 text-white" : "",
                    selectDate.toDate().toDateString() === date.toDate().toDateString()
                      ? "bg-black text-white"
                      : "",
                    "h-10 w-10 rounded-full grid place-content-center hover:bg-black hover:text-white transition-all cursor-pointer select-none"
                  )}
                  onClick={() => setSelectDate(date)}
                >
                  {date.date()}
                </h1>
              </div>
            ))}
          </div>
        </div>

        {/* Schedule Section */}
        <div className="w-full max-w-md">
          <h1 className="font-semibold text-lg mb-2">
            Schedule for {selectDate.toDate().toDateString()}
          </h1>
          <p className="text-gray-400">No meetings for today.</p>
        </div>
      </div>
    </section>
  );
}
