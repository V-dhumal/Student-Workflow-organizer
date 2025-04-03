"use client";
import { useState, useEffect } from "react";

interface Task {
  title: string;
  description: string;
  dueDate: string;
  priority: "High" | "Medium" | "Low";
}

const MyTasks: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem("tasks") || "[]") as Task[];
    setTasks(savedTasks);
  }, []);

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-center">My Tasks</h2>

      {tasks.length > 0 ? (
        <ul className="space-y-4">
          {tasks.map((task, index) => (
            <li
              key={index}
              className="p-5 border rounded-lg bg-gray-50 flex flex-col gap-2 shadow-sm"
            >
              <h3 className="text-lg font-semibold text-gray-900">{task.title}</h3>
              <p className="text-gray-700">{task.description}</p>
              <p className="text-sm text-gray-500">Due: {task.dueDate}</p>
              <div className="flex items-center justify-between">
                <span
                  className={`text-xs font-semibold px-3 py-1 rounded-full ${
                    task.priority === "High"
                      ? "bg-red-500 text-white"
                      : task.priority === "Medium"
                      ? "bg-yellow-500 text-black"
                      : "bg-green-500 text-white"
                  }`}
                >
                  {task.priority}
                </span>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-500 text-center">No tasks available.</p>
      )}
    </div>
  );
};

export default MyTasks;
