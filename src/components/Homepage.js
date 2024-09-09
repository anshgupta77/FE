// import React, { useState } from "react";
// import "./Homepage.css";
// import { Link } from "react-router-dom";

// const Homepage = () => {
//   const [showForm, setShowForm] = useState(null);

//   // Function to handle form visibility
//   const handleShowForm = (formType) => {
//     setShowForm(formType);
//   };

//   return (
//     <div className="relative flex flex-col h-screen overflow-hidden animate-gradient">
//       {/* Animated Gradient and Bubble Background */}
//       <div className="absolute inset-0 z-0 bubble-background"></div>

//       {/* Buttons */}
//       <div className="absolute top-6 right-6 space-x-4 z-10">
//         <button
//           onClick={() => handleShowForm("login")}
//           className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
//         >
//           Login
//         </button>
//         <button
//           onClick={() => handleShowForm("signup")}
//           className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
//         >
//           Sign Up
//         </button>
//       </div>

//       {/* Main Content */}
//       <div className="flex flex-col items-center justify-center flex-grow text-center z-10">
//         <h1 className="text-6xl font-bold mb-8 text-white drop-shadow-lg leading-tight">
//           StartAlign
//         </h1>
//         <p className="text-2xl text-gray-300 mb-8 max-w-xl leading-relaxed">
//           Align your journey with the stars. The best platform to organize and track your tasks.
//         </p>
//         <button
//           onClick={() => handleShowForm("signup")}
//           className="px-6 py-3 bg-indigo-500 text-white text-xl rounded-full shadow-2xl hover:bg-indigo-600 transform transition-transform hover:scale-110"
//         >
//           Get Started
//         </button>
//       </div>

//       {/* Conditional Rendering of Forms */}
//       {showForm === "login" && (
//         <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-90">
//           <div className="w-full max-w-md p-6 bg-gray-800 text-white rounded-lg shadow-lg">
//             <h2 className="text-2xl font-bold mb-4">Login</h2>
//             {/* Login Form Here */}
//             <button onClick={() => setShowForm(null)} className="text-red-500">Close</button>
//           </div>
//         </div>
//       )}

//       {showForm === "signup" && (
//         <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-90">
//           <div className="w-full max-w-md p-6 bg-gray-800 text-white rounded-lg shadow-lg">
//             <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
//             {/* Sign Up Form Here */}
//             <button onClick={() => setShowForm(null)} className="text-red-500">Close</button>
//           </div>
//         </div>
//       )}

//       {/* Footer */}
//       <footer className="bg-gray-800 text-white text-center py-4 z-10">
//         StartAlign © 2024 | Empower Your Workflow
//       </footer>
//     </div>
//   );
// };

// export default Homepage;








// part 1
// import React from "react";
// import "./Homepage.css";
// import { Link } from "react-router-dom";

// const Homepage = () => {

//   const click = () => {console.log("clicked")}

//   return (
//     <div className="relative flex flex-col h-screen overflow-hidden animate-gradient">
//       {/* Animated Gradient and Bubble Background */}
//       <div className="absolute inset-0 z-0 bubble-background"></div>

//       {/* Buttons */}
//       <div className="absolute top-6 right-6 space-x-4 z-10">
//         {/* <Link to="/login">
//           <button className="px-4 py-2 bg-blue-500 text-white rounded-full shadow-lg hover:bg-blue-600 transform transition-transform hover:scale-105">
//             Login
//           </button>
//         </Link>
//         <Link to="/signup">
//           <button className="px-4 py-2 bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600 transform transition-transform hover:scale-105">
//             Sign Up
//           </button>
//         </Link> */}
//          <Link to="/login">
//             <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-00">
//               Login
//             </button>
//           </Link>
//           <Link to="/signup">
//             <button className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-100">
//               Sign Up
//             </button>
//           </Link>
//       </div>

//       {/* Main Content */}
//       <div className="flex flex-col items-center justify-center flex-grow text-center z-10">
//         <h1 className="text-6xl font-bold mb-8 text-white drop-shadow-lg leading-tight">
//           StartAlign
//         </h1>
//         <p className="text-2xl text-gray-300 mb-8 max-w-xl leading-relaxed">
//           Align your journey with the stars. The best platform to organize and track your tasks.
//         </p>
//         <Link to="/signup">
//           <button className="px-6 py-3 bg-indigo-500 text-white text-xl rounded-full shadow-2xl hover:bg-indigo-600 transform transition-transform hover:scale-110">
//             Get Started
//           </button>
//         </Link>
//       </div>

//       {/* Footer */}
//       <footer className="bg-gray-800 text-white text-center py-4 z-10">
//         StartAlign © 2024 | Empower Your Workflow
//       </footer>
//     </div>
//   );
// };

// export default Homepage;




// part
// import React from "react";
// import "./Homepage.css";
// import { Link } from "react-router-dom";

// const Homepage = () => {
//   return (
//     <div className="relative flex flex-col h-screen overflow-hidden animate-gradient">
//       {/* Animated Gradient and Bubble Background */}
//       <div className="absolute inset-0 z-0 bubble-background"></div>

//       {/* Navbar */}
//       <nav className="flex justify-between items-center p-6 bg-white bg-opacity-80 backdrop-blur-md shadow-md z-10 fixed w-full top-0 left-0">
//         <div className="flex-1 text-left text-xl font-semibold text-gray-900">
//           <Link to="/" className="text-3xl font-bold text-gray-900 hover:text-blue-500 transition-colors"></Link>
//         </div>
//         <div className="space-x-4">
//           <Link to="/login">
//             <button className="px-4 py-2 bg-blue-500 text-white rounded-full shadow-lg hover:bg-blue-600 transform transition-transform hover:scale-105">
//               Login
//             </button>
//           </Link>
//           <Link to="/signup">
//             <button className="px-4 py-2 bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600 transform transition-transform hover:scale-105">
//               Sign Up
//             </button>
//           </Link>
//         </div>
//       </nav>

//       {/* Main Content */}
//       <div className="flex flex-col items-center justify-center flex-grow text-center z-10">
//         <h1 className="text-6xl font-bold mb-8 text-white drop-shadow-lg leading-tight">
//           StartAlign
//         </h1>
//         <p className="text-2xl text-gray-300 mb-8 max-w-xl leading-relaxed">
//           Align your journey with the stars. The best platform to organize and track your tasks.
//         </p>
//         <Link to="/signup">
//           <button className="px-6 py-3 bg-indigo-500 text-white text-xl rounded-full shadow-2xl hover:bg-indigo-600 transform transition-transform hover:scale-110">
//             Get Started
//           </button>
//         </Link>
//       </div>

//       {/* Footer */}
//       <footer className="bg-gray-800 text-white text-center py-4 z-10">
//         StartAlign © 2024 | Empower Your Workflow
//       </footer>
//     </div>
//   );
// };

// export default Homepage;






























//login and signup page working
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
      <nav className="flex justify-between items-center p-6 bg-transparent border-none z-10">
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
      <p className="text-2xl text-black-700 mb-8 max-w-xl leading-relaxed font-bold">
                 Align your journey with the stars. The best platform to organize and track your tasks.
        </p>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white text-center py-4 z-10">
        StartAlign@appPatient
      </footer>
    </div>
  );
};

export default Homepage;

