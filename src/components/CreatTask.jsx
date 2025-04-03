"use client";

import { useState } from "react";

const CreatTask = () => {
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
    console.log("Task Created:", task);
    alert("Task Created Successfully!");
    setTask({ title: "", description: "", dueDate: "", priority: "Medium", category: "General" });
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Create a New Task</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="title"
          value={task.title}
          onChange={handleChange}
          placeholder="Task Title"
          className="w-full p-2 border rounded"
          required
        />
        <textarea
          name="description"
          value={task.description}
          onChange={handleChange}
          placeholder="Task Description"
          className="w-full p-2 border rounded"
          rows="3"
        />
        <input
          type="date"
          name="dueDate"
          value={task.dueDate}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
        <select name="priority" value={task.priority} onChange={handleChange} className="w-full p-2 border rounded">
          <option value="High">High Priority</option>
          <option value="Medium">Medium Priority</option>
          <option value="Low">Low Priority</option>
        </select>
        <select name="category" value={task.category} onChange={handleChange} className="w-full p-2 border rounded">
          <option value="General">General</option>
          <option value="Study">Study</option>
          <option value="Work">Work</option>
          <option value="Personal">Personal</option>
        </select>
        <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">
          Create Task
        </button>
      </form>
    </div>
  );
};

export default CreatTask;
