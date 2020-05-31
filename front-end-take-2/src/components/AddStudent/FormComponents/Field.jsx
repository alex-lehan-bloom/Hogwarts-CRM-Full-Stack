import React, { useState, useEffect } from "react";
import TextField from "@material-ui/core/TextField";
import InputLabel from "@material-ui/core/InputLabel";
import { useStyles } from "../../../css/AddStudentFormMaterialUI";

function Field(props) {
  const classes = useStyles();
  let [fieldValue, setFieldValue] = useState();

  function handleInput(event) {
    setFieldValue(event.target.value);
  }

  useEffect(() => {
    props.handleInput(fieldValue);
  }, [fieldValue]);

  return (
    <>
      <TextField
        className={classes.root}
        onChange={(event) => {
          handleInput(event);
        }}
        label={props.label}
        variant="outlined"
      />
    </>
  );
}

export default Field;
