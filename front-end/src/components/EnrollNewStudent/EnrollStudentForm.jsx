import React, { useState, useEffect } from "react";
import FormControl from "@material-ui/core/FormControl";
import Button from "@material-ui/core/Button";
import Field from "./FormItems/Field";
import HouseSelector from "./FormItems/HouseSelector";
import SkillsCheckboxes from "./FormItems/SkillsCheckboxes";
import AlertMessage from "../Alert";
import { enrollStudent } from "../../lib/api.js";
import { useStyles } from "../../css/EnrollStudentFormCSS";
import "../../css/EnrollStudentForm.css";

function EnrollStudentForm() {
  const classes = useStyles();
  let [firstName, setFirstName] = useState();
  let [lastName, setLastName] = useState();
  let [house, setHouse] = useState("");
  let [skills, setSkills] = useState([]);
  let [desiredSkills, setDesiredSkills] = useState([]);
  let [courses, setCourses] = useState([]);
  let [alertOpen, setAlertOpen] = useState(false);
  let [alertSeverity, setAlertSeverity] = useState("success");
  let [alertMessage, setAlertMessage] = useState("");

  function handleFirstNameChange(firstName) {
    setFirstName(firstName);
  }
  function handleLastNameChange(lastName) {
    setLastName(lastName);
  }
  function handleHouse(house) {
    setHouse(house);
  }

  function handleSkills(skills) {
    setSkills([]);
    Object.keys(skills).forEach((key) => {
      if (skills[key]) {
        setSkills((skills) => [...skills, key]);
      }
    });
  }

  function handleDesiredSkills(skills) {
    setDesiredSkills([]);
    Object.keys(skills).forEach((key) => {
      if (skills[key]) {
        setDesiredSkills((desiredSkills) => [...desiredSkills, key]);
      }
    });
  }

  function handleCourses(courses) {
    setCourses([]);
    Object.keys(courses).forEach((key) => {
      if (courses[key]) {
        setCourses((courses) => [...courses, key]);
      }
    });
  }

  function handleCloseOfAlert() {
    setAlertOpen(false);
  }

  async function handleSubmit(event) {
    event.preventDefault();
    let response = await enrollStudent(
      firstName,
      lastName,
      house,
      skills,
      desiredSkills,
      courses
    );
    if (response.statusText === "OK") {
      setAlertMessage(
        `${firstName} ${lastName} successfully enrolled in Hogwarts.`
      );
      setAlertSeverity("success");
      setAlertOpen(true);
    } else {
      setAlertSeverity("error");
      setAlertMessage(response.data.Error);
      setAlertOpen(true);
    }
  }

  return (
    <div className="student-form-container">
      <FormControl className={classes.root}>
        <div className="student-form-border">
          <div className="row">
            <div className="left-side">
              <p className="student-form-sections">Name</p>
              <Field
                class="first-name"
                label="First name"
                handleInput={(firstName) => {
                  handleFirstNameChange(firstName);
                }}
              />
              <Field
                class="last-name"
                label="Last name"
                handleInput={(lastName) => {
                  handleLastNameChange(lastName);
                }}
              />
            </div>
            <div className="right-side">
              <p className="student-form-sections">Skills</p>
              <SkillsCheckboxes
                handleSkills={(skills) => {
                  handleSkills(skills);
                }}
              />
            </div>
          </div>
          <div className="row">
            <div className="left-side">
              <p className="student-form-sections">Current Classes</p>
              <SkillsCheckboxes
                handleSkills={(Courses) => {
                  handleCourses(Courses);
                }}
              />
            </div>
            <div className="right-side">
              <p className="student-form-sections">Desired skills</p>
              <SkillsCheckboxes
                handleSkills={(skills) => {
                  handleDesiredSkills(skills);
                }}
              />
            </div>
          </div>
          <div className="row">
            <div className="left-side">
              <p className="student-form-sections">House</p>
              <HouseSelector
                handleSelection={(house) => {
                  handleHouse(house);
                }}
              />
            </div>
            <div className="right-side submit">
              <Button
                variant="contained"
                color="primary"
                onClick={(event) => {
                  handleSubmit(event);
                }}
              >
                Enroll Student
              </Button>
            </div>
          </div>
        </div>
      </FormControl>
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

export default EnrollStudentForm;