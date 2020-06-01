import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import { getStudentById } from "../lib/api";
import Header from "./Header";
import StudentForm from "./AddStudent/StudentForm";
import AlertMessage from "./Alert";

function StudentPage(props) {
  const [student, setStudent] = useState({});
  const [display, setDisplay] = useState(false);
  let [alertOpen, setAlertOpen] = useState(false);
  let [alertSeverity, setAlertSeverity] = useState("success");
  let [alertMessage, setAlertMessage] = useState("");

  useEffect(() => {
    async function getStudent() {
      const { match } = props;
      let response = await getStudentById(match.params.id);
      console.log(response);
      if (response.statusText === "OK") {
        setStudent(response.data);
        setDisplay(true);
      } else {
        setAlertMessage(response.data.Error);
        setAlertSeverity("error");
        setAlertOpen(true);
      }
    }
    getStudent();
  }, []);

  function handleCloseOfAlert() {
    setAlertOpen(false);
  }

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
      <AlertMessage
        open={alertOpen}
        message={alertMessage}
        severity={alertSeverity}
        handleClose={() => {
          handleCloseOfAlert();
        }}
      />
    </div>
  );
}

export default withRouter(StudentPage);