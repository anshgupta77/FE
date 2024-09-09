import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = ({ setLoginStatus }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate(); // Hook for navigation

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { email, password } = formData;

    if (!email || !password) {
      setError("Both fields are required.");
      return;
    }

    try {
      const response = await fetch("https://hb-y6dh.onrender.com/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response) {
        setSuccess("Logged in successfully!");
        setError("");
        setFormData({ email: "", password: "" });
        setLoginStatus(true); // Update login status
        navigate("/"); // Redirect to the dashboard
      } else {
        setError(result.message || "Login failed. Please try again.");
      }
    } catch (err) {
      setError(err.message);
      console.error("Network error:", err);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 p-6">
      <div className="bg-white p-8 rounded-xl shadow-2xl w-full max-w-md border border-gray-200 backdrop-filter backdrop-blur-md bg-opacity-90">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-900">
          Log In
        </h2>
        {error && (
          <div className="bg-red-100 text-red-700 p-4 mb-6 rounded-lg shadow-lg animate-shake">
            {error}
          </div>
        )}
        {success && (
          <div className="bg-green-100 text-green-700 p-4 mb-6 rounded-lg shadow-lg animate-shake">
            {success}
          </div>
        )}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
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
              name="password"
              type="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-4 focus:ring-purple-500 transition duration-300 transform hover:scale-105"
            />
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="w-full py-3 bg-gradient-to-r from-blue-500 to-teal-500 text-white font-semibold rounded-lg shadow-lg hover:from-blue-600 hover:to-teal-600 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-500"
            >
              Log In
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;





//part 1
// import React, { useState } from "react";

// const Login = () => {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (username === "" || password === "") {
//       setError("Both fields are required");
//       return;
//     }
//     try {
//       const response = await fetch("https://hb-y6dh.onrender.com/auth/login", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(formData),
//       });

//       const result = await response.json();

//       if (response) {
//         setSuccess("User login in successfully!");
//         setError("");
//         setFormData({ name: "", email: "", password: "" });
//         setLoginStatus(true); // Update login status
//         navigate("/"); // Redirect to the dashboard
//       } else {
//         setError(result.message || "Failed to sign up. Please try again.");
//       }
//     } catch (err) {
//       setError("Network error. Please try again.");
//       console.error("Network error:", err);
//     }
//     console.log("Logging in with", username, password);

//     setError("");
//     setUsername("");
//     setPassword("");
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 p-6">
//       <div className="bg-white p-8 rounded-xl shadow-2xl w-full max-w-md border border-gray-200 backdrop-filter backdrop-blur-md bg-opacity-90">
//         <h2 className="text-3xl font-bold mb-8 text-center text-gray-900">
//           Login
//         </h2>
//         {error && (
//           <div className="bg-red-100 text-red-700 p-4 mb-6 rounded-lg shadow-lg animate-shake">
//             {error}
//           </div>
//         )}
//         <form onSubmit={handleSubmit} className="space-y-6">
//           <div>
//             <label
//               className="block text-gray-700 text-sm font-bold mb-2"
//               htmlFor="username"
//             >
//               Username
//             </label>
//             <input
//               id="username"
//               type="text"
//               value={username}
//               onChange={(e) => setUsername(e.target.value)}
//               placeholder="Enter your username"
//               className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-4 focus:ring-purple-500 transition duration-300 transform hover:scale-105"
//             />
//           </div>
//           <div>
//             <label
//               className="block text-gray-700 text-sm font-bold mb-2"
//               htmlFor="password"
//             >
//               Password
//             </label>
//             <input
//               id="password"
//               type="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               placeholder="Enter your password"
//               className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-4 focus:ring-purple-500 transition duration-300 transform hover:scale-105"
//             />
//           </div>
//           <div className="text-center">
//             <button
//               type="submit"
//               className="w-full py-3 bg-gradient-to-r from-blue-500 to-teal-500 text-white font-semibold rounded-lg shadow-lg hover:from-blue-600 hover:to-teal-600 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-500"
//             >
//               Submit
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Login;
