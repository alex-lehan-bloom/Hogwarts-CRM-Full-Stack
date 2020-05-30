import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Popover from "@material-ui/core/Popover";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
import TextField from "@material-ui/core/TextField";
import AlertMessage from "./Alert";
import { deleteStudent } from "../lib/api.js";
import "../css/DeletePopOver.css";

const useStyles = makeStyles((theme) => ({
  deleteIcon: { color: "#505050" },
  typography: {
    padding: theme.spacing(2),
  },
}));

function DeletePopOver(props) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const [password, setPassword] = useState("");
  let [alertOpen, setAlertOpen] = useState(false);
  let [alertSeverity, setAlertSeverity] = useState("success");
  let [alertMessage, setAlertMessage] = useState("");

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  function handleCloseOfAlert() {
    setAlertOpen(false);
  }

  function handlePassword(event) {
    setPassword(event.target.value);
  }

  async function handleSubmit(event) {
    event.preventDefault();
    let response = await deleteStudent(props.studentId, password);
    console.log(response);
    if (response.statusText === "OK") {
      setAlertMessage(
        `${props.firstName} ${props.lastName} was successfully deleted!`
      );
      setAlertSeverity("success");
      setAlertOpen(true);
    } else {
      setAlertMessage(response.data.Error);
      setAlertSeverity("error");
      setAlertOpen(true);
    }
  }

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <div>
      <Button
        variant="contained"
        color="primary"
        onClick={handleClick}
        startIcon={<DeleteIcon />}
      >
        Delete
      </Button>
      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        <Typography className={classes.typography}>
          <h3 className="delete-student-header"> Delete Student</h3>
          <form className={classes.root} noValidate autoComplete="off">
            <TextField
              onChange={(event) => {
                handlePassword(event);
              }}
              label="Delete Password"
              variant="outlined"
              type="password"
            />
            <IconButton
              aria-label="delete"
              className={classes.deleteIcon}
              onClick={(event) => {
                handleSubmit(event);
              }}
            >
              <DeleteIcon fontSize="large" />
            </IconButton>
          </form>
        </Typography>
      </Popover>
      <AlertMessage
        open={alertOpen}
        message={alertMessage}
        severity={alertSeverity}
        handleClose={() => {
          handleCloseOfAlert();
        }}
      />
    </div>
  );
}

export default DeletePopOver;
