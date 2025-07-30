import { useState } from "react";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Typography } from "@mui/material";
import "../style/SlideBar.css";
import { Link } from "react-router-dom";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import Button from "@mui/material/Button";

const Item = ({ title, to, icon, selected, setSelected }) => (
  <Button
    active={selected === title}
    className={`sidebar-menuitem${selected === title ? " active" : ""}`}
    onClick={() => setSelected(title)}
  >
    {icon}
    <Link to={to} className="sidebar-link">
      <Typography>{title}</Typography>
    </Link>
  </Button>
);

const SlideBar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("Dashboard");

  return (
    <div className="sidebar-custom" style={{ borderRight: "none", boxShadow: "none" }}>
      <div className="sidebar-header">
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "0 24px" }}>
          <span onClick={() => setIsCollapsed(!isCollapsed)} style={{ cursor: "pointer" }}>
            <MenuOutlinedIcon />
          </span>
        </div>
      </div>
      <Sidebar collapsed={isCollapsed} backgroundColor="transparent" style={{ borderRight: "none", boxShadow: "none" }}>
        <Menu iconShape="square" className="sidebar-menu">
          <Item
            title="Dashboard"
            to="/"
            icon={<HomeOutlinedIcon />}
            selected={selected}
            setSelected={setSelected}
          />
          <div className="sidebar-section">Data</div>
          <Item
            title="Transacciones"
            to="/team"
            icon={<PeopleOutlinedIcon />}
            selected={selected}
            setSelected={setSelected}
          />
          <Item
            title="Presupuesto"
            to="/contacts"
            icon={<ContactsOutlinedIcon />}
            selected={selected}
            setSelected={setSelected}
          />
          <Item
            title="ingresos/Egresos"
            to="/invoices"
            icon={<ReceiptOutlinedIcon />}
            selected={selected}
            setSelected={setSelected}
          />
          <div className="sidebar-section">Pages</div>
          <Item
            title="Profile"
            to="/form"
            icon={<PersonOutlinedIcon />}
            selected={selected}
            setSelected={setSelected}
          />
          
          <Item
            title="Ajustes"
            to="/faq"
            icon={<HelpOutlineOutlinedIcon />}
            selected={selected}
            setSelected={setSelected}
          />
          
        </Menu>
      </Sidebar>
    </div>
  );
};

export default SlideBar;