import React from "react";
import "./src/style/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./src/pages/SlideBar";

function App() {
    return (
        <BrowserRouter>
            <Sidebar />
            <Routes>
                <Route path="/" element={<div>Dashboard</div>} />
                <Route path="/team" element={<div>Manage Team</div>} />
                <Route path="/contacts" element={<div>Contacts Information</div>} />
                <Route path="/invoices" element={<div>Invoices Balances</div>} />
                <Route path="/form" element={<div>Profile Form</div>} />
                <Route path="/calendar" element={<div>Calendar</div>} />
                <Route path="/faq" element={<div>FAQ Page</div>} />
                <Route path="/bar" element={<div>Bar Chart</div>} />
                <Route path="/pie" element={<div>Pie Chart</div>} />
                <Route path="/line" element={<div>Line Chart</div>} />
                <Route path="/geography" element={<div>Geography Chart</div>} />
            </Routes>

        </BrowserRouter>
    );
}

export default App;
