import React from "react";
import BarChart from "./BarChart";
import DoughnutChart from "./DoughnutChart";
import "../style/DashBoard.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
const cards = [
    {
        icon: "�",
        value: "2.000.00",
        label: "Ingresos ",
        percent: "+14%",
    },
    {
        icon: "📈",
        value: "500.000",
        label: "Inversiones",
        percent: "25%",
    },
    {
        icon: "💸",
        value: "1.000.000",
        label: "Gastos",
        percent: "50%",
    },
    {
        icon: "🏦",
        value: "500.000",
        label: "Saldo Actual",
        percent: "25%",
    },
    {
        icon: "🏡",
        value: "10.000.000",
        label: "Patrimonio Neto",
        percent: "+5%",
    }
];

export default function DashBoard() {
    const [selectedYear, setSelectedYear] = React.useState(new Date().getFullYear());
    const currentYear = new Date().getFullYear();
    const yearOptions = [];
    for (let y = 2020; y <= currentYear; y++) yearOptions.push(y);
    return (
        <div className="dashboard-container">
            <h1 className="dashboard-title">DASHBOARD</h1>
            <div className="dashboard-top-row"> 
                <div className="dashboard-cards">
                    {cards.map((card, idx) => (
                        <div key={idx} className="dashboard-card">
                            <div className="dashboard-card-icon">{card.icon}</div>
                            <div className="dashboard-card-value">${card.value}</div>
                            <div className="dashboard-card-label">{card.label}</div>
                            <div className="dashboard-card-percent">{card.percent}</div>
                        </div>
                    ))}
                </div>
                <div className="dashboard-cards">
                    <div className="dashboard-card">
                        <label className="dashboard-filter-label">Filtrar por año:</label>
                        <select
                            value={selectedYear}
                            onChange={e => setSelectedYear(Number(e.target.value))}
                            className="dashboard-year-picker"
                        >
                            {yearOptions.map(year => (
                                <option key={year} value={year}>{year}</option>
                            ))}
                        </select>
                    </div>
                </div>
            </div>
            <div className="dashboard-main">
                <div className="dashboard-bar">
                    <BarChart year={selectedYear} />
                </div>
                <div className="dashboard-doughnut">
                    <h3 className="dashboard-campaign-title">Total Gastado</h3>
                    <DoughnutChart year={selectedYear} />
                </div>
            </div>
            {/* Aquí puedes agregar más widgets, cards, tablas, etc. */}
        </div>
    );
}
