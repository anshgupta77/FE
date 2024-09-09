import React from "react";
import { Link } from "react-router-dom";

const Card = ({ task }) => {
  const priorityClass =
    {
      High: "border-red-500",
      Medium: "border-orange-500",
      Low: "border-green-500",
    }[task.priority] || "";

  const title = task.title || "Untitled";
  const dueDate = task.dueDate || "No due date";
  const description = task.description || "No description available";
  const members = task.members || [];

  return (
    <Link
      to={{
        pathname: "/tasksDetail", // Route to CardDetail
      }}
      state={{ task }} // Passing the task data as state
    >
      <div
        className={`relative border ${priorityClass} border-opacity-70 rounded-2xl p-6 mb-4 bg-gradient-to-br from-white via-gray-100 to-gray-200 shadow-xl transition-transform transform hover:scale-105 hover:shadow-2xl backdrop-filter backdrop-blur-md bg-opacity-80 overflow-hidden cursor-pointer`}
      >
        <div className="absolute top-2 right-2 bg-gradient-to-r from-blue-400 to-purple-500 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg">
          {task.priority}
        </div>
        <h4 className="text-2xl font-bold mb-4 text-gray-900 tracking-tight">
          {title}
        </h4>
        <p className="text-sm text-gray-500 mb-2 flex items-center">
          <span className="material-icons-outlined text-base mr-1">event</span>
          {dueDate}
        </p>
        <p className="text-sm text-gray-700 mb-4 leading-relaxed">
          {description}
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          {members.map((member, index) => (
            <span
              className="bg-gradient-to-r from-blue-400 to-indigo-500 text-white rounded-full w-10 h-10 flex justify-center items-center text-sm font-semibold shadow-lg transition-transform transform hover:scale-110"
              key={index}
            >
              {member[0]}
            </span>
          ))}
        </div>
        <button className="bg-gradient-to-r from-gray-300 via-gray-400 to-gray-500 text-gray-800 px-4 py-2 rounded-lg shadow-md hover:bg-gradient-to-l hover:from-gray-400 hover:to-gray-300 transition-colors duration-300 flex items-center justify-center w-full">
          <span className="material-icons-outlined text-base mr-2">+</span> Add
          Subtask
        </button>
      </div>
    </Link>
  );
};

export default Card;
