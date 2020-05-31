import React, { useEffect } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Chip from "@material-ui/core/Chip";

const useStyles = makeStyles((theme) => ({
  formControl: {
    width: "100%",
    margin: "10px 0 10px 0",
  },
  chips: {
    display: "flex",
    flexWrap: "wrap",
  },
  chip: {
    margin: 10,
    padding: 5,
    display: "block",
  },
}));

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const courseList = [
  "Defense Against the Dark Arts w/ Prof. Snape",
  "Transfiguration w/ Prof. McGonagall",
  "Charms w/ Prof. Flitwick",
  "History of Magic w/ Prof. Binns",
  "Herbology w/ Prof. Sprout",
  "Flying w/ Madame Hooch",
  "Care of Magical Creatures w/ Hagrid",
  "Divination w/ Prof. Trelawney",
];

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

function Courses(props) {
  const classes = useStyles();
  const theme = useTheme();
  const [courses, setCourses] = React.useState([]);

  const handleChange = (event) => {
    setCourses(event.target.value);
  };

  useEffect(() => {
    props.handleCourses(courses);
  }, [courses]);

  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel id="magic-skills">Courses for the Semester</InputLabel>
        <Select
          labelId="magic-skills"
          id="magic-skills"
          multiple
          value={courses}
          onChange={handleChange}
          input={<Input id="select-multiple-chip" />}
          renderValue={(selected) => (
            <div className={classes.chips}>
              {selected.map((value) => (
                <Chip key={value} label={value} className={classes.chip} />
              ))}
            </div>
          )}
          MenuProps={MenuProps}
        >
          {courseList.map((name) => (
            <MenuItem
              key={name}
              value={name}
              style={getStyles(name, courses, theme)}
            >
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}

export default Courses;
