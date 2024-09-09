// Using in Sidebar.js
export const menuItems = [
  { name: "Dashboard", icon: "📊", path: "/" },
  { name: "All tasks", icon: "📋", path: "/tasks" },
  { name: "Todo", icon: "📝", path: "/todo" },
  { name: "Completed", icon: "✅", path: "/completed" },
  { name: "In Progress", icon: "🚀", path: "/inprogress" },
  { name: "Team", icon: "👥", path: "/team" },
  // { name: "Home", icon: "🏠", path: "/home" },
  // { name: "Login", icon: "🔑", path: "/login" },
  { name: "Logout", icon: "🆕", path: "/" },
  // { name: "Signup", icon: "🆕", path: "/signup" },
  { name: "Create Project", icon: "➕", path: "/create-project" },
];

// Using in Dashboard.js
export const threeTasks = [
  {
    id: 1,
    title: "Total Tasks",
    totalTask: 10,
  },
  {
    id: 2,
    title: "Completed Tasks",
    totalTask: 3,
  },
  {
    id: 3,
    title: "In Progress",
    totalTask: 4,
  },
  {
    id: 4,
    title: "To Do",
    totalTask: 3,
  },
];

// Using in CardContainer.js
export const tasks = [
  {
    id: 1,
    title: "Task 1",
    description: "This is task 1",
    category: "To Do",
  },
  {
    id: 2,
    title: "Task 2",
    description: "This is task 2",
    category: "In Progress",
  },
  {
    id: 3,
    title: "Task 3",
    description: "This is task 3",
    category: "Completed",
  },
  {
    id: 4,
    title: "Task 4",
    description: "This is task 4",
    category: "To Do",
  },
  {
    id: 5,
    title: "Task 5",
    description: "This is task 5",
    category: "In Progress",
  },
  {
    id: 6,
    title: "Task 6",
    description: "This is task 6",
    category: "Completed",
  },
];
