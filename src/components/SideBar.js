import { NavLink } from "react-router-dom";
import { menuItems } from "../utils/constants";
import { MoonIcon, SunIcon } from "@heroicons/react/24/outline"; // Example icons from Heroicons

const Sidebar = ({ isDarkMode, setIsDarkMode,setLoginStatus }) => {
  const handleThemeToggle = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  const handleLogout = () => {
    setLoginStatus(false)// Handle logout logic here
  };

  return (
    <div
      className={`w-64 h-screen ${
        isDarkMode
          ? "bg-gray-800"
          : "bg-gradient-to-b from-blue-600 to-blue-400"
      } p-5 text-white shadow-lg`}
    >
      <h2 className="text-3xl font-bold mb-8">StartAlign</h2>
      <button
        onClick={handleThemeToggle}
        className="mb-8 p-2 rounded-full bg-gray-700 hover:bg-gray-600 transition-colors duration-300"
      >
        {isDarkMode ? (
          <SunIcon className="w-6 h-6 text-yellow-300" />
        ) : (
          <MoonIcon className="w-6 h-6 text-blue-300" />
        )}
      </button>
      <ul className="space-y-4">
        {menuItems.map((item, index) => (
          <li key={index} className="flex items-center">
            {item.name === "Logout" ? (
              <button
                onClick={handleLogout}
                className="flex items-center py-3 px-4 rounded-lg transition-all duration-300 cursor-pointer hover:bg-blue-500 hover:shadow-md"
              >
                <span className="mr-3 text-xl">{item.icon}</span>
                <span className="text-lg font-medium">{item.name}</span>
              </button>
            ) : (
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center py-3 px-4 rounded-lg transition-all duration-300 cursor-pointer ${
                    isActive
                      ? "bg-blue-500 shadow-md"
                      : "hover:bg-blue-500 hover:shadow-md"
                  }`
                }
              >
                <span className="mr-3 text-xl">{item.icon}</span>
                <span className="text-lg font-medium">{item.name}</span>
              </NavLink>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;

// Part
// import { NavLink } from "react-router-dom";
// import { menuItems } from "../utils/constants";
// import { useState } from "react";

// const Sidebar = ({ setLoginStatus, isDarkMode, setIsDarkMode }) => {
//   const handleLogout = () => {
//     setLoginStatus(false); // Set login status to false
//     // Optionally, you can also redirect to homepage or perform other actions here
//   };

//   const toggleTheme = () => {
//     setIsDarkMode(!isDarkMode);
//   };

//   return (
//     <div
//       className={`w-64 h-screen p-5 text-white shadow-lg ${
//         isDarkMode
//           ? "bg-gray-800"
//           : "bg-gradient-to-b from-blue-600 to-blue-400"
//       }`}
//     >
//       <h2 className="text-3xl font-bold mb-8">TaskMe</h2>
//       <ul className="space-y-4">
//         {menuItems.map((item, index) => (
//           <li key={index} className="flex items-center">
//             {item.name === "Logout" ? (
//               <button
//                 onClick={handleLogout}
//                 className="flex items-center py-3 px-4 rounded-lg transition-all duration-300 cursor-pointer hover:bg-blue-500 hover:shadow-md"
//               >
//                 <span className="mr-3 text-xl">{item.icon}</span>
//                 <span className="text-lg font-medium">{item.name}</span>
//               </button>
//             ) : (
//               <NavLink
//                 to={item.path}
//                 className={({ isActive }) =>
//                   `flex items-center py-3 px-4 rounded-lg transition-all duration-300 cursor-pointer ${
//                     isActive
//                       ? "bg-blue-500 shadow-md"
//                       : "hover:bg-blue-500 hover:shadow-md"
//                   }`
//                 }
//               >
//                 <span className="mr-3 text-xl">{item.icon}</span>
//                 <span className="text-lg font-medium">{item.name}</span>
//               </NavLink>
//             )}
//           </li>
//         ))}
//         <li className="flex items-center">
//           <button
//             onClick={toggleTheme}
//             className="flex items-center py-3 px-4 rounded-lg transition-all duration-300 cursor-pointer hover:bg-blue-500 hover:shadow-md"
//           >
//             <span className="mr-3 text-xl">🌓</span>
//             <span className="text-lg font-medium">Toggle Theme</span>
//           </button>
//         </li>
//       </ul>
//     </div>
//   );
// };

// export default Sidebar;

// Part
// import { NavLink } from "react-router-dom";
// import { menuItems } from "../utils/constants";

// const Sidebar = ({ setLoginStatus }) => {
//   const handleLogout = () => {
//     setLoginStatus(false); // Set login status to false
//     // Optionally, you can also redirect to homepage or perform other actions here
//   };

//   return (
//     <div className="w-64 h-screen bg-gradient-to-b from-blue-600 to-blue-400 p-5 text-white shadow-lg">
//       <h2 className="text-3xl font-bold mb-8">TaskMe</h2>
//       <ul className="space-y-4">
//         {menuItems.map((item, index) => (
//           <li key={index} className="flex items-center">
//             {item.name === "Logout" ? (
//               <button
//                 onClick={handleLogout}
//                 className="flex items-center py-3 px-4 rounded-lg transition-all duration-300 cursor-pointer hover:bg-blue-500 hover:shadow-md"
//               >
//                 <span className="mr-3 text-xl">{item.icon}</span>
//                 <span className="text-lg font-medium">{item.name}</span>
//               </button>
//             ) : (
//               <NavLink
//                 to={item.path}
//                 className={({ isActive }) =>
//                   `flex items-center py-3 px-4 rounded-lg transition-all duration-300 cursor-pointer ${
//                     isActive
//                       ? "bg-blue-500 shadow-md"
//                       : "hover:bg-blue-500 hover:shadow-md"
//                   }`
//                 }
//               >
//                 <span className="mr-3 text-xl">{item.icon}</span>
//                 <span className="text-lg font-medium">{item.name}</span>
//               </NavLink>
//             )}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Sidebar;

// // Part
// // import { NavLink } from "react-router-dom";
// // import { menuItems } from "../utils/constants";

// // const Sidebar = ({ setLoginStatus }) => {
// //   return (
// //     <div className="w-64 h-screen bg-gradient-to-b from-blue-600 to-blue-400 p-5 text-white shadow-lg">
// //       <h2 className="text-3xl font-bold mb-8">TaskMe</h2>
// //       <ul className="space-y-4">
// //         {menuItems.map((item, index) => (
// //           <li key={index} className="flex items-center">
// //             <NavLink
// //               to={item.path}
// //               className={({ isActive }) =>
// //                 `flex items-center py-3 px-4 rounded-lg transition-all duration-300 cursor-pointer ${
// //                   isActive
// //                     ? "bg-blue-500 shadow-md"
// //                     : "hover:bg-blue-500 hover:shadow-md"
// //                 }`
// //               }
// //             >
// //               <span className="mr-3 text-xl">{item.icon}</span>
// //               <span className="text-lg font-medium">{item.name}</span>
// //             </NavLink>
// //           </li>
// //         ))}
// //       </ul>
// //     </div>
// //   );
// // };

// // export default Sidebar;
