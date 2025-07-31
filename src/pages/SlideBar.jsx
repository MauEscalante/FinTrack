import { useState } from "react";
import { Typography } from "@mui/material";
import "../style/SlideBar.css";
import { Link } from "react-router-dom";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import Button from "@mui/material/Button";



const SlideBar = () => {
    const [selected, setSelected] = useState("Dashboard");

    return (
        <div className="sidebar-custom" style={{ borderRight: "none", boxShadow: "none" }}>
            <div className="sidebar-header">
                <Typography variant="h6">FinTrack</Typography>
            </div>

            <div className="sidebar-menu">
                <Button
                    className={'sidebar-menuitem'}
                    onClick={() => setSelected("Dashboard")}

                >
                    <HomeOutlinedIcon />
                    <Link to="/" className="sidebar-link">

                        <span className={`options${selected === "Dashboard" ? " active" : ""}`}>Dashboard</span>
                    </Link>
                </Button>
                <div className="sidebar-section">Data</div>
                <Button
                    className={`sidebar-menuitem`}
                    onClick={() => setSelected("Transacciones")}
                >
                    <PeopleOutlinedIcon />
                    <Link to="/transacciones" className="sidebar-link">
                        <span className={`options${selected === "Transacciones" ? " active" : ""}`}>Transacciones</span>
                    </Link>
                </Button>
                <Button
                    className={`sidebar-menuitem`}
                    onClick={() => setSelected("Presupuesto")}
                >
                    <ContactsOutlinedIcon />
                    <Link to="/presupuesto" className="sidebar-link">
                        <span className={`options${selected === "Presupuesto" ? " active" : ""}`}>Presupuesto</span>
                    </Link>
                </Button>


                <Button
                    className={`sidebar-menuitem`}
                    onClick={() => setSelected("ingresos/Egresos")}
                >
                    <ReceiptOutlinedIcon />
                    <Link to="/ingresos" className="sidebar-link">
                        <span className={`options${selected === "ingresos" ? " active" : ""}`}>ingresos/Egresos</span>
                    </Link>
                </Button>
                <div className="sidebar-section">Pages</div>
                <Button
                    className={`sidebar-menuitem`}
                    onClick={() => setSelected("Profile")}
                >
                    <PersonOutlinedIcon />
                    <Link to="/profile" className="sidebar-link">
                        <span className={`options${selected === "Profile" ? " active" : ""}`}>Profile</span>
                    </Link>
                </Button>
                <Button
                    className={`sidebar-menuitem`}
                    onClick={() => setSelected("Ajustes")}
                >
                    <HelpOutlineOutlinedIcon />
                    <Link to="/ajustes" className="sidebar-link">
                        <span className={`options${selected === "Ajustes" ? " active" : ""}`}>Ajustes</span>
                    </Link>
                </Button>

            </div>
        </div>
    );
};

export default SlideBar;


