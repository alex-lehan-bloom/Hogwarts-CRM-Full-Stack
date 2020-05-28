import React from "react";
import { NavLink } from "react-router-dom";
import "../css/SideMenu.css";

function SideMenu(props) {
  return (
    <div className="sidemenu">
      <img src="images/logo192.png" />

      <NavLink
        exact
        to="/"
        className="navbar-link"
        activeClassName="navbar-link-active"
      >
        Dashboard
      </NavLink>
      <NavLink
        exact
        to="/students"
        className="navbar-link"
        activeClassName="navbar-link-active"
      >
        Students
      </NavLink>
      <NavLink
        exact
        to="/enroll-student"
        className="navbar-link"
        activeClassName="navbar-link-active"
      >
        Enroll student
      </NavLink>
    </div>
  );
}

export default SideMenu;