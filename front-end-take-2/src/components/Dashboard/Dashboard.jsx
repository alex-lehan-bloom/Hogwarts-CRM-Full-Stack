import React, { useState, useEffect } from "react";
import Header from "../Header";
import NumberStudents from "./NumberStudents";
import MagicSkills from "./MagicSkills";
import Courses from "./CoursesChart";
import EnrollmentDatePicker from "./DatePicker";
import { getStudents } from "../../lib/api.js";
import "../../css/Dashboard.css";

function Dashboard() {
  const date = new Date();
  const dateToString =
    date.getMonth() + 1 + "/" + date.getDate() + "/" + date.getFullYear();
  const [students, setStudents] = useState([]);
  const [enrollmentDate, setEnrollmentDate] = useState(dateToString);

  function handleDate(date) {
    const dateToString =
      date.getMonth() + 1 + "/" + date.getDate() + "/" + date.getFullYear();
    setEnrollmentDate(dateToString);
  }

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
      <h2 className="dashboard-header">
        Number of Students Enrolled at Hogwarts
      </h2>
      <NumberStudents students={students} />
      <h2 className="dashboard-header">
        Number of Students Enrolled on {enrollmentDate.toString()}
      </h2>
      <EnrollmentDatePicker
        handleDate={(date) => {
          handleDate(date);
        }}
      />
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
