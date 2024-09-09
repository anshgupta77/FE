import { threeTasks } from "../utils/constants";
import ProgressChart from "./ProgressChart.js";
const Dashboard = () => {
  const completedTasks = threeTasks.find(
    (task) => task.title === "Completed Tasks"
  ).totalTask;
  const inProgressTasks = threeTasks.find(
    (task) => task.title === "In Progress"
  ).totalTask;
  const todoTasks = threeTasks.find((task) => task.title === "To Do").totalTask;
  console.log(completedTasks, inProgressTasks, todoTasks);
  return (
    <div className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {threeTasks.map((task) => (
        <div
          key={task.id}
          className="bg-gradient-to-r from-blue-500 to-purple-500 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out text-white"
        >
          <h3 className="text-xl font-semibold mb-2">{task.title}</h3>
          <p className="text-4xl font-bold">{task.totalTask}</p>
        </div>
      ))}
      {/* Pass data to ProgressChart */}
      <ProgressChart
        completed={completedTasks}
        inProgress={inProgressTasks}
        todo={todoTasks}
      />
    </div>
  );
};

export default Dashboard;
