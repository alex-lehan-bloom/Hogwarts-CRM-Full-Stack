import React, { useState, useEffect } from "react";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
import Field from "./FormComponents/Field";
import HouseSelection from "./FormComponents/HouseSelection";
import MagicSkills from "./FormComponents/MagicSkills";
import Courses from "./FormComponents/Courses";
import { enrollStudent, updateStudent } from "../../lib/api";
import AlertMessage from "../Alert";

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
  const theme = createMuiTheme({ palette: { type: "dark" } });
  let [student, setStudent] = useState({});
  let [firstName, setFirstName] = useState("");
  let [lastName, setLastName] = useState("");
  let [house, setHouse] = useState("");
  let [skills, setSkills] = useState([]);
  let [courses, setCourses] = useState([]);
  let [alertOpen, setAlertOpen] = useState(false);
  let [alertSeverity, setAlertSeverity] = useState("success");
  let [alertMessage, setAlertMessage] = useState("");

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

  async function handleSubmitExistingStudent() {
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

  return (
    <ThemeProvider theme={theme}>
      <FormControl className={classes.root}>
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
          <Button
            className={classes.enrollButton}
            variant="contained"
            color="primary"
            onClick={(event) => {
              handleSubmitExistingStudent(event);
            }}
          >
            Update Student
          </Button>
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
    </ThemeProvider>
  );
}

export default StudentForm;
