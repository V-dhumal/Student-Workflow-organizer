"use client";

import { useState } from "react";

const CreateTask = () => {
  const [task, setTask] = useState({
    title: "",
    description: "",
    dueDate: "",
    priority: "Medium",
    category: "General",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask({ ...task, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const existingTasks = JSON.parse(localStorage.getItem("tasks") || "[]");
    const updatedTasks = [...existingTasks, task];
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));

    alert("Task Created Successfully!");

    setTask({
      title: "",
      description: "",
      dueDate: "",
      priority: "Medium",
      category: "General",
    });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4 py-6 sm:px-6 lg:px-8">
      <div className="w-full max-w-xl bg-white p-6 sm:p-8 rounded-xl shadow-lg">
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-800 mb-6">
          Create a New Task
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Task Title */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">Task Title</label>
            <input
              type="text"
              name="title"
              value={task.title}
              onChange={handleChange}
              placeholder="Enter task title"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Task Description */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">Task Description</label>
            <textarea
              name="description"
              value={task.description}
              onChange={handleChange}
              placeholder="Enter task description"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows={3}
            />
          </div>

          {/* Due Date */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">Due Date</label>
            <input
              type="date"
              name="dueDate"
              value={task.dueDate}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Priority */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">Priority</label>
            <select
              name="priority"
              value={task.priority}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="High">🔥 High Priority</option>
              <option value="Medium">⚡ Medium Priority</option>
              <option value="Low">📌 Low Priority</option>
            </select>
          </div>

          {/* Category */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">Category</label>
            <select
              name="category"
              value={task.category}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="General">📁 General</option>
              <option value="Study">📖 Study</option>
              <option value="Work">💼 Work</option>
              <option value="Personal">🏡 Personal</option>
            </select>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-lg font-semibold text-lg transition duration-300"
          >
            ✅ Create Task
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateTask;
