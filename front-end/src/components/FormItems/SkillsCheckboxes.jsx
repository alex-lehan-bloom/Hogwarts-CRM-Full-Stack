import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiFormControlLabel-root": {
      width: 140,
      whiteSpace: "nowrap",
    },
  },
}));

function SkillsCheckboxes(props) {
  const classes = useStyles();

  const [state, setState] = React.useState({
    defense: false,
    flying: false,
    parsletongue: false,
    astronomy: false,
    charms: false,
    herbs: false,
    history: false,
    potions: false,
    transfiguration: false,
    runes: false,
    divination: false,
    muggleKnowledge: false,
  });

  function handleChange(event) {
    setState({ ...state, [event.target.name]: event.target.checked });
  }

  useEffect(() => {
    props.handleSkills(state);
  }, [state]);

  return (
    <div className={classes.root}>
      <FormGroup row>
        <FormControlLabel
          control={
            <Checkbox
              checked={state.defense}
              onChange={(event) => {
                handleChange(event);
              }}
              name="defense"
              color="primary"
            />
          }
          label="Defense"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={state.flying}
              onChange={(event) => {
                handleChange(event);
              }}
              name="flying"
              color="primary"
            />
          }
          label="Flying"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={state.parsletongue}
              onChange={(event) => {
                handleChange(event);
              }}
              name="parsletongue"
              color="primary"
            />
          }
          label="Parsletongue"
        />
      </FormGroup>

      <FormGroup row>
        <FormControlLabel
          control={
            <Checkbox
              checked={state.astronomy}
              onChange={(event) => {
                handleChange(event);
              }}
              name="astronomy"
              color="primary"
            />
          }
          label="Astronomy"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={state.charms}
              onChange={(event) => {
                handleChange(event);
              }}
              name="charms"
              color="primary"
            />
          }
          label="Charms"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={state.herbs}
              onChange={(event) => {
                handleChange(event);
              }}
              name="herbs"
              color="primary"
            />
          }
          label="Herbs"
        />
      </FormGroup>

      <FormGroup row>
        <FormControlLabel
          control={
            <Checkbox
              checked={state.history}
              onChange={(event) => {
                handleChange(event);
              }}
              name="history"
              color="primary"
            />
          }
          label="History"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={state.potions}
              onChange={(event) => {
                handleChange(event);
              }}
              name="potions"
              color="primary"
            />
          }
          label="Potions"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={state.transfiguration}
              onChange={(event) => {
                handleChange(event);
              }}
              name="transfiguration"
              color="primary"
            />
          }
          label="Transfiguration"
        />
      </FormGroup>

      <FormGroup row>
        <FormControlLabel
          control={
            <Checkbox
              checked={state.runes}
              onChange={(event) => {
                handleChange(event);
              }}
              name="runes"
              color="primary"
            />
          }
          label="Runes"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={state.divination}
              onChange={(event) => {
                handleChange(event);
              }}
              name="divination"
              color="primary"
            />
          }
          label="Divination"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={state.muggleKnowledge}
              onChange={(event) => {
                handleChange(event);
              }}
              name="muggleKnowledge"
              color="primary"
            />
          }
          label="Muggle Knowledge"
        />
      </FormGroup>
    </div>
  );
}

export default SkillsCheckboxes;
