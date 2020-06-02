import React, { useState, useEffect } from "react";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
import Field from "./FormComponents/Field";
import HouseSelection from "./FormComponents/HouseSelection";
import MagicSkills from "./FormComponents/MagicSkills";
import Courses from "./FormComponents/Courses";
import DeleteStudent from "../DeleteStudent";
import { enrollStudent, updateStudent } from "../../lib/api";
import AlertMessage from "../Alert";
import { Redirect } from "react-router-dom";

const useStyles = makeStyles(() => ({
  root: {
    width: "60%",
    minWidth: 440,
    paddingBottom: 100,
  },
  enrollButton: { margin: "20px 0 20px 0" },
}));

function StudentForm(props) {
  const classes = useStyles();
  const theme = createMuiTheme({
    palette: { type: "dark" },
  });
  let [student, setStudent] = useState({});
  let [firstName, setFirstName] = useState("");
  let [lastName, setLastName] = useState("");
  let [house, setHouse] = useState("");
  let [skills, setSkills] = useState([]);
  let [courses, setCourses] = useState([]);
  let [alertOpen, setAlertOpen] = useState(false);
  let [alertSeverity, setAlertSeverity] = useState("success");
  let [alertMessage, setAlertMessage] = useState("");
  let [redirectOnDelete, setRedirectOnDelete] = useState(false);

  useEffect(() => {
    const { student } = props;
    if (student !== undefined) {
      setStudent(student);
      setFirstName(student.first_name);
      setLastName(student.last_name);
      setHouse(student.house);
      setSkills(student.existing_skills);
      setCourses(student.courses);
    } else {
      setStudent(false);
    }
  }, []);

  function handleCloseOfAlert() {
    setAlertOpen(false);
  }

  async function handleSubmitNewStudent(event) {
    event.preventDefault();
    let response = await enrollStudent(
      firstName,
      lastName,
      house,
      skills,
      [],
      courses
    );

    if (response.statusText === "OK") {
      setAlertMessage(
        `${firstName} ${lastName} successfully enrolled in Hogwarts.`
      );
      setAlertSeverity("success");
      setAlertOpen(true);
      setLastName("");
      setFirstName("");
      setHouse(null);
      setSkills([]);
      setCourses([]);
    } else {
      setAlertMessage(response.data.Error);
      setAlertSeverity("error");
      setAlertOpen(true);
    }
  }

  async function handleExistingStudent() {
    let response = await updateStudent(
      student._id,
      firstName,
      lastName,
      house,
      skills,
      [],
      courses
    );
    if (response.statusText === "OK") {
      setAlertMessage(`${firstName} ${lastName} successfully updated.`);
      setAlertSeverity("success");
      setAlertOpen(true);
    } else {
      setAlertMessage(response.data.Error);
      setAlertSeverity("error");
      setAlertOpen(true);
    }
  }

  function handleDeleteResponse(response) {
    if (response.statusText === "OK") {
      setAlertMessage(`${firstName} ${lastName} was successfully deleted!`);
      setAlertSeverity("success");
      setAlertOpen(true);
      setTimeout(() => {
        setRedirectOnDelete(true);
      }, 2000);
    } else {
      setAlertMessage(response.data.Error);
      setAlertSeverity("error");
      setAlertOpen(true);
    }
  }

  return (
    <>
      <FormControl className={classes.root}>
        <ThemeProvider theme={theme}>
          <Field
            class="first-name"
            label="First Name"
            value={firstName}
            handleInput={(firstName) => {
              setFirstName(firstName);
            }}
          />
          <Field
            class="last-name"
            label="Last Name"
            value={lastName}
            handleInput={(lastName) => {
              setLastName(lastName);
            }}
          />
          <HouseSelection
            className={classes.house}
            house={house}
            handleSelection={(house) => {
              setHouse(house);
            }}
          />
          <MagicSkills
            skills={skills}
            handleSkills={(skills) => {
              setSkills(skills);
            }}
          />
          <Courses
            courses={courses}
            handleCourses={(courses) => {
              setCourses(courses);
            }}
          />
        </ThemeProvider>

        {!student && (
          <Button
            className={classes.enrollButton}
            variant="contained"
            color="primary"
            onClick={(event) => {
              handleSubmitNewStudent(event);
            }}
          >
            Enroll Student
          </Button>
        )}
        {student && (
          <>
            <Button
              className={classes.enrollButton}
              variant="contained"
              color="primary"
              onClick={(event) => {
                handleExistingStudent(event);
              }}
            >
              Update Student
            </Button>
            {/* <Button
              className={classes.enrollButton}
              variant="contained"
              className="delete-button"
              color="secondary"
              onClick={(event) => {
                handleDeleteStudent(event);
              }}
            >
              Delete Student
            </Button> */}
            <DeleteStudent
              studentId={student._id}
              handleDelete={(response) => {
                handleDeleteResponse(response);
              }}
            />
          </>
        )}
      </FormControl>
      <AlertMessage
        open={alertOpen}
        message={alertMessage}
        severity={alertSeverity}
        handleClose={() => {
          handleCloseOfAlert();
        }}
      />
      {redirectOnDelete && <Redirect to="/students" />}
    </>
  );
}

export default StudentForm;
