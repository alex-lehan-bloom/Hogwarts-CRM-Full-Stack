import React, { useState, useEffect } from "react";
import TextField from "@material-ui/core/TextField";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import { makeStyles } from "@material-ui/core/styles";

import Select from "@material-ui/core/Select";
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
  let houses = ["Gryfindor", "Hufflepuff", "Ravenclaw", "Slytherin"];

  function handleFirstNameChange(event) {
    setFirstName(event.target.value);
  }
  function handleLastNameChange(event) {
    setLastName(event.target.value);
  }
  function handleHouse(event) {
    setHouse(event.target.value);
  }

  //   useEffect(() => {
  //     console.log(house);
  //   }, [house]);

  return (
    <FormControl className={classes.root}>
      <div className="first-name">
        <TextField
          onChange={(event) => {
            handleFirstNameChange(event);
          }}
          label="First Name"
          variant="outlined"
        />
      </div>
      <div className="last-name">
        <TextField
          onChange={(event) => {
            handleLastNameChange(event);
          }}
          label="Last Name"
          variant="outlined"
        />
      </div>
      <div>
        <p>House</p>
        <Select
          //   className={classes.house}
          value={house}
          onChange={(event) => {
            handleHouse(event);
          }}
        >
          <MenuItem value={house}></MenuItem>
          <MenuItem value={10}>{houses[0]}</MenuItem>
          <MenuItem value={20}>{houses[1]}</MenuItem>
          <MenuItem value={30}>{houses[2]}</MenuItem>
          <MenuItem value={30}>{houses[3]}</MenuItem>
        </Select>
      </div>
    </FormControl>
  );
}

export default AddStudentForm;
