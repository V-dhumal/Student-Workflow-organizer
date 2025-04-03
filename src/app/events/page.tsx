"use client";

import { useState } from "react";

function AddEvent() {
  const [eventTitle, setEventTitle] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [eventTime, setEventTime] = useState("");
  const [eventDescription, setEventDescription] = useState("");
  const [eventCategory, setEventCategory] = useState("Meeting");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!eventTitle || !eventDate || !eventTime) {
      alert("Please fill in all required fields!");
      return;
    }

    const newEvent = {
      title: eventTitle,
      date: eventDate,
      time: eventTime,
      description: eventDescription,
      category: eventCategory,
    };

    console.log("Event Created:", newEvent);
    alert("Event successfully added!");

    // Reset form
    setEventTitle("");
    setEventDate("");
    setEventTime("");
    setEventDescription("");
    setEventCategory("Meeting");
  };

  return (
    <div className="min-h-screen p-6 bg-gray-100 flex flex-col justify-center items-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-lg">
        <h2 className="text-2xl font-bold text-gray-700 mb-6">Add New Event</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-600">Event Title</label>
            <input
              type="text"
              className="w-full p-2 border rounded-lg"
              value={eventTitle}
              onChange={(e) => setEventTitle(e.target.value)}
              required
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-600">Date</label>
              <input
                type="date"
                className="w-full p-2 border rounded-lg"
                value={eventDate}
                onChange={(e) => setEventDate(e.target.value)}
                required
              />
            </div>
            <div>
              <label className="block text-gray-600">Time</label>
              <input
                type="time"
                className="w-full p-2 border rounded-lg"
                value={eventTime}
                onChange={(e) => setEventTime(e.target.value)}
                required
              />
            </div>
          </div>
          <div>
            <label className="block text-gray-600">Category</label>
            <select
              className="w-full p-2 border rounded-lg"
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
            <label className="block text-gray-600">Description</label>
            <textarea
              className="w-full p-2 border rounded-lg"
              rows={3}
              value={eventDescription}
              onChange={(e) => setEventDescription(e.target.value)}
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-500"
          >
            Add Event
          </button>
        </form>
      </div>
    </div>
  );
}
export default AddEvent;