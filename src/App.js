import DashBoard from "./pages/DashBoard";
import "./style/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SlideBar from "./pages/SlideBar";

function App() {
  return (
    <BrowserRouter>
      <div style={{ display: "flex" }}>
        <SlideBar />
        <main style={{ flex: 1, padding: "20px" }}>
          <Routes>
            <Route path="/" element={<DashBoard />} />
            <Route path="/transacciones" element={<div>Manage Team</div>} />
            <Route path="/presupuesto" element={<div>Contacts Information</div>} />
            <Route path="/ingresos" element={<div>Invoices Balances</div>} />
            <Route path="/profile" element={<div>Profile Form</div>} />
            <Route path="/ajustes" element={<div>Calendar</div>} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
