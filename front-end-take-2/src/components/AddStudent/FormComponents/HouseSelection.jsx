import React, { useState, useEffect } from "react";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  root: {
    margin: "10px 0 10px 0",
  },
}));

function HouseSelector(props) {
  const classes = useStyles();

  let houses = ["Gryfindor", "Hufflepuff", "Ravenclaw", "Slytherin"];
  let [house, setHouse] = useState("");

  function handleHouse(event) {
    setHouse(event.target.value);
  }

  useEffect(() => {
    props.handleSelection(house);
  }, [house]);

  return (
    <FormControl>
      <InputLabel id="house">House</InputLabel>
      <Select
        labelId="house"
        className={classes.root}
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
    </FormControl>
  );
}

export default HouseSelector;
