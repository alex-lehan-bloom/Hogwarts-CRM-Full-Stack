import React, { useState, useEffect } from "react";
import FormControl from "@material-ui/core/FormControl";
import { makeStyles } from "@material-ui/core/styles";
import Field from "./FormItems/Field";
import HouseSelector from "./FormItems/HouseSelector";
import SkillsCheckboxes from "./FormItems/SkillsCheckboxes";
import "../css/AddStudentForm.css";

const useStyles = makeStyles((theme) => ({
  root: {
    marginLeft: 50,
    "& .MuiTextField-root": {
      width: 300,
    },
    "& .MuiInputBase-root": {
      width: 300,
    },
  },
}));

function AddStudentForm() {
  const classes = useStyles();
  let [firstName, setFirstName] = useState();
  let [lastName, setLastName] = useState();
  let [house, setHouse] = useState("");
  let [skills, setSkills] = useState([]);
  let [desiredSkills, setDesiredSkills] = useState([]);
  let [courses, setCourses] = useState([]);

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
    setDesiredSkills([]);
    Object.keys(courses).forEach((key) => {
      if (courses[key]) {
        setCourses((courses) => [...courses, key]);
      }
    });
  }

  useEffect(() => {
    console.log("Skills");
    console.log(skills);
  }, [skills]);

  return (
    <FormControl className={classes.root}>
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
      <HouseSelector
        handleSelection={(house) => {
          handleHouse(house);
        }}
      />
      <SkillsCheckboxes
        sectionLabel="Skills"
        handleSkills={(skills) => {
          handleSkills(skills);
        }}
      />
      <SkillsCheckboxes
        sectionLabel="Desired skills"
        handleSkills={(skills) => {
          handleDesiredSkills(skills);
        }}
      />
      <SkillsCheckboxes
        sectionLabel="Classes for this term"
        handleSkills={(Courses) => {
          handleCourses(Courses);
        }}
      />
    </FormControl>
  );
}

export default AddStudentForm;
