import { useState } from "react";
import "../style/SlideBar.css";
import { Link } from "react-router-dom";
import HomeIcon from '@mui/icons-material/Home';
import finTrack from "../assets/finTrack.png";
import PointOfSaleOutlinedIcon from '@mui/icons-material/PointOfSaleOutlined';
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import CurrencyExchangeOutlinedIcon from '@mui/icons-material/CurrencyExchangeOutlined';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import Button from "@mui/material/Button";



const SlideBar = () => {
    const [selected, setSelected] = useState("Dashboard");

    return (
        <div className="sidebar-custom"  >
            <div className="sidebar-header">
                <img src={finTrack} alt="FinTrack Logo" className="sidebar-logo" />
                <span className="sidebar-title">FinTrack</span>
            </div>

            <div className="sidebar-menu">
                <Button
                    className={'sidebar-menuitem'}
                    onClick={() => setSelected("Dashboard")}

                >
                    <HomeIcon className={`sidebar-icon${selected === "Dashboard" ? " active" : ""}`} />
                    <Link to="/" className="sidebar-link">

                        <span className={`options${selected === "Dashboard" ? " active" : ""}`}>Dashboard</span>
                    </Link>
                </Button>
              <hr className="MuiDivider-root MuiDivider-fullWidth css-1a99o9i"/>
                <Button
                    className={`sidebar-menuitem`}
                    onClick={() => setSelected("Transacciones")}
                >
                    <PointOfSaleOutlinedIcon className={`sidebar-icon${selected === "Transacciones" ? " active" : ""}`} />
                    <Link to="/transacciones" className="sidebar-link">
                        <span className={`options${selected === "Transacciones" ? " active" : ""}`}>Transacciones</span>
                    </Link>
                </Button>
                <Button
                    className={`sidebar-menuitem`}
                    onClick={() => setSelected("Presupuesto")}
                >
                    <ContactsOutlinedIcon className={`sidebar-icon${selected === "Presupuesto" ? " active" : ""}`} />
                    <Link to="/presupuesto" className="sidebar-link">
                        <span className={`options${selected === "Presupuesto" ? " active" : ""}`}>Presupuesto</span>
                    </Link>
                </Button>


                <Button
                    className={`sidebar-menuitem`}
                    onClick={() => setSelected("ingresos&egresos")}
                >
                    <CurrencyExchangeOutlinedIcon className={`sidebar-icon${selected === "ingresos&egresos" ? " active" : ""}`} />
                    <Link to="/ingresos&egresos" className="sidebar-link">
                        <span className={`options${selected === "ingresos&egresos" ? " active" : ""}`}>ingresos/Egresos</span>
                    </Link>
                </Button>
              <hr className="MuiDivider-root MuiDivider-fullWidth css-1a99o9i"/>
                <Button
                    className={`sidebar-menuitem`}
                    onClick={() => setSelected("Profile")}
                >
                    <Person2OutlinedIcon className={`sidebar-icon${selected === "Profile" ? " active" : ""}`} />
                    <Link to="/profile" className="sidebar-link">
                        <span className={`options${selected === "Profile" ? " active" : ""}`}>Profile</span>
                    </Link>
                </Button>
                <Button
                    className={`sidebar-menuitem`}
                    onClick={() => setSelected("Ajustes")}
                >
                    <SettingsOutlinedIcon className={`sidebar-icon${selected === "Ajustes" ? " active" : ""}`} />
                    <Link to="/ajustes" className="sidebar-link">
                        <span className={`options${selected === "Ajustes" ? " active" : ""}`}>Ajustes</span>
                    </Link>
                </Button>

            </div>
            {/* Botón Get template al fondo */}
            <div className="sidebar-footer">
                <a className="sidebar-template-btn">
                    <span className="sidebar-footer-text"> Download CSV</span>
                </a>
            </div>
        </div>
    );
};

export default SlideBar;


