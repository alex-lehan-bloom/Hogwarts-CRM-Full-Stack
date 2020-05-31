import React from "react";
import "../css/Header.css";

function Header(props) {
  return <h1 className="header">{props.header}</h1>;
}

export default Header;
