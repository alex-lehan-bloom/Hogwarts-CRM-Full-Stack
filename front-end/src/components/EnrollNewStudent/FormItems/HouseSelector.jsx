import React, { useState, useEffect } from "react";
import FormGroup from "@material-ui/core/FormGroup";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";

function HouseSelector(props) {
  let houses = ["Gryfindor", "Hufflepuff", "Ravenclaw", "Slytherin"];
  let [house, setHouse] = useState("");

  function handleHouse(event) {
    setHouse(event.target.value);
  }

  useEffect(() => {
    props.handleSelection(house);
  }, [house]);

  return (
    <FormGroup>
      <Select
        //   className={classes.house}
        value={house}
        onChange={(event) => {
          handleHouse(event);
        }}
      >
        <MenuItem value={house}></MenuItem>
        <MenuItem value={houses[0]}>{houses[0]}</MenuItem>
        <MenuItem value={houses[1]}>{houses[1]}</MenuItem>
        <MenuItem value={houses[2]}>{houses[2]}</MenuItem>
        <MenuItem value={houses[3]}>{houses[3]}</MenuItem>
      </Select>
    </FormGroup>
  );
}

export default HouseSelector;
