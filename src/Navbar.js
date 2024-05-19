import React, { useState } from "react";
import "./Navbar.css"
function Navbar() {
  const [active, setActive] = useState("nav__menu");
  const [icon, setIcon] = useState("nav__toggler");
  const navToggle = () => {
    setActive(active === "nav__menu" ? "nav__menu nav__active" : "nav__menu");
    setIcon(icon === "nav__toggler" ? "nav__toggler toggle" : "nav__toggler");
  };

  return (
    <nav className="nav">
      <a href="/home" className="nav__brand">
        CodeHive
      </a>
      <ul className={active}>
        <li className="nav__item">
          <a href="/home" className="nav__link">
            Home
          </a>
        </li>

        <li className="nav__item">
          <a href="#" className="nav__link">
            Profile
          </a>
        </li>
        <li className="nav__item">
          <a href="/login" className="nav__link">
            Signup/Login
          </a>
        </li>
      </ul>
      <div onClick={navToggle} className={icon}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav>
  );
}

export default Navbar;
