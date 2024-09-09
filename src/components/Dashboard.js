import React, { useState, useEffect } from "react";
import ProgressChart from "./ProgressChart.js";

const Dashboard = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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

  // Count tasks by their status
  const todoTasks = tasks.filter((task) => task.status === "todo").length;
  const inProgressTasks = tasks.filter((task) => task.status === "Pending").length;
  const completedTasks = tasks.filter((task) => task.status === "completed").length;

  if (loading) return <p className="text-center text-gray-600">Loading...</p>;
  if (error) return <p className="text-center text-red-500">Error: {error}</p>;

  return (
    <>
    <div className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
      {/* Keeping the exact same layout and CSS as Dashboard 1 */}
      <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out text-white">
        <h3 className="text-xl font-semibold mb-2">To Do</h3>
        <p className="text-4xl font-bold">{todoTasks}</p>
      </div>

      <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out text-white">
        <h3 className="text-xl font-semibold mb-2">In Progress</h3>
        <p className="text-4xl font-bold">{inProgressTasks}</p>
      </div>

      <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out text-white">
        <h3 className="text-xl font-semibold mb-2">Completed Tasks</h3>
        <p className="text-4xl font-bold">{completedTasks}</p>
      </div>
      </div>
      {/* Render ProgressChart with the task data */}
      <div>
      <ProgressChart
        completed={completedTasks}
        inProgress={inProgressTasks}
        todo={todoTasks}
      />
    </div>
    </>
  );
};

export default Dashboard;


//part2
// import React, { useState, useEffect } from "react";
// import ProgressChart from "./ProgressChart.js";

// const Dashboard = () => {
//   const [tasks, setTasks] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   const url = "https://hb-y6dh.onrender.com/tasks";

//   useEffect(() => {
//     const fetchTasks = async () => {
//       try {
//         const response = await fetch(url);
//         if (!response.ok) {
//           throw new Error("Network response was not ok");
//         }
//         const data = await response.json();
//         setTasks(data);
//       } catch (error) {
//         setError(error.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchTasks();
//   }, [url]);

//   // Count tasks by their status
//   const todoTasks = tasks.filter((task) => task.status === "todo").length;
//   const inProgressTasks = tasks.filter((task) => task.status === "Pending").length;
//   const completedTasks = tasks.filter((task) => task.status === "completed").length;

//   if (loading) return <p className="text-center text-gray-600">Loading...</p>;
//   if (error) return <p className="text-center text-red-500">Error: {error}</p>;

//   return (
//     <div className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//       {/* Keeping the same layout and CSS */}
//       <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out text-white">
//         <h3 className="text-xl font-semibold mb-2">To Do</h3>
//         <p className="text-4xl font-bold">{todoTasks}</p>
//       </div>

//       <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out text-white">
//         <h3 className="text-xl font-semibold mb-2">In Progress</h3>
//         <p className="text-4xl font-bold">{inProgressTasks}</p>
//       </div>

//       <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out text-white">
//         <h3 className="text-xl font-semibold mb-2">Completed Tasks</h3>
//         <p className="text-4xl font-bold">{completedTasks}</p>
//       </div>

//       {/* Render ProgressChart with the task data */}
//       <ProgressChart
//         completed={completedTasks}
//         inProgress={inProgressTasks}
//         todo={todoTasks}
//       />
//     </div>
//   );
// };

// export default Dashboard;


//part 2
// import React, { useState, useEffect } from "react";
// import ProgressChart from "./ProgressChart.js";

// const Dashboard = () => {
//   const [tasks, setTasks] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   // Fetch tasks from your API
//   const url = "https://hb-y6dh.onrender.com/tasks";

//   useEffect(() => {
//     const fetchTasks = async () => {
//       try {
//         const response = await fetch(url);
//         if (!response.ok) {
//           throw new Error("Network response was not ok");
//         }
//         const data = await response.json();
//         setTasks(data);
//       } catch (error) {
//         setError(error.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchTasks();
//   }, [url]);

//   // Filter tasks by their status
//   const todoTasks = tasks.filter((task) => task.status === "to-do").length;
//   const inProgressTasks = tasks.filter((task) => task.status === "in-progress").length;
//   const completedTasks = tasks.filter((task) => task.status === "completed").length;

//   if (loading) return <p className="text-center text-gray-600">Loading...</p>;
//   if (error) return <p className="text-center text-red-500">Error: {error}</p>;

//   return (
//     <div className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//       {/* Render the tasks count */}
//       <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out text-white">
//         <h3 className="text-xl font-semibold mb-2">To Do</h3>
//         <p className="text-4xl font-bold">{todoTasks}</p>
//       </div>

//       <div className="bg-gradient-to-r from-yellow-500 to-orange-500 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out text-white">
//         <h3 className="text-xl font-semibold mb-2">In Progress</h3>
//         <p className="text-4xl font-bold">{inProgressTasks}</p>
//       </div>

//       <div className="bg-gradient-to-r from-green-500 to-teal-500 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out text-white">
//         <h3 className="text-xl font-semibold mb-2">Completed</h3>
//         <p className="text-4xl font-bold">{completedTasks}</p>
//       </div>

//       {/* Pass data to ProgressChart */}
//       <ProgressChart
//         completed={completedTasks}
//         inProgress={inProgressTasks}
//         todo={todoTasks}
//       />
//     </div>
//   );
// };

// export default Dashboard;


//part 1
// import { threeTasks } from "../utils/constants";
// import ProgressChart from "./ProgressChart.js";
// const Dashboard = () => {
//   const completedTasks = threeTasks.find(
//     (task) => task.title === "Completed Tasks"
//   ).totalTask;
//   const inProgressTasks = threeTasks.find(
//     (task) => task.title === "In Progress"
//   ).totalTask;
//   const todoTasks = threeTasks.find((task) => task.title === "To Do").totalTask;
//   console.log(completedTasks, inProgressTasks, todoTasks);
//   return (
//     <div className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//       {threeTasks.map((task) => (
//         <div
//           key={task.id}
//           className="bg-gradient-to-r from-blue-500 to-purple-500 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out text-white"
//         >
//           <h3 className="text-xl font-semibold mb-2">{task.title}</h3>
//           <p className="text-4xl font-bold">{task.totalTask}</p>
//         </div>
//       ))}
//       {/* Pass data to ProgressChart */}
//       <ProgressChart
//         completed={completedTasks}
//         inProgress={inProgressTasks}
//         todo={todoTasks}
//       />
//     </div>
//   );
// };

// export default Dashboard;
