import React, { useState, useEffect } from "react";
import Header from "../Header";
import NumberStudents from "./NumberStudents";
import MagicSkills from "./MagicSkills";
import Courses from "./CoursesChart";
import { getStudents } from "../../lib/api.js";
import "../../css/Dashboard.css";

function Dashboard() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    async function getStudentsFromServer() {
      let students = await getStudents();
      setStudents(students);
    }
    getStudentsFromServer();
  }, []);

  return (
    <>
      <Header header="Dashboard" />
      <NumberStudents students={students} />
      <h2 className="dashboard-header">
        Number of Students with Each Magic Skill
      </h2>
      <MagicSkills students={students} />
      <h2 className="dashboard-header">Number of Students in Each Class</h2>
      <Courses />
    </>
  );
}

export default Dashboard;
