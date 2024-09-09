import React from "react";
import "./Homepage.css";
import { Link } from "react-router-dom";
import Login from "./Login";
const Homepage = () => {
  return (
    <div className="relative flex flex-col h-screen overflow-hidden animate-gradient">
      {/* Animated Gradient and Bubble Background */}
      <div className="absolute inset-0 z-0 bubble-background"></div>

      {/* Navbar */}
      <nav className="flex justify-between items-center p-6 bg-white shadow-md z-10">
        <div className="flex-1"></div>
        <div className="space-x-4">
          <Link to="/login">
            <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
              Login
            </button>
          </Link>
          <Link to="/signup">
            <button className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">
              Sign Up
            </button>
          </Link>
        </div>
      </nav>

      {/* Main Content */}
      <div className="flex flex-col items-center justify-center flex-grow text-center z-10">
        <h1 className="text-5xl font-bold mb-8 text-gray-800">StartAlign</h1>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white text-center py-4 z-10">
        StartAlign@appPatient
      </footer>
    </div>
  );
};

export default Homepage;
