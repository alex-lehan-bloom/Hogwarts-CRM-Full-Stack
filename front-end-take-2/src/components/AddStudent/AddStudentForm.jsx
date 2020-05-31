import React, { useState, useEffect } from "react";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import Field from "./FormComponents/Field";
import HouseSelection from "./FormComponents/HouseSelection";
import { enrollStudent } from "../../lib/api";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  root: {
    width: "60%",
    minWidth: 440,
  },
  "& .MuiInputBase-root": {
    backgroundColor: "red",
    margin: 20,
  },
}));

function AddStudentForm() {
  const classes = useStyles();
  const theme = createMuiTheme({ palette: { type: "dark" } });

  let [firstName, setFirstName] = useState();
  let [lastName, setLastName] = useState();
  let [house, setHouse] = useState("");
  let [skills, setSkills] = useState([]);
  let [desiredSkills, setDesiredSkills] = useState([]);
  let [courses, setCourses] = useState([]);
  let [alertOpen, setAlertOpen] = useState(false);
  let [alertSeverity, setAlertSeverity] = useState("success");
  let [alertMessage, setAlertMessage] = useState("");

  useEffect(() => {
    console.log(house);
  }, [house]);

  function handleFirstNameChange(firstName) {
    setFirstName(firstName);
  }
  function handleLastNameChange(lastName) {
    setLastName(lastName);
  }
  function handleHouse(house) {
    setHouse(house);
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
    <ThemeProvider theme={theme}>
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
        <HouseSelection
          className={classes.house}
          handleSelection={(house) => {
            handleHouse(house);
          }}
        />
      </FormControl>
    </ThemeProvider>
  );
}

export default AddStudentForm;
