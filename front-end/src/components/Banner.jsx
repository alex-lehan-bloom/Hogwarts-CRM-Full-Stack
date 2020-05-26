import React from "react";
import "../css/Banner.css";

function Banner(props) {
  return (
    <div className="banner">
      <h2>Hogwarts Administrator Console</h2>
      <h3>{props.header}</h3>
    </div>
  );
}

export default Banner;
