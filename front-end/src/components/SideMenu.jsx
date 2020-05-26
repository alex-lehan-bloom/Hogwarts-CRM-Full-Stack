import React from "react";
import { NavLink } from "react-router-dom";
import { Button } from "@material-ui/core";
import "../css/SideMenu.css";

function SideMenu(props) {
  return (
    <div className="sidemenu">
      <div className="divider" />
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
        to="/add-student"
        className="navbar-link"
        activeClassName="navbar-link-active"
      >
        Add Student
      </NavLink>
    </div>
  );
}

export default SideMenu;
