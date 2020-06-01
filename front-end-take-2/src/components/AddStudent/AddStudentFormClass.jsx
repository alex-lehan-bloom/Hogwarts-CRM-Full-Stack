import React, { useState, useEffect } from "react";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
import Field from "./FormComponents/Field";
import HouseSelection from "./FormComponents/HouseSelection";
import MagicSkills from "./FormComponents/MagicSkills";
import Courses from "./FormComponents/Courses";
import { enrollStudent } from "../../lib/api";
import AlertMessage from "../Alert";

const useStyles = makeStyles(() => ({
  root: {
    width: "60%",
    minWidth: 440,
    paddingBottom: 100,
  },
  enrollButton: { margin: "20px 0 20px 0" },
}));

class AddStudent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  
}

function AddStudentForm() {
  const classes = useStyles();
  const theme = createMuiTheme({ palette: { type: "dark" } });

  let [firstName, setFirstName] = useState();
  let [lastName, setLastName] = useState();
  let [house, setHouse] = useState("");
  let [skills, setSkills] = useState([]);
  let [courses, setCourses] = useState([]);
  let [alertOpen, setAlertOpen] = useState(false);
  let [alertSeverity, setAlertSeverity] = useState("success");
  let [alertMessage, setAlertMessage] = useState("");

  useEffect(() => {
    console.log(courses);
  }, [courses]);

  function handleCloseOfAlert() {
    setAlertOpen(false);
  }

  const openAlert = (message, severity) => {
    setAlertSeverity(severity);
    setAlertMessage(message);
    setAlertOpen(true);
  };

  function clearForm() {}

  async function handleSubmit(event) {
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
      clearForm();
    } else {
      openAlert(response.data.Error, "error");
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
          handleSelection={(house) => {
            setHouse(house);
          }}
        />
        <MagicSkills
          handleSkills={(skills) => {
            setSkills(skills);
          }}
        />
        <Courses
          handleCourses={(courses) => {
            setCourses(courses);
          }}
        />
        <Button
          className={classes.enrollButton}
          variant="contained"
          color="primary"
          onClick={(event) => {
            handleSubmit(event);
          }}
        >
          Enroll Student
        </Button>
      </FormControl>
      <AlertMessage
        open={alertOpen}
        message={openAlert}
        severity={alertSeverity}
        handleClose={() => {
          handleCloseOfAlert();
        }}
      />
    </ThemeProvider>
  );
}

export default AddStudentForm;
