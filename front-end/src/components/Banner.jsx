import React, { useState, useEffect } from "react";
import AddStudentModal from "./EnrollNewStudent/AddStudentModal";
import "../css/Banner.css";

function Banner(props) {
  return (
    <div className="banner">
      <h2>Hogwarts Administrator Console</h2>
      <div className="banner-header-container">
        <h3>{props.header}</h3>
        {props.displayAddStudentButton && <AddStudentModal />}
      </div>
    </div>
  );
}

export default Banner;
