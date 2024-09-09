import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
  Title,
} from "chart.js";

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
  Title
);

const ProgressChart = ({ completed, inProgress, todo }) => {
  // Data for the Bar chart
  const barData = {
    labels: ["Completed", "In Progress", "To Do"],
    datasets: [
      {
        label: "Tasks",
        data: [completed, inProgress, todo],
        backgroundColor: ["#4CAF50", "#FF9800", "#F44336"],
        borderColor: ["#388E3C", "#F57C00", "#D32F2F"],
        borderWidth: 1,
      },
    ],
  };

  // Options for the Bar chart
  const barOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Task Progress",
      },
    },
    scales: {
      x: {
        stacked: true,
        grid: {
          display: false,
        },
        ticks: {
          padding: 5,
        },
        barPercentage: 0.5,
        categoryPercentage: 0.5,
      },
      y: {
        stacked: true,
        grid: {
          drawBorder: false,
        },
        ticks: {
          beginAtZero: true,
        },
      },
    },
  };

  return (
    <div style={{ width: "100vh" }}>
      <div style={{ width: "100%", height: "400px", marginLeft: "240px" }}>
        {" "}
        {/* Adjusted the width and height */}
        <h3>Task Progress Bar Chart</h3>
        <Bar options={barOptions} data={barData} />
      </div>
    </div>
  );
};

export default ProgressChart;
