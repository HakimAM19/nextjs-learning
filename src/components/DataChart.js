"use client";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend
} from "chart.js";

import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend
);

export default function DataChart() {

  const data = {
    labels: ["Web Dev", "Data Analysis", "Visualization", "Writing"],
    datasets: [
      {
        label: "Skill Progress",
        data: [70, 50, 40, 60]
      }
    ]
  };

  return <Bar data={data} />;
}