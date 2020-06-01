import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import { getStudentById } from "../lib/api";
import Header from "./Header";
import StudentForm from "./AddStudent/StudentForm";

function StudentPage(props) {
  const [student, setStudent] = useState({});
  const [display, setDisplay] = useState(false);

  useEffect(() => {
    async function getStudent() {
      const { match } = props;
      let response = await getStudentById(match.params.id);
      setStudent(response.data);
      setDisplay(true);
    }
    getStudent();
  }, []);

  //   useEffect(() => {
  //     console.log(student);
  //     setDisplayForm(true);
  //   }, [student]);

  return (
    <div className="main">
      {display && (
        <>
          <Header
            header={`Student: ${student.first_name} ${student.last_name}`}
          />
          <StudentForm student={student} />
        </>
      )}
    </div>
  );
}

export default withRouter(StudentPage);
