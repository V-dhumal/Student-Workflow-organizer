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
    <div className="min-h-screen bg-gray-50 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-6 sm:p-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-800 mb-6">My Tasks</h2>

        {tasks.length > 0 ? (
          <ul className="space-y-4">
            {tasks.map((task, index) => (
              <li
                key={index}
                className="p-4 sm:p-5 border rounded-lg bg-gray-50 flex flex-col gap-2 shadow-sm"
              >
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                  <h3 className="text-lg font-semibold text-gray-900">{task.title}</h3>
                  <span
                    className={`text-xs font-semibold px-3 py-1 rounded-full self-start sm:self-auto ${
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
                <p className="text-gray-700 text-sm">{task.description}</p>
                <p className="text-sm text-gray-500">Due: {task.dueDate}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500 text-center text-base">No tasks available.</p>
        )}
      </div>
    </div>
  );
};

export default MyTasks;
