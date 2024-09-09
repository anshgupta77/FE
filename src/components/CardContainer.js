import React, { useState, useEffect } from "react";
import Card from "./Card";
import Header from "./Header"; // Import Header

const CardContainer = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  // const url = "http://localhost:7000/tasks";
  const url = "https://hb-y6dh.onrender.com/tasks";

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setTasks(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchTasks();
  }, [url]);

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredTasks = tasks.filter((task) =>
    task.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (loading) return <p className="text-center text-gray-600">Loading...</p>;
  if (error) return <p className="text-center text-red-500">Error: {error}</p>;

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50">
      <Header searchQuery={searchQuery} onSearch={handleSearch} />
      <div className="p-6">
        <div className="flex flex-wrap justify-between gap-4 mb-6">
          <div className="relative bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-2 px-4 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105 w-full md:w-[30%] flex items-center justify-between cursor-pointer overflow-hidden">
            <span className="flex items-center gap-2">
              <span className="text-2xl">🟣</span>
              <span className="text-lg font-medium">To Do</span>
            </span>
            <span className="text-xl font-semibold">+</span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-blue-600 opacity-10 group-hover:opacity-30 transition-opacity duration-300"></div>
          </div>
          <div className="relative bg-gradient-to-r from-yellow-500 to-orange-500 text-white py-2 px-4 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105 w-full md:w-[30%] flex items-center justify-between cursor-pointer overflow-hidden">
            <span className="flex items-center gap-2">
              <span className="text-2xl">🟡</span>
              <span className="text-lg font-medium">In Progress</span>
            </span>
            <span className="text-xl font-semibold">+</span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-yellow-500 opacity-10 group-hover:opacity-30 transition-opacity duration-300"></div>
          </div>
          <div className="relative bg-gradient-to-r from-green-500 to-teal-500 text-white py-2 px-4 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105 w-full md:w-[30%] flex items-center justify-between cursor-pointer overflow-hidden">
            <span className="flex items-center gap-2">
              <span className="text-2xl">🟢</span>
              <span className="text-lg font-medium">Completed</span>
            </span>
            <span className="text-xl font-semibold">+</span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-green-500 opacity-10 group-hover:opacity-30 transition-opacity duration-300"></div>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {filteredTasks.map((task, index) => (
            <Card key={index} task={task} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardContainer;
