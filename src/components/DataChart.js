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

export default function DataChart({ data }) {

  // HANDLE KALAU DATA BELUM ADA
  if (!data || Object.keys(data).length === 0) {
    return <p>Loading chart...</p>;
  }

  const chartData = {
    labels: Object.keys(data),
    datasets: [
      {
        label: "Total Populasi",
        data: Object.values(data),
        backgroundColor: "#3B82F6",
        borderRadius: 6,
      }
    ]
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        labels: {
          color: "#111",
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          color: "#111",
        },
      },
      x: {
        ticks: {
          color: "#111",
        },
      },
    },
  };

  return <Bar data={chartData} options={options} />;
}