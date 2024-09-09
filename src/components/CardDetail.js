import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import AddSubtask from "./SubtaskForm"; // Import AddSubtask component

const CardDetail = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { task: project } = location.state || {}; // Destructure the passed task data

  const [showUpload, setShowUpload] = useState(false); // State to show/hide file upload
  const [showSubtaskForm, setShowSubtaskForm] = useState(false); // State to show/hide subtask form
  const [subtasks, setSubtasks] = useState([]); // State to manage list of subtasks

  if (!project) {
    return <div>No Task Details Available</div>;
  }

  const priorityClass =
    {
      High: "bg-red-200 text-red-800",
      Medium: "bg-yellow-200 text-yellow-800",
      Low: "bg-green-200 text-green-800",
    }[project.priority] || "bg-gray-200 text-gray-800";

  const handleAddSubtask = (subtask) => {
    setSubtasks([...subtasks, subtask]);
    setShowSubtaskForm(false); // Hide the form after submission
  };

  // Delete subtask by filtering out the one at the given index
  const handleDeleteSubtask = (index) => {
    const updatedSubtasks = subtasks.filter((_, i) => i !== index);
    setSubtasks(updatedSubtasks);
  };

  return (
    <div className="p-6 bg-white shadow-xl rounded-lg max-w-3xl mx-auto">
      {/* Back Button, Upload Button, and Add Subtask Button */}
      <div className="flex justify-between mb-4">
        <button
          onClick={() => navigate(-1)} // Navigates back to the previous page
          className="py-2 px-4 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition-colors duration-300"
        >
          Back to Task List
        </button>
        <div className="flex space-x-2">
          <button
            onClick={() => setShowUpload(!showUpload)} // Toggles the file upload section
            className="py-2 px-4 bg-green-500 text-white rounded-lg shadow-md hover:bg-green-600 transition-colors duration-300"
          >
            Upload File
          </button>
          <button
            onClick={() => setShowSubtaskForm(!showSubtaskForm)} // Toggles the subtask form
            className="py-2 px-4 bg-indigo-500 text-white rounded-lg shadow-md hover:bg-indigo-600 transition-colors duration-300"
          >
            Add Subtask
          </button>
        </div>
      </div>

      {/* Render the FileUpload component when showUpload is true */}
      {/* {showUpload && <FileUpload />} */}

      {/* Render the AddSubtask component when showSubtaskForm is true */}
      {showSubtaskForm && <AddSubtask onSubmit={handleAddSubtask} />}

      {/* Title and Priority */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-semibold text-gray-900 underline">
          {project.title}
        </h2>
        <span className={`text-xs px-2 py-1 rounded-full ${priorityClass}`}>
          {project.priority}
        </span>
      </div>

      {/* Description */}
      <p className="text-gray-700 mb-4">{project.description}</p>

      {/* Date, Due Date, and Comments */}
      <div className="text-sm text-gray-600 mb-4">
        <p>
          <strong className="font-bold text-gray-800">Date:</strong> {project.createdAt}
        </p>
        <p>
          <strong className="font-bold text-gray-800">Due Date:</strong> {project.dueDate}
        </p>
        <p>
          <strong className="font-bold text-gray-800">Comments:</strong> {project.comments}
        </p>
      </div>

      {/* Progress Bar */}
      {/* <div className="mt-4">
        <label className="text-sm font-medium text-gray-700 mb-2">
          Progress:
        </label>
        <div className="w-full bg-gray-200 rounded-full h-2.5">
          <div
            className="bg-blue-500 h-2.5 rounded-full"
            style={{ width: `${project.progress}%` }}
          ></div>
        </div>
        <span className="text-sm text-gray-500 ml-1">{project.progress}%</span>
      </div> */}

      {/* Display List of Subtasks */}
      <div className="mt-6">
        <h3 className="text-lg font-semibold mb-2">Subtasks</h3>
        <ul className="space-y-2">
          {subtasks.map((subtask, index) => (
            <li
              key={index}
              className="flex justify-between items-center bg-gray-100 p-4 rounded-lg shadow-md hover:bg-gray-200 transition-colors duration-300"
            >
              <div>
                <span className="font-semibold text-gray-900">{subtask.username}</span>
                <span className="ml-2 text-gray-600">({subtask.role})</span>
              </div>
              <button
                className="ml-4 bg-red-500 text-white px-3 py-1 rounded-full shadow hover:bg-red-600 transition-colors duration-300"
                onClick={() => handleDeleteSubtask(index)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CardDetail;



//part 2
// import React, { useState } from "react";
// import { useLocation, useNavigate } from "react-router-dom";
// import AddSubtask from "./SubtaskForm"; // Import AddSubtask component

// const CardDetail = () => {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const { task: project } = location.state || {}; // Destructure the passed task data

//   const [showUpload, setShowUpload] = useState(false); // State to show/hide file upload
//   const [showSubtaskForm, setShowSubtaskForm] = useState(false); // State to show/hide subtask form
//   const [subtasks, setSubtasks] = useState([]); // State to manage list of subtasks

//   if (!project) {
//     return <div>No Task Details Available</div>;
//   }

//   const priorityClass =
//     {
//       High: "bg-red-200 text-red-800",
//       Medium: "bg-yellow-200 text-yellow-800",
//       Low: "bg-green-200 text-green-800",
//     }[project.priority] || "bg-gray-200 text-gray-800";

//   const handleAddSubtask = (subtask) => {
//     setSubtasks([...subtasks, subtask]);
//     setShowSubtaskForm(false); // Hide the form after submission
//   };

//   // Delete subtask by filtering out the one at the given index
//   const handleDeleteSubtask = (index) => {
//     const updatedSubtasks = subtasks.filter((_, i) => i !== index);
//     setSubtasks(updatedSubtasks);
//   };

//   return (
//     <div className="p-6 bg-white shadow-xl rounded-lg max-w-3xl mx-auto">
//       {/* Back Button, Upload Button, and Add Subtask Button */}
//       <div className="flex justify-between mb-4">
//         <button
//           onClick={() => navigate(-1)} // Navigates back to the previous page
//           className="py-2 px-4 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition-colors duration-300"
//         >
//           Back to Task List
//         </button>
//         <div className="flex space-x-2">
//           <button
//             onClick={() => setShowUpload(!showUpload)} // Toggles the file upload section
//             className="py-2 px-4 bg-green-500 text-white rounded-lg shadow-md hover:bg-green-600 transition-colors duration-300"
//           >
//             Upload File
//           </button>
//           <button
//             onClick={() => setShowSubtaskForm(!showSubtaskForm)} // Toggles the subtask form
//             className="py-2 px-4 bg-indigo-500 text-white rounded-lg shadow-md hover:bg-indigo-600 transition-colors duration-300"
//           >
//             Add Subtask
//           </button>
//         </div>
//       </div>

//       {/* Render the FileUpload component when showUpload is true */}
//       {/* {showUpload && <FileUpload />} */}

//       {/* Render the AddSubtask component when showSubtaskForm is true */}
//       {showSubtaskForm && <AddSubtask onSubmit={handleAddSubtask} />}

//       {/* Title and Priority */}
//       <div className="flex justify-between items-center mb-4">
//         <h2 className="text-2xl font-semibold text-gray-900 underline">
//           {project.title}
//         </h2>
//         <span className={`text-xs px-2 py-1 rounded-full ${priorityClass}`}>
//           {project.priority}
//         </span>
//       </div>

//       {/* Description */}
//       <p className="text-gray-700 mb-4">{project.description}</p>

//       {/* Date, Due Date, and Comments */}
//       <div className="text-sm text-gray-600 mb-4">
//         <p>
//           <strong className="font-bold text-gray-800">Date:</strong> {project.createdAt}
//         </p>
//         <p>
//           <strong className="font-bold text-gray-800">Due Date:</strong> {project.dueDate}
//         </p>
//         <p>
//           <strong className="font-bold text-gray-800">Comments:</strong> {project.comments}
//         </p>
//       </div>

//       {/* Progress Bar */}
//       <div className="mt-4">
//         <label className="text-sm font-medium text-gray-700 mb-2">
//           Progress:
//         </label>
//         <div className="w-full bg-gray-200 rounded-full h-2.5">
//           <div
//             className="bg-blue-500 h-2.5 rounded-full"
//             style={{ width: `${project.progress}%` }}
//           ></div>
//         </div>
//         <span className="text-sm text-gray-500 ml-1">{project.progress}%</span>
//       </div>

//       {/* Display List of Subtasks */}
//       <div className="mt-6">
//         <h3 className="text-lg font-semibold mb-2">Subtasks</h3>
//         <ul className="list-disc pl-5 space-y-2">
//           {subtasks.map((subtask, index) => (
//             <li key={index} className="text-gray-700 flex justify-between items-center">
//               {subtask.username} - {subtask.role}
//               <button
//                 className="ml-4 bg-red-500 text-white px-2 py-1 rounded-lg hover:bg-red-600 transition-colors duration-300"
//                 onClick={() => handleDeleteSubtask(index)}
//               >
//                 Delete
//               </button>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default CardDetail;





//part 1
// import React, { useState } from "react";
// import { useLocation, useNavigate } from "react-router-dom";
// // import FileUpload from "./FileSharing";
// import AddSubtask from "./SubtaskForm"; // Import AddSubtask component

// const CardDetail = () => {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const { task: project } = location.state || {}; // Destructure the passed task data

//   const [showUpload, setShowUpload] = useState(false); // State to show/hide file upload
//   const [showSubtaskForm, setShowSubtaskForm] = useState(false); // State to show/hide subtask form
//   const [subtasks, setSubtasks] = useState([]); // State to manage list of subtasks

//   if (!project) {
//     return <div>No Task Details Available</div>;
//   }

//   const priorityClass =
//     {
//       High: "bg-red-200 text-red-800",
//       Medium: "bg-yellow-200 text-yellow-800",
//       Low: "bg-green-200 text-green-800",
//     }[project.priority] || "bg-gray-200 text-gray-800";

//   const handleAddSubtask = (subtask) => {
//     setSubtasks([...subtasks, subtask]);
//     setShowSubtaskForm(false); // Hide the form after submission
//   };

//   return (
//     <div className="p-6 bg-white shadow-xl rounded-lg max-w-3xl mx-auto">
//       {/* Back Button, Upload Button, and Add Subtask Button */}
//       <div className="flex justify-between mb-4">
//         <button
//           onClick={() => navigate(-1)} // Navigates back to the previous page
//           className="py-2 px-4 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition-colors duration-300"
//         >
//           Back to Task List
//         </button>
//         <div className="flex space-x-2">
//           <button
//             onClick={() => setShowUpload(!showUpload)} // Toggles the file upload section
//             className="py-2 px-4 bg-green-500 text-white rounded-lg shadow-md hover:bg-green-600 transition-colors duration-300"
//           >
//             Upload File
//           </button>
//           <button
//             onClick={() => setShowSubtaskForm(!showSubtaskForm)} // Toggles the subtask form
//             className="py-2 px-4 bg-indigo-500 text-white rounded-lg shadow-md hover:bg-indigo-600 transition-colors duration-300"
//           >
//             Add Subtask
//           </button>
//         </div>
//       </div>

//       {/* Render the FileUpload component when showUpload is true */}
//       {/* {showUpload && <FileUpload />} */}

//       {/* Render the AddSubtask component when showSubtaskForm is true */}
//       {showSubtaskForm && <AddSubtask onSubmit={handleAddSubtask} />}

//       {/* Title and Priority */}
//       <div className="flex justify-between items-center mb-4">
//         <h2 className="text-2xl font-semibold text-gray-900 underline">
//           {project.title}
//         </h2>
//         <span className={`text-xs px-2 py-1 rounded-full ${priorityClass}`}>
//           {project.priority}
//         </span>
//       </div>

//       {/* Description */}
//       <p className="text-gray-700 mb-4">{project.description}</p>

//       {/* Date, Due Date, and Comments */}
//       <div className="text-sm text-gray-600 mb-4">
//         <p>
//           <strong className="font-bold text-gray-800">Date:</strong> {project.createdAt}
//         </p>
//         <p>
//           <strong className="font-bold text-gray-800">Due Date:</strong> {project.dueDate}
//         </p>
//         <p>
//           <strong className="font-bold text-gray-800">Comments:</strong> {project.comments}
//         </p>
//       </div>

//       {/* Progress Bar */}
//       <div className="mt-4">
//         <label className="text-sm font-medium text-gray-700 mb-2">
//           Progress:
//         </label>
//         <div className="w-full bg-gray-200 rounded-full h-2.5">
//           <div
//             className="bg-blue-500 h-2.5 rounded-full"
//             style={{ width: `${project.progress}%` }}
//           ></div>
//         </div>
//         <span className="text-sm text-gray-500 ml-1">{project.progress}%</span>
//       </div>

//       {/* Display List of Subtasks */}
//       <div className="mt-6">
//         <h3 className="text-lg font-semibold mb-2">Subtasks</h3>
//         <ul className="list-disc pl-5 space-y-2">
//           {subtasks.map((subtask, index) => (
//             <li key={index} className="text-gray-700">
//               {subtask.username} - {subtask.role}
//               <button>delete</button>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default CardDetail;
