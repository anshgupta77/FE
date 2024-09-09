import React, { useState } from "react";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === "" || password === "") {
      setError("Both fields are required");
      return;
    }

    console.log("Logging in with", username, password);

    setError("");
    setUsername("");
    setPassword("");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 p-6">
      <div className="bg-white p-8 rounded-xl shadow-2xl w-full max-w-md border border-gray-200 backdrop-filter backdrop-blur-md bg-opacity-90">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-900">
          Login
        </h2>
        {error && (
          <div className="bg-red-100 text-red-700 p-4 mb-6 rounded-lg shadow-lg animate-shake">
            {error}
          </div>
        )}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="username"
            >
              Username
            </label>
            <input
              id="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter your username"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-4 focus:ring-purple-500 transition duration-300 transform hover:scale-105"
            />
          </div>
          <div>
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-4 focus:ring-purple-500 transition duration-300 transform hover:scale-105"
            />
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="w-full py-3 bg-gradient-to-r from-blue-500 to-teal-500 text-white font-semibold rounded-lg shadow-lg hover:from-blue-600 hover:to-teal-600 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-500"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
