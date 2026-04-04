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
        data: [70, 50, 40, 60],

        backgroundColor: [
          "#3B82F6",
          "#3B82F6",
          "#3B82F6",
          "#3B82F6",
        ],

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
        max: 100, 

        ticks: {
          color: "#111", 
        },

        grid: {
          color: "#e5e7eb", 
        },
      },

      x: {
        ticks: {
          color: "#111", // warna label bawah
        },

        grid: {
          display: false, // biar ga terlalu rame
        },
      },
    },
  };

  return <Bar data={data} options={options} />;
}