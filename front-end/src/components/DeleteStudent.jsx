import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import DeleteIcon from "@material-ui/icons/Delete";
import TextField from "@material-ui/core/TextField";
import AlertMessage from "./Alert";
import { deleteStudent } from "../lib/api.js";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 4,
    border: "1px solid black",
  },
  card: {
    minWidth: 400,
    border: "1px solid black",
    borderRadius: "4px !important",
    textAlign: "center",
    "& .name": {
      margin: "0 0 10px 0",
    },
    "& .MuiPaper-elevation1": {
      borderRadius: 6,
    },
    "& .MuiInputBase-input": {
      width: "100% !important",
    },
    "& .header": {
      margin: "20px 20px 5px 20px",
    },
    "& .main-content": {
      padding: 20,
    },
    "& .MuiCardContent-root": {
      padding: 0,
    },
    "& .header-container": {
      width: "100%",
      borderBottom: "1px solid black",
    },
    "& .password": {
      width: "100%",
      marginTop: 10,
    },
    "& .delete-button": {
      width: "100%",
    },
  },
}));

export default function DeleteStudent(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [password, setPassword] = useState("");
  const [deleteIconDisabled, setDeleteIconDisabled] = useState(true);
  const [alertOpen, setAlertOpen] = useState(false);
  const [alertSeverity, setAlertSeverity] = useState("success");
  const [alertMessage, setAlertMessage] = useState("");

  function handleCloseOfAlert() {
    setAlertOpen(false);
  }

  function handlePassword(event) {
    setPassword(event.target.value);
  }

  useEffect(() => {
    console.log(deleteIconDisabled);
    console.log(password.length);
    if (password.length > 0) {
      setDeleteIconDisabled(false);
    } else {
      setDeleteIconDisabled(true);
    }
  }, [password]);

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

  return (
    <div>
      <Button
        variant="contained"
        color="primary"
        onClick={handleOpen}
        startIcon={<DeleteIcon />}
      >
        Delete
      </Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <Card className={classes.card}>
              <CardContent>
                <Typography className="header-container">
                  <h2 className="header">Delete Student</h2>
                </Typography>
                <div className="main-content">
                  <h4 className="name">
                    {props.firstName} {props.lastName}
                  </h4>
                  <Typography>
                    <TextField
                      className="password"
                      onChange={(event) => {
                        handlePassword(event);
                      }}
                      label="Delete Password"
                      variant="outlined"
                      type="password"
                    />
                  </Typography>
                </div>
              </CardContent>
              <CardActions>
                <Button
                  className="delete-button"
                  disabled={deleteIconDisabled}
                  variant="contained"
                  color="primary"
                  startIcon={<DeleteIcon />}
                  onClick={(event) => {
                    handleSubmit(event);
                  }}
                >
                  Delete
                </Button>
              </CardActions>
            </Card>
          </div>
        </Fade>
      </Modal>
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
