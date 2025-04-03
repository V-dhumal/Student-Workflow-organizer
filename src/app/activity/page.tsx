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
    <div className="p-6 bg-white rounded-lg shadow-md w-full max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Upcoming Events</h2>
      {events.length > 0 ? (
        <ul className="space-y-6">
          {events.map((event, index) => (
            <li key={index} className="p-5 border border-gray-300 rounded-lg bg-gray-50 shadow-sm">
              <h3 className="text-2xl font-semibold text-blue-700 mb-2">{event.title}</h3>
              <p className="text-gray-700 mb-2">{event.description}</p>
              <div className="text-sm text-gray-600 flex justify-between mb-1">
                <span className="font-medium">📅 {event.date}</span>
                <span className="font-medium">⏰ {event.time}</span>
              </div>
              <p className="text-sm text-gray-600 font-semibold">📍 {event.location}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-500 text-center text-lg">No upcoming events.</p>
      )}
    </div>
  );
};

export default Activity;
