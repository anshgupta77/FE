// Part
import React, { useEffect, useState } from "react";

const TeamContainer = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const url = "https://hb-y6dh.onrender.com/users";
  // const url = "http://localhost:7000/users";

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Failed to fetch users");
        }
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, [url]);

  if (loading)
    return <p className="text-center text-gray-600">Loading users...</p>;
  if (error) return <p className="text-center text-red-500">Error: {error}</p>;

  return (
    <div className="p-6 bg-gradient-to-r from-indigo-100 via-white to-indigo-100 min-h-screen flex flex-col items-center">
      <div className="flex flex-col gap-8 w-full max-w-4xl">
        {users.map((user) => (
          <div
            key={user.id}
            className="relative bg-white bg-opacity-90 backdrop-filter backdrop-blur-xl border border-gray-300 rounded-2xl shadow-xl p-6 hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-2 hover:scale-105 group overflow-hidden"
          >
            {/* Animated Border Layer */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 opacity-20 transition-opacity duration-500 group-hover:opacity-100 pointer-events-none" />

            <div className="relative z-10">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                  {user.name}
                </h3>
                <span className="text-sm font-semibold px-4 py-1 rounded-full shadow-lg bg-gradient-to-r from-green-400 to-blue-500 text-white transition-transform duration-300 transform hover:scale-105 hover:from-blue-500 hover:to-purple-500">
                  Tech Lead
                </span>
              </div>
              <p className="text-gray-700 mb-3 text-sm">
                <span className="font-medium">Email:</span> {user.email}
              </p>
              <div className="flex items-center justify-center mt-4">
                <button className="relative z-10 mt-2 bg-blue-600 text-white px-6 py-2 rounded-lg shadow-md hover:bg-blue-700 transition-transform duration-300 transform hover:scale-110 focus:outline-none focus:ring-4 focus:ring-blue-300">
                  View Profile
                  {/* Decorative Button Effects */}
                  <span className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 opacity-0 group-hover:opacity-30 rounded-lg transition-opacity duration-500" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamContainer;
