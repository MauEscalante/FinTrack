import React from "react";
import { Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";
import "../style/DoughnutChart.css";
import "../style/DoughnutChart.css";
ChartJS.register(ArcElement, Tooltip, Legend);


const doughnutData = {
  labels: ["Ingresos", "Gastos", "Inversiones", "Sobrante"],
  datasets: [
    {
      data: [2000000, 1000000, 500000, 500000],
      backgroundColor: ["#3b82f6", "#10b981", "#ef4444", "#a855f7 "],
      borderWidth: 2,
      borderColor: "#232d3e",
    },
  ],
};

const doughnutOptions = {
  plugins: {
    legend: {
      display: false,
    },
  },
};

export default function DoughnutChart() {
  return (
    <div className="dashboard-doughnut">
      <div className="dashboard-doughnut-content">
        <div className="dashboard-doughnut-legend">
          <div className="dashboard-doughnut-legend-item">
            <span className="dashboard-doughnut-legend-color ingresos"></span>
            <span className="dashboard-doughnut-legend-label">Ingresos</span>
          </div>
          <div className="dashboard-doughnut-legend-item">
            <span className="dashboard-doughnut-legend-color gastos"></span>
            <span className="dashboard-doughnut-legend-label">Gastos</span>
          </div>
          <div className="dashboard-doughnut-legend-item">
            <span className="dashboard-doughnut-legend-color inversiones"></span>
            <span className="dashboard-doughnut-legend-label">Inversiones</span>
          </div>
          <div className="dashboard-doughnut-legend-item">
            <span className="dashboard-doughnut-legend-color sobrante"></span>
            <span className="dashboard-doughnut-legend-label">Saldo</span>
          </div>
        </div>
        <div className="dashboard-doughnut-chart">
          <Doughnut data={doughnutData} options={doughnutOptions} style={{ maxWidth: 200 }} />
          <div className="dashboard-campaign-desc">Incluye gastos e inversiones</div>
        </div>
      </div>
    </div>
  );
}

