"use client";

import React, { useState } from "react";
import { CalendarDays, Clock, ExternalLink } from "lucide-react";

interface DigitalEvent {
  title: string;
  description: string;
  date: string;
  time: string;
  link: string;
  category: string;
}

const DigitalEventPage = () => {
  const [events] = useState<DigitalEvent[]>([
    {
      title: "Live Webinar: Career Planning",
      description: "Join our expert panel to explore your future goals and steps to achieve them.",
      date: "2025-04-10",
      time: "6:00 PM",
      link: "https://example.com/webinar-career-planning",
      category: "Webinar",
    },
    {
      title: "Study with Me: Pomodoro Session",
      description: "Stay productive with a group Pomodoro live session. Bring your books!",
      date: "2025-04-12",
      time: "8:00 PM",
      link: "https://example.com/live-pomodoro",
      category: "Study Session",
    },
    {
      title: "Productivity Tips Workshop",
      description: "Learn simple, science-backed tips to increase your daily productivity.",
      date: "2025-04-15",
      time: "4:00 PM",
      link: "https://example.com/productivity-workshop",
      category: "Workshop",
    },
  ]);

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Webinar":
        return "bg-purple-100 text-purple-700";
      case "Study Session":
        return "bg-green-100 text-green-700";
      case "Workshop":
        return "bg-yellow-100 text-yellow-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <div className="min-h-screen p-6 bg-gradient-to-br from-blue-50 to-white">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-blue-800 mb-10">🎥 Digital Events</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-2xl shadow-md p-6 hover:shadow-xl transition duration-300"
            >
              <div className="flex items-center justify-between mb-3">
                <h2 className="text-xl font-semibold text-gray-800">{event.title}</h2>
                <span
                  className={`text-xs font-medium px-3 py-1 rounded-full ${getCategoryColor(
                    event.category
                  )}`}
                >
                  {event.category}
                </span>
              </div>
              <p className="text-sm text-gray-600 mb-4">{event.description}</p>

              <div className="flex items-center text-sm text-gray-500 mb-1">
                <CalendarDays className="w-4 h-4 mr-2" /> {event.date}
              </div>
              <div className="flex items-center text-sm text-gray-500 mb-3">
                <Clock className="w-4 h-4 mr-2" /> {event.time}
              </div>

              <a
                href={event.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-white bg-blue-600 hover:bg-blue-500 px-4 py-2 rounded-lg text-sm font-medium transition"
              >
                Join Now <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DigitalEventPage;
