import React, { useState, useEffect } from "react";
import TextField from "@material-ui/core/TextField";

function Field(props) {
  let [fieldValue, setFieldValue] = useState();

  function handleInput(event) {
    setFieldValue(event.target.value);
  }

  useEffect(() => {
    props.handleInput(fieldValue);
  }, [fieldValue]);

  return (
    <div className={props.class}>
      <TextField
        onChange={(event) => {
          handleInput(event);
        }}
        label={props.label}
        variant="outlined"
      />
    </div>
  );
}

export default Field;
