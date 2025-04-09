"use client";

import { useState } from "react";

function AddEvent() {
  const [eventTitle, setEventTitle] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [eventTime, setEventTime] = useState("");
  const [eventLocation, setEventLocation] = useState("");
  const [eventDescription, setEventDescription] = useState("");
  const [eventCategory, setEventCategory] = useState("Meeting");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!eventTitle || !eventDate || !eventTime || !eventLocation) {
      alert("Please fill in all required fields!");
      return;
    }

    const newEvent = {
      title: eventTitle,
      date: eventDate,
      time: eventTime,
      location: eventLocation,
      description: eventDescription,
      category: eventCategory,
    };

    const savedEvents = JSON.parse(localStorage.getItem("events") || "[]");
    const updatedEvents = [...savedEvents, newEvent];
    localStorage.setItem("events", JSON.stringify(updatedEvents));

    window.dispatchEvent(new Event("storage"));

    alert("Event successfully added!");

    setEventTitle("");
    setEventDate("");
    setEventTime("");
    setEventLocation("");
    setEventDescription("");
    setEventCategory("Meeting");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-white flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-xl bg-white p-8 rounded-2xl shadow-md">
        <h2 className="text-3xl font-bold text-blue-800 mb-6 text-center">📅 Add New Event</h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-gray-700 font-medium mb-1">Event Title<span className="text-red-500">*</span></label>
            <input
              type="text"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={eventTitle}
              onChange={(e) => setEventTitle(e.target.value)}
              required
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700 font-medium mb-1">Date<span className="text-red-500">*</span></label>
              <input
                type="date"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                value={eventDate}
                onChange={(e) => setEventDate(e.target.value)}
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-1">Time<span className="text-red-500">*</span></label>
              <input
                type="time"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                value={eventTime}
                onChange={(e) => setEventTime(e.target.value)}
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">Location<span className="text-red-500">*</span></label>
            <input
              type="text"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={eventLocation}
              onChange={(e) => setEventLocation(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">Category</label>
            <select
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={eventCategory}
              onChange={(e) => setEventCategory(e.target.value)}
            >
              <option value="Meeting">Meeting</option>
              <option value="Assignment">Assignment</option>
              <option value="Exam">Exam</option>
              <option value="Personal">Personal</option>
            </select>
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">Description</label>
            <textarea
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              rows={3}
              value={eventDescription}
              onChange={(e) => setEventDescription(e.target.value)}
              placeholder="Optional notes or details"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-500 text-white py-2 px-4 rounded-lg font-semibold transition duration-200"
          >
            ➕ Add Event
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddEvent;
