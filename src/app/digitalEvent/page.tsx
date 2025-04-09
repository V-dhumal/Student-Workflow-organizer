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
    {
      title: "AI and the Future of Work",
      description: "Explore how AI is transforming the job market and industries worldwide.",
      date: "2025-04-18",
      time: "3:00 PM",
      link: "https://example.com/ai-future-work",
      category: "Tech Talk",
    },
    {
      title: "Virtual Networking Night",
      description: "Connect with like-minded professionals and expand your network.",
      date: "2025-04-20",
      time: "7:00 PM",
      link: "https://example.com/networking-night",
      category: "Networking Event",
    },
    {
      title: "Mental Health Awareness Webinar",
      description: "Join experts to discuss mental well-being and self-care strategies.",
      date: "2025-04-22",
      time: "5:30 PM",
      link: "https://example.com/mental-health-webinar",
      category: "Health & Wellness",
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
      case "Tech Talk":
        return "bg-blue-100 text-blue-700";
      case "Networking Event":
        return "bg-red-100 text-red-700";
      case "Health & Wellness":
        return "bg-pink-100 text-pink-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <div className="min-h-screen px-4 py-10 bg-gradient-to-br from-blue-50 to-white">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-bold text-center text-blue-800 mb-10">
          🎥 Digital Events
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-2xl shadow-sm p-5 flex flex-col justify-between hover:shadow-xl transition duration-300"
            >
              <div>
                <div className="flex items-start justify-between mb-3 gap-2">
                  <h2 className="text-lg sm:text-xl font-semibold text-gray-800 leading-tight break-words">
                    {event.title}
                  </h2>
                  <span
                    className={`text-xs font-medium px-3 py-1 rounded-full whitespace-nowrap ${getCategoryColor(
                      event.category
                    )}`}
                  >
                    {event.category}
                  </span>
                </div>

                <p className="text-sm text-gray-600 mb-4 break-words">
                  {event.description}
                </p>

                <div className="flex items-center text-sm text-gray-500 mb-1">
                  <CalendarDays className="w-4 h-4 mr-2" /> {event.date}
                </div>
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <Clock className="w-4 h-4 mr-2" /> {event.time}
                </div>
              </div>

              <div className="mt-auto">
                <a
                  href={event.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-full text-white bg-blue-600 hover:bg-blue-500 px-4 py-2 rounded-lg text-sm font-medium transition duration-200"
                >
                  Join Now <ExternalLink className="w-4 h-4 ml-2" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DigitalEventPage;
