"use client";
import { useState, useEffect } from "react";

interface Event {
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
}

const Activity: React.FC = () => {
  const [events, setEvents] = useState<Event[]>([]);

  useEffect(() => {
    const savedEvents = JSON.parse(localStorage.getItem("events") || "[]") as Event[];
    setEvents(savedEvents);
  }, []);

  return (
    <div className="p-4 sm:p-6 md:p-8 bg-white rounded-lg shadow-md w-full max-w-5xl mx-auto">
      <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center text-gray-800">📌 Upcoming Events</h2>
      
      {events.length > 0 ? (
        <ul className="space-y-4 sm:space-y-6">
          {events.map((event, index) => (
            <li key={index} className="p-4 sm:p-5 border border-gray-200 rounded-xl bg-gray-50 shadow-sm transition hover:shadow-md">
              <h3 className="text-lg sm:text-xl font-semibold text-blue-700 mb-2">{event.title}</h3>
              <p className="text-sm sm:text-base text-gray-700 mb-2">{event.description}</p>

              <div className="text-xs sm:text-sm text-gray-600 flex flex-col sm:flex-row sm:justify-between mb-1 gap-1">
                <span className="font-medium">📅 {event.date}</span>
                <span className="font-medium">⏰ {event.time}</span>
              </div>

              <p className="text-xs sm:text-sm text-gray-600 font-semibold">📍 {event.location}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-500 text-center text-base sm:text-lg">No upcoming events.</p>
      )}
    </div>
  );
};

export default Activity;
