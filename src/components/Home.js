"use client";
import MyTasks from "../app/overview/page";
import Activities from "./overview/Activities";

const Overview = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Overview</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <MyTasks />
        <Activities />
      </div>
    </div>
  );
};

export default Overview;
