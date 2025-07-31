import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import "../style/BarChart.css";
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const barData = {
  labels: [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ],
  datasets: [
    {
      label: "Ingresos",
      data: [1500000, 1500000, 1500000, 1750000, 1750000, 1750000, 2000000, 2000000, 2000000, 2000000, 2000000, 2000000],
      backgroundColor: "#6870fa",
    },
    {
      label: "Gastos",
      data: [800000, 800000, 800000, 900000, 900000, 900000, 950000, 950000, 950000, 950000, 950000, 1000000],
      backgroundColor: "#00c6ae",
    },
    {
      label: "Inversiones",
      data: [700000, 700000, 700000, 850000, 850000, 850000, 850000, 950000, 950000, 950000, 950000, 500000],
      backgroundColor: "#ff6384",
    },
  ],
};

const barOptions = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
      labels: {
        color: "#e0e0e0",
      },
    },
    title: {
      display: true,
      text: "Ingresos y Egresos mensuales",
      color: "#e0e0e0",
      font: {
        size: 20,
      },
    },
  },
  scales: {
    x: {
      ticks: { color: "#e0e0e0" },
      grid: { color: "#232d3e" },
    },
    y: {
      ticks: { color: "#e0e0e0" },
      grid: { color: "#232d3e" },
    },
  },
};

export default function BarChart() {
  return (
    <div className="dashboard-bar">
      <Bar data={barData} options={barOptions} />
    </div>
  );
}

